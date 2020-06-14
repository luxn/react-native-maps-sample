import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScene from './scenes/HomeScene';
import TabScene from './scenes/TabScene';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="default" />
        <SafeAreaView>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScene} />
            <Stack.Screen name="Tabs" component={TabScene} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    );
  }
};
