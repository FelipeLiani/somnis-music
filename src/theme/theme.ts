import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#CF5C36',
    secondary: '#EFC88B',
    tertiary: '#F4E3B2',
    background: '#050517',
  }
};

export const themedHeaderOptions = {
  headerStyle: {backgroundColor: theme.colors.background},
  headerTintColor: theme.colors.secondary,
  headerTitleStyle: {color: theme.colors.tertiary}
}
