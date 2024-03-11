import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>로그인</Text>
      <Button title="Go to Result" onPress={() => navigation.navigate('Result')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
