import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, Image, View, TextInput, TouchableOpacity, Text, style, Dimensions } from 'react-native'
import api from '../services/api';
import jwtDecode from 'jwt-decode';
import { useNavigation } from "@react-navigation/native";


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation()
    
    // 123456789
    // matheusmarthis@drogasil.com

    realizarLogin = async() => {
      const resposta = await api.post('/Login', {
            email: email,
            senha: senha,
        });
        const token = resposta.data.token;
    
        await AsyncStorage.setItem('userToken', token)

        if (resposta.status == 200) {
            navigation.navigate('Main')
        }
    };

    return (
      <ImageBackground
      
      source={require('../../assets/Mobile_Login_De_Usuario.png')}
      style={StyleSheet.absoluteFillObject}>


        <View style={StyleSheet.absoluteFillObject}>
          <View style={styles.main}>

            <View style={styles.viewimg}>
              <Image style={styles.LogoRojo} source={require('../../assets/RojoLogo.png')} />
              <Image style={styles.Logoletra} source={require('../../assets/letras.png')} />
            </View>

            <TextInput
              style={styles.inputLogin}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
            />

            <TextInput
              style={styles.inputLogin}
              placeholder="Senha"
              placeholderTextColor="#fff"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(senha) => setSenha(senha)}
            />

            <TouchableOpacity
              style={styles.btnLogin}
              onPress={realizarLogin}>
              <Text style={styles.btnLoginText}>LOGIN</Text>
            </TouchableOpacity>

            {/* <Text style={styles.NameBottom}>Não tem Login? Faça Cadastro </Text> */}

          </View>
        </View>

      </ImageBackground>
    )
  };



  if (Dimensions.get('window').width > 700) {
    var styles = StyleSheet.create({
  
      main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      
      viewimg: {
        //backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        },
        
      LogoRojo: {
        //position: 'absolute',
        top: 40,
        //right: 10,
        height: 111,
        width: 99,
      },
    
      Logoletra: {
        //position: 'relative',
        height: 180,
        width: 180,
        bottom: 110,
      },
    
      mainImgLogin: {
        height: 105,
        width: 110,
        margin: 60, //espacamento em todos os lados,menos pra cima.
        marginTop: 4, // tira espacamento pra cima
      },
    
      inputLogin: {
        width: 230,
        height: 40,
        marginBottom: 10,
        bottom:90,
        fontSize: 18,
        color: '#fff',
        borderBottomColor: '#FFF',
        borderBottomWidth: 2,
        backgroundColor: '#232323'
      },
    
      btnLoginText: {
        fontSize: 17,
        //fontFamily: 'Sarabun',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1, //espacamento entre as letras
        textTransform: 'uppercase', //estilo maiusculo
      },
      btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 130,
        backgroundColor: '#232323',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 9,
        bottom: 80,
        shadowOffset: { height: 1, width: 1 },
      },
    
      NameBottom: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 26,
        width: 200,
        color: '#fff',
        marginTop: 4,
        bottom:70,
        //backgroundColor: '#232323',
      },
    });
  } else {
    var styles = StyleSheet.create({
      main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      
      viewimg: {
        //backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        },
        
      LogoRojo: {
        //position: 'absolute',
        top: 40,
        //right: 10,
        height: 111,
        width: 99,
      },
    
      Logoletra: {
        //position: 'relative',
        height: 180,
        width: 180,
        bottom: 110,
      },
    
      mainImgLogin: {
        height: 105,
        width: 110,
        margin: 60, //espacamento em todos os lados,menos pra cima.
        marginTop: 4, // tira espacamento pra cima
      },
    
      inputLogin: {
        width: 230,
        height: 40,
        marginBottom: 10,
        bottom:90,
        fontSize: 18,
        color: '#fff',
        borderBottomColor: '#FFF',
        borderBottomWidth: 2,
        backgroundColor: '#232323'
      },
    
      btnLoginText: {
        fontSize: 17,
        //fontFamily: 'Sarabun',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1, //espacamento entre as letras
        textTransform: 'uppercase', //estilo maiusculo
      },
      btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 130,
        backgroundColor: '#232323',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 9,
        bottom: 80,
        shadowOffset: { height: 1, width: 1 },
      },
    
      NameBottom: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 26,
        width: 200,
        color: '#fff',
        marginTop: 4,
        bottom:70,
        //backgroundColor: '#232323',
      },
    });
  }







// const styles = StyleSheet.create({
 
  
//   overlay: {
//     ...StyleSheet.absoluteFillObject
//   },
  
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//   },
  
//   viewimg: {
//     //backgroundColor: '#FFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     },
    
//   LogoRojo: {
//     //position: 'absolute',
//     top: 40,
//     //right: 10,
//     height: 111,
//     width: 99,
//   },

//   Logoletra: {
//     //position: 'relative',
//     height: 180,
//     width: 180,
//     bottom: 110,
//   },

//   mainImgLogin: {
//     height: 105,
//     width: 110,
//     margin: 60, //espacamento em todos os lados,menos pra cima.
//     marginTop: 4, // tira espacamento pra cima
//   },

//   inputLogin: {
//     width: 230,
//     height: 40,
//     marginBottom: 10,
//     bottom:90,
//     fontSize: 18,
//     color: '#fff',
//     borderBottomColor: '#FFF',
//     borderBottomWidth: 2,
//     backgroundColor: '#232323'
//   },

//   btnLoginText: {
//     fontSize: 17,
//     //fontFamily: 'Sarabun',
//     fontStyle: 'normal',
//     fontWeight: 'bold',
//     color: '#fff',
//     letterSpacing: 1, //espacamento entre as letras
//     textTransform: 'uppercase', //estilo maiusculo
//   },
//   btnLogin: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 50,
//     width: 130,
//     backgroundColor: '#232323',
//     borderColor: '#fff',
//     borderWidth: 5,
//     borderRadius: 9,
//     bottom: 80,
//     shadowOffset: { height: 1, width: 1 },
//   },

//   NameBottom: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 26,
//     width: 200,
//     color: '#fff',
//     marginTop: 4,
//     bottom:70,
//     //backgroundColor: '#232323',
//   },

// });


