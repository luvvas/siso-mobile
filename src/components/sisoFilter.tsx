import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

interface FilterComponentProps {
    selectedDate: Date;
    selectedStatus: string;
    onDateChange: (date: Date) => void;
    onStatusChange: (status: string) => void;
}

export default function SisoFilter({ selectedDate, selectedStatus, onDateChange, onStatusChange }: FilterComponentProps) {
    const [showDatePicker, setShowDatePicker] = useState(false);

    // Status options
    const statusOptions = ['Pendente', 'Concluído', 'Cancelado'];

    // Function to handle date change
    const handleDateChange = (event: any, date: Date | undefined) => {
        if (date) {
            onDateChange(date);  // Call the parent's function to set the date
        }
        if (Platform.OS === 'android') {
            setShowDatePicker(false);  // Close the picker on Android after selection
        }
    };

    // Function to display date in a formatted way
    const getFormattedDate = (date: Date) => {
        return date.toLocaleDateString();  // Adjust this format to your needs
    };

    return (
        <View className="mx-4 gap-2.5 flex-row justify-between">
            {/* Button for Date Picker */}
            <TouchableOpacity
                className="flex-1 mb-4 bg-gray-100 p-2 rounded-md flex-row items-center justify-between"
                onPress={() => setShowDatePicker(true)}
            >
                <Text className="text-gray-700">{getFormattedDate(selectedDate)}</Text>
                <Ionicons name="calendar" size={20} color="gray" />
            </TouchableOpacity>

            {/* Picker for Status */}
            <View className="flex-1 mb-4 bg-gray-100 rounded-md">
                <Picker
                    selectedValue={selectedStatus}
                    onValueChange={(itemValue) => onStatusChange(itemValue)}
                >
                    <Picker.Item label="Selecione o Status" value="" />
                    {statusOptions.map((status) => (
                        <Picker.Item key={status} label={status} value={status} />
                    ))}
                </Picker>
            </View>

            {/* DateTimePicker Component */}
            {showDatePicker && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
        </View>
    );
}
