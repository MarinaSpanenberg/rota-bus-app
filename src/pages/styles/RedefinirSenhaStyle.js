import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    logo : {
        height: 125,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    funcionalidadePaginaContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    funcionalidadePaginaText: {
        marginBottom: 20,
        color: cores.azul,
        fontSize: tamanhoFontes.grande,
        textAlign: 'center'
    },
    funcionalidadePaginaBoldText: {
        fontWeight: 'bold',
        color: cores.azul,
        fontSize: tamanhoFontes.grande,
        textAlign: 'center'
    },
    passosText: {
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
    voltarLoginContainer: {
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    voltarLoginText: {
        color: cores.azul,
        fontSize: tamanhoFontes.pequena
    },
    voltarLoginBoldText: {
        color: cores.azul,
        fontSize: tamanhoFontes.pequena,
        fontWeight: 'bold'
    },
});