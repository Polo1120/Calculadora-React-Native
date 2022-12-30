import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  color?: string;
  BotonAncho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  title,
  color = '#2D2D2D',
  BotonAncho = false,
  accion 
}: Props) => {
  
  
  return (
    <TouchableOpacity
      onPress={()=> accion(title)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: BotonAncho ? 179 : 80,
        }}>
        <Text
          style={{
            ...styles.botonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
export default BotonCalc;
