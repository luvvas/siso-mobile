import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SisoHeader from '../components/sisoHeader';

export default function SisoTriagemSolicitante({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <SisoHeader navigation={navigation} title="Triagem" />
      <ScrollView className="px-4 pt-4">
        <View className="mb-4 bg-white rounded-lg p-4 elevation-sm">
          <Text className="text-lg font-semibold mb-2">Detalhes da Solicitação</Text>
          <Text className="text-gray-700">Data da Solicitação: 15/10/2023</Text>
          <Text className="text-gray-700">Status: Pendente</Text>
        </View>

        <View className="mb-4 bg-white rounded-lg p-4 elevation-sm">
          <Text className="text-lg font-semibold mb-2">Como realizar a Triagem</Text>
          <Text className="text-gray-700">
            1. Dirija-se à Clínica Odontológica no endereço abaixo.
          </Text>
          <Text className="text-gray-700 mt-1">
            2. Apresente seu documento de identificação e CPF.
          </Text>
          <Text className="text-gray-700 mt-1">
            3. Aguarde ser chamado para a realização da triagem.
          </Text>
        </View>

        <View className="mb-4 bg-white rounded-lg p-4 elevation-sm">
          <Text className="text-lg font-semibold mb-2">Endereço da Clínica</Text>
          <Text className="text-gray-700">
            Rua das Flores, 123 - Centro
          </Text>
          <Text className="text-gray-700">
            Cidade - Estado, CEP 12345-678
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
