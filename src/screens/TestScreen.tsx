import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { supabase } from '../lib/supabase';

export default function TestScreen() {

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <View style={styles.view1}>
      <TouchableOpacity
        onPress={signOut}
        style={styles.view2}>
        <Text>Botton Tabs</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  view2: {
    height:100,
    width:100,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  }
})
