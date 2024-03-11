import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from '@rneui/themed';
import React, { useState } from 'react';

export default function Sales({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Text>영업 화면</Text>
      </View>
      <View style={styles.btm}>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0 }}
          type="outline"
          onPress={() => navigation.navigate('Sales')}
        >
          영업
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0 }}
          type="outline"
          onPress={() => navigation.navigate('Customer')}
        >
          고객
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0 }}
          type="outline"
          onPress={() => navigation.navigate('Contract')}
        >
          계약
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0 }}
          type="outline"
          onPress={() => navigation.navigate('Result')}
        >
          실적
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0 }}
          type="outline"
          onPress={() => navigation.navigate('Schedule')}
        >
          일정
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  wrapContainer: {
    padding: 10,
    height: 100,
  },
  btm: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20,
    flex: 1,
  },
});
