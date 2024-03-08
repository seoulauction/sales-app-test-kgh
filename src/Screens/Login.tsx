import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function Login({ navigation }) {
  return (
    <View>
      <Text>로그인</Text>
      <Button title="Go to Result" onPress={() => navigation.navigate('Result')} />
    </View>
  );
}
