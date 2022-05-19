import 'react-native-gesture-handler';

import React,{Component} from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import Home from './src/screens/home';
import Main from './src/screens/main';
import ListarEvt from './src/screens/listarEvt'
import Calendario from './src/screens/calendario'
import UsuTela from './src/screens/telaUsu'
import Documento from './src/screens/documento'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// const Routes = createAppContainer(
//   createDrawerNavigator({
//     Home,
//     ListarEvt,
//     Main}, {
//       initialRouteName: 'Home',
//       contentComponent: CustomDrawer
// })

// );  export default Routes



export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
          <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="ListarEvt" component={ListarEvt} />
        <AuthStack.Screen name="Main" component={Main} />
        <AuthStack.Screen name="Calendario" component={Calendario} />
        <AuthStack.Screen name="UsuTela" component={UsuTela} />
        <AuthStack.Screen name="Documento" component={Documento} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
