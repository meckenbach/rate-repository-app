import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: "row",
    // ...
  },
  // ...
});

const AppBar = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default AppBar;
