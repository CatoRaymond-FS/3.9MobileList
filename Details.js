import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StyleSheet, Text, View, Button } from 'react-native';
import styles from './Appstyles';

export default function Details({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>Details</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')}/>

      </SafeAreaView>
    );
}

