import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExercicioNota from '../components/ExercicioNota';
import ExemploEvento from '../components/ExemploEvento';
import ExemploState from '../components/ExemploState';
import ExemploConstrucaoCondicao from '../components/ExemploConstrucaoCondicao';

const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <View
            style={styles.tela}>
            {/* <Pressable
                style={{ backgroundColor: 'green' }}
                onPress={() => { props.navigation.goBack() }}>
                <Text style={{ fontSize: 40 }}>Voltar</Text>
            </Pressable>

            <ExemploEvento />
            <ExemploState /> */}
            <ExemploConstrucaoCondicao/>

        </View>
    );
}

export default TelaPrincipal;
