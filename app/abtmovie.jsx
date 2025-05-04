import { StyleSheet, Text, View , useColorScheme} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'



const Movie = () => {
    
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={styles.title} title={true}>Venom: The Last Dance is a 2024 American superhero film written and directed by Kelly Marcel, which features the Marvel Comics character Venom. The sequel to Venom: Let There Be Carnage (2021), it is the fifth film in Sony's Spider-Man Universe (SSU) and the third and final film in the Venom trilogy. The film stars Tom Hardy as Eddie Brock and Venom, alongside Chiwetel Ejiofor, Juno Temple, Rhys Ifans, Stephen Graham, Peggy Lu, and Alanna Ubach in supporting roles. In the film, Eddie and Venom are on the run from both of their worlds.</ThemedText>
      
      <ThemedView style={styles.card}>
      <Link href="/">
      <ThemedText style={styles.title1} title={true}>
        Back Home
      </ThemedText>
      </Link>
      </ThemedView>

    </ThemedView> 
    
  )
}

export default Movie

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
    title1: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black'
  },
    img:{
     marginVertical: 20,
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px 4px rgba(0,0,0,0.7)',
        marginTop: 60,
        marginBottom: 10,
    }
})
