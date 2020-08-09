import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, Provider as PaperProvider, Appbar, ActivityIndicator } from 'react-native-paper'
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import Header from './component/header';
import CardList from './component/cardList';
import AddCard from './component/addCard';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

function Home(props) {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <View style={styles.content}>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ActivityIndicator></ActivityIndicator>
      <AddCard />
      <CardList />
      <Button title="Click me" onPress={() => props.navigation.navigate("CardList")}></Button>
    </View>
  )
}
const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
            options={
              {title: 'red', 
            headerStyle:{
              backgroundColor: 'blue',
              header:null
            }}
            } />
          <Stack.Screen name="CardList" component={CardList}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    flex: 1
  }
});
export default App;
