import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { CadastroProps } from "../navigation/HomeNavigator";
import { styles } from "../styles/styles";

const TelaCadastro = (props: CadastroProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarsenha] = useState('');

    function exibirCadastro() {
        if(senha == confirmarSenha){
            Alert.alert('Dados',
                 'Email: ' + email + 
                 '\nSenha: ' + senha + 
                 '\nConfirmar Senha:' + confirmarSenha
                )
                 props.navigation.navigate('TelaLogin');}else{
                    Alert.alert('Senha Diferente');
                 }  
        }
    

    return (



        <ScrollView>
            <Text style={styles.tituloPreto1}>Cadastre-se</Text>

            <View style={styles.container}>
                <Text>Seja Bem Vindo</Text>

                <Image
                    source={require('..//images/avatar.png')}
                    style={styles.imagem_200}
                />

                <Text style={styles.tituloPreto2}>Digite o Login</Text>
                <TextInput
                    style={[styles.caixa_texto1, styles.largura_70]}

                    defaultValue="Digite aqui o Login"

                    onChangeText={(text) => {
                        //Exibe o Nome no terminal
                        console.log(text);
                        setEmail(text);
                    }
                    }
                />

                <Text style={styles.tituloPreto2}>Digite a Senha</Text>
                <TextInput
                    style={[styles.caixa_texto2, styles.largura_70]}
                    defaultValue="Digite aqui a Senha"

                    onChangeText={(text) => {
                        //Exibe o Nome no terminal
                        console.log(text);
                        setSenha(text);
                    }
                    }
                />

                <Text style={styles.tituloPreto2}>Confirmar Senha</Text>
                <TextInput
                    style={[styles.caixa_texto2, styles.largura_70]}
                    defaultValue="Confirmar Senha"

                    onChangeText={(text) => {
                        //Exibe o Nome no terminal
                        console.log(text);
                        setSenha(text);
                    }
                    }
                />

                <View style={styles.botoesContainer}>
                    <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                        onPress={() => { exibirCadastro() }}>
                        <Text style={styles.tituloPreto3}> Cadastrar </Text>
                    </Pressable>


                    <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                        onPress={() => { exibirCadastro() }}>
                        <Text style={styles.tituloPreto3}> Salvar </Text>
                    </Pressable>


                    <Pressable
                        style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                        onPress={() => { props.navigation.goBack() }}>
                        <Text style={styles.tituloPreto3}>Cancelar</Text>
                    </Pressable>


                </View>

            </View>

        </ScrollView>


    );
}
export default TelaCadastro;






