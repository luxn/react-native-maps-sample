/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}

function ListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator>
            <Tab.Screen name="Map" component={MapScreen} options={{
              tabBarLabel: 'Map',
              tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color: color }}>🗺️</Text>
            }} />
            <Tab.Screen name="List" component={ListScreen} options={{
              tabBarLabel: 'List',
              tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color: color }}>🖍️</Text>
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color: color }}>⚙️</Text>
            }} />
          </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {

  const onButtonPress = () => {
    navigation.navigate('Tabs');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title="Go to Tabs" onPress={onButtonPress} />
    </View>
  );
}

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
