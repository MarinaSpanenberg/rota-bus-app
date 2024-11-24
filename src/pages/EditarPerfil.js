import React from 'react'
import { useState } from 'react';
import InputRB from '../components/InputRB';
import { Image, Text, View } from 'react-native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import EditarPerfilStyle from './styles/EditarPerfilStyle';
import BotaoRB from '../components/BotaoRB';
import passageirosIcone from '../assets/images/passageirosIcone.png';
import empresaIcone from '../assets/images/empresaIcone.png';
import { useNavigation } from '@react-navigation/native';
import { useTipoUsuario } from '../context/ContextoDoUsuario';


export default function EditarPerfil() {

    const navigation = useNavigation();
    const {tipoUsuario} = useTipoUsuario();

  return (
    <View style={EditarPerfilStyle.container}>
        
        <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

        <View style={EditarPerfilStyle.logoContainer}>
               <Image source={tipoUsuario === 'Passageiro' ? passageirosIcone : empresaIcone} style={EditarPerfilStyle.logo} />
               <Text style={[EditarPerfilStyle.tipoUsuarioTexto,{fontFamily: 'Poppins'}]}>{tipoUsuario === 'Passageiro' ? 'Usuário' : 'Empresa'}</Text>
            </View>

        <View style={EditarPerfilStyle.botoesContainer}>    
        
                <InputRB 
                        titulo={'E-Mail'}
                        textoCustomEstilo={[EditarPerfilStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={EditarPerfilStyle.botoes}>
                </InputRB>
           
                <InputRB 
                        titulo={'Senha'}
                        textoCustomEstilo={[EditarPerfilStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={EditarPerfilStyle.botoes}>
                </InputRB>
            </View>
            
            <View style={EditarPerfilStyle.containerBotaoSalvar}>
                <BotaoRB 
                        titulo={'Salvar alterações'}
                        acao={() => navigation.navigate('TelaInicial')}
                        textoCustomEstilo={[EditarPerfilStyle.textoBotaoSalvar, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={EditarPerfilStyle.botaoSalvar}>
                </BotaoRB>
            </View>
    </View>
  )
}
