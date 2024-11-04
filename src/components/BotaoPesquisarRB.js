import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { EstilosGlobais } from '../pages/styles/EstilosGlobais'

export default function BotaoPesquisarRB({titulo, acao, botaoCustomEstilo, textoCustomEstilo}) {
  return (
    <TouchableOpacity
        style={[EstilosGlobais.botaoPesquisar, botaoCustomEstilo]} onPress={acao}>
            <Text style={[EstilosGlobais.textoBotaoPesquisar, textoCustomEstilo]} >{titulo}</Text>
    </TouchableOpacity>            
  )
}