import React from 'react';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';

  
export default function FontLoader({ children }) {
    const [fontsLoaded] = useFonts({
        'Poppins': require('../assets/fonts/PoppinsRegular.ttf'),
        'PoppinsMedium': require('../assets/fonts/Poppins-Medium.ttf'),
        'PoppinsSemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'PoppinsBold': require('../assets/fonts/Poppins-Bold.ttf'),
        'PoppinsExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),

      });
      
      if (!fontsLoaded) {
        console.log('Fontes carregando...');
        
        return <Text>Carregando...</Text>; 
      }

      return(
        <View style={{flex: 1}}>
            {children}
        </View>
      );
}