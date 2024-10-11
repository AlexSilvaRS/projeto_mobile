import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import HelloWorld from '../components/HelloWorld';
import { styles } from '../styles/styles';
import Exemplo1 from '../components/Exemplo1';
import ExercicioNota from '../components/ExercicioNota';
import ExemploEvento from '../components/ExemploEvento';
import ExemploState from '../components/ExemploState';

const TelaPrincipal = (props: PrincipalProps) => {
    return (
        <View
            style={styles.tela}>
            {/* <HelloWorld />
            <Exemplo1/>
            
            <ExercicioNota
                        nome={'Alex'}
                        nota1={4}
                        nota2={4}
                            /> */}
            <ExemploEvento/>
            <ExemploState/>
            
        </View>
    );
}

export default TelaPrincipal;
