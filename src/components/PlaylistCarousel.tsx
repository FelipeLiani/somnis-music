import React from 'react';
import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import { ThemedComponents } from '../theme/ThemedComponents';
import { useTheme } from 'react-native-paper';

interface Playlist {
  cover: string;
  title: string;
  subtitle: string;
}

interface CarouselSectionProps {
  title: string;
  playlists: Playlist[];
}

const { width } = Dimensions.get('window');
const SPACE_WIDTH = width * 0.05; // 10% da largura da tela

const PlaylistCarousel: React.FC<CarouselSectionProps> = ({ title, playlists }) => {
  const theme = useTheme();
  const renderItem = ({ item }: { item: Playlist }) => (
    <PlaylistCard cover={item.cover} title={item.title} subtitle={item.subtitle} />
  );

  return (
    <View style={{ width: '100%', marginVertical: 20 }}>
      <View style={{ width: '90%', alignSelf: 'center' }}>
        <ThemedComponents.Text highlight textSize='medium' style={{ marginBottom: 15 }}>
          {title}
        </ThemedComponents.Text>
      </View>
      <FlatList
        data={playlists}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={250}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ width: SPACE_WIDTH }} />} // Espaço antes do primeiro item
      />
    </View>
  );
};

interface PlaylistCardProps {
  cover: string;
  title: string;
  subtitle: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ cover, title, subtitle }) => {
  return (
    <View style={{ width: 250, marginRight: 15 }}>
      <Image
        source={{ uri: cover }}
        style={{ width: 250, height: 250, borderRadius: 8 }} // Imagem quadrada
      />
      <ThemedComponents.Text highlight style={{ marginTop: 10 }}>
        {title}
      </ThemedComponents.Text>
      <ThemedComponents.Text>
        {subtitle}
      </ThemedComponents.Text>
    </View>
  );
};

export default PlaylistCarousel;
