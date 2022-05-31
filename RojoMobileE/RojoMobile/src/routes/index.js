import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/home';
import Main from '../screens/main';
import Calendario from '../screens/calendario';
import Documento from '../screens/documento';
import ListarEvt from '../screens/listarEvt';
import telaUsuario from '../screens/telaUsuario';
import { StatusBar } from 'expo-status-bar';

const Drawer = createDrawerNavigator();
//const AuthStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
      <StatusBar hidden={true} />

    <Drawer.Navigator 
    initialRouteName="Home"
    screenOptions={{
        drawerStyle:{
            backgroundColor: "#C10D0D",
            width: 240,
        },
        drawerContentStyle:{
            alignContent: "center"
        },
        drawerLabelStyle:{
            textAlign: 'center',
            color: '#FFF'
        },
        headerShown: false,
    }}>

      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Calendario" component={Calendario} />
      <Drawer.Screen name="Documento" component={Documento} />
      <Drawer.Screen name="Evento" component={ListarEvt} />
      <Drawer.Screen name="Usuario" component={telaUsuario} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Routes;