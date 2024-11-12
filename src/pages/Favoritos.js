import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image } from 'react-native';
import favoritosIcone from '../assets/images/favoritosIcone.png'

export default function Favoritos() {
  const navigation = useNavigation();
    
  return (
    <View style={DetalhesParadaStyles.containerGeral}>

        <View style={DetalhesParadaStyles.containerTopo}>

            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
            
            <View style={DetalhesParadaStyles.logoContainer}>
                <Image source={favoritosIcone}/>
            </View>

            <View style={DetalhesParadaStyles.nomeDaParadaContainer}>
                <Text style={DetalhesParadaStyles.textoNomeDaParada}>Nome da parada</Text>
            </View>

        </View>
        <View style={DetalhesParadaStyles.containerBase}>
            <View style={DetalhesParadaStyles.onibusImagemContainer}>
               <Image source={onibusIcone} style={DetalhesParadaStyles.onibusImagem}></Image>
            </View>
            <View style={DetalhesParadaStyles.relogioImagemContainer}>
               <Image source={relogioIcone} style={DetalhesParadaStyles.relogioImagem}></Image>
            </View>

        </View>
    </View>    
  )
}
