import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redview} />
      <View style={styles.blueview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redview:{
    flex:1,
    backgroundColor:"red"
  },
  blueview:{
    flex:2,
    backgroundColor:"blue"
  }
});
