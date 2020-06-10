import React, {PureComponent} from 'react';
import {View, SafeAreaView, Text, TextInput, Alert} from 'react-native';
import {AppButton} from '../../shared/sharedComps';
import {AppColors} from '../../utils/AppColors';
import globalStyles from '../../shared/styles';
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Emaild: '',
      Password: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: AppColors.primary}}>
        <View style={{flex: 1, padding: 16, justifyContent: 'center'}}>
          <View>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: AppColors.dark}}>
              Login
            </Text>
            <View style={{height: 50}} />
            <TextInput
              placeholder={'Emailid'}
              style={globalStyles.textFieldStyle_1}
              onChangeText={Emaild => this.setState({Emaild})}
            />

            <View style={{height: 20}} />
            <TextInput
              secureTextEntry={true}
              placeholder={'Password'}
              style={globalStyles.textFieldStyle_1}
              onChangeText={Password => this.setState({Password})}
            />

            <View style={{height: 60}} />
            <AppButton
              titleColor={AppColors.whitecolor}
              backgroundColor={AppColors.secondary}
              borderRadius={40}
              title={'Login'}
              onPress={() => {
                if (this.state.Emaild !== '' || this.state.Password !== '')
                  this.props.navigation.navigate('HomeScreen');
                else Alert.alert('Enter all Fields');
              }}
            />

            <View style={{height: 100}} />
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text>Don't have an account?</Text>
              <Text
                style={{color: AppColors.secondary}}
                onPress={() =>
                  this.props.navigation.navigate('RegisterScreen')
                }>
                {'   '}Register
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
