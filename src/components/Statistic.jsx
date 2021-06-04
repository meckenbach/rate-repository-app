import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

const Statistic = ({ label, children }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{children}</Text>
      <Text color='textSecondary'>{label}</Text>
    </View>
  );
};

export default Statistic;
