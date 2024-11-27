import { StyleSheet } from "react-native";

export const cores = {
    azul: '#130E51',
    branco: '#FFFFFF',
    cinza: '#C1C1C1',
    laranja: '#ED8B03',
    preto: '#000000'
};

export const tamanhoFontes = {
    pequena: 14,
    media: 16,
    intermediaria: 27,
    grande: 40,
};

export const EstilosGlobais = StyleSheet.create({
    botaoPesquisar: {
        alignItems: "center",
        justifyContent: "center",
        width: '90%',
        height: 64,
        borderRadius: 50,
        backgroundColor: cores.azul,
        elevation: 7,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 32
    },
    textoBotaoPesquisar: {
        color: cores.branco,
        fontSize: tamanhoFontes.media,
    },
    botaoVoltar: {
        position: 'absolute',
        top: 50,
        padding: 10,
        left: 10,
    },
    botaoVoltarImagem: {
        width: 50,
        height: 50,
    },
    botao: {
        alignItems: "center",
        justifyContent: "center",
        width: '90%',
        height: 64,
        borderRadius: 50,
        borderColor: cores.preto,
        borderWidth: 1,
        elevation: 7,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    textoBotao: {
        fontSize: tamanhoFontes.media,
    },
    infoBotao: {
        fontSize: tamanhoFontes.media,
    },
    textoInput: {
        alignSelf: 'flex-start',
        fontSize: tamanhoFontes.pequena,
        color: cores.azul,
    },
    input: {
        width: "90%",
        height: 42,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 24,
        backgroundColor: cores.branco,
    },
    caixaTexto: {
        paddingLeft: 10,
        flex: 1,
        height: '100%',
        fontSize: tamanhoFontes.media,
    },
    favoritoItem: {
        width: '100%',
        alignItems: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: cores.cinza
      },
      favoritoText: {
        color: cores.azul,
        fontFamily: 'PoppinsMedium'
      }
});