import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

interface SisoModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const SisoModal: React.FC<SisoModalProps> = ({ isVisible, onClose, children }) => {
    return (
        <Modal
            isVisible={isVisible}
            swipeDirection="down"  // Enables swipe down to dismiss
            onSwipeComplete={onClose}  // Close the modal on swipe down
            onBackdropPress={onClose}  // Close the modal when clicking outside
            className='justify-end m-0'  // Align modal at the bottom
        >
            <View className="bg-white rounded-t-lg p-4">
                {/* Divider/Handle for drag down */}
                <View className='items-center mb-4'>
                    <View className='w-16 h-1.5 bg-gray-300 rounded-full'/>
                </View>
                {children}
            </View>
        </Modal>
    );
}

export default SisoModal;
