import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { EstilosGlobais } from '../pages/styles/EstilosGlobais'
import botaoMenuIcone from '../assets/images/botaoMenuIcone.png';

export default function BotaoMenuRB({acao}) {
  return (
    <TouchableOpacity
        style={EstilosGlobais.botaoVoltar} onPress={acao}>
            <Image source={ botaoMenuIcone } style={EstilosGlobais.botaoVoltarImagem}></Image>
    </TouchableOpacity>            
  )
}