import {faStar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Rating = ({ratingNumber, color}) => {
  return (
    <View style={styles.rating}>
      <FontAwesomeIcon icon={faStar} color={color} />
      <Text style={styles.ratingText}>{ratingNumber}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
  },
  ratingText: {
    color: '#777',
  },
});
export default Rating;
