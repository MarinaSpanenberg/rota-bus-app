import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botoesTopoContainer: {
        position: 'absolute',
        top: 50,
        padding: 10,
        right: 10,

    },
    texto : {
        color: cores.azul,
        fontSize: tamanhoFontes.intermediaria,
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