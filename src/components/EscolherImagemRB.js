import React, { useState } from 'react';
import { View, Text, Image, Alert, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../services/supabase'; // A instância do Supabase
const openCamera = async () => {

  const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");

    } else {
      const result = await ImagePicker.launchImageLibraryAsync();
  
      if (!result.canceled) {
        uploadImage(result.uri)
      }

      return result;
    }
  }
const useImageUpload = () => {
  const [imageUri, setImageUri] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos da permissão para acessar suas imagens!');
      console.log(status);
      return;
    }
    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
      uploadImage(result.uri); 
    }
  };

  const uploadImage = async (uri) => {
    if (!uri) {
      alert('Você precisa selecionar uma imagem primeiro!');
      return;
    }

    const fileExt = uri.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;

    setUploading(true);

    try {
      const file = {
        uri,
        name: fileName,
        type: `image/${fileExt}`,
      };

      const { data, error } = await supabase.storage
        .from('images') // Nome do bucket
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) throw error;

      const publicUrl = supabase.storage
        .from('images')
        .getPublicUrl(filePath).publicURL;

      setImageUrl(publicUrl);
      alert('Imagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error.message);
      alert('Não foi possível enviar a imagem.');
    } finally {
      setUploading(false);
    }
  };

  return {
    imageUri,
    uploading,
    imageUrl,
    pickImage,
  };
};

export default function EscolherImagemRB() {
  const { imageUri, uploading, imageUrl, pickImage } = useImageUpload();

  return (
    <View>

      <Button title="Escolher Imagem" onPress={pickImage} />

      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200, marginVertical: 10 }}
        />
      )}

      {uploading && <Text>Enviando...</Text>}

      {imageUrl && (
        <View>
          <Text>Imagem enviada com sucesso!</Text>
          <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
        </View>
      )}
    </View>
  );
}
