import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './src/screens/Home';
import {Text, StyleSheet, Image, View} from 'react-native';
import HeaderRight from './src/components/HeaderRight';
import LogoFoody from './src/assets/imgs/logo.png';
import ScreenFoodStore from './src/screens/ScreenFoodStore';
import Payment from './src/screens/Payment';
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            height: 70,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: props => (
              <Image
                style={styles.logoFoody}
                source={LogoFoody}
                height={70}
                width={150}
              />
            ),
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="FoodStore"
          component={ScreenFoodStore}
          options={{
            title: '',
            headerTitle: () => (
              <View>
                <Text style={styles.textHeader}>Home</Text>
              </View>
            ),
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            title: '',
            headerTitle: () => (
              <View>
                <Text style={styles.textHeader}>Restaurant</Text>
              </View>
            ),
            headerRight: () => <HeaderRight />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  textHeader: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#777',
    fontSize: 18,
    marginLeft: -20,
  },
});
export default AppNavigator;
