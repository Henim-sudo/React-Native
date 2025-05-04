import { StyleSheet } from 'react-native'


import React from 'react'

//themed components

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const Create = () => {
  return (
   <ThemedView style={styles.container}>

    <ThemedText title={true} style={styles.linkText}>
        Added To Marvel
    </ThemedText>
    <Spacer />
   </ThemedView>
  )
}

export default Create

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
        width: 300,
        height: 350,
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
        fontSize: 30,
      },
}) 