import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    padding: 6,
    alignSelf: 'flex-start',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

const Chip = ({ text }) => {
  return <View style={styles.container}><Text style={styles.text}>{text}</Text></View>;
};

export default Chip;
