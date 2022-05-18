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
            <Agenda
                items={{
                    '2022-05-22': [{ name: 'item 1 - any js object' }],
                    '2022-05-23': [{ name: 'item 2 - any js object' }],
                    '2022-05-24': [],
                    '2022-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
                }}

                // markedDates={{
                //     '2022-05-16': {selected: true, marked: true},
                //     '2022-05-17': {marked: true},
                //     '2022-05-18': {disabled: true}
                //   }}
                pastScrollRange={6}
                futureScrollRange={6}
                theme={{
                    ...calendarTheme,
                    agendaDayTextColor: '#B01425',
                    agendaDayNumColor: 'black',
                    agendaTodayColor: 'black',
                    agendaKnobColor: 'red',
                    monthTextColor: '#B01425',
                    selectedDayBackgroundColor: '#B01425',
                    todayTextColor: '#B01425',
                    dayTextColor: '#B01425',
                    textSectionTitleDisabledColor: '#B01425',
                    indicatorColor: '#B01425',
                }}

                renderItem={(item, firstItemInDay) => {
                    return <View style={styles.agenda}>
                        <FlatList
                            contentContainerStyle={styles.mainBodyContent}
                            data={listaEventos}
                            keyExtractor={item => item.idEvento}
                            renderItem={({ item }) => (
                                <View style={styles.flatItem}>
                                    <View style={styles.sotext}>
                                        <Text style={styles.Informa_Nome}>{"Evento: " + (item.nomeEvento)}</Text>
                                    </View>
                                    <View style={styles.Descri_line_pale}>
                                        <Text style={styles.Informa_Descr}>{(item.descricao)}</Text>
                                        <View style={styles.InformaLine}></View>
                                        <Text style={styles.Informa_Palest}>{"Palestrante: " + (item.palestrante)}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>;
                }}

                renderEmptyDate={() => {
                    return <View style={styles.agendaVazia} />;
                }}

            />
        </View>
    )
}



const styles = StyleSheet.create({
    main: {
        flex: 1,
        // flexDirection:"column",
        //backgroundColor: '#B01425'
    },
    Calendario: {
        backgroundColor: '#FFF',
        display: 'flex',
        marginTop: 90
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
    agenda: {
        //width: 230,
        //height: 40,
        //marginBottom: 10,
        //bottom:90,
        //fontSize: 18,
        //color: '#000',
        //borderBottomColor: '#FFF',
        borderBottomWidth: 1,
        //backgroundColor: '#232323'
    },
    agendaVazia: {
        borderBottomWidth: 1,
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
