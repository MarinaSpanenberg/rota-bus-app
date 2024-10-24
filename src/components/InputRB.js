import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { EstilosGlobais } from "../pages/styles/EstilosGlobais";

export default function InputRB({ children, titulo, ...rest }) {
  return (
    <View>
    <Text>{titulo}</Text>
    <View style={EstilosGlobais.input}>
      
      <TextInput style={EstilosGlobais.caixaTexto} {...rest} />
      {children}
    </View>
    </View>
  );
}

