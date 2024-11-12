import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB'
import DetalhesParadaStyles from './styles/DetalhesParadaStyles'
import onibusIcone from '../assets/images/onibusIcone.png';
import relogioIcone from '../assets/images/relogioIcone.png';
import { useNavigation } from '@react-navigation/native';


export default function DetalhesParada() {

    const navigation = useNavigation();
    
  return (
    <View style={DetalhesParadaStyles.containerGeral}>

        <View style={DetalhesParadaStyles.containerTopo}>

            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
            
            <View style={DetalhesParadaStyles.logoContainer}>
                <Text style={[{fontFamily: 'PoppinsExtraBold'}, DetalhesParadaStyles.logoTexto]}>RotaBus</Text>
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
