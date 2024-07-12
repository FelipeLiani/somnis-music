import * as React from 'react';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function RegisterScreen() {
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
  const [nameText, setNameText] = React.useState("");
  const [emailText, setEmailText] = React.useState("");
  const [passwordText, setPasswordText] = React.useState("");
  const [confirmedPasswordText, setConfirmedPasswordText] = React.useState("");

  return (
    <View style={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ThemedComponents.TextInput
        label="Nome"
        value={nameText}
        onChangeText={text => setNameText(text)}
        mode='outlined'
        style={{
          width: '90%',
          margin: 2
        }}/>
      <ThemedComponents.TextInput
        label="Email"
        value={emailText}
        onChangeText={text => setEmailText(text)}
        mode='outlined'
        style={{
          width: '90%',
          margin: 2
        }}/>
      <ThemedComponents.TextInput
        label="Senha"
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
        mode='outlined'
        secureTextEntry
        style={{
          width: '90%',
          margin: 2
        }}/>
        <ThemedComponents.TextInput
          label="Confirmar senha"
          value={confirmedPasswordText}
          onChangeText={text => setConfirmedPasswordText(text)}
          mode='outlined'
          secureTextEntry
          style={{
            width: '90%',
            margin: 2
          }}/>

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{
            width: '90%',
            margin: 20
          }}>
            Cadastrar
        </Button>
    </View>
  )
}
