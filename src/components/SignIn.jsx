import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';

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

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
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
