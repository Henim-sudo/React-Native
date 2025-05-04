import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Book = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Ticket Booked</ThemedText>
      
      <Spacer/>
      <ThemedView style={styles.card}>

      <Link href="/">
      <ThemedText style={styles.card} title={true}>
        Back Home
        </ThemedText>

      </Link>
      
      </ThemedView>

    </ThemedView>
    
  )
}

export default Book

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    img:{
     marginVertical: 20,
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px 4px rgba(0,0,0,0.7)',
        marginTop: 5,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color:'black'
    }
})
