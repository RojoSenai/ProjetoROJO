import React  from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

import Main from '../screens/main'

const AuthStack = () => {
    return(
    <Drawer.Navigator screenOptions={{headerShow: false}}>
        <Drawer.Screen name = "Main" component={Main}/>
    </Drawer.Navigator>

    );
};

export default AuthStack