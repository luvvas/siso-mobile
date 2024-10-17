import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SisoHome from './src/screens/sisoHome';
import SisoLogin from './src/screens/sisoLogin';
import SisoTriagem from './src/screens/sisoTriagem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={SisoHome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={SisoLogin} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Triagem" 
          component={SisoTriagem} 
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
