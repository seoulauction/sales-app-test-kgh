import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { styled } from 'nativewind';

export default function Login({ navigation }) {
  return (
    <View className="bg-red">
      <Text className="">로그인</Text>
      <Button title="Go to Result" onPress={() => navigation.navigate('Result')} />
    </View>
  );
}
