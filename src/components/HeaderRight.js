import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  faSearch,
  faShoppingBag,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const HeaderRight = () => {
  return (
    <View style={styles.wrapperHeaderRight}>
      <TouchableOpacity activeOpacity={0.7}>
        <FontAwesomeIcon icon={faSearch} size={23} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <FontAwesomeIcon icon={faShoppingBag} size={23} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <FontAwesomeIcon
          icon={faEllipsisV}
          size={23}
          style={{transform: [{translateX: -5}]}}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperHeaderRight: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    marginRight: 10,
  },
});
export default HeaderRight;
