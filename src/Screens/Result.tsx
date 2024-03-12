import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import { Icon } from '@rneui/themed';

export default function Result({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Text>실적 화면</Text>
      </View>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  wrapContainer: {
    padding: 10,
    height: 100,
  },
  gnbTxt: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 15,
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
