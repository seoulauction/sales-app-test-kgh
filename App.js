import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup } from '@rneui/themed';
import React, {useState} from 'react'

export default function App() {

const [selectedIndex, setSelectedIndex] = useState(0);
const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3, 4, 5, 6]);
  return (
    <View style={styles.container}>
      <Text>서울옥션 영업관리 App</Text>
      <StatusBar style="auto" />
      <ButtonGroup
      buttons={['로그인', '캘린더', '영업', '고객', '계약', '실적']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
