import { StyleSheet, Text } from 'react-native';
import { useUser } from '../../hooks/useUser';

import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';

const Profile = () => { 
  const { logout, user } = useUser();

  // Check if user data is still being fetched or not available
  if (!user) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.linkText}>
          Person...
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.linkText}>
        {user.email}
      </ThemedText>
      <Spacer />
      <ThemedText>Time to Start Reading Comics...</ThemedText>
      <Spacer />
      <ThemedButton onPress={logout}>
        <Text style={{ color: '#f2f2f2' }}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

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
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
