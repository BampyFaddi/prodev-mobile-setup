import { View, Text, Image, StyleSheet, ScrollView, Button, Alert } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Task 2</Text>
      <Text style={styles.subtitle}>Building with React Native Components</Text>

      <Image
        source={{
          uri: 'https://picsum.photos/300',
        }}
        style={styles.image}
      />

      <Text style={styles.paragraph}>
        This screen demonstrates use of common React Native components such as Text, Image,
        View, ScrollView, Button, and StyleSheet. The layout adjusts dynamically to fit
        different screen sizes.
      </Text>

      <Button title="Click Me" onPress={() => Alert.alert('Button Pressed!')} />

      <Text style={styles.footer}>Developed by: Geoffrey Mutisya </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 10,
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginVertical: 15,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4b5563',
    marginBottom: 15,
  },
  footer: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 20,
  },
});
