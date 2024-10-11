import { Alert, Image, ImageBackground, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import ExercicioNota from "../components/ExercicioNota";
import { useState } from "react";


const Exemplo8 = () => {
    //variável
    let url = 'https://reactnative.dev/docs/assets/p_cat2.png';
    //O retorno da função é o que será construído em tela

    // States para mostra nome e email
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function exibirMensagem() {
        Alert.alert('Dados', 'Email: ' + email + '\nSenha: ' + senha);
    }

    return (

        <ImageBackground
            source={require('..//images/super-mario.jpg')}
            style={{ flex: 1 }}
        >
            <ScrollView>
                <Text style={styles.titulo1}>Bem Vindo a o Game</Text>

                <View style={styles.container}>
                    <Text>Seja Bem Vindo</Text>

                    <Image
                        source={require('..//images/avatar.png')}
                        style={styles.imagem_200}
                    />

                    <Text style={styles.titulo2}>Digite o Login</Text>
                    <TextInput
                        style={[styles.caixa_texto, styles.largura_70]}
                        defaultValue="Digite aqui o Login"

                        onChangeText={(text) => {
                            //Exibe o Nome no terminal
                            console.log(text);
                            setEmail(text);
                        }
                        }
                    />

                    <Text style={styles.titulo2}>Digite a Senha</Text>
                    <TextInput
                        style={[styles.caixa_texto, styles.largura_70]}
                        defaultValue="Digite aqui a Senha"

                        onChangeText={(text) => {
                            //Exibe o Nome no terminal
                            console.log(text);
                            setSenha(text);
                        }
                        }
                    />

                    <View style={styles.botoesContainer}>
                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                            onPress={() => { exibirMensagem() }}>

                            <Text style={styles.titulo3}> Entrar </Text>
                        </Pressable>

                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}>
                            <Text style={styles.titulo3}> Cadastrar </Text>
                        </Pressable>

                        <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}>
                            <Text style={styles.titulo3}>Esqueceu a Senha?</Text>
                        </Pressable>

                    </View>



                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 20 }}>
                    <Text style={styles.titulo2}>Todos direitos à Alex.Silva</Text>
                </View>



            </ScrollView>
        </ImageBackground>



    );
};

export default Exemplo8;

