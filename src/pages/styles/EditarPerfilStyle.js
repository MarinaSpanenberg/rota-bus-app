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
        marginBottom: 5,
        resizeMode: 'contain',
    },
    tipoUsuarioTexto: {
        color: cores.branco,
        fontSize: tamanhoFontes.pequena,
    },
    botoesContainer: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },
    botoes: {
        width: '70%',
        alignItems: 'center',    
        backgroundColor: cores.branco,
        marginBottom: 15,
    },
    textoBotoes: {
        color: cores.preto,
        flexDirection: 'row',
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