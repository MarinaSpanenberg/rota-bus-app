import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    containerGeral: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTopo: {
        width: '100%',
        height: '25%',
        backgroundColor: cores.azul,
    },
    containerBase: {
        width: '100%',
        height: '75%',
        backgroundColor: cores.branco,
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        padding: 10,
        right: 10,
    },
    logoTexto : {
        color: cores.laranja,
        fontSize: tamanhoFontes.intermediaria,
    },
    favoritoContainer: {
        width: '100%',
    },
    favorito: {
        height: 20,
        resizeMode: 'contain'   
    },
    tituloContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        top: 130
    },
    tituloTexto: {
        color: cores.branco,
        fontSize: tamanhoFontes.media,
        fontFamily: 'PoppinsExtraBold'
    },
});