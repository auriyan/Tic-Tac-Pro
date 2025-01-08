import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <View style={styles.container}>
        <Text style={styles.title}>404: Page Not Found</Text>
        <Text style={styles.description}>
          We can’t find what you’re looking for.
        </Text>
        <Link href="/" style={styles.link}>
          <Text>Go back home</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});