import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import TelaLogin from "../layouts/TelaLogin";
import TelaCadastro from "../layouts/TelaCadastro";
import TelaSecundaria from "../layouts/TelaSecundaria";
import ExemploCalculo from "../components/ExemploCalculo";
import Apresentacao from "../layouts/Apresentacao";
import TelaCadPaciente from "../layouts/TelaCadPaciente";
import TelaInterativa from "../layouts/TelaInterativa";
import TelaCadastroProduto from "../layouts/TelaCadProdutos";
import TelaCadProdutos from "../layouts/TelaCadProdutos";


type RootStackParamList = {
    TelaPrincipal: undefined;
    TelaLogin: undefined;
    TelaCadastro: undefined;
    TelaSecundaria: undefined;
    ExemploCalculo: undefined;
    Apresentacao: { valor: number };
    TelaCadPaciente: undefined;
    TelaInterativa: undefined;
    TelaCadProdutos: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaLogin"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
            <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
            <Stack.Screen name="TelaSecundaria" component={TelaSecundaria} />
            <Stack.Screen name="Apresentacao" component={Apresentacao} />
            <Stack.Screen name="TelaCadPaciente" component={TelaCadPaciente} />
            <Stack.Screen name="TelaInterativa" component={TelaInterativa} />
            <Stack.Screen name="TelaCadProdutos" component={TelaCadProdutos} />

        </Stack.Navigator>

    );
}

type PrincipalProps = NativeStackScreenProps<RootStackParamList,
    'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList,
    'TelaLogin'>;

type CadastroProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadastro'>;

type SecundariaProps = NativeStackScreenProps<RootStackParamList,
    'TelaSecundaria'>;

type CalculoProps = NativeStackScreenProps<RootStackParamList,
    'ExemploCalculo'>;

type ApresentacaoProps = NativeStackScreenProps<RootStackParamList,
    'Apresentacao'>;

type CadPacienteProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadPaciente'>;

type InterativaProps = NativeStackScreenProps<RootStackParamList,
    'TelaInterativa'>;

type ProdutoProps = NativeStackScreenProps<RootStackParamList,
    'TelaCadProdutos'>;




export default HomeNavigator;
export type {
    PrincipalProps,
    LoginProps,
    CadastroProps,
    SecundariaProps,
    CalculoProps,
    ApresentacaoProps,
    CadPacienteProps,
    InterativaProps,
    ProdutoProps,
};