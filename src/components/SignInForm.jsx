import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  innerContainer: {
    margin: 15,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 6,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
});


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.text}>Sign In</Text>
        </Pressable>
      </View>
      
    </View>
  );
};

export default SignInForm;
