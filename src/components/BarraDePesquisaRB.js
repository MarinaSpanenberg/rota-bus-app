import { Text, TouchableOpacity, StyleSheet, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import { cores, EstilosGlobais } from '../pages/styles/EstilosGlobais'
import { Searchbar, Button } from 'react-native-paper';

export default function BarraDePesquisaRB({placeholder}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.view}>
    <TextInput
      placeholder={placeholder}
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.barra}
      autoComplete='false'
    />
    </View>
  );
};

const styles = StyleSheet.create({
view: {
  alignItems: 'center',
  justifyContent: 'center',  
  width: "100%",
  marginTop: 120,
},
barra: {
  marginTop: 10,
  width: "80%",
  height: 40,
  borderRadius: 5,
  backgroundColor: cores.branco,
}
});

