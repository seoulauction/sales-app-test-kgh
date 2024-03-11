import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, StyleSheet } from 'react-native';

import Sales from "./src/Screens/Sales";
import Customer from "./src/Screens/Customer";
import Result from "./src/Screens/Result";
import Contract from "./src/Screens/Contract";
import Schedule from "./src/Screens/Schedule";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Contract">
        <Stack.Screen name="Sales" component={Sales} />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="Contract" component={Contract} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
      
    </NavigationContainer>
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