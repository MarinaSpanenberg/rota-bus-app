import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CadastroStyle from './styles/CadastroStyle'
import { useNavigation } from '@react-navigation/native'
import logo from '../assets/images/logo.png'
import InputRB from '../components/InputRB'
import BotaoRB from '../components/BotaoRB'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB'

export default function Cadastro() {
    const navigation = useNavigation();

  return (
    <View style={CadastroStyle.container}>
        
        <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

            <View style={CadastroStyle.inputContainer}>
                <InputRB
                    titulo={'Usuário para passageiros'}
                    textCustomStyle={CadastroStyle.textoInput}
                    style={CadastroStyle.input}
                    >
                </InputRB>

                <Text style={CadastroStyle.ouTexto}> OU </Text>

                <InputRB
                    titulo={'CNPJ para empresas'}
                    textCustomStyle={CadastroStyle.textoInput}
                    style={CadastroStyle.input}
                    >
                </InputRB>
                <InputRB
                    titulo={'E-mail'}
                    textCustomStyle={CadastroStyle.textoInput}
                    style={CadastroStyle.input}
                    >
                </InputRB>
                <InputRB
                    titulo={'Cadastrar Senha'}
                    textCustomStyle={CadastroStyle.textoInput}
                    style={CadastroStyle.input}
                    >
                </InputRB>
                <InputRB
                    titulo={'Confirmar Senha'}
                    textCustomStyle={CadastroStyle.textoInput}
                    style={CadastroStyle.input}
                    >
                </InputRB>
            </View>   
            <View style={CadastroStyle.containerBotao}>
                <BotaoRB 
                        titulo={'Criar conta'}
                        textoCustomEstilo={CadastroStyle.textoBotao}
                        botaoCustomEstilo={CadastroStyle.botao}>
                </BotaoRB>
            </View>
    </View>
  )
}