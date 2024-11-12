import React, { useState } from 'react';
import { View, Text, Alert, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../services/supabase';
import LoginStyle from '../styles/LoginStyle';
import InputRB from '../../components/InputRB';
import BotaoRB from '../../components/BotaoRB';
import BotaoVoltarOuSairRB from '../../components/BotaoVoltarOuSairRB';
import { useTipoUsuario } from '../../context/ContextoDoUsuario';
import logo from '../../assets/images/logo.png';
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../services/userService";


export default function Login() {
  const { tipoUsuario } = useTipoUsuario();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const dadoLogin = tipoUsuario === 'Empresa' ? 'Email Empresarial' : 'Email Pessoal';

  const { setUser } = useAuth();

  function validateUserInputsInSignUp() {
    if (!email || !password) {
      Alert.alert("Por favor, preencha os campos de email e senha.");
      return;
    }
  }

  async function signInWithEmail() {
      validateUserInputsInSignUp();
    
      const response = await loginUser(email, password);
      console.log(response);
      setUser(response.user);
      Alert.alert("Login realizado com sucesso!");
      navigation.navigate('BuscarRotas');
   
  }

  return (
    <View style={LoginStyle.container}>
      <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

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
          titulo={dadoLogin}
          value={email}
          onChangeText={setEmail}
          style={LoginStyle.input}
        />
        <InputRB
          titulo="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={LoginStyle.input}
        />
      </View>
      <View style={LoginStyle.containerBotao}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <BotaoRB
            titulo="Entrar"
            acao={signInWithEmail}
            textoCustomEstilo={LoginStyle.textoBotao}
            botaoCustomEstilo={LoginStyle.botao}
          />
        )}
      </View>
    </View>
  );
}
