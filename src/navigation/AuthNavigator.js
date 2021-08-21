import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN, REGISTER } from '../constants/routeNames';
import Register from '../screens/Register';
import Login from '../screens/Login';


const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator;