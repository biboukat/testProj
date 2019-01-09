import {requireNativeComponent} from 'react-native';
import React, {Component} from 'react';

class MapView extends Component {
  render() {
    return <RNTMap {...this.props} />;
  }
}

const RNTMap = requireNativeComponent('RNTMap', MapView);

export default MapView;
