import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function Result({ navigation }) {
  return (
    <View>
      <Text>실적</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
