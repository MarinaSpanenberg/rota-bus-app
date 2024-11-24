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
    estrelaContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    estrelaImagem: {
        height: 110,
        right: -30,
        padding: 20,
        resizeMode: 'contain'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
        marginBottom: 10,
    },
    button: {
        width: "50%",
        height: 39,
        backgroundColor: cores.branco,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: cores.preto,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        fontSize: tamanhoFontes.media,
        color: cores.preto,
      },
      buttonPressionado: {
        backgroundColor: cores.cinza,
      },
      buttonPressionadoTexto: {
        color: cores.laranja,
      }
});