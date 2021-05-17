import React from 'react';
import {Text, View} from 'react-native';
import AppNavigator from './AppNavigation';
export default () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};
