import React, { useState, useEffect } from "react";

import {
    StyleSheet,
    Text,
    Image,
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

        const dadosDaApi = resposta.data;

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
                            <View style={styles.Nome_Imagem}>
                            <Text style={styles.Informa_Nome}>{"Evento: " + (item.nomeEvento)}</Text>
                                <Image style={styles.LogoRojo} source={require('../../assets/RojoLogo.png')} />
                            </View>
                            <View style={styles.Descri_line_pale}>
                                <Text style={styles.Informa_Descr}>{ (item.descricao)}</Text>
                                <View style={styles.InformaLine}></View>
                                <Text style={styles.Informa_Palest}>{"Palestrante: " + (item.palestrante)}</Text>
                            </View>
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
        backgroundColor: '#9E0000'
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
        paddingTop: 5,
        paddingRight: 80,
        paddingLeft: 20,
    },
    flatItem: {
        borderRadius: 13,
        backgroundColor: '#fff',
        marginTop: 40,
        width: 320,
        height:230,
        flexDirection: "row",
        paddingLeft:10,
        paddingRight:10,
    },

    Nome_Imagem: {
        width: "50%",
        display: "flex",
        //backgroundColor: "blue"
    },

    Descri_line_pale: {
        width: "50%",
        display: "flex",
       // backgroundColor: "green"
    },

    LogoRojo: {
        marginRight: 90,
        
        
    },

    Informa_Nome: {
        fontSize: 18,
        color: '#9E0000',
        lineHeight: 23,
        // fontFamily: 'TitilliumWeb-Regular',
    },
    InformaLine: {
        width: 150,
        borderBottomColor: '#9E0000',
        borderBottomWidth: 1,
        top: 39
    },
    Informa_Palest: {
        fontSize: 14,
        color: '#000',
        lineHeight: 24,
        top:38
        // fontFamily: 'TitilliumWeb-Regular',
    },
    Informa_Descr: {
        fontSize: 14,
        color: '#000',
        lineHeight: 24,
        top: 28
        // fontFamily: 'TitilliumWeb-Regular',
    }
})