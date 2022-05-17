import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


import { StyleSheet, Text, Image, View, FlatList, calendarTheme, TouchableOpacity } from 'react-native';

import api from '../services/api'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Calendario() {
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
            <Agenda
                items={{
                    '2022-05-22': [{ name: 'item 1 - OBJETO', }],
                    '2022-05-23': [{ name: 'item 2 - any js object', height: 80 }],
                    '2022-05-24': [{ name: listaEventos.map((eventos) => {eventos.nomeEvento} )}],
                    '2022-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
                }} 
                pastScrollRange={6}
                futureScrollRange={6}
                theme={{
                    ...calendarTheme,
                    agendaDayTextColor: 'blue',
                    agendaDayNumColor: 'black',
                    agendaTodayColor: 'green',
                    agendaKnobColor: 'blue'
                  }}
                  renderItem={(item, firstItemInDay) => {
                    return <View style={styles.agenda}/>;
                  }}
                />
        </View>
    )
}



const styles = StyleSheet.create({
    main: {
        flex: 1,
        // flexDirection:"column",
        backgroundColor: '#B01425'
    },
    Calendario: {
        backgroundColor: '#FFF',
        display: 'flex',
        marginTop: 90
    },
    agenda:{
        flex: 1,
        // flexDirection:"column",
        backgroundColor: '#000'
    }
})


{/* < Calendar 
// onVisibleMonthsChange={(meses) => { console.log('agora esses meses estão visíveis', meses); }} Retorno de chamada que é executado quando os meses visíveis mudam na visualização de rolagem. Padrão = indefinido
// Quantidade máxima de meses permitidos para rolar para o passado. Default = 50 
pastScrollRange={12}
// Quantidade máxima de meses permitidos para rolar para o futuro. Padrão = 50 
horizontal={true}
// Ativa a paginação na horizontal, default = false 
paginaçãoEnabled={true}
markedDates={{
    '2022-05-16': { marked: true },
    '2022-05-17': {  selected: true, marked: true, selectedColor: 'green' },
    '2022-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
}}
/> */}
