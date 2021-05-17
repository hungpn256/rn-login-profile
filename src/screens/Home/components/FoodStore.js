import {faStar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Rating from '../../../components/Rating';

export default function FoodStore({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.background}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
          }}
        />
        <View style={styles.viewText}>
          <Text style={styles.name}>Joe's Burger</Text>
          <Text style={styles.description}>
            American style hamburger and fries
          </Text>
          <Rating color="#777" ratingNumber={4.5} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '42%',
    marginVertical: 8,
  },
  background: {
    backgroundColor: '#F7E7E7',
    overflow: 'hidden',
    borderRadius: 20,
  },
  image: {
    flex: 1,
    minHeight: 150,
    height: 'auto',
    resizeMode: 'cover',
  },
  viewText: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: '#777',
    letterSpacing: 0.5,
    marginTop: 8,
    marginBottom: 20,
  },
});
