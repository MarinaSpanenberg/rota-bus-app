import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB'
import PesquisarRotasStyles from './styles/PesquisarRotasStyles'
import { useNavigation } from '@react-navigation/native';
import BarraDePesquisaRB from '../components/BarraDePesquisaRB';
import { fetchBusData } from '../services/busService';
import DetalhesParadaStyles from './styles/DetalhesParadaStyles';
import favoritoNaoSelecionado from '../assets/images/favoritoNaoSelecionado.png';
import favoritoSelecionado from '../assets/images/favoritoSelecionado.png';
import { toggleFavorito } from '../services/favoritosService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EstilosGlobais } from './styles/EstilosGlobais';

export default function PesquisarRotas() {
    const [busData, setBusData] = useState([]);
    const navigation = useNavigation();
    const [favoritos, setFavoritos] = useState(false);
    const [userId, setUserId] = useState(null);

    const loadBusData = async () => {
      
      try {
          const data = await fetchBusData(); 
          setBusData(data); 
      } catch (error) {
          Alert.alert('Erro', 'Não foi possível carregar os dados dos ônibus.');
      }
  };

  useEffect(() => {
      loadBusData(); 
      loadFavoritos(); 
    }, []);

    const loadFavoritos = async () => {
        try {
            const storedFavoritos = await AsyncStorage.getItem('@favoritos');
            if (storedFavoritos) {
                setFavoritos(JSON.parse(storedFavoritos)); 
            }
        } catch (error) {
            console.error('Erro ao carregar favoritos:', error);
        }
    };

    const salvarFavoritos = async (favoritos) => {
        try {
            await AsyncStorage.setItem('@favoritos', JSON.stringify(favoritos)); 
        } catch (error) {
            console.error('Erro ao salvar favoritos:', error);
        }
    };


  const selecionarFavorito = async (id) => {
    const userSession = await AsyncStorage.getItem('@userSession');
  const userData = userSession ? JSON.parse(userSession) : null;

  if (!userData || !userData.id) {
    Alert.alert('Erro', 'Você precisa estar logado para favoritar.');
    return;
  }
    await toggleFavorito('bus', id, userData.id);
    console.log(id)
    setFavoritos((prevFavoritos) => {
      const updatedFavoritos = { ...prevFavoritos, [id]: !prevFavoritos[id] };
      salvarFavoritos(updatedFavoritos); 
      return updatedFavoritos;
    });
  };

  const renderItem = ({ item }) => (
    <View style={EstilosGlobais.favoritoItem}>
      
        <Text style={EstilosGlobais.favoritoText}> {item.line} | {item.name}</Text>
        <TouchableOpacity style={PesquisarRotasStyles.favoritoContainer}  
            onPress={() => selecionarFavorito(item.bus_id)}>
                <Image 
                    source={favoritos[item.bus_id] ? favoritoSelecionado : favoritoNaoSelecionado}  
                    style={PesquisarRotasStyles.favorito}
                   
                    />
            </TouchableOpacity>
        <Text style={EstilosGlobais.favoritoText}> {item.user?.interprisename}</Text>
        
    </View>
);
  return (
    <View style={PesquisarRotasStyles.containerGeral}>

        <View style={PesquisarRotasStyles.containerTopo}>

            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
            
            <View style={PesquisarRotasStyles.logoContainer}>
                <Text style={[{fontFamily: 'PoppinsExtraBold'}, PesquisarRotasStyles.logoTexto]}>RotaBus</Text>
            </View>

            <BarraDePesquisaRB placeholder={' Pesquise sua rota...'}/>

        </View>
        <View style={PesquisarRotasStyles.containerBase}>
            
          <FlatList
                      data={busData} 
                      renderItem={renderItem} 
                      keyExtractor={item => item.bus_id.toString()} 
                      style={{ marginTop: 20 }}
                  />
        </View>
    </View>    
  )
}
