import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BotaoMenuRB from '../components/BotaoMenuRB'
import BotaoPesquisarRB from '../components/BotaoPesquisarRB'
import BuscarRotasStyle from './styles/BuscarRotasStyle'
import { useTipoUsuario } from '../context/ContextoDoUsuario';
import Map from '../components/Mapa';
import BarraDePesquisa from '../components/BarraDePesquisaRB'
import BarraDePesquisaRB from '../components/BarraDePesquisaRB'

export default function BuscarRotas() {
    const navigation = useNavigation();
    const {tipoUsuario} = useTipoUsuario();
    const [abrirSearch, setAbrirSearch] = useState(false);
    const [pesquisaPlacas, setPesquisaPlacas] = useState('');

    function dadoBuscar() {
        const dado = tipoUsuario === 'Passageiro' ? 'Buscar Rotas' : 
        'Digite a placa do Ônibus\nque deseja buscar';
        return dado;
      }

    const botaoParaPesquisa = () => setAbrirSearch(!abrirSearch);
    
    const mudarPesquisaPlacas = (pesquisa) => setPesquisaPlacas(pesquisa);

    return (
        
        <View style={BuscarRotasStyle.container}>
           
           <Map/>
           
              <BotaoMenuRB acao={() => navigation.navigate('Menu', {tipoUsuario})} />
          <View style={BuscarRotasStyle.botoesTopoContainer}> 
              <Text style={[{fontFamily: 'PoppinsExtraBold'}, BuscarRotasStyle.texto]}>RotaBus</Text>
          </View> 
          {abrirSearch ? (
                <View style={BuscarRotasStyle.pesquisaContainer}>
                    <TextInput style={BuscarRotasStyle.pesquisaTexto}
                        onChangeText={mudarPesquisaPlacas}
                        value={pesquisaPlacas}
                        onSubmitEditing={() => setAbrirSearch(false)} 
                    />
                </View>
            ) : (
                <BotaoPesquisarRB
                    titulo={dadoBuscar()}
                    acao={() => tipoUsuario === 'Passageiro' ? navigation.navigate('PesquisarRotas') : botaoParaPesquisa()}
                    textoCustomEstilo={{ fontFamily: 'PoppinsMedium' }}
        
                />
            )}     
        </View>
    ) 
}
