import React, {Component, Fragment} from 'react';
import {SafeAreaView, View, Text, Image, ActivityIndicator} from 'react-native';
import {AppScreen} from '../../shared/comps';

export function SplashScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ActivityIndicator
          style={{
            zIndex: 12,
            position: 'absolute',
            top: parseInt(AppScreen.appheight * 0.5 - 20),
            left: parseInt(AppScreen.appwidth * 0.5 - 10),
          }}
          size={'large'}
          color={'white'}
        />

        <View style={{width: 200, height: 200, backgroundColor: 'red'}} />
      </View>
    </SafeAreaView>
  );
}
