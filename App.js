import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import TelaInicial from './src/pages/TelaInicial';
import Login from './src/pages/auth/Login';
import Cadastro from './src/pages/auth/Cadastro';
import RedefinirSenha from './src/pages/RedefinirSenha';
import BuscarRotas from './src/pages/BuscarRotas';
import Menu from './src/pages/Menu';
import FontLoader from './src/components/FontLoader';
import DetalhesParada from './src/pages/DetalhesParada';
import PesquisarRotas from './src/pages/PesquisarRotas';
import CadastroOnibus from './src/pages/CadastroOnibus';
// import 'react-native-url-polyfill/auto';
import { supabase } from './src/services/supabase';
// import { Session } from '@supabase/supabase-js';
import { SetarUsuario } from './src/context/ContextoDoUsuario';
import { AuthProvider } from "./src/context/AuthContext";
import Favoritos from './src/pages/Favoritos';
import EditarPerfil from './src/pages/EditarPerfil';
import RemoverOnibus from './src/pages/RemoverOnibus';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <AuthProvider>
      <SetarUsuario>
        <FontLoader>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='TelaInicial'>
            <Stack.Screen name='TelaInicial' component={TelaInicial} options={{headerShown: false}}/>
            <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
            <Stack.Screen name='CadastroOnibus' component={CadastroOnibus} options={{headerShown: false}}/>
            <Stack.Screen name='RemoverOnibus' component={RemoverOnibus} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='RedefinirSenha' component={RedefinirSenha} options={{headerShown: false}}/>
            <Stack.Screen name='BuscarRotas' component={BuscarRotas} options={{headerShown: false}}/>
            <Stack.Screen name='PesquisarRotas' component={PesquisarRotas} options={{headerShown: false}}/>
            <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}}/>
            <Stack.Screen name='EditarPerfil' component={EditarPerfil} options={{headerShown: false}}/>
            <Stack.Screen name='Favoritos' component={Favoritos} options={{headerShown: false}}/>
            <Stack.Screen name='DetalhesParada' component={DetalhesParada} options={{headerShown: false}}/>
          </Stack.Navigator>  
        </NavigationContainer>
        </FontLoader>
      </SetarUsuario>
    </AuthProvider>
  );
}
