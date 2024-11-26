import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    containerGeral: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        top: 100
    },
    tituloTexto: {
        color: cores.branco,
        fontSize: tamanhoFontes.media,
        fontFamily: 'PoppinsExtraBold'
    },
    containerTopo: {
        width: '100%',
        height: '25%',
        backgroundColor: cores.azul,
    },
    containerBase: {
        width: '100%',
        height: '75%',
        flexDirection: 'row',
        backgroundColor: cores.branco,
    },
    favoritoItem:{
        width: '100%',
        alignItems: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: cores.cinza,
    },
    deletarBotaoContainer: {
        width: '100%',
    },
    deletarBotao: {
        height: 20,
        resizeMode: 'contain' 
    }
});