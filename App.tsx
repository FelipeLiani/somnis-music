import { View } from 'react-native';
import MainStack from './src/navigation/MainStack';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/theme/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MainStack />
    </PaperProvider>
  );
}
