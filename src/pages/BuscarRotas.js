import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BotaoMenuRB from '../components/BotaoMenuRB'
import BotaoPesquisarRB from '../components/BotaoPesquisarRB'
import BuscarRotasStyle from './styles/BuscarRotasStyle'
import { useTipoUsuario } from '../context/ContextoDoUsuario';
import Map from '../components/Mapa';
import BarraDePesquisa from '../components/BarraDePesquisaRB'
import BarraDePesquisaRB from '../components/BarraDePesquisaRB'
import { supabase } from '../services/supabase'

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

    const buscarLinhaOnibus = async () => {
        if (!pesquisaPlacas.trim()) {
            return Alert.alert('Erro', 'Por favor, insira uma placa válida.');
        }

        try {
            
            const { data, error } = await supabase
                .from('bus')
                .select('line')
                .eq('name', pesquisaPlacas)
                .single();
                
            if (error) {
                console.error('Erro ao buscar linha:', error.message);
                Alert.alert('Erro', 'Não foi possível encontrar o ônibus.');
                return;
            }

            if (data) {
                Alert.alert('Linha do Ônibus', `Linha: ${data.line}`);
                setAbrirSearch(false);
            } else {
                Alert.alert('Não Encontrado', 'Não encontramos um ônibus com essa placa.');
            }
        } catch (err) {
            console.error('Erro na consulta:', err);
            Alert.alert('Erro', 'Ocorreu um erro ao buscar a linha do ônibus.');
        }
    };

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
                        onSubmitEditing={buscarLinhaOnibus}
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
