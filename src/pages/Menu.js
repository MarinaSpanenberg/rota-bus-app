import React from 'react'
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import MenuStyle from './styles/MenuStyle';
import BotaoRB from '../components/BotaoRB';
import passageirosIcone from '../assets/images/passageirosIcone.png';
import empresaIcone from '../assets/images/empresaIcone.png';
import { useNavigation } from '@react-navigation/native';
import { useTipoUsuario } from '../context/ContextoDoUsuario';


export default function Menu() {

    const navigation = useNavigation();
    const {tipoUsuario} = useTipoUsuario();

  return (
    <View style={MenuStyle.container}>
        
        <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

        <View style={MenuStyle.logoContainer}>
               <Image source={tipoUsuario === 'Passageiro' ? passageirosIcone : empresaIcone} style={MenuStyle.logo} />
               <Text style={[MenuStyle.tipoUsuarioTexto,{fontFamily: 'Poppins'}]}>{tipoUsuario === 'Passageiro' ? 'Usuário' : 'Empresa'}</Text>
            </View>

        <View style={MenuStyle.botoesContainer}>    
        
                <BotaoRB BotaoRB
                        titulo={'Editar perfil'}
                        acao={() => navigation.navigate('EditarPerfil')}
                        textoCustomEstilo={[MenuStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={MenuStyle.botoes}>
                </BotaoRB>
            
                      
                {tipoUsuario === 'Passageiro' ? (
                    <>
                    <BotaoRB BotaoRB
                            titulo={'Selecionar Ônibus'}
                            textoCustomEstilo={[MenuStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                            acao={() => navigation.navigate('PesquisarRotas')}
                            botaoCustomEstilo={MenuStyle.botoes}>
                    </BotaoRB>
                    
                    <BotaoRB BotaoRB
                            titulo={'Favoritos'}
                            textoCustomEstilo={[MenuStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                            acao={() => navigation.navigate('Favoritos')}
                            botaoCustomEstilo={MenuStyle.botoes}>   
                    </BotaoRB>
                </>
                ) : (
                    <>
                        <BotaoRB BotaoRB
                            titulo={'Cadastrar Ônibus'}
                            textoCustomEstilo={[MenuStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                            acao={() => navigation.navigate('CadastroOnibus')}
                            botaoCustomEstilo={MenuStyle.botoes}>
                        </BotaoRB>  
                        <BotaoRB BotaoRB
                                titulo={'Remover Ônibus'}
                                textoCustomEstilo={[MenuStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                                acao={() => navigation.navigate('RemoverOnibus')}
                                botaoCustomEstilo={MenuStyle.botoes}>
                        </BotaoRB>
                    </>
            )}
           
                <BotaoRB BotaoRB
                        titulo={'Deletar Conta'}
                        textoCustomEstilo={[MenuStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={MenuStyle.botoes}>
                </BotaoRB>
            </View>
            
            <View style={MenuStyle.containerBotaoSair}>
                <BotaoRB BotaoRB
                        titulo={'Sair do perfil'}
                        acao={() => navigation.navigate('TelaInicial')}
                        textoCustomEstilo={[MenuStyle.textoBotaoSair, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={MenuStyle.botaoSair}>
                </BotaoRB>
            </View>
    </View>
  )
}
