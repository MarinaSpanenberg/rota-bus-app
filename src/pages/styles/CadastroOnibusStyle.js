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
    },
    botoes: {
        width: '70%',
        alignItems: 'center',    
        backgroundColor: cores.branco,
    },
    textoBotoes: {
        color: cores.branco,
        flexDirection: 'row',
    },
    textoBotao: {
        color: cores.preto,
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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '80%',
        padding: 20,
        borderRadius: 10,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    closeButton: {
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});