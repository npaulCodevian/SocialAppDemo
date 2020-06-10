/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppColors} from './src/utils/AppColors';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/Authorization/LoginScreen';
import RegisterScreen from './src/screens/Authorization/RegisterScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import ProfileScreen from './src/screens/Home/ProfileScreen';

const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <Fragment>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={AppColors.primary}
      />
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="loginscreen" component={LoginScreen} />
          <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
          <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
          {/* <RootStack.Screen name="loginscreen" component={LoginScreen} /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

export default RootStackScreen;
