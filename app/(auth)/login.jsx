import { StyleSheet , Pressable , Text} from 'react-native'
import { Link } from 'expo-router';
import {Colors} from '../../constants/Colors' 

import React from 'react'

//themed components

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

  const handleSubmit = () => {
       console.log('Login Form Submitted')
  }
  return (
   <ThemedView style={styles.container}>

    <Spacer />

    <ThemedText title={true} style={styles.linkText}>
        Login To Your Account
    </ThemedText>
     <Spacer />
   <ThemedButton onPress={handleSubmit}>
  <Text style={{color: '#f2f2f2'}}>Login</Text>
   </ThemedButton>

    <Spacer height={50} />
    <Link href='/register'>
    <ThemedText style={{textAlign:'center' }}>
        Register Instead
    </ThemedText>
    </Link>
   </ThemedView>
  )
}

export default Login

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
      btn: {
        backgroundColor: Colors.primary,
        padding:15,
        borderRadius: 5,
      },
      pressed: {
        opacity: 0.8
      }
}) 