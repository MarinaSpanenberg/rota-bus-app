import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import RemoverOnibusStyle from './styles/RemoverOnibusStyle';

export default function RemoverOnibus() {
  const navigation = useNavigation ();

  return (
    <View style={RemoverOnibusStyle.containerGeral}>

        <View style={RemoverOnibusStyle.containerTopo}>

            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
            
            
        </View>
        
        <View style={RemoverOnibusStyle.containerBase}>
            
        </View>
    </View>    
  )
}
