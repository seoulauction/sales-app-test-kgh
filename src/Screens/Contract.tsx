import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from '@rneui/themed';
import React, { useState } from 'react';

export default function Contract({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Card>
          <Text style={styles.title}>김선우 작가 작품 위탁</Text>
          <Text>2024.06.01</Text>
          <Text>위탁 대금 상세</Text>
          <Text>고객 정보</Text>
          <Button size="sm" type="clear">
            <Text style={styles.more}>더보기</Text>
          </Button>
        </Card>
        <Card>
          <Text style={styles.title}>장마리아 작품 의뢰</Text>
          <Text>2024.06.01</Text>
          <Text>위탁 대금 상세</Text>
          <Text>고객 정보</Text>
          <Button size="sm" type="clear">
            <Text style={styles.more}>더보기</Text>
          </Button>
        </Card>
        <Card>
          <Text style={styles.title}>김선우 작가 작품 위탁</Text>
          <Text>2024.06.01</Text>
          <Text>위탁 대금 상세</Text>
          <Text>고객 정보</Text>
          <Button size="sm" type="clear">
            <Text style={styles.more}>더보기</Text>
          </Button>
        </Card>
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
    backgroundColor: '#F2F7FF',
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
  more: {
    color: '#1A6DFF',
    fontWeight: '400',
  },
  title: {
    color: '#141719',
    fontSize: 20,
    paddingBottom: 5,
  },
});
