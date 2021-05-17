import {faConciergeBell} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function OptionMore({index, setOpt, style}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        setOpt(index);
      }}
      style={[styles.container, style]}>
      <FontAwesomeIcon icon={faConciergeBell} color="green" size={25} />
      <View style={styles.wrapperText}>
        <Text style={styles.name}>Beef</Text>
        <Text style={styles.pricing}>$125</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    width: '32%',
  },
  wrapperText: {
    marginLeft: 4,
  },
  name: {
    fontWeight: '700',
    lineHeight: 24,
    fontSize: 14,
  },
  pricing: {
    color: 'red',
    fontWeight: '700',
  },
});
