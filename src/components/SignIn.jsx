import React from 'react';
import { Formik } from 'formik';

import SignInForm from './SignInForm';

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      component={({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    />
  );
};

export default SignIn;
