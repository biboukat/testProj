import React from 'react';
import { Image } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  BottomTabNavigatorConfig,
} from 'react-navigation';

import MapStackNavigation from '../nativeMap';
import EmptyScreenStackNavigation from '../emptyScreen';
import StartScreenStackNavigator from '../startScreen';

import imgStart from '../../res/icons/start.png';
import imgEmpty from '../../res/icons/empty.png';
import imgMap from '../../res/icons/map.png';

function getTabNavigationOptions(
  navigation,
  tabBarLabel,
  imgTabBarIcon,
) {
  const { routes } = navigation.state;
  //const currentRoute = last(routes);
  //const currentRouteName = get(currentRoute, 'routeName');
  return {
    //tabBarVisible: routeNamesTabBarInvisible.indexOf(currentRouteName) === -1,
    tabBarLabel: tabBarLabel,
    tabBarIcon: () => (
      <Image
        source={imgTabBarIcon}
        resizeMode={'contain'}
        style={{ width: 24, height: 24, tintColor: 'blue' }}
      />
    ),
  };
}

const MainTabNavigator = createBottomTabNavigator(
  {
    Articles: {
      screen: StartScreenStackNavigator,
      navigationOptions: ({navigation}) =>
        getTabNavigationOptions(navigation, 'Start', imgStart),
    },
    News: {
      screen: EmptyScreenStackNavigation,
      navigationOptions: ({navigation}) =>
        getTabNavigationOptions(navigation, 'Empty', imgEmpty),
    },
    Settings: {
      screen: MapStackNavigation,
      navigationOptions: ({navigation}) =>
        getTabNavigationOptions(navigation, 'Map', imgMap),
    },
  },
  {
    tabBarComponent: BottomTabNavigatorConfig,
  },
);

const TopStackNavigator = createStackNavigator({
  Main: MainTabNavigator,
});

export default createAppContainer(TopStackNavigator);
