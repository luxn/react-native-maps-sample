import React from 'react';
import {
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './store';

import HomeScene from './scenes/HomeScene';
import TabScene from './scenes/TabScene';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="default" />
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Home" component={HomeScene} />
              <Stack.Screen name="Tabs" component={TabScene} />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
};
