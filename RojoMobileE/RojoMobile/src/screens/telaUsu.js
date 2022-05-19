import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, Image, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

import api from '../services/api'
import jwtDecode from 'jwt-decode';

import AsyncStorage from '@react-native-async-storage/async-storage';
//import { baseFontSize } from "native-base/lib/typescript/theme/tools";

export default function UsuTela() {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [Idusu, setIdusu] = useState(0); 
    const navigation = useNavigation();

    async function BuscarUsuarios() {
        const token = await AsyncStorage.getItem('userToken');
        setIdusu(jwtDecode(token).role);
        const resposta = await api.get('/Usuario' + Idusu,  {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const dadosDaApi = resposta.data.listaUsuarios;

        setListaUsuarios(dadosDaApi)
        console.log(listaUsuarios)
        console.log("aqui")
    }

    useEffect(() => {
        BuscarUsuarios();
    }, [])



    async function Deslogar() {
        await AsyncStorage.removeItem('userToken');
        navigation.navigate('Home')
    }


    return (
        <View style={styles.main}>
            <View style={styles.Headermain}>
                <Image
                    source={require('../../assets/Menu_De_Hamburger.png')}
                    style={{ width: 50, height: 30, }}
                    resizeMode="contain"
                />
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
            <FlatList
                data={listaUsuarios}
                keyExtractor={item => item.idusuario}
                renderItem={({ item }) => (
                    <View style={styles.Todos}>
                        <Image
                            source={require('../../assets/imagem_perfil.png')}
                            style={styles.ImgUsu}
                            resizeMode="contain" />
                        <View style={styles.Nome} >
                            <Text style={styles.NomeEmail}>{"Nome: " + (item.nomeUsu)}</Text>
                        </View>
                        <View style={styles.Email} >
                            <Text style={styles.NomeEmail}>{"Email: " + (item.email)}</Text>
                        </View>
                        <View style={styles.btnEditar}>
                            <Text>EDITAR</Text>
                        </View>
                        <View style={styles.Sair}>
                            <TouchableOpacity
                                onPress={Deslogar}
                                style={styles.btnSair}>
                                <Text
                                    style={styles.btnSairText}>{"SIM"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                )}
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
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ImgUsu: {
        marginTop: 60,
        marginBottom: 30,
    }
})