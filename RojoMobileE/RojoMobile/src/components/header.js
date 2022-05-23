import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


import { StyleSheet, Text, Image, View, FlatList, calendarTheme, TouchableOpacity } from 'react-native';

import api from '../services/api'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header() {
    const [listaEventos, setListaEventos] = useState([]);
    const navigation = useNavigation()



    async function BuscarEventos() {
        const token = await AsyncStorage.getItem('userToken');

        const resposta = await api.get('/Evento', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const dadosDaApi = resposta.data;

        setListaEventos(dadosDaApi)
    }

    useEffect(() => {
        BuscarEventos();
    })


    return (
        <View style={styles.main}>

            <View style={styles.Headermain}>

                <Image
                    source={require('../../assets/Menu_De_Hamburger.png')}
                    style={{ width: 50, height: 30, }}
                    resizeMode="contain"
                />
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <Image
                        source={require('../../assets/RojoLogo.png')}
                        style={{ width: 60, height: 40, }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/imagem_perfil.png')}
                    style={{ width: 60, height: 50, }}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
main: {
    flex: 1,
    backgroundColor: '#9E0000'
},
mainHeader: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
},
Headermain: {
    // display: "flex",
    backgroundColor: '#fff',
    borderBottomColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 6,
    // width: '100%',
    // height: '30%',
    // bottom: 70
},
mainHeaderText: {
    //fontFamily: 'TitilliumWeb-Regular',
    fontSize: 16,
    color: '#fff',
    letterSpacing: 5
},
})