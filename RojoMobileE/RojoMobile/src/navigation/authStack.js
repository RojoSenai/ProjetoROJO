import React from "react";
import { View, Text } from 'react-native'
import Stack from "../../App";

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import TelaUsuario from "../screens/telaUsuario";
import Documento from "../screens/documento"

const Stack = createNativeStackNavigator

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Tela Usuario"
                component={TelaUsuario}
            />
                <Stack.Screen
                    name="Doc"
                    component={Documento}
                />
            </Stack.Navigator>
            )
}