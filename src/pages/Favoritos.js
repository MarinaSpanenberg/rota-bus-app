import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import favoritosIcone from '../assets/images/favoritosIcone.png'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import FavoritosStyles from './styles/FavoritosStyles';

export default function Favoritos() {
  const navigation = useNavigation ();
  const [activeButton, setActiveButton] = useState(null); // Estado para rastrear o botão ativo

  const handlePress = (buttonId) => {
    setActiveButton(buttonId); // Define o botão pressionado como ativo
  };

  return (
    <View style={FavoritosStyles.containerGeral}>

        <View style={FavoritosStyles.containerTopo}>

            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
            
            <View style={FavoritosStyles.estrelaContainer}>
                <Image source={favoritosIcone} style={FavoritosStyles.estrelaImagem}/>
            </View>
        </View>
        
        <View style={FavoritosStyles.containerBase}>
            <View style={FavoritosStyles.buttonContainer}>
                <TouchableOpacity
                    style={[FavoritosStyles.button, activeButton === 1 && FavoritosStyles.buttonPressionado]}
                    onPress={() => handlePress(1)}
                    >
                        <Text 
                            style={[FavoritosStyles.buttonText, activeButton === 1 && FavoritosStyles.buttonPressionadoTexto ]}>PARADAS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[FavoritosStyles.button, activeButton === 2 && FavoritosStyles.buttonPressionado ]} 
                    onPress={() => handlePress(2)} >
                        <Text 
                            style={[FavoritosStyles.buttonText, activeButton === 2 && FavoritosStyles.buttonPressionadoTexto ]}>ÔNIBUS</Text>
                </TouchableOpacity>
          </View>
        </View>
    </View>    
  )
}
