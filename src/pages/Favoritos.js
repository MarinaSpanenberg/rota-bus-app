import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import favoritosIcone from '../assets/images/favoritosIcone.png'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import FavoritosStyle from './styles/FavoritosStyle';
import { supabase } from '../services/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EstilosGlobais } from './styles/EstilosGlobais';

export default function Favoritos() {
  const navigation = useNavigation ();
  const [activeButton, setActiveButton] = useState(1); 
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFavoritos = async () => {
    try {
      setLoading(true);

      const userSession = await AsyncStorage.getItem('@userSession');
      const userData = userSession ? JSON.parse(userSession) : null;
      console.log('Sessão:', userSession);

      if (!userData || !userData.id) {
        console.error('Usuário não autenticado.');
        return;
      }

      const userId = userData.id;
      const type = activeButton === 1 ? 'bus_stop' : 'bus';
      let query = supabase
      .from('favorites')
      .select('id, type, bus_stop_id, bus_id, user_id')
      .eq('user_id', userId)
      .eq('type', type);

    if (type === 'bus_stop') {
      query = query
        .select('id, type, bus_stop_id, user_id, bus_stops(name)');
    } else {
      query = query
        .select(`
          id,
          type,
          bus_stop_id,
          bus_id,
          user_id,
          bus(line, name, user:user(interprisename))
        `);
    }

    const { data, error } = await query;

      if (error) {
        console.error('Erro ao buscar favoritos:', error.message);
      } else {
        setFavoritos(data);
      }
    } catch (error) {
      console.error('Erro ao buscar favoritos:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavoritos();
  }, [activeButton]);

  const handlePress = (buttonId) => {
    setActiveButton(buttonId); 
  };

  const renderFavoritoItem = ({ item }) => (
    <View style={EstilosGlobais.favoritoItem}>
      {item.type === 'bus_stop' ? (
        <Text style={EstilosGlobais.favoritoText}>
          {item.bus_stops.name}
        </Text>
      ) : (
        <>
        <Text style={EstilosGlobais.favoritoText}> {item.bus.line} | {item.bus.name} </Text>
        
        <Text style={EstilosGlobais.favoritoText}> {item.bus.user.interprisename}</Text>
        </>
      )}
    </View>
  );

  return (
    <View style={FavoritosStyle.containerGeral}>

        <View style={FavoritosStyle.containerTopo}>

            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
            
            <View style={FavoritosStyle.estrelaContainer}>
                <Image source={favoritosIcone} style={FavoritosStyle.estrelaImagem}/>
            </View>
        </View>

        <View style={FavoritosStyle.containerBase}>
            <View style={FavoritosStyle.buttonContainer}>
                <TouchableOpacity
                    style={[FavoritosStyle.button, activeButton === 1 && FavoritosStyle.buttonPressionado]}
                    onPress={() => handlePress(1)}
                    >
                        <Text 
                            style={[FavoritosStyle.buttonText, activeButton === 1 && FavoritosStyle.buttonPressionadoTexto ]}>PARADAS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[FavoritosStyle.button, activeButton === 2 && FavoritosStyle.buttonPressionado ]} 
                    onPress={() => handlePress(2)} >
                        <Text 
                            style={[FavoritosStyle.buttonText, activeButton === 2 && FavoritosStyle.buttonPressionadoTexto ]}>ÔNIBUS</Text>
                </TouchableOpacity>
          </View>

          {loading ? (
          <Text style={FavoritosStyle.loadingText}>Carregando...</Text>
        ) : (
          <FlatList
            data={favoritos}
            keyExtractor={(item) => item.id}
            renderItem={renderFavoritoItem}
          />
        )}

        </View>
    </View>    
  )
}
