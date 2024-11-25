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

  const handleLogin = async () => {
    setLoading(true);

    try {
      if (!email || !password) {
        Alert.alert("Por favor, preencha os campos de email e senha.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('user')
        .select(tipoUsuario === 'Passageiro' ? 'username' : 'interprisename')
        .eq('email', email)
        .single();

      if (error || !data) {
        throw new Error('Erro ao realizar Login, verifique seu email e senha.');
      }

      if (
        (tipoUsuario === 'Passageiro' && !data.username) || 
        (tipoUsuario === 'Empresa' && !data.interprisename)
      ) {
        throw new Error(
          tipoUsuario === 'Passageiro' ? 'Esta conta não pertence a um Passageiro.' : 'Esta conta não pertence a uma Empresa.');
      }

      Alert.alert('Login bem-sucedido!', 'Bem-vindo ao RotaBusApp!');
      navigation.navigate('BuscarRotas');

    } catch (error) {
      Alert.alert('Erro de Login', error.message);
    } finally {
      setLoading(false);
    }
  };

  const dadoLogin = tipoUsuario === 'Passageiro' ? 'Email Pessoal' : 'Email Empresarial';

  // Codigo antigo, não remover antes de testar a nova implementação de ponta a ponta
  
  // const { setUser } = useAuth();

  // async function signInWithEmail() {
  //   if (!email || !password) {
  //     Alert.alert("Por favor, preencha os campos de email e senha.");
  //     return;
  //   }
    
  //     const response = await loginUser(email, password);
  //     console.log(response);
  //     if (response.success == false) {
  //       Alert.alert("Login não realizado com sucesso");
  //       return;
  //     }
  //     setUser(response.user);
  //     Alert.alert("Login realizado com sucesso!");
  //     navigation.navigate('BuscarRotas');
   
  // }

  return (
    <View style={LoginStyle.container}>
      <BotaoVoltarOuSairRB acao={() => navigation.navigate('TelaInicial')} />

      <View style={LoginStyle.logoContainer}>
            <Image source={logo} style={LoginStyle.logo}></Image>
        </View>
        <View style={LoginStyle.descriptionContainer}>
            <Text style={LoginStyle.descriptionText}>
              {tipoUsuario === 'Passageiro' ? 'Login Passageiro' : 'Login Empresa'}
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
            titulo={loading ? 'Carregando...' : 'Entrar'}
            acao={handleLogin}
            textoCustomEstilo={LoginStyle.textoBotao}
            botaoCustomEstilo={LoginStyle.botao}
          />
        )}
      </View>
    </View>
  );
}
