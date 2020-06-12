import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TabScreen from './screens/TabScreen';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="default" />
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Tabs" component={TabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
