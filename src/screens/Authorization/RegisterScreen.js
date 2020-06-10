import React, {PureComponent} from 'react';
import {View, SafeAreaView, Text, TextInput} from 'react-native';
import {AppButton} from '../../shared/sharedComps';
import {AppColors} from '../../utils/AppColors';
import globalStyles from '../../shared/styles';

class RegisterScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: AppColors.primary}}>
        <View style={{flex: 1, padding: 16}}>
          <View style={{height: 40}} />
          <View>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: AppColors.dark}}>
              Register
            </Text>
            <View style={{height: 50}} />
            <TextInput
              placeholder={'Emailid'}
              style={globalStyles.textFieldStyle_1}
            />

            <View style={{height: 20}} />
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder={'First Name'}
                style={[globalStyles.textFieldStyle_1, {flex: 0.5}]}
              />
              <View style={{width: 20}} />
              <TextInput
                placeholder={'Last Name'}
                style={[globalStyles.textFieldStyle_1, {flex: 0.5}]}
              />
            </View>

            <View style={{height: 20}} />
            <TextInput
              secureTextEntry={true}
              placeholder={'Password'}
              style={globalStyles.textFieldStyle_1}
            />

            <View style={{height: 60}} />
            <AppButton
              titleColor={AppColors.whitecolor}
              backgroundColor={AppColors.secondary}
              borderRadius={40}
              title={'Register'}
              onPress={() => this.props.navigation.goBack()}
            />

            <View style={{height: 100}} />
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text>Already have an account?</Text>
              <View style={{width: 10}} />
              <Text
                style={{color: AppColors.secondary}}
                onPress={() => this.props.navigation.goBack()}>
                {' '}
                {'   '}Login
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default RegisterScreen;
