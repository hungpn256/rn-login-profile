import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import OptionMore from './OptionMore';

export default function OptionMoreList() {
  const [opt, setOpt] = React.useState(0);
  return (
    <View>
      <Text style={styles.textHeaderOption}>Main Ingerka</Text>
      <View style={styles.options}>
        {[1, 2, 3].map((item, index) => (
          <OptionMore
            key={index}
            style={opt === index ? styles.active : {}}
            setOpt={setOpt}
            index={index}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textHeaderOption: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 30,
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  active: {
    borderColor: 'orange',
    borderWidth: 2,
  },
});
