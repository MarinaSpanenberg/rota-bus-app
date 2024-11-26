import React, { useEffect, useState } from 'react'
import InputRB from '../components/InputRB';
import { FlatList, Image, Text, View, Modal, TouchableOpacity, Alert } from 'react-native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import CadastroOnibusStyle from './styles/CadastroOnibusStyle';
import BotaoRB from '../components/BotaoRB';
import empresaIcone from '../assets/images/empresaIcone.png';
import { useNavigation } from '@react-navigation/native';
import EscolherImagemRB from '../components/EscolherImagemRB';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../services/supabase';
import { CheckBox } from '@rneui/themed/dist/CheckBox';

export default function CadastroOnibus() {

    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const [empresaName, setEmpresaName] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [linha, setLinha] = useState('');
    const [placa, setPlaca] = useState('');
    const [paradas, setParadas] = useState([]);
    const [paradasSelecionadas, setParadasSelecionadas] = useState([]);
    const [mostrarParadas, setMostrarParadas] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [busData, setBusData] = useState([]);

    const fetchUserData = async () => {
        const userSession = await AsyncStorage.getItem('@userSession');
        const userData = userSession ? JSON.parse(userSession) : null;

        if (userData && userData.id) {
            setUserId(userData.id);
            setEmpresaName(userData.interprisename); 
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [userId]);

    
    const carregarParadas = async () => {
        const { data, error } = await supabase.from('bus_stops').select('*');
        if (error) {
            console.log("Erro ao carregar as paradas:", error);
        } else {
            setParadas(data);
        }
    };

    useEffect(() => {
        carregarParadas(); 
    }, []);

    const filtrarParadas = (text) => {
        return paradas.filter(parada =>
            parada.name.toLowerCase().includes(text.toLowerCase())
        );
    };

    const salvarOnibus = async () => {
        if (!linha || !paradasSelecionadas.length===0 || !placa || !userId) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios!');
            return;
        }

        try {
           
            const { data: busData, error: busError } = await supabase
                .from('bus')
                .insert([
                    {
                        line: linha,
                        name: placa,
                        user_id: userId, 
                    },
                ])
                .select('bus_id');

                if (busError) {
                    console.error('Erro ao cadastrar ônibus:', busError.message);
                    Alert.alert('Erro', 'Não foi possível cadastrar o ônibus.');
                    return;
                }
        
            Alert.alert('Ônibus cadastrado com sucesso!');
           
        } catch (error) {
            console.error('Erro ao cadastrar ônibus:', error.message);
            Alert.alert('Erro', 'Não foi possível cadastrar o ônibus.');
        }
    };

    const fetchBusData = async () => {
        if (!userId) {
            console.error("userId não encontrado.");
            return; 
        }

        try {
            const { data, error } = await supabase
                .from('bus')
                .select(`
                    bus_id,
                    line,
                    name,
                    user (
                        id, interprisename
                    )
                `)
                .eq('user_id', userId);
                
                if (error) {
                    throw error;
                }
                
                setBusData(data); 
            } catch (error) {
                console.error('Erro ao buscar dados do ônibus:', error.message);
            }
        };
    
        useEffect(() => {
            if (userId) {
                fetchBusData();
            }
        }, [userId]);

    const handleImageUpload = (url) => {
        setImageUrl(url);  
      };

      
    const toggleParadaSelecionada = (paradaId) => {
        setParadasSelecionadas(prevState => {
            if (prevState.includes(paradaId)) {
                return prevState.filter(id => id !== paradaId); 
            } else {
                return [...prevState, paradaId]; 
            }
        });
    };

    const toggleMostrarParadas = () => {
        setMostrarParadas(!mostrarParadas); 
    };

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <CheckBox
                checked={paradasSelecionadas.includes(item.id)}
                onPress={() => toggleParadaSelecionada(item.id)}
            />
            <Text>{item.name}</Text>
        </View>
    );
    
  return (
    <View style={CadastroOnibusStyle.container}>
        
        <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

        <View style={CadastroOnibusStyle.logoContainer}>
               <Image source={ empresaIcone} style={CadastroOnibusStyle.logo} />
               <Text style={[CadastroOnibusStyle.tipoUsuarioTexto,{fontFamily: 'Poppins'}]}>{'Cadastro de Ônibus'}</Text>
            </View>

        <View style={CadastroOnibusStyle.botoesContainer}>    

                {/* <EscolherImagemRB setImageUrl={setImageUrl} /> */}

                <InputRB 
                        titulo={'Linha'}
                        value={linha}
                        onChangeText={setLinha}
                        textCustomStyle={[CadastroOnibusStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        inputCustomStyle={CadastroOnibusStyle.botoes}>
                </InputRB>

                <InputRB 
                        titulo={'Placa'}
                        value={placa}
                        onChangeText={setPlaca}
                        textCustomStyle={[CadastroOnibusStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        inputCustomStyle={CadastroOnibusStyle.botoes}>
                </InputRB>
            
                <BotaoRB
                    titulo={'Selecionar Paradas'}
                    acao={toggleMostrarParadas}
                    textoCustomEstilo={[CadastroOnibusStyle.textoBotao, { fontFamily: 'PoppinsMedium' }]}
                    botaoCustomEstilo={CadastroOnibusStyle.botoes}
                />
            {mostrarParadas && (
                    <Modal
                        visible={mostrarParadas}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={toggleMostrarParadas}
                    >
                        <View style={CadastroOnibusStyle.modalOverlay}>
                            <View style={CadastroOnibusStyle.modalContainer}>
                                <InputRB
                                    placeholder="Pesquisar paradas..."
                                    value={searchText}
                                    onChangeText={setSearchText}
                                />

                                <FlatList
                                    data={filtrarParadas(searchText)}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id.toString()}
                                    style={{ maxHeight: 200 }}
                                />

                                <TouchableOpacity onPress={toggleMostrarParadas} style={CadastroOnibusStyle.closeButton}>
                                    <Text style={CadastroOnibusStyle.closeButtonText}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                )}
            </View>

            <View style={CadastroOnibusStyle.containerBotaoSalvar}>
                <BotaoRB 
                        titulo={'Salvar alterações'}
                        acao={salvarOnibus}
                        textoCustomEstilo={[CadastroOnibusStyle.textoBotaoSalvar, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={CadastroOnibusStyle.botaoSalvar}>
                </BotaoRB>
            </View>
    </View>
  )
}
