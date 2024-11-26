import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
    },
    logoContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        overflow: 'hidden'
    },
    logo : {
        height: 125,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    descriptionContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionText: {
        color: cores.azul,
        fontSize: tamanhoFontes.media,
        textAlign: 'center'
    },
    descriptionBoldText: {
        fontWeight: 'bold',
        color: cores.azul,
        fontSize: tamanhoFontes.media,
        textAlign: 'center'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 5,
    },
    input: {
        paddingLeft: 10,
        width: "90%",
    },
    recuperarSenhaContainer: {
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    recuperarSenhaText: {
        color: cores.azul,
        fontSize: tamanhoFontes.pequena
    },
    recuperarSenhaBoldText: {
        color: cores.azul,
        fontSize: tamanhoFontes.pequena,
        fontWeight: 'bold'
    },
    containerBotao: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 30,
    },
    botao: {
        width: "70%",
        backgroundColor: cores.laranja,
        flexDirection: 'row',
        marginBottom: 5,
        paddingLeft: 10,
    },
    textoBotao: {
        color: cores.branco,
    },
    senhaIcon:{
        color: cores.cinza,
    }
});