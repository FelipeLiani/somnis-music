import React from 'react';
import { View, Text, Button } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext'; // ajuste o caminho conforme necessário

const ThemeSwitcher = () => {
  const { theme, toggleTheme, isDarkTheme } = useThemeContext();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: theme.colors.tertiary }}>
        Tema Atual: {isDarkTheme ? 'Escuro' : 'Claro'}
      </Text>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
};

export default ThemeSwitcher;
