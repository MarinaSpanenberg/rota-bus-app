import React, { useState } from 'react';
import { View, Text, Alert, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CadastroStyle from '../styles/CadastroStyle';
import InputRB from '../../components/InputRB';
import BotaoRB from '../../components/BotaoRB';
import BotaoVoltarOuSairRB from '../../components/BotaoVoltarOuSairRB';
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";
import { signUpUser } from "../../services/userService";
import { useTipoUsuario } from '../../context/ContextoDoUsuario';

export default function Cadastro() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [interprisename, setInterprisename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setTipoUsuario } = useTipoUsuario();

  const { setUser } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  function validateUserInputsInSignUp() {
    if ((!username && !interprisename) || !email || !password || !confirmPassword) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("As senhas não coincidem. Tente novamente.");
      return;
    }
  }

  const handleMutualInputForUser = (field, value) => {
    if (field === 'username') {
      setUsername(value);
      if (value) setInterprisename("");
    } else if (field === 'interprisename') {
      setInterprisename(value);
      if (value) setUsername("");
    }
  };

  async function signUpWithEmail() {
    if ((!username && !interprisename) || !email || !password || !confirmPassword) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("As senhas não coincidem. Tente novamente.");
      return;
    }

    const response = await signUpUser({ email, password, username, interprisename });
    console.log(response);
    if (response.success == false) {
      Alert.alert("Não foi possível realizar o cadastro.");
      return;
    }
    setUser({
      username: username || null,
      interprisename: interprisename || null,
      email,
    });   
    
    if (username && !interprisename) {
      setTipoUsuario('Passageiro');
      Alert.alert("Cadastro realizado com sucesso!", "Redirecionando para login de Passageiro.");
      navigation.navigate('Login');
    } else if (interprisename && !username) {
      setTipoUsuario('Empresa');
      Alert.alert("Cadastro realizado com sucesso!", "Redirecionando para login de Empresa.");
      navigation.navigate('Login');
    }
 
     Alert.alert("Cadastro realizado com sucesso.");
    navigation.navigate('Login');

  }

  return (
    <View style={CadastroStyle.container}>
      <ScrollView>
        <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
        <View style={CadastroStyle.inputContainer}>
          <InputRB
            titulo="Usuário para Passageiro"
            value={username}
            onChangeText={(text) => handleMutualInputForUser('username', text)}
            editable={!interprisename}
            textCustomStyle={[
              CadastroStyle.textoInput,
              interprisename ? CadastroStyle.textoInputNaoSelecionado : {}
            ]}
            inputCustomStyle={interprisename ? CadastroStyle.inputNaoSelecionado : {}}
            style={[CadastroStyle.input]}
          />

          <Text style={CadastroStyle.ouTexto}> OU </Text>

          <InputRB
            titulo="Usuário para Empresa"
            value={interprisename}
            onChangeText={(text) => handleMutualInputForUser('interprisename', text)}
            editable={!username}
            textCustomStyle={[
              CadastroStyle.textoInput,
              username ? CadastroStyle.textoInputNaoSelecionado : {}
            ]}
            inputCustomStyle={username ? CadastroStyle.inputNaoSelecionado : {}}
            style={CadastroStyle.input}
          />
          <InputRB
            titulo="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            textCustomStyle={CadastroStyle.textoInput}
            style={CadastroStyle.input}
          />
            <InputRB
              titulo="Senha"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              textCustomStyle={CadastroStyle.textoInput}
              style={CadastroStyle.input}
              inputCustomStyle={{width: '84%'}}
            > 
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Ionicons
                name={!showPassword ? "eye-off-outline" : "eye-outline"}
                size={24}
                style={CadastroStyle.senhaIcon}
                
              />
          </TouchableOpacity>
          </InputRB>
            

            <InputRB
              titulo="Confirmar Senha"
              secureTextEntry={!showPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              textCustomStyle={CadastroStyle.textoInput}
              style={CadastroStyle.input}
              inputCustomStyle={{width: '84%'}}
            >
            <TouchableOpacity onPress={togglePasswordVisibility} >
              <Ionicons
                name={!showPassword ? "eye-off-outline" : "eye-outline"}
                size={24}
                style={CadastroStyle.senhaIcon}
              />
          </TouchableOpacity>
          </InputRB>
        </View>
        
        <View style={CadastroStyle.containerBotao}>
          <BotaoRB
            titulo="Criar conta"
            acao={signUpWithEmail}
            textoCustomEstilo={CadastroStyle.textoBotao}
            botaoCustomEstilo={CadastroStyle.botao}
          />
          <Text style={CadastroStyle.textoInput}>Já tem uma conta? 
            <Text onPress={() => navigation.navigate('TelaInicial')} 
              style={CadastroStyle.textoInput}>Faça login</Text>
          </Text>

        </View>
        </ScrollView>
    </View>
  );
}
