import React from 'react'
import InputRB from '../components/InputRB';
import { Image, Text, View } from 'react-native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import CadastroOnibusStyle from './styles/CadastroOnibusStyle';
import BotaoRB from '../components/BotaoRB';
import passageirosIcone from '../assets/images/passageirosIcone.png';
import empresaIcone from '../assets/images/empresaIcone.png';
import { useNavigation } from '@react-navigation/native';
import EscolherImagemRB from '../components/EscolherImagemRB';


export default function CadastroOnibus() {

    const navigation = useNavigation();

  return (
    <View style={CadastroOnibusStyle.container}>
        
        <BotaoVoltarOuSairRB acao={() => navigation.goBack()} />

        <View style={CadastroOnibusStyle.logoContainer}>
               <Image source={ empresaIcone} style={CadastroOnibusStyle.logo} />
               <Text style={[CadastroOnibusStyle.tipoUsuarioTexto,{fontFamily: 'Poppins'}]}>{'Cadastro de Ônibus'}</Text>
            </View>

        <View style={CadastroOnibusStyle.botoesContainer}>    
        
                <InputRB 
                        titulo={'Linha'}
                        textoCustomEstilo={[CadastroOnibusStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={CadastroOnibusStyle.botoes}>
                </InputRB>
           
                <InputRB 
                        titulo={'Paradas'}
                        textoCustomEstilo={[CadastroOnibusStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={CadastroOnibusStyle.botoes}>
                </InputRB>

                <InputRB 
                        titulo={'Placa'}
                        textoCustomEstilo={[CadastroOnibusStyle.textoBotoes, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={CadastroOnibusStyle.botoes}>
                </InputRB>
            </View>

            <EscolherImagemRB></EscolherImagemRB>

            <View style={CadastroOnibusStyle.containerBotaoSalvar}>
                <BotaoRB 
                        titulo={'Salvar alterações'}
                        textoCustomEstilo={[CadastroOnibusStyle.textoBotaoSalvar, {fontFamily: 'PoppinsMedium'}]}
                        botaoCustomEstilo={CadastroOnibusStyle.botaoSalvar}>
                </BotaoRB>
            </View>
    </View>
  )
}
