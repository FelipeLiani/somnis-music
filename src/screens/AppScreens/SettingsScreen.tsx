import * as React from 'react';
import { View } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';

export default function SettingsScreen() {
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
  return (
    <View style={{
      height:'100%', //Alterar
      width: '100%',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <ThemedComponents.Text variant="headlineMedium">
        Settings Screen
      </ThemedComponents.Text>
    </View>
  )
}