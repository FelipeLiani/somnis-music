import React from 'react';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainStack from './src/navigation/MainStack';
import LoginStack from './src/navigation/LoginStack';
import { AuthProvider, useAuth } from './src/context/AuthContext'; // ajuste o caminho conforme necessário
import { ThemeProvider, useThemeContext } from './src/context/ThemeContext'; // ajuste o caminho conforme necessário

const AppContent = () => {
  const { session } = useAuth();
  const { theme } = useThemeContext();

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1 }}>
        {session && session.user ? (<MainStack />) : (<LoginStack />)}
      </View>
    </PaperProvider>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}
