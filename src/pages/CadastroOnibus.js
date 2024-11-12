import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CadastroStyle from './styles/CadastroStyle'
import { useNavigation } from '@react-navigation/native'
import logo from '../assets/images/logo.png'
import InputRB from '../components/InputRB'
import BotaoRB from '../components/BotaoRB'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB'

export default function CadastroOnibus() {
    const navigation = useNavigation();

  return (
    <View style={CadastroStyle.container}>
        
        <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

        <View style={MenuStyle.logoContainer}>
               <Image source={tipoUsuario === 'Passageiro' ? passageirosIcone : empresaIcone} style={MenuStyle.logo} />
               <Text style={[MenuStyle.tipoUsuarioTexto,{fontFamily: 'Poppins'}]}>{tipoUsuario === 'Passageiro' ? 'Usuário' : 'Empresa'}</Text>
        </View>

            <View style={CadastroStyle.inputContainer}>
                <InputRB
                    titulo={'Linha do Ônibus'}
                    textCustomStyle={CadastroStyle.textoInput}
                    style={CadastroStyle.input}
                    >
                </InputRB>

                <Text style={CadastroStyle.ouTexto}> OU </Text>

                <InputRB
                    titulo={'Paradas'}
                    textCustomStyle={CadastroStyle.textoInput}
                    style={CadastroStyle.input}
                    >
                </InputRB>
                <InputRB
                    titulo={'ID da Placa'}
                    textCustomStyle={CadastroStyle.textoInput}
                    style={CadastroStyle.input}
                    >
                </InputRB>
                <BotaoRB BotaoRB
                    titulo={'Foto do Ônibus'}
                    textoCustomEstilo={[MenuStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                     botaoCustomEstilo={MenuStyle.botoes}>
                </BotaoRB>
            </View>   
            <View style={CadastroStyle.containerBotao}>
                <BotaoRB 
                        titulo={'Cadastrar Ônibus'}
                        textoCustomEstilo={CadastroStyle.textoBotao}
                        botaoCustomEstilo={CadastroStyle.botao}>
                </BotaoRB>
            </View>
    </View>
  )
}