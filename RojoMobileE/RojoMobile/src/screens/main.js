import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity } from 'react-native';

import api from '../services/api'

import AsyncStorage from '@react-native-async-storage/async-storage';
//import { baseFontSize } from "native-base/lib/typescript/theme/tools";

export default function Eventos() {
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
    }, [])




    return (
        <View style={styles.main}>
            <View style={styles.Headermain}>
            <TouchableOpacity onPress={() => navigation.openDrawer() }>
                <Image
                    source={require('../../assets/Menu_De_Hamburger.png')}
                    style={{ width: 50, height: 30, }}
                    resizeMode="contain"
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../../assets/RojoLogo.png')}
                        style={{ width: 60, height: 40, }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TelaUsuario')}>
                    <Image
                        source={require('../../assets/imagem_perfil.png')}
                        style={{ width: 60, height: 50, }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.mainBanner}>
            </View>
            <View style={styles.MenuCont}>
                <View style={styles.BolinhaAlinhada}>
                    <View style={styles.cobrindoima}>
                        <TouchableOpacity onPress={() => navigation.navigate('ListarEvt')}>
                            <ImageBackground style={styles.Bolinha} source={require('../../assets/Evento1.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
                            <Image style={styles.Bolinha} source={require('../../assets/Evento2.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={() => navigation.navigate('Documento')}>
                            <Image style={styles.Bolinha} source={require('../../assets/Evento3.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Nomes}>

                        <TouchableOpacity style={styles.Navigate1} onPress={() => navigation.navigate('ListarEvt')}>
                            <Text style={styles.Texto1} >Evento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
                            <Text style={styles.Texto2}>Agenda</Text>
                        </TouchableOpacity>


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
        // display: "flex",
        backgroundColor: '#fff',
        borderBottomColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 6,
    },

    mainBanner: {
        width: '100%',
        height: '22%',
        backgroundColor: '#D0CFCF',
    },
    MenuCont: {
        height: '73%',
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
        shadowOffset: { height: 1, width: 1 },
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

    Navigate1: {
        width: "17%",
        marginLeft: 39,
        //backgroundColor: "#DF1A30"

    },

    Navigate3: {
        width: "17%",
        marginLeft: 39,
        //backgroundColor: "#DF1A30"

    },

    Texto1: {
        textAlignVertical: "auto",
        textTransform: 'uppercase',
        color: "white",
    },

    Texto2: {
        marginLeft: 24,
        textTransform: 'uppercase',
        color: "white"
    },


    Texto3: {
        marginLeft: 30,
        textTransform: 'uppercase',
        color: "white"
    },

    cobrindoima: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
})