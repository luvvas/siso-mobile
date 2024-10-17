import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type Props = {
    navigation: any;
    title: string;
}

export default function SisoHeader({ navigation, title }: Props) {
    return (
        <View className="mt-6 flex-row items-center justify-between p-4 bg-white shadow-md">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">{title}</Text>
        <View style={{ width: 24 }} />
      </View>
    );
}