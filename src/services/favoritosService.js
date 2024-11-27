import { Alert } from "react-native";
import { supabase } from "./supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const toggleFavorito = async (type, id, user_id) => {
    try {
        const userSession = await AsyncStorage.getItem('@userSession');
        const userData = userSession ? JSON.parse(userSession) : null;
        console.log('Sessão armazenada:', userData); 

        let referenceExists = false;

        if (type === 'bus') {
            const { data: busData, error: busError } = await supabase
                .from('bus')
                .select('bus_id')
                .eq('bus_id', id)
                .single();

            if (busData) {
                referenceExists = true;
            } else {
                console.error('Ônibus não encontrado');
            }

            if (busError) throw busError;
        } else if (type === 'bus_stop') {
            const { data: busStopData, error: busStopError } = await supabase
                .from('bus_stops')
                .select('id')
                .eq('id', id)
                .single();

            if (busStopData) {
                referenceExists = true;
            } else {
                console.error('Parada não encontrada');
            }

            if (busStopError) throw busStopError;
        }

        if (!referenceExists) {
            Alert.alert('Erro', `O ${type} com o ID fornecido não existe.`);
            return;
        }

        const { data: favoritoExistenteData, error: erroBusca } = await supabase
            .from('favorites')
            .select('*')
            .eq('user_id', user_id)
            .eq('type', type)
            .eq(type === 'bus' ? 'bus_id' : 'bus_stop_id', id)
            .single();

        if (erroBusca && erroBusca.code !== 'PGRST116') throw erroBusca;

        if (favoritoExistenteData) {
            const { error: erroRemocao } = await supabase
                .from('favorites')
                .delete()
                .eq('id', favoritoExistenteData.id);

            if (erroRemocao) throw erroRemocao;

            Alert.alert('Favorito removido!');
        } else {
            const { error: erroInsercao } = await supabase
                .from('favorites')
                .insert([
                    {
                        user_id: user_id,
                        type,
                        [type === 'bus' ? 'bus_id' : 'bus_stop_id']: id,
                    },
                ]);

            if (erroInsercao) throw erroInsercao;

            Alert.alert('Favorito adicionado!');
        }
    } catch (error) {
        console.error('Erro ao atualizar favorito:', error.message);
        Alert.alert('Erro', 'Não foi possível atualizar o favorito.');
    }
};
