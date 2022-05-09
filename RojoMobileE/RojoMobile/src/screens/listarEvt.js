import React, { useState, useEffect } from "react";

import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import api from '../services/api'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Eventos() {
    const [listaEventos, setListaEventos] = useState([]);


    async function BuscarEventos() {
        const token = await AsyncStorage.getItem('userToken');

        const resposta = await api.get('/Evento', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const dadosDaApi = resposta.data.listaEventos;

        setListaEventos(dadosDaApi)
    }

    useEffect(() => {
        BuscarEventos();
    }, [])

    return (
        <View style={styles.main}>
            <View style={styles.mainHeader}>
                <Text style={styles.mainHeaderText}>{'EVENTOS'}</Text>
                <View style={styles.mainHeaderLine}></View>
            </View>
            <View style={styles.mainBody}>
                <FlatList
                    contentContainerStyle={styles.mainBodyContent}
                    data={listaEventos}
                    keyExtractor={item => item.idEvento}
                    renderItem={({ item }) => (
                        <View style={styles.flatItem}>
                            <Text style={styles.flatItemInfo}>{"Nome Evento: " + (item.nomeEvento)}</Text>
                            <Text style={styles.flatItemInfo}>{"Palestrante: " + (item.palestrante)}</Text>
                            <Text style={styles.flatItemInfo}>{"descricao do evento: " + (item.descricao)}</Text>
                        </View>

                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#B01425'
    },
    mainHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainHeaderText: {
        //fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        color: '#fff',
        letterSpacing: 5
    },
    mainHeaderLine: {
        width: 220,
        paddingTop: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    mainBody: {
        flex: 4,
    },
    mainBodyContent: {
        paddingTop: 10,
        paddingRight: 50,
        paddingLeft: 50,
    },
    flatItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        marginTop: 40,
    },
    flatItemInfo: {
        fontSize: 14,
        color: '#DF1A30',
        lineHeight: 24,
       // fontFamily: 'TitilliumWeb-Regular',
    }
})