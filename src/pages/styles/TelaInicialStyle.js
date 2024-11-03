import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logoContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        marginTop: 100,
        justifyContent: 'center',
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
        fontSize: tamanhoFontes.grande,
        textAlign: 'center'
    },
    descriptionBoldText: {
        fontWeight: 'bold',
        color: cores.azul,
        fontSize: tamanhoFontes.grande,
        textAlign: 'center'
    },
    lineText: {
        color: cores.azul,
        fontSize: tamanhoFontes.media,
        textAlign: 'center'
    },
    containerBotao: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 10,
    },
    botaoEmpresa: {
        backgroundColor: cores.laranja,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoBotaoEmpresa: {
        color: cores.branco,
        flexDirection: 'row',
    },
    infoBotaoEmpresa: {
        color: cores.branco,
        fontWeight: 'bold'
    },
    botaoPassageiro: {
        backgroundColor: cores.branco,
    },
    textoBotaoPassageiro: {
        color: cores.preto,
        flexDirection: 'row',
    },
    infoBotaoPassageiro: {
        color: cores.preto,
        fontWeight: 'bold'
    },
    registerContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerText: {
        color: cores.azul,
        fontSize: tamanhoFontes.pequena
    },
    registerBoldText: {
        color: cores.azul,
        fontSize: tamanhoFontes.pequena,
        fontWeight: 'bold'
    }
});