import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from 'react-native';

import Result from "./src/Screens/Result";
import Login from "./src/Screens/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}