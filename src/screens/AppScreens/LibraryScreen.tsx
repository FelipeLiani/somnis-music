import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { Button } from 'react-native-paper';
import { searchYouTube, parseYoutubeResponse } from '../../lib/youtubeSearch';

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

  function HandleButton () {
    searchYouTube('Imagine Dragons')
      .then(results => {
        console.log(results);
      })
      .catch(err => {
        console.error('Erro ao buscar vídeos:', err);
      });
  }

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

      <Button style={{ marginTop: 30 }} onPress={HandleButton}>
        botão
      </Button>
    </ScrollView>
  );
}
