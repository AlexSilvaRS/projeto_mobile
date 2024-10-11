import { ScrollView, StyleSheet } from "react-native";
import ExercicioNota from "../components/ExercicioNota";

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white'
    },
    titulo3: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
    },

    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    texto_botao: {
        fontSize: 20,
        color: 'white'
    },

    caixa_texto: {
        color: 'white',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'white',
        alignItems: 'center',
        margin: 3
    },

    largura_70: {
        width: '70%'
    },

    imagem_200: {
        width: 200,
        height: 200
    },

    container: {
        alignItems: 'center'
    },

    botoesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Caso queira adicionar espaçamento entre os botões
        padding: 20,
    },

    exercicioNota: {
        alignItems: 'center',
        marginTop: 20,
    },

    click:{
        opacity: 0.5
    }

});







export { styles };