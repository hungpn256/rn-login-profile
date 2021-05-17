import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
export default function ListTypeFood({data}) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {data.map((item, index) => (
        <Text key={index} style={styles.text}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    margin: 15,
    fontWeight: '700',
  },
});
