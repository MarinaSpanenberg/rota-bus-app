import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginEstilo from './styles/LoginEstilo'
import logo from '../assets/images/logo.png'
import InputRB from '../components/InputRB'
import { useState } from 'react';
import BotaoRB from '../components/BotaoRB'
import { useNavigation } from '@react-navigation/native'

export default function Login({ route }) {
  const navigation = useNavigation();

    const [usuario, setUsuario] = useState(null);
    const [CNPJ, setCNPJ] = useState(null);
    const [senha, setSenha] = useState(null);
    const [erroUsuario, setErroUsuario] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordInvisible, setPasswordInvisible] = useState(true);

    const {tipoUsuario} = route.params;

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
    <View style={LoginEstilo.container}>
            <View style={LoginEstilo.logoContainer}>
               <Image source={logo} style={LoginEstilo.logo}></Image>
            </View>
            <View style={LoginEstilo.descriptionContainer}>
                <Text style={LoginEstilo.descriptionText}>Entre como 
                    <Text style={LoginEstilo.descriptionBoldText}> {tipoUsuario}</Text>
                </Text>
            </View>
            <View style={LoginEstilo.inputContainer}>
                <InputRB
                    titulo={dadoLogin()}
                    value={usuario}
                    onChangeText={informaUsuario}
                    style={LoginEstilo.input}
                    >
                </InputRB>
                <InputRB
                    titulo={'Senha'}
                    style={LoginEstilo.input}
                    >
                </InputRB>
            </View>
            <View style={LoginEstilo.recuperarSenhaContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
                    <Text style={LoginEstilo.recuperarSenhaText}>Esqueci minha
                            <Text style={LoginEstilo.recuperarSenhaBoldText}> Senha</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={LoginEstilo.containerBotao}>
                <BotaoRB 
                        titulo={'Entrar'}
                        textoCustomEstilo={LoginEstilo.textoBotao}
                        botaoCustomEstilo={LoginEstilo.botao}>
                </BotaoRB>
            </View>
    </View>        
  );
}