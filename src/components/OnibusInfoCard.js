import { Text, View } from "react-native";
import React from "react";

export default function OnibusInfoCard({ linha, empresa }) {
  return (
    <View style={InfoCardStyles.container}>
      <Text style={[InfoCardStyles.label, ]}>{linha} </Text>
      <Text>{empresa}</Text>
      <Text style={[InfoCardStyles.info, info ? {} : InfoCardStyles.infoNotInformed, {textTransform: 'capitalize'}]}>
        {info ? info : "Não informado"}
      </Text>
    </View>
  );
}