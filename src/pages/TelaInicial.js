import { BackHandler, Image, Text, TouchableOpacity, View } from 'react-native';
import TelaInicialEstilo from './styles/TelaInicialStyle';
import BotaoRB from '../components/BotaoRB';
import logo from '../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native';
import BotaoVoltarOuSairRB from '../components/BotaoVoltarOuSairRB';
import { useTipoUsuario } from '../context/ContextoDoUsuario';

export default function TelaInicial({ navigation }) {
    const {tipoUsuario, setTipoUsuario} = useTipoUsuario();

    const navegarParaLogin = (tipo) => {
        setTipoUsuario(tipo);
        navigation.navigate('Login', { tipoUsuario: tipo }); 
    };

    const navegarParaCadastro = () => {
        navigation.navigate('Cadastro')
    };

    const nav = useNavigation();

    return (
        <View style={TelaInicialEstilo.container}>

            <BotaoVoltarOuSairRB 
                telaInicial={true}
                acao={() => BackHandler.exitApp()} />

            <View style={TelaInicialEstilo.logoContainer}>
               <Image source={logo} style={TelaInicialEstilo.logo}></Image>
            </View>
            <View style={TelaInicialEstilo.descriptionContainer}>
                <Text style={TelaInicialEstilo.descriptionText}>Encontre a {"\n"}melhor <Text style={TelaInicialEstilo.descriptionBoldText}>Rota</Text></Text>
                <Text style={TelaInicialEstilo.lineText}>Ajudando você a chegar ao {"\n"}seu destino</Text>
            </View>
            <View style={TelaInicialEstilo.containerBotao}>
                <BotaoRB 
                    titulo={'Entrar como '}
                    info={'Passageiro'}
                    textoCustomEstilo={TelaInicialEstilo.textoBotaoPassageiro}
                    infoCustomEstilo={TelaInicialEstilo.infoBotaoPassageiro}
                    botaoCustomEstilo={TelaInicialEstilo.botaoPassageiro}
                    acao={() => navegarParaLogin('Passageiro')} />
                <BotaoRB 
                    titulo={'Entrar como '}
                    info={'Empresa'}
                    textoCustomEstilo={TelaInicialEstilo.textoBotaoEmpresa}
                    infoCustomEstilo={TelaInicialEstilo.infoBotaoEmpresa}
                    botaoCustomEstilo={TelaInicialEstilo.botaoEmpresa}
                    acao={() => navegarParaLogin('Empresa')} >
                </BotaoRB>
            </View>  
            <View style={TelaInicialEstilo.registerContainer}>
                <TouchableOpacity onPress={() => navegarParaCadastro()}>
                    <Text style={TelaInicialEstilo.registerText}>Não possui uma conta?
                        <Text style={TelaInicialEstilo.registerBoldText}> Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>      
    );
}