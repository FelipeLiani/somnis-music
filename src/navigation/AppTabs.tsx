import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/AppScreens/HomeScreen';
import SearchScreen from '../screens/AppScreens/SearchScreen';
import LibraryScreen from '../screens/AppScreens/LibraryScreen';
import SettingsScreen from '../screens/AppScreens/SettingsScreen';

import TestScreen from '../screens/TestScreen';

import { useTheme } from 'react-native-paper';
import { themedHeaderOptions } from '../theme/theme';

const Tab = createBottomTabNavigator();

export default function MyComponent() {
  const theme = useTheme();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          //headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }
              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
            activeIndicatorStyle={{backgroundColor: theme.colors.primary}}
            activeColor={theme.colors.background}
            inactiveColor={theme.colors.secondary}
            style={{backgroundColor: theme.colors.background}}/>
        )}
      >
        <Tab.Screen
          name="Ínicio"
          component={HomeScreen}
          options={{
            ...themedHeaderOptions,
            tabBarLabel: 'Ínicio',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            }
          }}
        />
        <Tab.Screen
          name="Pesquisar"
          component={SearchScreen}
          options={{
            ...themedHeaderOptions,
            tabBarLabel: 'Pesquisar',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="compass" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Biblioteca"
          component={LibraryScreen}
          options={{
            ...themedHeaderOptions,
            tabBarLabel: 'Biblioteca',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cards" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Ajustes"
          component={TestScreen}
          options={{
            ...themedHeaderOptions,
            tabBarLabel: 'Ajustes',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
