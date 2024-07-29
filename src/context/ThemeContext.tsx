import React, { createContext, useState, ReactNode, useContext } from 'react';
import { lightTheme, darkTheme } from '../theme/theme'; // ajuste o caminho conforme necessário
import { MD3Theme } from 'react-native-paper';

interface ThemeContextType {
  theme: MD3Theme;
  toggleTheme: () => void;
  isDarkTheme: boolean; // Adicione esta linha
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
