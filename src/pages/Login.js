import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginStyle from './styles/LoginStyle'
import logo from '../assets/images/logo.png'
import InputRB from '../components/InputRB'
import { useState } from 'react';
import BotaoRB from '../components/BotaoRB'
import { useNavigation } from '@react-navigation/native'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB'
import { useTipoUsuario } from '../context/ContextoDoUsuario';

export default function Login({ route }) {
  const navigation = useNavigation();
  const {tipoUsuario} = useTipoUsuario();
  
    const [usuario, setUsuario] = useState(null);
    const [CNPJ, setCNPJ] = useState(null);
    const [senha, setSenha] = useState(null);
    const [erroUsuario, setErroUsuario] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordInvisible, setPasswordInvisible] = useState(true);

    function dadoLogin() {
      const dado = tipoUsuario === 'Empresa' ? 'CNPJ' : 'Usuário';
      return dado;
    }

    function login() {
        if (loading) {
          return;
        }
    
        setErroUsuario(false);
        setErroSenha(false);
    
        if (!usuario) {
          setErroUsuario(true);
        }
    
        if (!senha) {
          setErroSenha(true);
        }
    
        if (!senha || !usuario) {
          return;
        }
         }

        function informaUsuario(value) {
            if (!value) {
              setErroUsuario(true);
            } else {
              setErroUsuario(false);
            }
        
            setUsuario(value);
          }
        
          function informaSenha(value) {
            if (!value) {
              setErroSenha(true);
            } else {
              setErroSenha(false);
            }
        
            setSenha(value);
          }
        
          function mostrarOcultarSenha() {
            setPasswordInvisible(!passwordInvisible);
          }

  return (
    <View style={LoginStyle.container}>

        <BotaoVoltarOuSairRB acao={() => navigation.goBack()}/>

            <View style={LoginStyle.logoContainer}>
               <Image source={logo} style={LoginStyle.logo}></Image>
            </View>
            <View style={LoginStyle.descriptionContainer}>
                <Text style={LoginStyle.descriptionText}>Entre como 
                    <Text style={LoginStyle.descriptionBoldText}> {tipoUsuario}</Text>
                </Text>
            </View>
            <View style={LoginStyle.inputContainer}>
                <InputRB
                    titulo={dadoLogin()}
                    value={usuario}
                    onChangeText={informaUsuario}
                    style={LoginStyle.input}
                    >
                </InputRB>
                <InputRB
                    titulo={'Senha'}
                    style={LoginStyle.input}
                    >
                </InputRB>
            </View>
            <View style={LoginStyle.recuperarSenhaContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
                    <Text style={LoginStyle.recuperarSenhaText}>Esqueci minha
                            <Text style={LoginStyle.recuperarSenhaBoldText}> Senha</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={LoginStyle.containerBotao}>
                <BotaoRB 
                        titulo={'Entrar'}
                        acao={() => navigation.navigate('BuscarRotas', {tipoUsuario})}
                        textoCustomEstilo={LoginStyle.textoBotao}
                        botaoCustomEstilo={LoginStyle.botao}>
                </BotaoRB>
            </View>
    </View>        
  );
}