import { Keyboard, StyleSheet , Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router';
import { useState } from 'react';
import { Colors } from '../../constants/Colors';
import React from 'react'

//themed components

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput';
import { useUser } from '../../hooks/useUser';


const Register = () => {
   const [email , setEmail] = useState('')
   const [password , setPassword] = useState('')
   const [error, setError] = useState(null)

   const {  register} = useUser()

  const handleSubmit = async() => {
    setError(null)
    try{
      await register(email,password)
    }catch(error){
         setError(error.message)
    }
}
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
   <ThemedView style={styles.container}>  

    <Spacer /> 

    <ThemedText title={true} style={styles.linkText}>
        Register Yourself
    </ThemedText>
    <Spacer/>
    <ThemedTextInput 
    style = {{width: '80%' , marginBottom: 2}}
    placeholder='Email'
    keyboardType="email-address"
    onChangeText={setEmail}
    value={email}
    />
    <Spacer />
     <ThemedTextInput 
    style = {{width: '80%' , marginBottom: 2}}
    placeholder='Password'
    onChangeText={setPassword}
    value={password}
    secureTextEntry
    />
    <Spacer />
    <ThemedButton onPress={handleSubmit}>
  <Text style={{color: '#f2f2f2'}}>Register</Text>
   </ThemedButton>

    <Spacer/>
    {error && <Text style={styles.error}>{error}</Text>}
    <Spacer height={50} />
    <Link href='/login'>
    <ThemedText style={{textAlign:'center' }}>
        Alreadey have an account :- Login 
    </ThemedText>
    </Link>
   </ThemedView>
   </TouchableWithoutFeedback>
  )
  
}


export default Register

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
       error:{
              color: Colors.warning,
              padding: 10,
              backgroundColor:'#f5c1c8',
              borderColor: Colors.warning,
              borderWidth: 1,
              borderRadius: 6,
              marginHorizontal: 10,
          }
}) 