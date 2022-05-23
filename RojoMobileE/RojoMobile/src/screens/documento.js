import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';



export default function App() {
    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://pdfteste.s3.amazonaws.com/Curr%C3%ADculo.pdf');
        setResult(result);
    };
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

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={_handlePressButtonAsync}>
                    <Text style={styles.btnLoginText}>DOCUMENTAÇÃO</Text>
                </TouchableOpacity>
                <Text style={styles.btnLoginText2}>DOCUMENTAÇÃO DO EVENTO </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#B01425',
    },
    btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 130,
        backgroundColor: '#B01425',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        bottom: 80,
        marginTop: 90,
        shadowOffset: { height: 1, width: 1 },
    },
    btnLoginText: {
        fontSize: 12,
        fontStyle: 'normal',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    btnLoginText2: {
        marginBottom: 90,
        fontSize: 12,
        fontStyle: 'normal',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
    }
});
