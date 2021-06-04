import React from 'react';
import { Pressable, StyleSheet, View, Alert } from 'react-native';
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

const AppBarTab = ({ children }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert(children)}>
        <Text style={styles.text} fontSize='subheading' fontWeight='bold'>{children}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
