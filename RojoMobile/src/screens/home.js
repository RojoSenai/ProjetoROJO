//AQUI FICARA O LOGIN

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
//import { StyleSheet, ImageBackground, View, TextInput, TouchableOpacity, Text } from 'react-native'
import api from '../services/api';
import jwtDecode from 'jwt-decode';


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

      console.warn(jwtDecode(token).role);

      var tokenzinho = jwtDecode(token).role

      console.warn("chegou aqui" + tokenzinho)

      }
    }
    render() {
        return (
          <ImageBackground
    
            source={require('../../assets/Mobile_Login.png')}
            style={StyleSheet.absoluteFillObject}>
    
    
            <View style={StyleSheet.absoluteFillObject}>
              <View style={styles.main}>
    
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
      
        mainImgLogin: {
          height: 105,
          width: 110, 
          margin: 60, //espacamento em todos os lados,menos pra cima.
          marginTop: 0, // tira espacamento pra cima
        },
      
        inputLogin: {
          width: 230,
          height: 40,
          marginBottom: 40,
          fontSize: 18,
          color: '#000',
          borderBottomColor: '#FFF',
          borderBottomWidth: 2,
          backgroundColor: '#FFF'
        },
      
        btnLoginText: {
          fontSize: 12, 
          fontFamily: 'Sarabun', 
          fontStyle: 'normal',
          fontWeight: 'bold',
          color: '#000',
          letterSpacing: 1, //espacamento entre as letras
          textTransform: 'uppercase', //estilo maiusculo
        },
        btnLogin: {
          alignItems: 'center',
          justifyContent: 'center',
          height: 30,
          width: 100,
          backgroundColor: '#3DC874',
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 4,
          shadowOffset: { height: 1, width: 1 },
        },
      });
