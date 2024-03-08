import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup } from '@rneui/themed';
import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3, 4, 5, 6]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
      <ButtonGroup
        buttons={['로그인', '캘린더', '영업', '고객', '계약', '실적']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={{ marginBottom: 50, height: 80 }}
      />
    </View>
    // <NavigationContainer></NavigationContainer>
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
