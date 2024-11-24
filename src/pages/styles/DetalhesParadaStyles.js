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
    nomeDaParadaContainer: {
        position: 'absolute',
        top: 120,
        padding: 10,
        alignSelf: 'center'
    },
    textoNomeDaParada: {
        color: cores.branco,
    },
    favoritoContainer: {
        position: 'absolute',
        width: '100%',
        top: 150,
    },
    favorito: {
        height: 20,
        marginBottom: 10,
        resizeMode: 'contain'    
    },
    onibusImagemContainer: {
        position: 'absolute',
        padding: 20,
        right: -40,
    },
    onibusImagem: {
        height: 40,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    relogioImagemContainer: {
        position: 'absolute',
        padding: 20,
        left: -40,
    },
    relogioImagem: {
        height: 40,
        marginBottom: 10,
        resizeMode: 'contain'
    },
});