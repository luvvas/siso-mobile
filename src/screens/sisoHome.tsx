import { View, Text, Button, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function SisoHome({ navigation }: any) {
    return (
        <View className="flex-1 bg-white">
            <View className="bg-[#0f172a] pt-10 px-6 justify-center items-center">
                <Image
                    source={require('../../assets/logo_colorida.png')}
                    className='w-44 h-44 z-50'
                    style={{ resizeMode: 'contain' }}
                />
            </View>
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
            <Button title="Registrar" onPress={() => navigation.navigate('Registrar')} />
            <Button title="Triagem Solicitante" onPress={() => navigation.navigate('TriagemSolicitante')} />
            <Button title="Triagem Técnico" onPress={() => navigation.navigate('TriagemTecnico')} />
            <StatusBar style="light" />
        </View>
    );
}