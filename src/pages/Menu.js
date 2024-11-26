import React from 'react'
import { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import MenuStyle from './styles/MenuStyle';
import BotaoRB from '../components/BotaoRB';
import passageirosIcone from '../assets/images/passageirosIcone.png';
import empresaIcone from '../assets/images/empresaIcone.png';
import { useNavigation } from '@react-navigation/native';
import { useTipoUsuario } from '../context/ContextoDoUsuario';
import { supabase } from '../services/supabase';
import { signOutUser } from "../services/userService";
import { useAuth } from "../context/AuthContext";
export default function Menu() {

  const navigation = useNavigation();
  const { tipoUsuario } = useTipoUsuario();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await signOutUser();
    setUser(null);
    navigation.navigate('TelaInicial');
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      "Confirmação de Exclusão", // Título do alerta
      "Tem certeza de que deseja deletar sua conta? Esta ação não pode ser desfeita.",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Exclusão cancelada"),
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: async () => {
            try {
              const { error } = await supabase
                .from("user")
                .delete()
                .eq("id", user.id);
  
              if (error) {
                console.error("Erro ao deletar conta:", error.message);
                Alert.alert("Erro", "Não foi possível deletar a conta. Tente novamente.");
                return;
              }

              await signOutUser();
              setUser(null);
              Alert.alert("Sucesso", "Conta deletada com sucesso!");
              navigation.navigate("TelaInicial");
            } catch (err) {
              console.error("Erro ao deletar conta:", err.message);
              Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente.");
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={MenuStyle.container}>

      <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

      <View style={MenuStyle.logoContainer}>
        <Image source={tipoUsuario === 'Passageiro' ? passageirosIcone : empresaIcone} style={MenuStyle.logo} />
        <Text style={[MenuStyle.tipoUsuarioTexto, { fontFamily: 'Poppins' }]}>{tipoUsuario === 'Passageiro' ? 'Usuário' : 'Empresa'}</Text>
      </View>

      <View style={MenuStyle.botoesContainer}>

        <BotaoRB BotaoRB
          titulo={'Editar perfil'}
          acao={() => navigation.navigate('EditarPerfil')}
          textoCustomEstilo={[MenuStyle.textoBotoes, { fontFamily: 'PoppinsMedium' }]}
          botaoCustomEstilo={MenuStyle.botoes}>
        </BotaoRB>

        {tipoUsuario === 'Passageiro' ? (
          <>
            <BotaoRB BotaoRB
              titulo={'Selecionar Ônibus'}
              textoCustomEstilo={[MenuStyle.textoBotoes, { fontFamily: 'PoppinsMedium' }]}
              acao={() => navigation.navigate('PesquisarRotas')}
              botaoCustomEstilo={MenuStyle.botoes}>
            </BotaoRB>

            <BotaoRB BotaoRB
              titulo={'Favoritos'}
              textoCustomEstilo={[MenuStyle.textoBotoes, { fontFamily: 'PoppinsMedium' }]}
              acao={() => navigation.navigate('Favoritos')}
              botaoCustomEstilo={MenuStyle.botoes}>
            </BotaoRB>
          </>
        ) : (
          <>
            <BotaoRB BotaoRB
              titulo={'Cadastrar Ônibus'}
              textoCustomEstilo={[MenuStyle.textoBotoes, { fontFamily: 'PoppinsMedium' }]}
              acao={() => navigation.navigate('CadastroOnibus')}
              botaoCustomEstilo={MenuStyle.botoes}>
            </BotaoRB>
            <BotaoRB BotaoRB
              titulo={'Remover Ônibus'}
              textoCustomEstilo={[MenuStyle.textoBotoes, { fontFamily: 'PoppinsMedium' }]}
              acao={() => navigation.navigate('RemoverOnibus')}
              botaoCustomEstilo={MenuStyle.botoes}>
            </BotaoRB>
          </>
        )}

        <BotaoRB BotaoRB
          titulo={'Deletar Conta'}
          acao={handleDeleteAccount}
          textoCustomEstilo={[MenuStyle.textoBotoes, { fontFamily: 'PoppinsMedium' }]}
          botaoCustomEstilo={MenuStyle.botoes}>
        </BotaoRB>
      </View>

      <View style={MenuStyle.containerBotaoSair}>
        <BotaoRB BotaoRB
          titulo={'Sair do perfil'}
          acao={handleLogout}
          textoCustomEstilo={[MenuStyle.textoBotaoSair, { fontFamily: 'PoppinsMedium' }]}
          botaoCustomEstilo={MenuStyle.botaoSair}>
        </BotaoRB>
      </View>
    </View>
  )
}
