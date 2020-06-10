import React, {Component, Fragment} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  RefreshControl,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {AppColors} from '../utils/AppColors';

export function AppButton(props) {
  return (
    <TouchableRipple
      rippleColor={
        props.rippleColor == null || props.rippleColor === undefined
          ? AppColors.greylight005
          : props.rippleColor
      }
      style={{
        ...props.style,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: props.borderRadius ? props.borderRadius : 0,
        borderWidth: props.outlined
          ? props.borderWidth
            ? props.borderWidth
            : 1
          : 0,
        width: props.width ? props.width : '100%',
        height: props.height ? props.height : 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: props.borderColor ? props.borderColor : AppColors.primary,
        backgroundColor: props.outlined
          ? '#00000000'
          : props.backgroundColor
          ? props.backgroundColor
          : 'white',
      }}
      onPress={() => props.onPress(true)}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: props.titleFontSize ? props.titleFontSize : 20,

            color: props.titleColor ? props.titleColor : 'black',
          }}>
          {props.title}
        </Text>

        {props.buttonIcon ? (
          <Fragment>
            <View style={{width: 30}} />
            <MaterialIcon
              name={props.buttonIcon}
              size={props.titleFontSize ? props.titleFontSize : 20}
              color={props.titleColor ? props.titleColor : 'black'}
            />
          </Fragment>
        ) : null}
      </View>
    </TouchableRipple>
  );
}
