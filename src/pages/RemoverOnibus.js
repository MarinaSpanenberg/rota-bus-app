import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import RemoverOnibusStyle from './styles/RemoverOnibusStyle';
import { supabase } from '../services/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import deletarIcon from '../assets/images/deletarIcon.png';
import { EstilosGlobais } from './styles/EstilosGlobais';

export default function RemoverOnibus() {
  const navigation = useNavigation ();
  const [busData, setBusData] = useState([]);
  const [userId, setUserId] = useState(null); 

  const loadUserSession = async () => {
    try {
      const userSession = await AsyncStorage.getItem('@userSession');
      const userData = userSession ? JSON.parse(userSession) : null;
      if (userData && userData.id) {
        setUserId(userData.id);
      } else {
        Alert.alert('Erro', 'Você precisa estar logado.');
        navigation.goBack();
      }
    } catch (error) {
      console.error('Erro ao carregar sessão do usuário:', error);
    }
  };

  const fetchBusData = async () => {
    try {
      const { data, error } = await supabase
        .from('bus') 
        .select('bus_id, line, name') 
        .eq('user_id', userId); 


      if (error) {
        console.error('Erro ao buscar ônibus:', error.message);
      } else {
        setBusData(data);
      }
    } catch (error) {
      console.error('Erro ao buscar ônibus:', error.message);
    }

  };

  useEffect(() => {
    loadUserSession();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchBusData();
    }
  }, [userId]);

  const deleteBus = async (busId) => {
    try {
      const { error } = await supabase
        .from('bus') 
        .delete()
        .eq('bus_id', busId); 

      if (error) {
        Alert.alert('Erro', 'Não foi possível remover o ônibus.');
        console.error('Erro ao deletar ônibus:', error.message);
      } else {

        setBusData((prevBusData) => prevBusData.filter((bus) => bus.bus_id !== busId));
        Alert.alert('Sucesso', 'Ônibus removido com sucesso.');
      }
    } catch (error) {
      console.error('Erro ao deletar ônibus:', error.message);
    }
  };

  const renderBusItem = ({ item }) => (
    <View style={RemoverOnibusStyle.favoritoItem}>
      <Text style={EstilosGlobais.favoritoText}>
        {item.line} {"\n"}Placa: {item.name}
      </Text>
      <TouchableOpacity
        style={RemoverOnibusStyle.deletarBotaoContainer}
        onPress={() => deleteBus(item.bus_id)} 
      >
        <Image source={deletarIcon} style={RemoverOnibusStyle.deletarBotao}/>

      </TouchableOpacity>
    </View>
  );

  return (
    <View style={RemoverOnibusStyle.containerGeral}>

        <View style={RemoverOnibusStyle.containerTopo}>

            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
            
            <View style={RemoverOnibusStyle.tituloContainer}>
               <Text style={RemoverOnibusStyle.tituloTexto}>Remoção de Ônibus</Text>
            </View>
        </View>
        
        <View style={RemoverOnibusStyle.containerBase}>
        {busData.length > 0 ? (
          <FlatList
            data={busData} // Dados dos ônibus
            keyExtractor={(item) => item.bus_id.toString()} // Identificador único
            renderItem={renderBusItem} // Função de renderização
          />
        ) : (
          <Text style={RemoverOnibusStyle.noDataText}>
            Nenhum ônibus cadastrado para esta empresa.
          </Text>
        )}
        </View>
    </View>    
  )
}
