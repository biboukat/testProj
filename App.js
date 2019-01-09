/**
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Svg, {Circle} from 'react-native-svg';
import FastImage from 'react-native-fast-image';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FastImage
          style={{ width: 100, height: 100 }}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View
          style={{
            width: 200,
            marginBottom: 40,
            height: 100,
            backgroundColor: 'green',
          }}>
          <Text> some text </Text>
        </View>
        <View style={{width: '100%'}} scrollEventThrottle={1}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <View style={{height: 150, width: '100%', backgroundColor: 'blue'}} />
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
