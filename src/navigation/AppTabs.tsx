import { View, Text, StyleSheet } from 'react-native';

export default function AppTabs() {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text>Botton Tabs</Text>
      </View>
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
