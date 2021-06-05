import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: "",
  password: "",
};

const validationShema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});


const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationShema}
      onSubmit={onSubmit}
      component={({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    />
  );
};

export default SignIn;
