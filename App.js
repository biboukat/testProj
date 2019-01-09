/**
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import Map from './src/nativeMap';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
        <Map />
      </SafeAreaView>
    );
  }
}
