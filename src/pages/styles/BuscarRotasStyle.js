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
    pesquisaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        top: 350,
        bottom: 500,
        backgroundColor: cores.azul,
    },
    pesquisaTexto: {
        color: cores.branco,
        fontSize: tamanhoFontes.media,
        marginLeft: 10,
    }
});