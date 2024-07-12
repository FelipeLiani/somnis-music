import * as React from 'react';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function ForgotPasswordScreen() {
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
  const [emailText, setEmailText] = React.useState("");
  return (
    <View style={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ThemedComponents.Text style={{
        width: '90%',
        margin: 2
      }}>
        Enviaremos um código para seu e-mail.
      </ThemedComponents.Text>
      <ThemedComponents.TextInput
        label="Email"
        value={emailText}
        onChangeText={text => setEmailText(text)}
        mode='outlined'
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
            Enviar
        </Button>
    </View>
  )
}
