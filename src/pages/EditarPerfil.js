import React, { useEffect, useState } from 'react';
import { Alert, Image, View, TouchableOpacity } from 'react-native';
import InputRB from '../components/InputRB'; 
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB'; 
import BotaoRB from '../components/BotaoRB'; 
import passageirosIcone from '../assets/images/passageirosIcone.png'; 
import empresaIcone from '../assets/images/empresaIcone.png'; 
import { useNavigation } from '@react-navigation/native';
import { useTipoUsuario } from '../context/ContextoDoUsuario';
import { useAuth } from '../context/AuthContext';
import * as ImagePicker from 'expo-image-picker'; 
import EditarPerfilStyle from './styles/EditarPerfilStyle'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../services/supabase';

export default function EditarPerfil() {
    const navigation = useNavigation();
    const { tipoUsuario } = useTipoUsuario();
    const { user, setUser } = useAuth();

    const [username, setUsername] = useState(user.username || ''); 
    const [email, setEmail] = useState(user.email || ''); 
    const [image, setImage] = useState(user.image || null); 
    const [userId, setUserId] = useState(null);
    const [interprisename, setInterprisename] = useState(user.interprisename || '');

    const fetchUserData = async () => {
        const userSession = await AsyncStorage.getItem('@userSession');
        const userData = userSession ? JSON.parse(userSession) : null;

        if (userData && userData.id) {
            setUserId(userData.id);
            setEmail(userData.email); 
            setUsername(tipoUsuario === 'Passageiro' ? userData.username : '');
            setInterprisename(tipoUsuario === 'Empresa' ? userData.interprisename : '');

        const { data, error } = await supabase
                .from('user') 
                .select('email')
                .eq('id', userData.id)
                .single();

            if (error) {
                console.error('Erro ao buscar e-mail do usuário:', error.message);
            } else if (data) {
                setEmail(data.email || '');
            }
        } else {
            console.error('Dados do usuário não encontrados ou ID inválido.');
            Alert.alert('Erro', 'Não foi possível recuperar os dados do usuário.');
        }
        };

    useEffect(() => {
            fetchUserData();
    }, []);

    const escolherImagemPerfil = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert('Desculpe, precisamos de permissão para acessar suas imagens!');
            return; 
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 0.5,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const salvarAlteracoes = async () => {
        if (!userId) {
            console.error('ID do usuário não definido.');
            Alert.alert('Erro', 'ID do usuário não encontrado.');
            return;
        }

        try {
            const updates = {
                email,
                ...(tipoUsuario === 'Passageiro' && { username }),
                ...(tipoUsuario === 'Empresa' && { interprisename }),
            };

            const {  error } = await supabase
                .from('user') 
                .update(updates) 
                .eq('id', userId); 
                
            if (error) {
                console.error('Erro ao salvar alterações no banco:', error.message);
                Alert.alert('Erro', 'Não foi possível salvar as alterações.');
                return;
            }
    
            const updatedUser = { ...user, ...updates };
            setUser(updatedUser);
    
            await AsyncStorage.setItem('@userSession', JSON.stringify(updatedUser));
    
            Alert.alert('Sucesso', 'Alterações salvas com sucesso.');
        } catch (err) {
            console.error('Erro ao salvar alterações:', err);
            Alert.alert('Erro', 'Ocorreu um erro ao salvar as alterações.');
        }
    };

    return (
        <View style={EditarPerfilStyle.container}>
            
            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

            <TouchableOpacity onPress={escolherImagemPerfil} style={EditarPerfilStyle.logoContainer}>
                <Image
                    source={
                        image
                            ? { uri: image } 
                            : tipoUsuario === 'Passageiro'
                            ? passageirosIcone 
                            : empresaIcone 
                    }
                    style={EditarPerfilStyle.logo} 
                />
            </TouchableOpacity>

            <View style={EditarPerfilStyle.botoesContainer}>
                <InputRB
                    titulo="Nome de usuário"
                    value={tipoUsuario === 'Passageiro' ? username : interprisename}
                    onChangeText={tipoUsuario === 'Passageiro' ? setUsername : setInterprisename}
                    textCustomStyle={[EditarPerfilStyle.textoBotoes, { fontFamily: 'PoppinsMedium' }]}
                    inputCustomstyle={EditarPerfilStyle.botoes}
                />
                <InputRB
                    titulo="E-Mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    textCustomStyle={[EditarPerfilStyle.textoBotoes, { fontFamily: 'PoppinsMedium' }]}
                    inputCustomstyle={EditarPerfilStyle.botoes}
                />
            </View>

            <View style={EditarPerfilStyle.containerBotaoSalvar}>
                <BotaoRB
                    titulo="Salvar alterações"
                    acao={salvarAlteracoes}
                    textoCustomEstilo={[EditarPerfilStyle.textoBotaoSalvar, { fontFamily: 'PoppinsMedium' }]}
                    botaoCustomEstilo={EditarPerfilStyle.botaoSalvar}
                />
            </View>
        </View>
    );
}
