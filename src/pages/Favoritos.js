import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import favoritosIcone from '../assets/images/favoritosIcone.png'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import FavoritosStyle from './styles/FavoritosStyle';

export default function Favoritos() {
  const navigation = useNavigation ();
  const [activeButton, setActiveButton] = useState(null); 

  const handlePress = (buttonId) => {
    setActiveButton(buttonId); 
  };

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
        </View>
    </View>    
  )
}
