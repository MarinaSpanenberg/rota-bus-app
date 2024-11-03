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
        marginTop: 100,
        marginBottom: 5,
        color: cores.branco,
    },
    input: {
        paddingLeft: 10,
        width: "90%",
    },
    textoInput: {
        color: cores.branco,
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
});