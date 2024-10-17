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
    grande: 40,
};

export const EstilosGlobais = StyleSheet.create({
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
    },
    caixaTexto: {
        paddingLeft: 10,
        width: "90%",
        height: 50,
        fontSize: tamanhoFontes.media,
    }
   
});