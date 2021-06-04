import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "4%",
    paddingTop: "9%",
    paddingBottom: "6%",
  },
  text: {
    color: "white",
  },
});

const AppBarTab = ({ to, children }) => {
  return (
    <View style={styles.container}>
      <Link to={to} component={Pressable}>
        <Text style={styles.text} fontSize='subheading' fontWeight='bold'>{children}</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
