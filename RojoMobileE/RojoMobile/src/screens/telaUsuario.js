import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';

import api from '../services/api'
import jwtDecode from 'jwt-decode';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelaUsuario() {
    const [Usuario, setUsuario] = useState({});
    const [IdUsu, setIdUsu] = useState(0)
    const navigation = useNavigation()

    async function BuscarUsuario() {
        const token = await AsyncStorage.getItem('userToken');
        setIdUsu(jwtDecode(token).role)
        await api.get('/Usuarios/' + IdUsu, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((resposta) => {
                console.warn(resposta.data)
                const dadosDaApi = resposta.data;
                setUsuario(dadosDaApi)
            })
    }

    async function Deslogar() {
        await AsyncStorage.removeItem('userToken');
        navigation.navigate('Home')
    }

    useEffect(() => {
        BuscarUsuario();
    }, {})

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

            <View style={styles.Todos}>
                {/* ?<View style={styles.ImageNome}> */}
                    <Image
                        source={require('../../assets/imagem_perfil.png')}
                        style={styles.ImgUsu}
                        resizeMode="contain" />
                    <View style={styles.Nome} >
                        <Text style={styles.NomeEmail}>{"Nome: " + (Usuario.nomeUsu)}</Text>
                    </View>
                {/* </View> */}
                <View style={styles.Email} >
                    <Text style={styles.NomeEmail}>{"Email: " + (Usuario.email)}</Text>
                </View>
                {/* <View style={styles.btnEditar}>
                            <Text>EDITAR</Text>
                        </View> */}
                <View style={styles.Sair}>
                    <TouchableOpacity
                        onPress={Deslogar}
                        style={styles.btnSair}>
                        <Text
                            style={styles.btnSairText}>{"Sair"}
                        </Text>
                    </TouchableOpacity>
                </View>
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
    Todos: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: 'blue',
        height: 570,
        //flexDirection: 'row',
    },
    ImageNome:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ImgUsu: {
        height: 90,
        width: 100,

    },
    Nome: {
        display: "flex",
    },
    NomeEmail: {
        color: "#fff",
        marginLeft: 10
    },
    btnSair:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 110,
        marginTop: 30,
        backgroundColor: '#B01425',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 9,
        shadowOffset: { height: 1, width: 1 },
    },
    btnSairText: {
        fontSize: 17,
        //fontFamily: 'Sarabun',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1, //espacamento entre as letras
        textTransform: "uppercase"
    }
})
