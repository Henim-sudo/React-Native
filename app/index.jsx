import { StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} >Tom Hardy</ThemedText>

      <ThemedLogo style={styles.img} />

      <Spacer height={5} />
      <ThemedText style={styles.title} title={true}>
        Venom : The Last Dance
        </ThemedText>

      <Spacer height={20}/>
      <ThemedText  >
        Releasing on October 25, 2024
      </ThemedText>

      <Spacer/>
      <ThemedView style={styles.card}>

        <Link href="/login">
          <ThemedText style={styles.linkText}>
            Login Page
            </ThemedText>

        </Link>
      </ThemedView>

      
      <ThemedView style={styles.card1}>

        <Link href="/register">
        <ThemedText style={styles.linkText}>
          Register Page
        </ThemedText>
        </Link>
      </ThemedView>

      <ThemedView style={styles.card1}>

        <Link href="/profile">
        <ThemedText style={styles.linkText}>
          Profile Page
        </ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
};

export default Home;

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
