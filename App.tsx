import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SisoHome from './src/screens/sisoHome';
import SisoLogin from './src/screens/sisoLogin';
import SisoRegistrar from './src/screens/sisoRegistrar';
import SisoTriagemSolicitante from './src/screens/sisoTriagemSolicitante';
import SisoTriagemTecnico from './src/screens/sisoTriagemTecnico';

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
          name="TriagemSolicitante"
          component={SisoTriagemSolicitante}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TriagemTecnico"
          component={SisoTriagemTecnico}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registrar"
          component={SisoRegistrar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
