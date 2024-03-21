import { SafeAreaView, View, Text, StyleSheet, Pressable, TouchableHighlight, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { Marmataria } from './components/Marmitaria.js'

export default function App() {

  function handlePressIn() {
    console.log('Clicou o PRESS')
  }

  function handlePressOut() {
    console.log('Soltou o PRESS')
  }


  function handleLongPress() {
    console.log('Segurou o PRESS')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Churrascaria Sabor Caseiro</Text>
        <Text style={styles.subtitle}>Refeições</Text>

        <Marmataria 
          name={'Escondidinho'}
          price={40}
          items={['Arroz, Verdura, Farofa, Macarrão']}
          propOnPress={handlePressOut}
        />
        
        <Marmataria 
          name={'Cuscuz'}
          price={22}
          items={['Calabresa, Ovo, Vinagrete, Carne do Sol, Tomate, Cebola, Queijo']}
          propOnPress={handlePressIn}
        />

        <Marmataria 
          name={'Macarrão ao Molho Branco'}
          price={30}
          items={['Calabresa, Cheiro Verde, Orégano, Tomate, Cebola']}
          propOnPress={handleLongPress}
        />
              <Marmataria 
          name={'Almoço do Dia (Serve até 1 Pessoa)'}
          price={50}
          items={['Filé Mignon, Arroz/Baião, Vinagrete, Purê de Batata, Farofa, + Coca-Cola 600ml']}
          propOnPress={handleLongPress}
        />
              <Marmataria 
          name={'Barca de Sushi'}
          price={60}
          items={['Camarão, Hot ,Skin, Salmão, Urumaki, Niguiri ']}
          propOnPress={handleLongPress}
        />
              <Marmataria 
          name={'Espetinho de Coração'}
          price={10}
          items={['Vinagrete e Farofa']}
          propOnPress={handleLongPress}
        />
        <Text style={styles.subtitle}>Bebidas</Text>
              <Marmataria 
          name={'Caipirinha de Morango'}
          price={20}
          items={['Morango, Leite Condensado, Vodka, Gelo, Cobertura de Morango']}
          propOnPress={handleLongPress}
        />
              <Marmataria 
          name={'Caipirinha de Limão'}
          price={20}
          items={['Limão, Leite Condensado, Vodka, Gelo, Raspas de Limão']}
          propOnPress={handleLongPress}
        />
              <Marmataria 
          name={'Gela Crânio'}
          price={50}
          items={['Gelo, Vodka, Kiwi,']}
          propOnPress={handleLongPress}
        />
              <Marmataria 
          name={'Coca-Cola 2L'}
          price={15}
          items={['']}
          propOnPress={handleLongPress}
        />
               <Marmataria 
          name={'Fanta Laranja 2L'}
          price={15}
          items={['']}
          propOnPress={handleLongPress}
        />
      </ScrollView>
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#FFFF',
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 15,
    color: '#aa0000',
    textAlign: 'center',
  },
  scroll:{
    backgroundColor: 'orange'
  },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
})

