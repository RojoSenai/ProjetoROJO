import React from 'react';
import Routes from './src/routes';
import 'react-native-gesture-handler';

const App = () => <Routes />;

export default App;




// import 'react-native-gesture-handler';

// import React, { Component } from 'react';
// import { StatusBar } from 'react-native';

// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';




// const AuthStack = createStackNavigator();

// import Home from './src/screens/home';
// import Main from './src/screens/main';
// import ListarEvt from './src/screens/listarEvt';
// import Calendario from './src/screens/calendario';
// import TelaUsuario from './src/screens/telaUsuario';
// import Documento from './src/screens/documento';
// //import HeaderCabeca from './src/components/header';


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
//         <AuthStack.Screen name="Main" component={Main} />
//         <AuthStack.Screen name="ListarEvt" component={ListarEvt} />
//         <AuthStack.Screen name="Calendario" component={Calendario} />
//         <AuthStack.Screen name="TelaUsuario" component={TelaUsuario} />
//         <AuthStack.Screen name="Documento" component={Documento} />
//       </AuthStack.Navigator>
//     </NavigationContainer>
//   );
// }
