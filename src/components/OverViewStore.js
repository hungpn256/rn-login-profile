import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const OverViewStore = ({children, style}) => {
  return (
    <View style={styles.overView}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        source={{
          uri: 'https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg',
        }}
      />
      <View style={styles.wrapperIcon}>
        <FontAwesomeIcon icon={faHeart} color="#fff" size={22} />
      </View>
      <View style={[styles.infor, style]}>{children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default OverViewStore;
