import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Rating from '../../../components/Rating';

const FoodItem = () => {
  console.log('render food item');
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('Payment');
      }}
      style={styles.foodItem}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://lh3.googleusercontent.com/proxy/p0As51lYtH_70QJ4Zh5OSn-PssH6z3WkIRzz2VO-hF4paD5so9X_Uqu8tY6LJtNcNDDEnMSTC6VPrGE6BcDOci1ZcI6f1SA7NgR2MNNM66MY5NjNrg',
        }}
      />
      <View style={styles.text}>
        <Text style={styles.foodName}>Hamburger</Text>
        <Text style={styles.foodDescription}>
          1 giờ sáng, trôi qua trôi nhanh kéo theo ưu phiền miên man Âm thầm
        </Text>
        <View style={styles.footer}>
          <Text style={styles.prcing}>$123</Text>
          <Rating ratingNumber={4} color={'#777'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  image: {
    height: '100%',
    width: 120,
    resizeMode: 'cover',
  },
  text: {
    flex: 1,
    padding: 16,
    paddingRight: 0,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  foodDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
    marginBottom: 8,
    lineHeight: 22,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  prcing: {
    color: 'red',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default FoodItem;
