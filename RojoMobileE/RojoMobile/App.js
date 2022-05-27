import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import AuthStack from './src/navigation/authStack'
import AppStack from './src/navigation/appStack'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <AppStack/>
      {/* <AuthStack/> */}

    </NavigationContainer>
  );
}

// import Home from './src/screens/home.js';
// import Main from './src/screens/main.js';
// import ListarEvt from './src/screens/listarEvt.js';
// import Calendario from './src/screens/calendario.js';
// import TelaUsuario from './src/screens/telaUsuario.js';
// import Documento from './src/screens/documento.js';

// export default function Stack() {
//   return (
//     <NavigationContainer>
//       <StatusBar
//         hidden={true}
//       />

//       <AuthStack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <AuthStack.Screen name="Home" component={Home} />
//         <AuthStack.Screen name="ListarEvt" component={ListarEvt} />
//         <AuthStack.Screen name="Main" component={Main} />
//         <AuthStack.Screen name="Calendario" component={Calendario} />
//         <AuthStack.Screen name="TelaUsuario" component={TelaUsuario} />
//         <AuthStack.Screen name="Documento" component={Documento} />
//       </AuthStack.Navigator>
//     </NavigationContainer>
//   );
//}

