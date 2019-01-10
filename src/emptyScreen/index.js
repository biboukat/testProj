import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class EmptyScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
        <Text style={{ color: 'white' }}>EmptyScreen</Text>
      </SafeAreaView>
    )
  }
}
