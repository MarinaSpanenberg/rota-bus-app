import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB'
import DetalhesParadaStyles from './styles/DetalhesParadaStyles'
import onibusIcone from '../assets/images/onibusIcone.png';
import relogioIcone from '../assets/images/relogioIcone.png';
import { useNavigation } from '@react-navigation/native';
import favoritoNaoSelecionado from '../assets/images/favoritoNaoSelecionado.png';
import favoritoSelecionado from '../assets/images/favoritoSelecionado.png';


export default function DetalhesParada({route}) {
    const { name } = route.params;
    const navigation = useNavigation();
    const [favorito, setFavorito] = useState(false);

  const selecionarFavorito = () => {
    setFavorito(prevState => !prevState);
  };

  return (
    <View style={DetalhesParadaStyles.containerGeral}>

        <View style={DetalhesParadaStyles.containerTopo}>

            <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />
            
            <View style={DetalhesParadaStyles.logoContainer}>
                <Text style={[{fontFamily: 'PoppinsExtraBold'}, DetalhesParadaStyles.logoTexto]}>RotaBus</Text>
            </View>

            <View style={DetalhesParadaStyles.nomeDaParadaContainer}>
                <Text style={[DetalhesParadaStyles.textoNomeDaParada, {fontFamily: 'PoppinsMedium'}]}>{name}</Text>
            </View>

            <TouchableOpacity style={DetalhesParadaStyles.favoritoContainer}  onPress={selecionarFavorito}>
                <Image 
                    source={favorito ? favoritoSelecionado : favoritoNaoSelecionado}
                    style={DetalhesParadaStyles.favorito}
                   
                    />
            </TouchableOpacity>
        </View>
        <View style={DetalhesParadaStyles.containerBase}>
            <View style={DetalhesParadaStyles.onibusImagemContainer}>
               <Image source={onibusIcone} style={DetalhesParadaStyles.onibusImagem}></Image>
            </View>
            <View style={DetalhesParadaStyles.relogioImagemContainer}>
               <Image source={relogioIcone} style={DetalhesParadaStyles.relogioImagem}></Image>
            </View>

        </View>
    </View>    
  )
}
