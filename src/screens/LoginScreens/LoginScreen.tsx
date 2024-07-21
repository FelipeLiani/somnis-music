import * as React from 'react';
import { View, Alert } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { Icon, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../lib/supabase';

export default function LoginScreen() {
  return (
    <ThemedComponents.View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Header/>
      <Main />
      <Footer />
    </ThemedComponents.View>
  )
}

function Header() {
  return (
    <View style={{
      height:'30%',
      width: '100%',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <View style={{
        marginTop: '15%'
      }}>
        <Icon
          source={require('../../../assets/Icons/logo.png')}
          size={100}
        />
      </View>
      <ThemedComponents.Text variant='displaySmall'>
        Somnis
      </ThemedComponents.Text>
    </View>
  )
}

function Main() {
  const [emailText, setEmailText] = React.useState("");
  const [passwordText, setPasswordText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: emailText,
      password: passwordText,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={{
      height:'50%',
      width: '100%',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <ThemedComponents.TextInput
        inputIconName='mail'
        label="Email"
        value={emailText}
        onChangeText={text => setEmailText(text)}
        inputMode='primary'
        style={{
          width: '90%',
          margin: 2
        }}/>
      <ThemedComponents.TextInput
        label="Senha"
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
        inputMode='primary'
        secureEntry
        style={{
          width: '90%',
          margin: 2
        }}/>
      <View style={{
          width: '90%',
          margin: 10,
          alignItems: 'flex-end'
        }}>
        <ThemedComponents.Text highlight onPress={() => {
          navigation.navigate('Recuperar senha' as never)
        }}>
          Esqueceu a senha?
        </ThemedComponents.Text>
      </View>

      <Button
        mode="contained"
        style={{
          width: '90%',
          margin: 20
        }}
        loading={loading}
        onPress={() => signInWithEmail()}
      >
          Entrar
      </Button>
    </View>
  )
}

function Footer() {
  const navigation = useNavigation();
  return (
    <View style={{
      height:'20%',
      width: '100%',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <ThemedComponents.Text>
        Ainda não possui uma conta?
          <ThemedComponents.Text highlight onPress={() => {
            navigation.navigate('Cadastre-se' as never)
          }}>
            {' ' + 'Clique aqui!'}
          </ThemedComponents.Text>
        </ThemedComponents.Text>
    </View>
  )
}
