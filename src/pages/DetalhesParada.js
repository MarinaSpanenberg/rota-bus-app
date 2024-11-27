import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Alert, FlatList } from 'react-native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import DetalhesParadaStyles from './styles/DetalhesParadaStyles';
import onibusIcone from '../assets/images/onibusIcone.png';
import relogioIcone from '../assets/images/relogioIcone.png';
import { useNavigation } from '@react-navigation/native';
import favoritoNaoSelecionado from '../assets/images/favoritoNaoSelecionado.png';
import favoritoSelecionado from '../assets/images/favoritoSelecionado.png';
import { toggleFavorito } from '../services/favoritosService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../services/supabase';
import { EstilosGlobais } from './styles/EstilosGlobais';

export default function DetalhesParada({ route }) {
    const { name, id } = route.params;
    const navigation = useNavigation();
    const [favorito, setFavorito] = useState(false);
    const [busData, setBusData] = useState([]);

    useEffect(() => {
        loadBusData(); 
        loadFavorito(id); // Carregar o favorito ao iniciar
    }, [id]);

    const loadFavorito = async (id) => {
        try {
            const storedFavoritos = await AsyncStorage.getItem('@favoritos');
            if (storedFavoritos) {
                const favoritos = JSON.parse(storedFavoritos);
                setFavorito(favoritos[id] || false); // Carregar o estado do favorito específico
            }
        } catch (error) {
            console.error('Erro ao carregar favorito:', error);
        }
    };

    const selecionarFavorito = async () => {
        const userSession = await AsyncStorage.getItem('@userSession');
        const userData = userSession ? JSON.parse(userSession) : null;

        if (!userData || !userData.id) {
            Alert.alert('Erro', 'Você precisa estar logado para favoritar.');
            return;
        }

        try {
            await toggleFavorito('bus_stop', id, userData.id);

            setFavorito((prevFavorito) => {
                const updatedFavorito = !prevFavorito;
                salvarFavorito(id, updatedFavorito); // Salvar o estado atualizado do favorito
                return updatedFavorito;
            });

        } catch (error) {
            console.error('Erro ao atualizar favorito:', error);
            Alert.alert('Erro', 'Não foi possível atualizar o favorito.');
        }
    };

    const salvarFavorito = async (id, favorito) => {
        try {
            const storedFavoritos = await AsyncStorage.getItem('@favoritos');
            const favoritos = storedFavoritos ? JSON.parse(storedFavoritos) : {};
            favoritos[id] = favorito; // Atualizar o favorito específico
            await AsyncStorage.setItem('@favoritos', JSON.stringify(favoritos)); // Salvar no AsyncStorage
        } catch (error) {
            console.error('Erro ao salvar favorito:', error);
        }
    };

    const loadBusData = async () => {
        try {
            const { data, error } = await supabase.from('bus').select('*, user:user(interprisename)');
            if (error) throw error;

            setBusData(data); 
        } catch (error) {
            console.error('Erro ao carregar ônibus:', error);
            Alert.alert('Erro', 'Não foi possível carregar os dados dos ônibus.');
        }
    };

    const renderBusItem = ({ item }) => (
        <View style={EstilosGlobais.favoritoItem}>
            <Text style={EstilosGlobais.favoritoText}> {item.line} </Text>
            {item.user && (
            <Text style={EstilosGlobais.favoritoText}> {item.user.interprisename}</Text>
        )}
        </View>
    );
    return (
        <View style={DetalhesParadaStyles.containerGeral}>
            <View style={DetalhesParadaStyles.containerTopo}>
                <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
                <View style={DetalhesParadaStyles.logoContainer}>
                    <Text style={[{ fontFamily: 'PoppinsExtraBold' }, DetalhesParadaStyles.logoTexto]}>
                        RotaBus
                    </Text>
                </View>

                <View style={DetalhesParadaStyles.nomeDaParadaContainer}>
                    <Text style={[DetalhesParadaStyles.textoNomeDaParada, { fontFamily: 'PoppinsMedium' }]}>
                        {name}
                    </Text>
                </View>

                <TouchableOpacity style={DetalhesParadaStyles.favoritoContainer} onPress={selecionarFavorito}>
                    <Image
                        source={favorito ? favoritoSelecionado : favoritoNaoSelecionado}
                        style={DetalhesParadaStyles.favorito}
                    />
                </TouchableOpacity>
            </View>

            <View style={DetalhesParadaStyles.containerBase}>
                <View style={DetalhesParadaStyles.onibusImagemContainer}>
                    <Image source={onibusIcone} style={DetalhesParadaStyles.onibusImagem} />
                </View>
                <View style={DetalhesParadaStyles.relogioImagemContainer}>
                    <Image source={relogioIcone} style={DetalhesParadaStyles.relogioImagem} />
                </View>

                <View style={DetalhesParadaStyles.busListContainer}>
                <FlatList
                    data={busData}
                    renderItem={renderBusItem}
                    keyExtractor={(item) => item.bus_id.toString()}
                />
            </View>
            </View>
        </View>
    );
}
