import React from 'react';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1, { message: 'Nome é obrigatório' }),
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
    confirmPassword: z.string().min(6, { message: 'Confirme sua senha' }),
});

type FormData = z.infer<typeof schema>;

export default function SisoRegistrar({ navigation }: any) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <View className="flex-1 bg-white">
            <View className="bg-[#0f172a] pt-10 px-6 justify-center items-center">
                <Image
                    source={require('../../assets/logo_colorida.png')}
                    className='w-44 h-44 z-50'
                    style={{ resizeMode: 'contain' }}
                />
            </View>
            <View className="flex-1 justify-center px-6">
                <View className='mb-6'>
                    <Text className="text-3xl font-semibold">Registrar</Text>
                </View>
                <View className="mb-4">
                    <TextInput
                        placeholder="Nome"
                        placeholderTextColor="#6b7280"
                        onChangeText={(text) => setValue('name', text)}
                        {...register('name')}
                        className="bg-white rounded-md p-3 border border-gray-300"
                    />
                    {errors.name && <Text className="text-red-500 text-xs mt-1">{errors.name.message}</Text>}
                </View>
                <View className="mb-4">
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#6b7280"
                        onChangeText={(text) => setValue('email', text)}
                        {...register('email')}
                        className="bg-white rounded-md p-3 border border-gray-300"
                    />
                    {errors.email && <Text className="text-red-500 text-xs mt-1">{errors.email.message}</Text>}
                </View>
                <View className="mb-4">
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor="#6b7280"
                        secureTextEntry
                        onChangeText={(text) => setValue('password', text)}
                        {...register('password')}
                        className="bg-white rounded-md p-3 border border-gray-300"
                    />
                    {errors.password && <Text className="text-red-500 text-xs mt-1">{errors.password.message}</Text>}
                </View>
                <View className="mb-4">
                    <TextInput
                        placeholder="Confirme a Senha"
                        placeholderTextColor="#6b7280"
                        secureTextEntry
                        onChangeText={(text) => setValue('confirmPassword', text)}
                        {...register('confirmPassword')}
                        className="bg-white rounded-md p-3 border border-gray-300"
                    />
                    {errors.confirmPassword && <Text className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</Text>}
                </View>
                <TouchableOpacity
                    className="bg-[#84cc16] py-4 rounded-lg mb-4"
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text className="text-center text-white text-lg font-semibold">Registrar</Text>
                </TouchableOpacity>
                <View className="flex-row justify-center mt-6">
                    <Text className="text-sm text-gray-400">Já tem uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="text-[#3b82f6] text-sm">Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
