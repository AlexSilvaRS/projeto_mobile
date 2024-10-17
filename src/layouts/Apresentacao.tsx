import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { ApresentacaoProps, PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';

import Exemplo1 from '../components/Exemplo1';
import ExercicioNota from '../components/ExercicioNota';
import ExemploEvento from '../components/ExemploEvento';
import ExemploState from '../components/ExemploState';
import ExemploConstrucaoCondicao from '../components/ExemploConstrucaoCondicao';
import { useNavigation } from '@react-navigation/native';
import ExemploCalculo from '../components/ExemploCalculo';
import ExemploStylesView from '../components/ExemploStyleView';

const Apresentacao = (props: ApresentacaoProps) => {
    const showAlert = () => {
        Alert.alert (props.route.params.valor.toString());
    }
    return (
        
        <View style={styles.container}>
           {
            props.route.params.valor == 1 &&
            <ExemploCalculo valor1={3} valor2={2}/>
           }

           {
             props.route.params.valor == 2 &&
             <ExemploEvento/>
           }

           {
            props.route.params.valor == 3 &&
            <ExemploState/>
           }

           {
            props.route.params.valor == 4 &&
            <ExemploStylesView/>
           }

           {
            props.route.params.valor == 5 &&
            <ExemploConstrucaoCondicao/>
           }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Apresentacao;
