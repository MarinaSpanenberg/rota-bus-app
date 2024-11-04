import TelaInicial from './src/pages/TelaInicial';
import Login from './src/pages/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RedefinirSenha from './src/pages/RedefinirSenha';
import Cadastro from './src/pages/Cadastro';
import BuscarRotas from './src/pages/BuscarRotas';
import Menu from './src/pages/Menu';
import { SetarUsuario } from './src/context/ContextoDoUsuario';
import FontLoader from './src/components/FontLoader';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SetarUsuario>
      <FontLoader>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='TelaInicial'>
          <Stack.Screen name='TelaInicial' component={TelaInicial} options={{headerShown: false}}/>
          <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
          <Stack.Screen name='RedefinirSenha' component={RedefinirSenha} options={{headerShown: false}}/>
          <Stack.Screen name='BuscarRotas' component={BuscarRotas} options={{headerShown: false}}/>
          <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}}/>
        </Stack.Navigator>  
      </NavigationContainer>
      </FontLoader>
    </SetarUsuario>  
  );
}
