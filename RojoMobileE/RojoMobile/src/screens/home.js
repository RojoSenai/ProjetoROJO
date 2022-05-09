import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, View, TextInput, TouchableOpacity, Text, style } from 'react-native'
import api from '../services/api';
import jwtDecode from 'jwt-decode';
import { useNavigation } from "@react-navigation/native";

//import  { useSharedValue } from 'react-native-reanimated'; PARA FAZER GIRAR


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'matheusmarthis@drogasil.com',
      senha: '123456789',
    };
  }



  realizarLogin = async () => {

    console.warn(this.state.email + ' ' + this.state.senha);

    const resposta = await api.post('/Login', {
      email: this.state.email, //matheusmarthis@drogasil.com //DROGASIL 
      senha: this.state.senha, //123456789
    });

    console.warn('Requisição feita')

    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken', token);

    if (resposta.status == 200) {
      console.warn('Login foi Realizado');
      //this.props.navigation.navigate('');

      var tokenzinho = jwtDecode(token).role

      console.warn("chegou aqui " + tokenzinho)

      this.props.navigation.navigate('ListarEvt');

    }
  }
  render() {
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
              onChangeText={email => this.setState({ email })}
            />

            <TextInput
              style={styles.inputLogin}
              placeholder="Senha"
              placeholderTextColor="#fff"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={senha => this.setState({ senha })}
            />

            <TouchableOpacity
              style={styles.btnLogin}
              onPress={this.realizarLogin}>
              <Text style={styles.btnLoginText}>LOGIN</Text>
            </TouchableOpacity>

            {/* <Text style={styles.NameBottom}>Não tem Login? Faça Cadastro </Text> */}

          </View>
        </View>

      </ImageBackground>
    )
  }
};

const styles = StyleSheet.create({

  overlay: {
    ...StyleSheet.absoluteFillObject
  },

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
    color: '#000',
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
