

/////////////ATUALIZAR DESING/////////////




import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

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
            <Image source={require('../../assets/banner.png')} style={styles.imgbanner} resizeMode="contain"/>
            </View>
            <View style={styles.MenuCont}>
                <ScrollView style={styles.BolinhaAlinhada}>
                    <TouchableOpacity onPress={() => navigation.navigate('Evento')}>
                        <View style={styles.cobrindoimaEvt}>
                            <View style={styles.conEvt}>
                                <View style={styles.contEvtXt}>
                                    <Text style={styles.Txt}>EVENTOS</Text>
                                    <Text style={styles.TxtName}>TODOS SEUS EVENTOS PARA NÃO SE PERDER </Text>
                                </View>
                                <View>
                                    <ImageBackground style={styles.BolinhaEvt} source={require('../../assets/eventosimg.png')} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
                        <View style={styles.cobrindoimaCal}>
                            <View style={styles.contCLAtXt}>
                                <Text style={styles.Txt2}>CALENDARIO</Text>
                                <Text style={styles.TxtName2}>SEU CALENDARIO COM EVENTOS DIARIOS</Text>
                            </View>
                            <Image style={styles.BolinhaAgd} source={require('../../assets/agendaimg.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Documento')}>
                        <View style={styles.cobrindoimaDoc}>
                            <View style={styles.contDOCtXt}>
                                <Text style={styles.Txt3}>DOCUMENTO</Text>
                                <Text style={styles.TxtName3}>DOCUMENTOS DOS EVENTOS E DA EMPRESA</Text>
                            </View>
                            <Image style={styles.BolinhaDoc} source={require('../../assets/documentoimg.png')} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}




if (Dimensions.get('window').width > 700) {
    var styles = StyleSheet.create({
        main: {
            flex: 1,
            // flexDirection:"column",
            backgroundColor: '#2e2829'
        },
        Headermain: {
            // display: "flex",
            backgroundColor: '#2E2829',
           // backgroundColor: '#fff',
            borderBottomColor: '#2E2829',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 10,
            paddingLeft: 10,
            borderBottomWidth: 6,
        },
        imgbanner:{
            width: 790,
            height: 300,
           // backgroundColor: "green"
        },
    
        mainBanner: {
            width: '100%',
            height: '22%',
            backgroundColor: '#2e2829',
        },
        MenuCont: {
            height: '73%',
            display: "flex",
            width: "92%",
            flexDirection: 'column',
            alignItems: "center"
        },
        BolinhaAlinhada: {
            display: "flex",
            marginTop: 200,

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
            justifyContent: "space-around",
            // flexDirection: "row",
            backgroundColor: '#fff',
            marginBottom: 40,
            marginLeft: 30,
            width: 500,
            height: 160,
            // paddingLeft: 100,
            // paddingRight: 30,
            backgroundColor: "#AA1200",
        },
        Txt: {
            color: '#FFF',
            marginTop: 10,
            fontSize: 20,
           lineHeight: 23,
        },
        TxtName: {
            color: '#FFF',
            fontSize: 10,
            //backgroundColor: "green",
            width: 240,
            alignItems: "center",
        },
        conEvt: {
            width: 380,
            height: 150,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "blue"
        },
        contEvtXt: {
            //backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 90,
            height: 50,
            marginLeft: 30,
            marginBottom: 40
        },
        conEvt: {
            width: 454,
            height: 150,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            //backgroundColor: "blue"
        },
        contEvtXt: {
            //backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 99,
            height: 50,
            marginLeft: 90,
            marginBottom: 40
        },
        cobrindoimaCal: {
            borderRadius: 13,
            backgroundColor: '#fff',
            marginBottom: 40,
            marginLeft: 30,
            width: 500,
            height: 160,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            // paddingLeft: 100,
            // paddingRight: 30,
            backgroundColor: "#AA1200",
        },
        contCLAtXt:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 150,
            height: 37,
            marginLeft: 10,
            marginBottom: 40,
           // backgroundColor: "green"
        },
        Txt2: {
            color: '#FFF',
            marginTop: 10,
            fontSize: 20,
           lineHeight: 23,
           
        },
        TxtName2: {
            color: '#FFF',
            fontSize: 9,
            textAlign: 'center',
            //backgroundColor: "green",
            width: 240,
        },
    
        cobrindoimaDoc: {
            borderRadius: 13,
            backgroundColor: '#fff',
            marginBottom: 40,
            marginLeft: 30,
            width: 500,
            height: 160,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            // paddingLeft: 100,
            // paddingRight: 30,
            backgroundColor: "#AA1200",
        },
        contDOCtXt:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 150,
            height: 37,
            marginLeft: 10,
            marginBottom: 40,
           // backgroundColor: "green"
        },
        Txt3: {
            color: '#FFF',
            marginTop: 10,
            fontSize: 20,
           lineHeight: 23,
           
        },
        TxtName3: {
            color: '#FFF',
            fontSize: 9,
            textAlign: 'center',
            //backgroundColor: "green",
            width: 240,
        },
        
    });
  } else {
    var styles = StyleSheet.create({
        main: {
            flex: 1,
            // flexDirection:"column",
            backgroundColor: '#2e2829'
        },
        Headermain: {
            // display: "flex",
            backgroundColor: '#2E2829',
           // backgroundColor: '#fff',
            borderBottomColor: '#2E2829',
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
            backgroundColor: '#2e2829',
        },
        imgbanner:{
            width: 395
        },
        MenuCont: {
            height: '73%',
            display: "flex",
            width: "92%",
            flexDirection: 'column',
            alignItems: "center"
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
            justifyContent: "space-around",
            // flexDirection: "row",
            backgroundColor: '#fff',
            marginBottom: 40,
            marginLeft: 30,
            width: 320,
            height: 150,
            // paddingLeft: 100,
            // paddingRight: 30,
            backgroundColor: "#AA1200",
        },
        Txt: {
            color: '#FFF',
            marginTop: 10,
            fontSize: 20,
           lineHeight: 23,
        },
        TxtName: {
            color: '#FFF',
            fontSize: 10,
           // backgroundColor: "green",
            width: 110,
        },
        conEvt: {
            width: 300,
            height: 150,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "blue"
        },
        contEvtXt: {
            //backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 90,
            height: 50,
            marginLeft: 30,
            marginBottom: 40
        },
        conEvt: {
            width: 300,
            height: 150,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "blue"
        },
        contEvtXt: {
            //backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 90,
            height: 50,
            marginLeft: 30,
            marginBottom: 40
        },
        cobrindoimaCal: {
            borderRadius: 13,
            backgroundColor: '#fff',
            marginBottom: 40,
            marginLeft: 30,
            width: 320,
            height: 150,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            // paddingLeft: 100,
            // paddingRight: 30,
            backgroundColor: "#AA1200",
        },
        contCLAtXt:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 150,
            height: 37,
            marginLeft: 10,
            marginBottom: 40,
           // backgroundColor: "green"
        },
        Txt2: {
            color: '#FFF',
            marginTop: 10,
            fontSize: 20,
           lineHeight: 23,
           
        },
        TxtName2: {
            color: '#FFF',
            fontSize: 9,
            textAlign: 'center',
            //backgroundColor: "green",
            width: 178,
        },
    
        cobrindoimaDoc: {
            borderRadius: 13,
            backgroundColor: '#fff',
            marginBottom: 40,
            marginLeft: 30,
            width: 320,
            height: 150,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            // paddingLeft: 100,
            // paddingRight: 30,
            backgroundColor: "#AA1200",
        },
        contDOCtXt:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 150,
            height: 37,
            marginLeft: 10,
            marginBottom: 40,
           // backgroundColor: "green"
        },
        Txt3: {
            color: '#FFF',
            marginTop: 10,
            fontSize: 20,
           lineHeight: 23,
           
        },
        TxtName3: {
            color: '#FFF',
            fontSize: 9,
            textAlign: 'center',
            //backgroundColor: "green",
            width: 189,
        },
    });
  }


//   if (Dimensions.get('window').width > 700) {
//     var styles = StyleSheet.create({
  
//     });
//   } else {
//     var styles = StyleSheet.create({
     
//     });
//   }





// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         // flexDirection:"column",
//         backgroundColor: '#2e2829'
//     },
//     Headermain: {
//         // display: "flex",
//         backgroundColor: '#2E2829',
//        // backgroundColor: '#fff',
//         borderBottomColor: '#2E2829',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingRight: 10,
//         paddingLeft: 10,
//         borderBottomWidth: 6,
//     },

//     mainBanner: {
//         width: '100%',
//         height: '22%',
//         backgroundColor: '#2e2829',
//     },
//     MenuCont: {
//         height: '73%',
//         display: "flex",
//         width: "92%",
//         flexDirection: 'column',
//         alignItems: "center"
//     },
//     BolinhaAlinhada: {
//         display: "flex",
//         marginTop: 30,
//     },
//     BolinhaEvt: {
//         width: 120,
//         height: 80,
//         shadowOffset: { height: 1, width: 1 },
//         // flexDirection: "column"
//         // borderRadius: 50,
//         //backgroundColor: "#D0CFCF",
//     },
//     BolinhaAgd: {
//         width: 120,
//         height: 80,
//         shadowOffset: { height: 1, width: 1 },
//         // flexDirection: "column"
//         // borderRadius: 50,
//         //backgroundColor: "#D0CFCF",
//     },
//     BolinhaDoc: {
//         width: 90,
//         height: 90,
//         shadowOffset: { height: 1, width: 1 },
//         // flexDirection: "column"
//         // borderRadius: 50,
//         //backgroundColor: "#D0CFCF",
//     },


//     cobrindoimaEvt: {
//         borderRadius: 13,
//         display: "flex",
//         justifyContent: "space-around",
//         // flexDirection: "row",
//         backgroundColor: '#fff',
//         marginBottom: 40,
//         marginLeft: 30,
//         width: 320,
//         height: 150,
//         // paddingLeft: 100,
//         // paddingRight: 30,
//         backgroundColor: "#AA1200",
//     },
//     Txt: {
//         color: '#FFF',
//         marginTop: 10,
//         fontSize: 20,
//        lineHeight: 23,
//     },
//     TxtName: {
//         color: '#FFF',
//         fontSize: 10,
//        // backgroundColor: "green",
//         width: 110,
//     },
//     conEvt: {
//         width: 300,
//         height: 150,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         // backgroundColor: "blue"
//     },
//     contEvtXt: {
//         //backgroundColor: "blue",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: 90,
//         height: 50,
//         marginLeft: 30,
//         marginBottom: 40
//     },
//     conEvt: {
//         width: 300,
//         height: 150,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         // backgroundColor: "blue"
//     },
//     contEvtXt: {
//         //backgroundColor: "blue",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: 90,
//         height: 50,
//         marginLeft: 30,
//         marginBottom: 40
//     },
//     cobrindoimaCal: {
//         borderRadius: 13,
//         backgroundColor: '#fff',
//         marginBottom: 40,
//         marginLeft: 30,
//         width: 320,
//         height: 150,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         // paddingLeft: 100,
//         // paddingRight: 30,
//         backgroundColor: "#AA1200",
//     },
//     contCLAtXt:{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: 150,
//         height: 37,
//         marginLeft: 10,
//         marginBottom: 40,
//        // backgroundColor: "green"
//     },
//     Txt2: {
//         color: '#FFF',
//         marginTop: 10,
//         fontSize: 20,
//        lineHeight: 23,
       
//     },
//     TxtName2: {
//         color: '#FFF',
//         fontSize: 9,
//         textAlign: 'center',
//         //backgroundColor: "green",
//         width: 178,
//     },

//     cobrindoimaDoc: {
//         borderRadius: 13,
//         backgroundColor: '#fff',
//         marginBottom: 40,
//         marginLeft: 30,
//         width: 320,
//         height: 150,
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         // paddingLeft: 100,
//         // paddingRight: 30,
//         backgroundColor: "#AA1200",
//     },
//     contDOCtXt:{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: 150,
//         height: 37,
//         marginLeft: 10,
//         marginBottom: 40,
//        // backgroundColor: "green"
//     },
//     Txt3: {
//         color: '#FFF',
//         marginTop: 10,
//         fontSize: 20,
//        lineHeight: 23,
       
//     },
//     TxtName3: {
//         color: '#FFF',
//         fontSize: 9,
//         textAlign: 'center',
//         //backgroundColor: "green",
//         width: 189,
//     },
       
 
// })

