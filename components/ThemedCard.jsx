import {StyleSheet, View, useColorScheme  } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View 
      style={[{ backgroundColor: theme.uiBackground }, style.card , style]} 
      {...props}
    />
   
  )
}

export default ThemedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 300,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: 'hsla(0, 91.8%, 42.9%, 0.7)',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    boxShadow: '4px 4px 4px rgba(0,0,0,0.7)',
  },
  card1: {
    backgroundColor: 'hsla(0, 91.8%, 42.9%, 0.7)',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    boxShadow: '4px 4px 4px rgba(0,0,0,0.7)',
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

