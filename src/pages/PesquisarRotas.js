import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB'
import PesquisarRotasStyles from './styles/PesquisarRotasStyles'
import { useNavigation } from '@react-navigation/native';
import BarraDePesquisaRB from '../components/BarraDePesquisaRB';


export default function PesquisarRotas() {

    const navigation = useNavigation();
    
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
            

        </View>
    </View>    
  )
}
