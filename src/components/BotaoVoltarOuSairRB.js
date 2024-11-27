import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { EstilosGlobais } from '../pages/styles/EstilosGlobais'
import botaoVoltarIcone from '../assets/images/botaoVoltarIcone.png';
import botaoSairIcone from '../assets/images/botaoSairIcone.png';

export default function BotaoVoltarOuSairRB({acao, telaInicial}) {
  return (
    <TouchableOpacity
        style={EstilosGlobais.botaoVoltar} onPress={acao}>
            <Image source={ telaInicial ? botaoSairIcone: botaoVoltarIcone} style={EstilosGlobais.botaoVoltarImagem}></Image>
    </TouchableOpacity>            
  )
}