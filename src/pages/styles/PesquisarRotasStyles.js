import { StyleSheet } from "react-native";
import { cores, tamanhoFontes } from "./EstilosGlobais";

export default StyleSheet.create({
    containerGeral: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTopo: {
        width: '100%',
        height: '25%',
        backgroundColor: cores.azul,
    },
    containerBase: {
        width: '100%',
        height: '75%',
        backgroundColor: cores.branco,
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        padding: 10,
        right: 10,
    },
    logoTexto : {
        color: cores.laranja,
        fontSize: tamanhoFontes.intermediaria,
    },
});