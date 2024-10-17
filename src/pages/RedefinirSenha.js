import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import RedefinirSenhaStyle from './styles/RedefinirSenhaStyle'
import { useNavigation } from '@react-navigation/native'
import logo from '../assets/images/logo.png'
import InputRB from '../components/InputRB'
import BotaoRB from '../components/BotaoRB'

export default function RedefinirSenha() {
    const navigation = useNavigation();

  return (
    <View style={RedefinirSenhaStyle.container}>
            <View style={RedefinirSenhaStyle.logoContainer}>
               <Image source={logo} style={RedefinirSenhaStyle.logo}></Image>
            </View>
            <View style={RedefinirSenhaStyle.funcionalidadePaginaContainer}>
                <Text style={RedefinirSenhaStyle.funcionalidadePaginaText}>Redefinir
                    <Text style={RedefinirSenhaStyle.funcionalidadePaginaBoldText}> Senha</Text>
                </Text>
                <Text style={RedefinirSenhaStyle.passosText}>Informe o e-mail para o qual {"\n"}deseja redefinir a senha</Text>
            </View>
            <View style={RedefinirSenhaStyle.inputContainer}>
                <InputRB
                    titulo={'E-mail'}
                    style={RedefinirSenhaStyle.input}
                    >
                </InputRB>
            </View>   
            <View style={RedefinirSenhaStyle.containerBotao}>
                <BotaoRB 
                        titulo={'Redefinir senha'}
                        textoCustomEstilo={RedefinirSenhaStyle.textoBotao}
                        botaoCustomEstilo={RedefinirSenhaStyle.botao}>
                </BotaoRB>
            </View>
            <View style={RedefinirSenhaStyle.voltarLoginContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={RedefinirSenhaStyle.voltarLoginText}>Voltar a tela de 
                            <Text style={RedefinirSenhaStyle.voltarLoginBoldText}> Login</Text>
                    </Text>
                </TouchableOpacity>
            </View> 
    </View>
  )
}