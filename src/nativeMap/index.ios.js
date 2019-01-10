import React, {Component} from 'react';
import {View, Button, SafeAreaView} from 'react-native';

import Map from './mapView.js';

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isZoomEnabled: false,
      region: {
        latitude: 49.983058,
        longitude: 36.308151,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      },
    };
  }

  _changeZoomPermission = () => {
    this.setState({
      isZoomEnabled: !this.state.isZoomEnabled,
    });
  };

  _onRegionChange = event => {};

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            marginBottom: 40,
            height: 100,
            backgroundColor: 'green',
          }}>
          <Button
            onPress={this._changeZoomPermission}
            title={'change zoom permission'}
            color={'cyan'}
          />
        </View>
        <Map
          style={{flex: 1}}
          region={this.state.region}
          zoomEnabled={this.state.isZoomEnabled}
          onRegionChange={this._onRegionChange}
        />
      </SafeAreaView>
    );
  }
}
