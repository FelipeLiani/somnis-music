import * as React from 'react';
import { ScrollView } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';


export default function LibraryScreen() {
  return (
    <ThemedComponents.View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Main />
    </ThemedComponents.View>
  )
}

function Main() {
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
    <ScrollView style={{width: '100%'}}>
      <ThemedComponents.List
        sectionTitle='Lista Aninhada'
        accordions={accordions}
      />
      <ThemedComponents.List
        ListMode='Unique Items'
        sectionTitle='Lista não Aninhada'
        accordions={accordions}
      />
    </ScrollView>
  )
}
