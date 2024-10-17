import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SisoHeader from '../components/sisoHeader';
import SisoModal from '../components/sisoModal';
import SisoFilter from '../components/sisoFilter';
import { StatusBar } from 'expo-status-bar';

const triagensPendentes = [
    { id: '1', data: '12/10/2023', nome: 'João Silva', status: 'Pendente' },
    { id: '2', data: '14/10/2023', nome: 'Maria Oliveira', status: 'Pendente' },
    { id: '3', data: '15/10/2023', nome: 'Carlos Souza', status: 'Pendente' },
    // Adicione mais dados de triagens conforme necessário
];

export default function SisoTriagemTecnico({ navigation }: any) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedStatus, setSelectedStatus] = useState('');
    const [filteredData, setFilteredData] = useState(triagensPendentes);
    const [searchData, setSearchData] = useState({
        nome: '',
    });

    // Função para realizar a filtragem parcial de texto
    const handleFilter = () => {
        const { nome } = searchData;
        const filtered = triagensPendentes.filter(triagem => {
            const matchesDate = selectedDate ? triagem.data === selectedDate.toLocaleDateString() : true;
            const matchesNome = nome === '' || triagem.nome.toLowerCase().includes(nome.toLowerCase());
            const matchesStatus = selectedStatus === '' || triagem.status.toLowerCase() === selectedStatus.toLowerCase();

            return matchesDate && matchesNome && matchesStatus;
        });
        setFilteredData(filtered);
    };

    // Renderizar item da lista
    const renderItem = ({ item }: any) => (
        <View className='rounded-lg elevation-sm'>
            <View className="flex-row justify-between p-4 bg-white">
                <View>
                    <View className='flex-row gap-2.5'>
                        <Text className="text-lg font-semibold">{item.nome}</Text>
                        <Text className="text-center text-white bg-blue-500 py-0.5 px-2 rounded-full">{item.status}</Text>
                    </View>
                    <Text className="text-gray-700">{item.data}</Text>
                </View>
                <TouchableOpacity className="bg-green-500 p-2 rounded-md" onPress={() => {/* Ação para realizar triagem */ }}>
                    <Ionicons name="checkmark-done" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <StatusBar style='dark' />
            <SisoHeader navigation={navigation} title={'Triagem'} />
            <View className="px-4 pt-4">
                <View className="mb-4 bg-white rounded-lg p-4 elevation-sm">
                    <View className="flex-row justify-between space-x-2">
                        <TextInput
                            className="flex-1 bg-gray-100 p-1 px-4 rounded-md"
                            placeholder="Pesquisar por Nome"
                            value={searchData.nome}
                            onChangeText={(text) => setSearchData({ ...searchData, nome: text })}
                        />
                        {/* Botão para abrir drawer */}
                        <TouchableOpacity
                            className="bg-gray-100 p-2 rounded-md"
                            onPress={() => setModalVisible(true)}
                        >
                            <Ionicons name="filter" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 16 }}
                ListEmptyComponent={() => (
                    <Text className="text-center text-gray-700 mt-6">Não existem triagens pendentes de realização.</Text>
                )}
            />

            <SisoModal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
                <Text className="text-lg font-semibold mb-4">Filtros</Text>
                <SisoFilter 
                    selectedDate={selectedDate} 
                    selectedStatus={selectedStatus} 
                    onDateChange={setSelectedDate} 
                    onStatusChange={setSelectedStatus} 
                />
                <TouchableOpacity className="bg-blue-500 p-2 rounded-md" onPress={() => {
                    handleFilter();
                    setModalVisible(false);
                }}>
                    <Text className="text-white text-center">Aplicar Filtros</Text>
                </TouchableOpacity>
            </SisoModal>
        </SafeAreaView >
    );
}
