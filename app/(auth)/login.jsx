import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';
import { useUser } from '../../contexts/UserContext'; 


// Themed components
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { login } = useUser()

    const handleSubmit = async () => {
      setError(null)

       try{  
           await login(email,password)
          }catch(error){
             setError(error.message)
          }
         
        console.log('Login Form Submitted:', email, password);
        console.log('Current user:', user);  
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText title={true} style={styles.linkText}>
                    Login To Your Account
                </ThemedText>
                <Spacer />
                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 2 }}
                    placeholder='Email'
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />
                <Spacer />
                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 2 }}
                    placeholder='Password'
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <Spacer />
                <ThemedButton onPress={handleSubmit}>
                    <Text style={{ color: '#f2f2f2' }}>Login</Text>
                </ThemedButton>

                <Spacer/>
                {error && <Text style={styles.error}>{error}</Text>}
                <Spacer height={50} />
                <Link href='/register'>
                    <ThemedText style={{ textAlign: 'center' }}>
                        Don't have Account?
                        Register Instead
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
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
});
