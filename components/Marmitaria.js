import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export function Marmataria({ name, price, items, propOnPress }) {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={propOnPress}>
      <View style={styles.container}> 
        <Text style={[styles.name, styles.bold]}>{name}</Text>
        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
        <Text>{items.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  bold: {
    fontWeight: 'bold'
  },

  price: {
    fontSize: 13,
    color: '#0000ff',
  }
})