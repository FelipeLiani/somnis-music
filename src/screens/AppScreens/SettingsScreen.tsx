import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { supabase } from '../../lib/supabase';
import { useTheme, Appbar } from 'react-native-paper';


export default function SettingsScreen() {
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
  const theme = useTheme()
  return (
    <Appbar.Header style={{height: '0%'}}>
      <View />
    </Appbar.Header>
  )
}

function Main() {

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  const accordions = [
      {
        title: "Uncontrolled Accordion",
        icon: "folder",
        items: [
          { title: "First item", icon: "git" },
          { title: "Second item", icon: "cog" }
        ]
      },
      {
        title: "Controlled Accordion",
        icon: "folder",
        items: [
          { title: "First item", icon: "git" },
          { title: "Second item", icon: "cog" }
        ]
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
        sectionTitle='Lista Aninhada'
        accordions={accordions}
      />
      <ThemedComponents.List
        ListMode='Unique Items'
        sectionTitle='Lista não Aninhada'
        accordions={accordions}
      />
      <ThemedComponents.Button
        buttonMode='primary'
        buttonSize='small'
        buttonIconName='connection'
        onPress={signOut}
        style={{alignSelf: 'center'}}
      >
        Sair
      </ThemedComponents.Button>
      <ThemedComponents.ThemeSwitcher />
    </ScrollView>
  )
}
