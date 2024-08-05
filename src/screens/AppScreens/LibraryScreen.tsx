import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { Button } from 'react-native-paper';
import MusicPlayer from '../../components/modals/MusicPlayer';  // Ajuste o caminho conforme necessário

export default function LibraryScreen() {
  return (
    <ThemedComponents.View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Main />
    </ThemedComponents.View>
  );
}

function Main() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        marginTop: '20%',
        alignItems: 'center',
      }}
      style={{
        width: '100%'
      }}
    >
      <MusicPlayer visible={visible} onDismiss={hideModal} />

      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </ScrollView>
  );
}
