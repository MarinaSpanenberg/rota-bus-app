import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: cores.azul,
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo : {
        height: '30%',
        resizeMode: 'contain',
    },
    tipoUsuarioTexto: {
        color: cores.branco,
        fontSize: tamanhoFontes.pequena,
    },
    botoesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: cores.branco,
    },
    botoes: {
        alignItems: 'center',    
        backgroundColor: cores.branco,
        marginBottom: 15,
    },
    textoBotoes: {
        color: cores.branco,
    },
    containerBotaoSalvar: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 40,
    },
    botaoSalvar: {
        width: "70%",
        backgroundColor: cores.laranja,
        marginBottom: 5,
    },
    textoBotaoSalvar: {
        color: cores.branco,
    },
});