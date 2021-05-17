import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faTruck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import ListTypeFood from '../../components/ListTypeFood';
import OverViewStore from '../../components/OverViewStore';
import Rating from '../../components/Rating';
import FoodItem from './components/FoodItem';
const data = [
  'Popular items',
  'Appertizers',
  'Popular items',
  'Appertizers',
  'Popular items',
  'Appertizers',
];
const ScreenFoodStore = ({navigation}) => {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <OverViewStore>
          <Rating ratingNumber={4.6} color={'green'} />
          <View style={styles.delivery}>
            <FontAwesomeIcon
              icon={faTruck}
              color={'green'}
              size={26}
              style={{marginRight: 4}}
            />
            <Text style={styles.text}>35min / $142</Text>
          </View>
          <Text style={styles.text}>$$$</Text>
        </OverViewStore>
        <ListTypeFood data={data} />
        <View style={styles.listFood}>
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
  },
  container: {
    justifyContent: 'center',
  },
  overView: {
    width: '100%',
    height: 280,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  wrapperIcon: {
    position: 'absolute',
    top: 20,
    right: 20,

    backgroundColor: '#EC652E',
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infor: {
    width: '85%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    transform: [{translateY: -25}],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  delivery: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#999',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 25,
  },
  text: {
    color: '#777',
    fontSize: 14,
  },
  listFood: {
    paddingHorizontal: 16,
  },
});

export default ScreenFoodStore;
