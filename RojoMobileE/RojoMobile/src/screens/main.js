

/////////////ATUALIZAR DESING/////////////




import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

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
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
                <TouchableOpacity onPress={() => navigation.navigate('Usuario')}>
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
                <ScrollView style={styles.BolinhaAlinhada}>
                    <View style={styles.cobrindoimaEvt}>
                        <TouchableOpacity onPress={() => navigation.navigate('Evento')}>
                            <View style={styles.con}>
                                <View style={styles.contTxt}>
                                    <Text style={styles.Txt}>EVENTOS</Text>
                                </View>
                                <View>
                                    <ImageBackground style={styles.BolinhaEvt} source={require('../../assets/eventosimg.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cobrindoimaCal}>
                        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
                            <Text style={styles.Txt}>CALENDARIO</Text>
                            <Image style={styles.BolinhaAgd} source={require('../../assets/agendaimg.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cobrindoimaDoc}>
                        <TouchableOpacity onPress={() => navigation.navigate('Documento')}>
                            <Text style={styles.Txt}>DOCUMENTO</Text>
                            <Image style={styles.BolinhaDoc} source={require('../../assets/documentoimg.png')} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        marginTop: 30,
    },
    BolinhaEvt: {
        width: 120,
        height: 80,
        shadowOffset: { height: 1, width: 1 },
        // flexDirection: "column"
        // borderRadius: 50,
        //backgroundColor: "#D0CFCF",
    },
    BolinhaAgd: {
        width: 120,
        height: 80,
        shadowOffset: { height: 1, width: 1 },
        // flexDirection: "column"
        // borderRadius: 50,
        //backgroundColor: "#D0CFCF",
    },
    BolinhaDoc: {
        width: 90,
        height: 90,
        shadowOffset: { height: 1, width: 1 },
        // flexDirection: "column"
        // borderRadius: 50,
        //backgroundColor: "#D0CFCF",
    },


    cobrindoimaEvt: {
        borderRadius: 13,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: '#fff',
        marginBottom: 40,
        marginLeft: 30,
        width: 300,
        height: 150,
        paddingLeft: 100,
        paddingRight: 30,
        backgroundColor: "#710B0B"
    },
    cobrindoimaCal: {
        borderRadius: 13,
        backgroundColor: '#fff',
        marginBottom: 40,
        marginLeft: 30,
        width: 300,
        height: 150,
        paddingLeft: 100,
        paddingRight: 30,
        backgroundColor: '#A13D3D'
    },
    cobrindoimaDoc: {
        borderRadius: 13,
        backgroundColor: '#fff',
        marginBottom: 40,
        marginLeft: 30,
        width: 300,
        height: 150,
        paddingLeft: 100,
        paddingRight: 30,
        backgroundColor: '#075668'
    },
    Txt: {
        color: '#FFF',
        marginTop: 30
    },
    contTxt: {
        backgroundColor: "blue",
        width: 90
    },
    con: {
        display: "flex",
        justifyContent: "space-between"
    }
})
