import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { EstilosGlobais } from '../pages/styles/EstilosGlobais'

export default function botaoRB({titulo, acao, info, botaoCustomEstilo, textoCustomEstilo, infoCustomEstilo}) {
  return (
    <TouchableOpacity
        style={[EstilosGlobais.botao, botaoCustomEstilo]} onPress={acao}>
            <Text style={[EstilosGlobais.textoBotao, textoCustomEstilo]} >{titulo}
                <Text style={[EstilosGlobais.infoBotao, infoCustomEstilo]}>{info}</Text>
            </Text>
    </TouchableOpacity>            
  )
}