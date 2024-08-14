import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { useTheme, Appbar, Searchbar } from 'react-native-paper';
import { searchYouTube, parseYoutubeResponse } from '../../lib/youtubeSearch';
import Media from '../../models/Media';
import ChipList from '../../components/ChipList';
import { useLoading } from '../../context/LoadingContext';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [videoItems, setVideoItems] = React.useState<Media[]>([]);
  const [visibleItems, setVisibleItems] = React.useState<Media[]>([]);
  const [hasMoreItems, setHasMoreItems] = React.useState(true);
  const itemsPerPage = 5;
  const { setLoading } = useLoading();

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchYouTube(searchQuery);
      const mediaItems = parseYoutubeResponse(results);
      setVideoItems(mediaItems);
      setVisibleItems(mediaItems.slice(0, itemsPerPage));
      setHasMoreItems(mediaItems.length > itemsPerPage);
    } catch (err) {
      console.error('Erro ao buscar vídeos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextItems = videoItems.slice(visibleItems.length, visibleItems.length + itemsPerPage);
    setVisibleItems((prevItems) => [...prevItems, ...nextItems]);
    setHasMoreItems(videoItems.length > visibleItems.length + itemsPerPage);
  };

  const Chips = [
    { text: 'Samba', icon: 'tag', onPress: () => { setSearchQuery('Samba'); handleSearch(); }},
    { text: 'Pagode', icon: 'tag', onPress: () => { setSearchQuery('Pagode'); handleSearch(); }},
    { text: 'Forró', icon: 'tag', onPress: () => { setSearchQuery('Forró'); handleSearch(); }},
    { text: 'Rock', icon: 'tag', onPress: () => { setSearchQuery('Rock'); handleSearch(); }},
    { text: 'Jazz', icon: 'tag', onPress: () => { setSearchQuery('Jazz'); handleSearch(); }},
    { text: 'Blues', icon: 'tag', onPress: () => { setSearchQuery('Blues'); handleSearch(); }},
    { text: 'Gospel', icon: 'tag', onPress: () => { setSearchQuery('Gospel'); handleSearch(); }},
    { text: 'Eletrônica', icon: 'tag', onPress: () => { setSearchQuery('Eletrônica'); handleSearch(); }},
  ];

  return (
    <ThemedComponents.View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,

        alignItems: 'center',
      }} style={{
        width: '100%',
      }}>
        {searchQuery === '' || videoItems.length === 0 ? (
          <ChipList title='Gêneros' chips={Chips} />
        ) : (
          <>
            <ThemedComponents.List
              ListMode='Unique Items'
              accordions={[{ items: visibleItems.map(item => ({
                title: item.title,
                ItemDescription: item.channelTitle,
                icon: "music",
                rightIcon: 'play-circle'
              })) }]}
            />
            {hasMoreItems && (
              <ThemedComponents.Button
                buttonSize='medium'
                buttonMode='tertiary'
                onPress={handleLoadMore}
              >
                VER MAIS
              </ThemedComponents.Button>
            )}
          </>
        )}
      </ScrollView>
    </ThemedComponents.View>
  );
}

function Header({
  searchQuery,
  setSearchQuery,
  onSearch
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void
}) {
  const theme = useTheme();
  const { isLoading } = useLoading();

  return (
    <Appbar.Header style={{ marginTop: 12 }}>
      <View style={{
        width: '100%', justifyContent: 'center', alignItems: 'center', bottom: 8
      }}>
        <View style={{ width: '96%' }}>
          <Searchbar
            placeholder="Search"
            placeholderTextColor={theme.colors.tertiary}
            iconColor={theme.colors.tertiary}
            onChangeText={setSearchQuery}
            value={searchQuery}
            onSubmitEditing={onSearch}
            loading={isLoading} // Indica que está carregando
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              borderWidth: 2, borderColor: theme.colors.secondary
            }}
          />
        </View>
      </View>
    </Appbar.Header>
  );
}
