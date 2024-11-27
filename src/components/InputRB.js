import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { EstilosGlobais } from "../pages/styles/EstilosGlobais";

export default function InputRB({ children, titulo, inputCustomStyle, textCustomStyle, ...rest }) {
  return (
    <View>
    <Text style={[EstilosGlobais.textoInput, textCustomStyle]}>{titulo}</Text>
    <View style={[EstilosGlobais.input, inputCustomStyle]}>
      
      <TextInput style={[EstilosGlobais.caixaTexto]} {...rest} />
      {children}
    </View>
    </View>
  );
}

