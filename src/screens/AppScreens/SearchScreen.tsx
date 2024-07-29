import * as React from 'react';
import { ScrollView } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';

export default function SearchScreen() {
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
  const [segmentedButtonsValue, setSegmentedButtonsValue] = React.useState('');
  const tags = ['Saga', 'seasonfinale', 'PeeWee'];
  const tags1 = ['Saga', 'seasonfinale', 'PeeWee', 'got', 'series', 'hbo'];

  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      //marginTop: 20,
      alignItems: 'center',
    }} style={{
      width: '100%',
    }}>
      <ThemedComponents.Text highlight style={{marginTop: 18 }}>Cards</ThemedComponents.Text>
      <ThemedComponents.Card
        cardLeftContentIcon="account-circle"
        cardTitle="John"
        cardSubtitle="@JohnWalker"
        tags={tags}
        cardCover="https://picsum.photos/700"
        style={{ margin: 10 }}
      >
        <ThemedComponents.Text textSize='small'>
          Card Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </ThemedComponents.Text>
      </ThemedComponents.Card>
      <ThemedComponents.Card
        cardLeftContentIcon="account-circle"
        cardTitle="John"
        cardSubtitle="@JohnWalker"
        tags={tags1}
        segmentedButtonsValue={segmentedButtonsValue}
        setSegmentedButtonsValue={setSegmentedButtonsValue}
        style={{ margin: 10 }}
      >
        <ThemedComponents.Text textSize='small'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </ThemedComponents.Text>
      </ThemedComponents.Card>
    </ScrollView>
  )
}
