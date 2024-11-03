import TelaInicial from './src/pages/TelaInicial';
import Login from './src/pages/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RedefinirSenha from './src/pages/RedefinirSenha';
import Cadastro from './src/pages/Cadastro';
import BotaoVoltarRB from './src/components/BotaoVoltarOuSairRB';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaInicial'>
        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{headerShown: false}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='RedefinirSenha' component={RedefinirSenha} options={{headerShown: false}}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
