import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { Icon, Button } from 'react-native-paper';
import { CommonActions, useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  return (
    <View style={{
      height:'50%',
      width: '100%',
      justifyContent:'center',
      alignItems:'center'
    }}>
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
        }}>
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
