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
import { baseFontSize } from "native-base/lib/typescript/theme/tools";

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
            <View style={styles.Headermain}></View>
            <View style={styles.mainBanner}>
            </View>
            <View style={styles.MenuCont}>
                <View style={styles.BolinhaAlinhada}>
                    <View style={styles.B}>
                        <Image style={styles.Bolinha} source={require('../../assets/Evento1.png')} />
                        <Image style={styles.Bolinha} source={require('../../assets/Evento2.png')} />
                        <Image style={styles.Bolinha} source={require('../../assets/Evento3.png')} />
                    </View>
                    <View style={styles.Nomes}>
                        <Text style={styles.Texto1}>Evento</Text>
                        <Text style={styles.Texto2}>Agenda</Text>
                        <Text style={styles.Texto3}>Documentos</Text>
                    </View>
                </View>


                {/* <View style={styles.BolinhaAlinhada}>
                    <View style={styles.Bolinha}></View>
                    <View style={styles.Bolinha}></View>
                    <View style={styles.Bolinha}></View>
                </View> */}
                {/* <View style={styles.BolinhaAlinhada}>
                    <View style={styles.Bolinha}></View>
                    <View style={styles.Bolinha}></View>
                    <View style={styles.Bolinha}></View>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // flexDirection:"column",
        backgroundColor: '#B01425'
    },
    Headermain: {
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
    },

    mainBanner: {
        width: '100%',
        height: '22%',
        backgroundColor: '#D0CFCF',
    },
    MenuCont: {
        //display: "flex",
        //flexDirection: "row" ,
        //alignItems: "center",
        height: '73%',
        //justifyContent: "space-evenly"
        display: "flex",
        flexDirection: 'column'
    },
    BolinhaAlinhada: {
        display: "flex",
        width: "100%",
        height: "93%",
        flexDirection: "column",
        marginTop: 40,
        // alignItems: "center",
        // justifyContent: "space-around",
        //backgroundColor: "green"
    },
    Bolinha: {
        width: 70,
        height: 70,
        // flexDirection: "column"
        // borderRadius: 50,
        //backgroundColor: "#D0CFCF",
    },

    Nomes: {
        width: "98%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    Texto1: {
        width: "17%",
        marginLeft: 38,
        textTransform: 'uppercase',
        color:"white"
    },

    
    Texto2: {
        marginLeft: 24,
        textTransform: 'uppercase',
        color:"white"
    },

    
    Texto3: {
        marginLeft: 30,
        textTransform: 'uppercase',
        color:"white"
    },

    B:{
        width: "100%",
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
})