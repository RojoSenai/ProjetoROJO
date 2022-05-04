import 'react-native-gesture-handler';

import React,{Component} from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import Home from './src/screens/home';



export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
