import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';
import PlaylistCarousel from '../../components/PlaylistCarousel';
import MusicPlayer from '../../components/modals/MusicPlayer';
import { Appbar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <ThemedComponents.View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Header />
      <Main />
    </ThemedComponents.View>
  );
}

function Header() {
  const theme = useTheme()
  return (
    <Appbar.Header style={{height: '0%'}}>
      <View />
    </Appbar.Header>
  )
}

function Main() {

  // MusicPlayer
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);


  const items = [
    {
      items: [
        {
          title: "Bohemian Rhapsody",
          ItemDescription: 'Queen',
          icon: "music",
          rightIcon: 'play-circle',
          onPress: showModal
        },
        {
          title: "Billie Jean",
          ItemDescription: 'Michael Jackson',
          icon: "music",
          rightIcon: 'play-circle',
          onPress: showModal
        },
        {
          title: "Like a Rolling Stone",
          ItemDescription: 'Bob Dylan',
          icon: "music",
          rightIcon: 'play-circle',
          onPress: showModal
        },
        {
          title: "Imagine",
          ItemDescription: 'John Lennon',
          icon: "music",
          rightIcon: 'play-circle',
          onPress: showModal
        }
      ]
    }
  ];

  const playlists = [
    {
      cover: "https://picsum.photos/700",
      title: 'Rock Classics',
      subtitle: 'Timeless rock hits'
    },
    {
      cover: "https://picsum.photos/700",
      title: 'Pop Hits',
      subtitle: 'Top pop tracks'
    },
    {
      cover: "https://picsum.photos/700",
      title: 'Jazz Vibes',
      subtitle: 'Smooth jazz selections'
    }
  ];

  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      alignItems: 'center',
    }} style={{
      width: '100%',
    }}>
      <ThemedComponents.List
        ListMode='Unique Items'
        sectionTitle='Music List'
        accordions={items}
      />
      <PlaylistCarousel
        title="Featured Playlists"
        subtitle="Explore our curated playlists"
        playlists={playlists}
      />

      <MusicPlayer visible={visible} onDismiss={hideModal} />
    </ScrollView>
  );
}
