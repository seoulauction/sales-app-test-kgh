import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import React, { useState } from 'react';

export default function Result({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Text>실적</Text>
      </View>
      <View style={styles.btm}>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0 }}
          type="outline"
          onPress={() => navigation.navigate('Sales')}
        >
          일정
        </Button>
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
          onPress={() => navigation.navigate('Sales')}
        >
          고객
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0 }}
          type="outline"
          onPress={() => navigation.navigate('Sales')}
        >
          계약
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0 }}
          type="outline"
          onPress={() => navigation.navigate('Sales')}
        >
          실적
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
    backgroundColor: 'pink',
    height: 'auto',
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
