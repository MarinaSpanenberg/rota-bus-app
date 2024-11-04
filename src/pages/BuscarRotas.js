import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BotaoMenuRB from '../components/BotaoMenuRB'
import BotaoPesquisarRB from '../components/BotaoPesquisarRB'
import FontLoader from '../components/FontLoader';
import BuscarRotasStyle from './styles/BuscarRotasStyle'
import { useTipoUsuario } from '../context/ContextoDoUsuario';

export default function BuscarRotas() {
    const navigation = useNavigation();
    const {tipoUsuario} = useTipoUsuario();

    function dadoBuscar() {
        const dado = tipoUsuario === 'Passageiro' ? 'Buscar Rotas' : 
        'Digite a placa do Ônibus\nque deseja buscar';
        return dado;
      }

    return (
        <View style={BuscarRotasStyle.container}>
        
              <BotaoMenuRB acao={() => navigation.navigate('Menu', {tipoUsuario})} />
          <View style={BuscarRotasStyle.botoesTopoContainer}> 
              <Text style={[{fontFamily: 'PoppinsExtraBold'}, BuscarRotasStyle.texto]}>RotaBus</Text>
          </View> 

              <BotaoPesquisarRB
                  titulo={dadoBuscar()}   
                  textoCustomEstilo={{fontFamily: 'PoppinsMedium'}}
              />
        </View>
    ) 
}
