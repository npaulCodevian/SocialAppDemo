import React, {Component, Fragment} from 'react';
import {
  StatusBar,
  Dimensions,
  ActionSheetIOS,
  View,
  Button,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {Provider, connect, useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {
  RestoreToken,
  SignInAction,
  SignOutAction,
} from './src/Actions/UserAuthActions';
import {AppColors} from './utils/AppColors';
import {
  updateTokenAction,
  updateUserdetails,
} from './src/Actions/UserProfileAction';
import {
  TenantMainNav,
  LandlordMainNav,
  AuthenticationStack,
} from './src/Router';
import {SplashScreen} from './src/screens/Splashscreen';
import {updatePlanDetails} from './src/Actions/UserSubscribeAction';
import {GoogleSignin} from 'react-native-google-signin';
import GoogleConfigure from './src/screens/Authorization/GoogleConfigure';

const Stack = createStackNavigator();
export const AuthContext = React.createContext();

function MainStackScreen() {
  const userToken = useSelector(state => state.userAuth.userToken);
  const userRole = useSelector(state => state.userAuth.userRole);
  const isLoading = useSelector(state => state.userAuth.isLoading);
  const isSignout = useSelector(state => state.userAuth.isSignout);
  const dispatchHook = useDispatch();

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let values;

      try {
        values = await AsyncStorage.multiGet([
          '@userToken',
          '@userrole',
          '@userinfo',
          '@currentplan',
        ]);
      } catch (e) {
        // Restoring token failed
        Alert.alert('Restoring failed');
      }

      console.log(
        values[0][0],
        values[0][1],
        values[1][0],
        values[1][1],
        values[2][1],
        values[3][1],
      );
      // console.warn('User Role Async ', values[1][1], values[2][1]);
      // this.props.RestoreToken({token: values[0][1], role: values[1][1]});
      await dispatchHook(updateUserdetails(JSON.parse(values[2][1])));
      // await dispatchHook(updatePlanDetails(JSON.parse(values[3][1])));
      dispatchHook(RestoreToken({token: values[0][1], role: values[1][1]}));
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        console.log(
          ' DATA DATA ',
          data.token,
          data.role,
          data.userinfo,
          // data.currentplan,
        );
        const firstPair = ['@userToken', data.token];
        const secondPair = ['@userrole', data.role];
        const thirdPair = ['@userinfo', JSON.stringify(data.userinfo)];
        // const fouthPair = ['@currentplan', JSON.stringify(data.currentplan)];

        try {
          await AsyncStorage.multiSet([
            firstPair,
            secondPair,
            thirdPair,
            // fouthPair,
          ]);
        } catch (error) {
          // Error saving data
          Alert.alert('Error Saving Data...');
        }
        // dispatch({type: 'SIGN_IN', token: data.token, role: data.role});
        // this.props.SignInAction({token: data.token, role: data.role});
        dispatchHook(RestoreToken({token: data.token, role: data.role}));
      },
      signOut: async () => {
        try {
          await AsyncStorage.clear();
          console.log('MAINSTACKSCREEN: ' + 'Clear Done');
        } catch (error) {
          // Error saving data
          console.log('MAINSTACKSCREEN: ' + 'error');
        }

        GoogleSignin.configure(GoogleConfigure);

        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          console.warn('Done Logout');
          // this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }

        // this.props.SignOutAction();
        dispatchHook(SignOutAction());
      },

      // dispatch({type: 'SIGN_OUT'}),

      signUp: async data => {
        try {
          await AsyncStorage.setItem('userToken', data.token);
        } catch (error) {
          // Error saving data
        }
        // this.props.SignInAction({token: data.token, role: data.role});
        dispatchHook(SignInAction({token: data.token, role: data.role}));
      },
    }),
    [],
  );

  console.log('USERROLE NEW WARNING', userRole);

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator headerMode={'none'}>
        {isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="SignIn"
            component={AuthenticationStack}
            options={{
              title: 'Sign in',
              // When logging out, a pop animation feels intuitive
              animationTypeForReplace: isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          // User is signed in
          <Stack.Screen
            name="Home"
            component={
              userRole === 'Landlord' || userRole === 'landlord'
                ? LandlordMainNav
                : TenantMainNav
            }
          />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

// _signOut = async () => {
//   //Remove user session from the device.
//   try {
//     await GoogleSignin.revokeAccess();
//     await GoogleSignin.signOut();
//     await this.setState({ userInfo: " " }); // Remove the user from your app's state as well
//     Alert.alert("Logged Out Successfully...");
//   } catch (error) {
//     // //console.error(error);
//   }
// };

// _revokeAccess = async () => {
//   //Remove your application from the user authorized applications.
//   try {
//     await GoogleSignin.revokeAccess();
//     console.log("deleted");
//   } catch (error) {
//     // //console.error(error);
//   }
// };

export default MainStackScreen;
