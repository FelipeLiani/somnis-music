import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E71D36',
    secondary: '#2EC4B6',
    tertiary: '#FDFFFC',
    background: '#011627',

    secondaryContainer: '#2EC4B6', //secondary
    onPrimary: '#FDFFFC', //tertiary
    onSecondaryContainer: '#011627', //background
  }
};

export const themedHeaderOptions = {
  headerStyle: {backgroundColor: theme.colors.background},
  headerTintColor: theme.colors.secondary,
  headerTitleStyle: {color: theme.colors.tertiary}
}
