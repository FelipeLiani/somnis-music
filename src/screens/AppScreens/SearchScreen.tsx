import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { useTheme, Appbar, Searchbar, Chip } from 'react-native-paper';
import ChipList from '../../components/ChipList';

export default function SearchScreen() {
  return (
    <ThemedComponents.View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Header />
      <Main />
    </ThemedComponents.View>
  )
}

function Header() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Appbar.Header style={{marginTop: 12}}>
      <View style={{
        width: '100%', justifyContent: 'center', alignItems: 'center',
      }}>
        <View style={{width: '96%'}}>
          <Searchbar
            placeholder="Search"
            placeholderTextColor={theme.colors.tertiary} iconColor={theme.colors.tertiary}
            onChangeText={setSearchQuery}
            value={searchQuery}
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

function Main() {
  const chips = [
    {text: 'chip', icon: 'cog'},
    {text: 'leroy', icon: 'cog'},
    {text: 'minecraft', icon: 'cog'},
    {text: 'heloo', icon: 'cog'},
    {text: 'chupaivos', icon: 'cog'},
    {text: 'chip', icon: 'cog'},
    {text: 'leroy', icon: 'cog'},
    {text: 'minecraft', icon: 'cog'},
    {text: 'heloo', icon: 'cog'},
    {text: 'chupaivos', icon: 'cog'}
  ]

  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      marginTop: '10%',
      alignItems: 'center',
    }} style={{
      width: '100%',
    }}>
      <ChipList title='título' chips={chips} />
      <ChipList title='título' chips={chips} />
      <ChipList title='título' chips={chips} />
    </ScrollView>
  )
}
