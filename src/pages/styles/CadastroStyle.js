import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        backgroundColor: cores.azul,
    },
    ouTexto: {
        color: cores.branco,
        fontSize: tamanhoFontes.media
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 120,
        marginBottom: 5,
        color: cores.branco,
    },
    input: {
        width: "100%",
    },
    inputNaoSelecionado: {
        backgroundColor: cores.cinza,
    },
    textoInput: {
        color: cores.branco,
    },
    textoInputNaoSelecionado: {
        color: cores.cinza,
    },
    containerBotao: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
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