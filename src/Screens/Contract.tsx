import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Card, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { Icon } from '@rneui/themed';

export default function Contract({ navigation }) {
  return (
    <View>
      <ScrollView style={styles.container}>
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
      </ScrollView>

      <View style={styles.btm}>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0, backgroundColor: '#1A6DFF' }}
          type="outline"
          onPress={() => navigation.navigate('Sales')}
        >
          <Icon
            color="#fff"
            containerStyle={{}}
            disabledStyle={{}}
            iconStyle={{ marginRight: 5, marginTop: 3 }}
            name="insert-chart"
            onLongPress={() => console.log('onLongPress()')}
            onPress={() => console.log('onPress()')}
            size={20}
            type="material"
          />
          <Text style={styles.gnbTxt}>영업</Text>
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0, backgroundColor: '#1A6DFF' }}
          type="outline"
          onPress={() => navigation.navigate('Customer')}
        >
          <Icon
            color="#fff"
            containerStyle={{}}
            disabledStyle={{}}
            iconStyle={{ marginRight: 5, marginTop: 3 }}
            name="people"
            onLongPress={() => console.log('onLongPress()')}
            onPress={() => console.log('onPress()')}
            size={20}
            type="material"
          />
          <Text style={styles.gnbTxt}>고객</Text>
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0, backgroundColor: '#1A6DFF' }}
          type="outline"
          onPress={() => navigation.navigate('Contract')}
        >
          <Icon
            color="#fff"
            containerStyle={{}}
            disabledStyle={{}}
            iconStyle={{ marginRight: 5, marginTop: 3 }}
            name="edit-document"
            onLongPress={() => console.log('onLongPress()')}
            onPress={() => console.log('onPress()')}
            size={20}
            type="material"
          />
          <Text style={styles.gnbTxt}>계약</Text>
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0, backgroundColor: '#1A6DFF' }}
          type="outline"
          onPress={() => navigation.navigate('Result')}
        >
          <Icon
            color="#fff"
            containerStyle={{}}
            disabledStyle={{}}
            iconStyle={{ marginRight: 5, marginTop: 3 }}
            name="format-list-numbered"
            onLongPress={() => console.log('onLongPress()')}
            onPress={() => console.log('onPress()')}
            size={20}
            type="material"
          />
          <Text style={styles.gnbTxt}>실적</Text>
        </Button>
        <Button
          size="lg"
          containerStyle={{ borderRadius: 0 }}
          buttonStyle={{ borderRadius: 0, backgroundColor: '#1A6DFF' }}
          type="outline"
          onPress={() => navigation.navigate('Schedule')}
        >
          <Icon
            color="#fff"
            containerStyle={{}}
            disabledStyle={{}}
            iconStyle={{ marginRight: 5, marginTop: 3 }}
            name="calendar-month"
            onLongPress={() => console.log('onLongPress()')}
            onPress={() => console.log('onPress()')}
            size={20}
            type="material"
          />
          <Text style={styles.gnbTxt}>일정</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // backgroundColor: '#fff',
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
  gnbTxt: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 15,
  },
});
