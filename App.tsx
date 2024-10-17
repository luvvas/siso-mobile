import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button, Text, View } from 'react-native';

import LoginForm from './src/screens/LoginForm';
import RegisterForm from './src/screens/RegisterForm';

const Stack = createNativeStackNavigator();

// function HomeScreen({ navigation }: any) {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text>Welcome to the Home Screen!</Text>
//       <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
//       <StatusBar style="light" />
//     </View>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="inverted" />
      <Stack.Navigator>
        {/* <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        /> */}
        <Stack.Screen 
          name="Login" 
          component={LoginForm} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Register" component={RegisterForm} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
