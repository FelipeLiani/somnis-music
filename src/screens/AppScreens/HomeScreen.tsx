import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { ThemedComponents } from '../../theme/ThemedComponents';

export default function HomeScreen() {
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
  const [alertDialogVisible, setAlertDialogVisible] = React.useState(false);
  const [confirmationDialogVisible, setConfirmationDialogVisible] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1,
      //marginTop: 20,
      alignItems: 'center',
    }} style={{
      width: '100%',
    }}>
      <ThemedComponents.Text highlight style={{marginTop: 18 }}>Botões</ThemedComponents.Text>
      <ThemedComponents.Button buttonMode='primary' buttonSize='large' buttonIconName='alpha-p-box'
        onPress={() => console.log('pressed')} style={{ margin: 8 }}>
          Primary
      </ThemedComponents.Button>
      <ThemedComponents.Button buttonMode='secondary' buttonSize='large' buttonIconName='alpha-s-box'
        onPress={() => console.log('pressed')} style={{ margin: 8 }}>
          Secondary
      </ThemedComponents.Button>
      <ThemedComponents.Button buttonMode='tertiary' buttonSize='large' buttonIconName='alpha-t-box'
        onPress={() => console.log('pressed')} style={{ margin: 8 }}>
          Tertiary
      </ThemedComponents.Button>
      <ThemedComponents.Button buttonMode='text' buttonSize='large' buttonIconName='alpha-t-box'
        onPress={() => console.log('pressed')} style={{ margin: 8 }}>
          Text only
      </ThemedComponents.Button>


      <ThemedComponents.Text highlight style={{marginTop: 18 }}>Inputs</ThemedComponents.Text>
      <ThemedComponents.TextInput
        label="Primary + Number KeyType"
        inputKeyboardType='number'
        style={{
          width: '90%',
          margin: 2
      }}/>
      <ThemedComponents.TextInput
        label="Secondary + Secure Entry"
        secureEntry
        inputMode='secondary'
        style={{
          width: '90%',
          margin: 2
      }}/>
      <ThemedComponents.Text highlight style={{marginTop: 18 }}>Dialogs</ThemedComponents.Text>
      <ThemedComponents.Button buttonMode='secondary' buttonSize='medium' buttonIconName='chat'
        onPress={() => setAlertDialogVisible(true)} style={{ margin: 8 }}>
          Mostrar alerta
      </ThemedComponents.Button>
      <ThemedComponents.Dialog dialogVisible={alertDialogVisible} hideDialog={() => setAlertDialogVisible(false)}
      dialogMode='Alert'/>
      <ThemedComponents.Button buttonMode='secondary' buttonSize='medium' buttonIconName='chat'
        onPress={() => setConfirmationDialogVisible(true)} style={{ margin: 8 }}>
          Solicitar confirmação
      </ThemedComponents.Button>
      <ThemedComponents.Dialog dialogVisible={confirmationDialogVisible} hideDialog={() => setConfirmationDialogVisible(false)}
      dialogMode='Confirmation'/>
    </ScrollView>
  )
}
