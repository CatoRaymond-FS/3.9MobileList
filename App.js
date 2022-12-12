import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Button, Platform, FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Network from 'expo-network';


import Details from './Details';
import Heading from './components/Heading';
import ListContainer from './components/ListContainer';
import styles from './Appstyles';

function HomeScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

Network.getNetworkStateAsync().then(data => {
  console.log({data});
});
const [data, setData] = useState([]);
const getGames = async () => {
  fetch('https://game-crud-api.herokuapp.com/api/v1/games')
  .then ((res) => res.json())
  .then (resJson => {
    console.log ('data', resJson)
    setData(resJson);
  }) .catch (error => {
    console.log(error);
  }
  )
}

const addGames = async (title, genre, year) => {
  fetch('https://game-crud-api.herokuapp.com/api/v1/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      genre: genre,
      year: year
    })})
    .then ((res) => res.json())
    .then (resJson => {
      console.log ('data', resJson)
      setData(resJson);
    }) .catch (error => {
      console.log(error);
    }
    )
}



const [text, setText] = useState('');
useEffect(() => {
  getGames();
}, []);

  return (
    <SafeAreaView style={styles.container}>
    <TextInput
    placeholder='Title'
    onChangeText={text => setText(text)}
    />
    <TextInput
    placeholder='Genre'
    onChangeText={text => setText(text)}
    />
    <TextInput
    placeholder='Year'
    onChangeText={text => setText(text)}
    />

     <FlatList
     data={data}
     keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.genre}</Text>
            <Text>{item.year}</Text>
          </View>
        )
      }}
      />
      <Button title='Add Game' onPress={() => addGames()}/>
      <Button title='Go to Details' onPress={() => navigation.navigate('Details')}/>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

   //https://game-crud-api.herokuapp.com/api/v1/games
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "My App"}} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

