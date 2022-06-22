//App.js

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator(); // 뒤로가기 앞으로 가기를 위한, 스택

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
