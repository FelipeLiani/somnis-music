import * as React from 'react';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { supabase } from '../../lib/supabase';
import { Alert } from 'react-native';

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
  const [emailText, setEmailText] = React.useState("");
  const [passwordText, setPasswordText] = React.useState("");
  const [confirmedPasswordText, setConfirmedPasswordText] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function signUpWithEmail() {
    setLoading(true)
    const { data: { session }, error } = await supabase.auth.signUp({
      email: emailText,
      password: passwordText
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  function handleSignUp() {
    if (passwordText !== confirmedPasswordText) {
      Alert.alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
      return;
    }
    signUpWithEmail();
  }

  return (
    <View style={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ThemedComponents.TextInput
        label="Email"
        value={emailText}
        onChangeText={text => setEmailText(text)}
        inputIconName='mail'
        style={{
          width: '90%',
          margin: 2
        }}/>
      <ThemedComponents.TextInput
        label="Senha"
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
        secureEntry
        style={{
          width: '90%',
          margin: 2
        }}/>
      <ThemedComponents.TextInput
        label="Confirmar senha"
        value={confirmedPasswordText}
        onChangeText={text => setConfirmedPasswordText(text)}
        secureEntry
        style={{
          width: '90%',
          margin: 2
        }}/>

      <Button
        mode="contained"
        loading={loading}
        onPress={handleSignUp}
        style={{
          width: '90%',
          margin: 20
        }}>
          Cadastrar
      </Button>
    </View>
  )
}
