import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import paradaIcon from '../assets/images/paradaIcon.png';
import localizacaoUsuarioIcon from '../assets/images/localizacaoUsuarioIcon.png';
import { useNavigation } from '@react-navigation/native';

const Map = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [customMarkers, setCustomMarkers] = useState([]);

  const paradas = [
    {
      name: 'Av. Presidente Vargas - Em frente ao Cecy Leite Costa',
      latitude: -28.2690308,
      longitude: -52.3896466, // Corrigido para longitude real
    },
    {
      name: 'Av. Presidente Vargas - Em frente ao CEPV',
      latitude: -28.2664509,
      longitude: -52.3964319, // Corrigido para longitude real
    },
  ];

  // Função para obter a localização atual
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permissão de localização negada');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const initialRegion = {
    latitude: location ? location.coords.latitude : -28.2612,
    longitude: location ? location.coords.longitude : -52.4083,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };


  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        style={styles.map}
        region={initialRegion}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Você está aqui"
            image={localizacaoUsuarioIcon}
          />
        )}

        {paradas.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={paradaIcon}
            onPress={() => navigation.navigate('DetalhesParada', { name: item.name })}
          />
        ))}
        
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
