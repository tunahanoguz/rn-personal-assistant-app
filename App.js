import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Introduction, SignIn, Conversation, Event } from './src/screens';

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introduction" headerMode="null">
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Conversation" component={Conversation} />
        <Stack.Screen name="Event" component={Event} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
