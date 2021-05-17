import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import CarouselComponent from '../../components/Carousel';
import ListTypeFood from '../../components/ListTypeFood';
import FoodStore from './components/FoodStore';
const data = [
  'https://images.foody.vn/res/g88/874371/prof/s1242x600/foody-upload-api-foody-mobile-2-210402153041.jpg',
  'https://images.foody.vn/res/g88/874371/prof/s1242x600/foody-upload-api-foody-mobile-2-210402153041.jpg',
  'https://images.foody.vn/res/g88/874371/prof/s1242x600/foody-upload-api-foody-mobile-2-210402153041.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbez2pL9vwZxx8pz3LOVt5Wa482cyNZK647472KOwrJsx93qzthQemQnYklMx1qRnXV8&usqp=CAU',
];
const options = [
  'All',
  'Humburgers',
  'Pizza',
  'Asian',
  'Local',
  'Food',
  'Mobile',
];
const windowWidth = Dimensions.get('window').width;
const index = ({navigation}) => {
  const onPressFoodStore = () => {
    navigation.navigate('FoodStore');
  };
  return (
    <ScrollView>
      <CarouselComponent
        windowWidth={windowWidth}
        style={{height: 100}}
        data={data}
        renderItem={({item, index}) => (
          <View
            key={index}
            style={{
              width: '100%',
              height: 100,
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <Image
              style={{resizeMode: 'cover', flex: 1}}
              source={{
                uri: item,
              }}
            />
          </View>
        )}
      />
      <ListTypeFood data={options} />
      <View style={styles.listFoodStore}>
        <FoodStore key={1} onPress={onPressFoodStore} />
        <FoodStore onPress={onPressFoodStore} />
        <FoodStore onPress={onPressFoodStore} />
        <FoodStore onPress={onPressFoodStore} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  listFoodStore: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
});
export default index;
