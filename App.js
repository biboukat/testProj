/**
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  SafeAreaView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this._animatedValue = new Animated.Value(0);
  }

  /*componentDidMount() {*/
  //Animated.timing(this._animatedValue, {
  //toValue: 1,
  //duration: 1500,
  //}).start();
  /*}*/

  render() {
    const interpolateHeight = this._animatedValue.interpolate({
      inputRange: [0, 1500],
      outputRange: [150, 50],
    });
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={{
            width: 200,
            marginBottom: 40,
            height: interpolateHeight,
            backgroundColor: 'green',
          }}>
          <Text> some text </Text>
        </Animated.View>
        <ScrollView
          style={{width: '100%'}}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y: this._animatedValue},
                },
              },
            ],
            //{useNativeDriver: true}, // <-- Add this
          )}
          scrollEventThrottle={1}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <View
            style={{height: 1500, width: '100%', backgroundColor: 'blue'}}
          />
          <Text style={styles.instructions}>{instructions}</Text>
        </ScrollView>
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
