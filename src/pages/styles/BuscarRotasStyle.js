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
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 400,
        top: 380,
        backgroundColor: cores.azul,
        justifyContent:'center',
    },
    pesquisaTexto: {
        color: cores.branco,
        fontSize: tamanhoFontes.intermediaria,
        padding: 10,
    }
});