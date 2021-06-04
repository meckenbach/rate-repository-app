import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 6,
    margin: 10,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
});


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
