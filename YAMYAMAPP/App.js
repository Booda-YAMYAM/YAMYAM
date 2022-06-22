//App.js

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const DetailScreen = () => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
