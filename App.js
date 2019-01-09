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
  Button,
} from 'react-native';

//import MapView from './src/nativeMap';
import Stepper from './src/nativeStepper';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
        <Stepper />
      </SafeAreaView>
    );
  }
}
