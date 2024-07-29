import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const myColors = {
  primary: '#758BFD',
  secondary: '#AEB8FE',
  tertiary: '#F1F2F6',
  background: '#27187E'
}

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: myColors.primary,
    secondary: myColors.secondary,
    tertiary: myColors.background,
    background: myColors.tertiary,

    secondaryContainer: myColors.secondary,
    outline: myColors.background,
    onPrimary: myColors.background,
    onSecondaryContainer: myColors.tertiary,
    surface: myColors.tertiary
  }
};

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: myColors.primary,
    secondary: myColors.secondary,
    tertiary: myColors.tertiary,
    background: myColors.background,

    secondaryContainer: myColors.secondary,
    outline: myColors.tertiary,
    onPrimary: myColors.tertiary,
    onSecondaryContainer: myColors.background,
    surface: myColors.background
  }
};

export const themedHeaderOptions = (theme: any) => ({
  headerStyle: { backgroundColor: theme.colors.background },
  headerTintColor: theme.colors.secondary,
  headerTitleStyle: { color: theme.colors.tertiary }
});
