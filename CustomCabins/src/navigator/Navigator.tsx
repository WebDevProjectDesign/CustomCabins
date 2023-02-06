import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackNavigatorProps } from './types';
import { routes } from './routes';
import LoginScreen from '@Screens/LoginScreen';
import RegisterScreen from '@Screens/RegisterScreen';

const Stack = createNativeStackNavigator<StackNavigatorProps>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={routes.login}
    >
      <Stack.Screen name={routes.login} component={LoginScreen} />
      <Stack.Screen name={routes.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
