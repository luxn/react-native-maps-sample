import React from 'react';
import {
  Text
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MapScene from './MapScene';
import ListScene from './ListScene';
import SettingsScene from './SettingsScene';

const Tab = createBottomTabNavigator();
export default function TabScene() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScene} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color: color }}>🗺️</Text>
        }} />
        <Tab.Screen name="List" component={ListScene} options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color: color }}>🖍️</Text>
        }} />
        <Tab.Screen name="Settings" component={SettingsScene} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color: color }}>⚙️</Text>
        }} />
      </Tab.Navigator>
    );
  }