import React from 'react';
import {
  Text
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MapScreen from './MapScreen';
import ListScreen from './ListScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
export default function TabScreen() {
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