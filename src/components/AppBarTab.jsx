import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  text: {
    color: "white",
  },
});

const AppBarTab = ({ path, children }) => {
  return (
    <View style={styles.container}>
      <Link to={path} component={Pressable}>
        <Text style={styles.text} fontSize='subheading' fontWeight='bold'>{children}</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
