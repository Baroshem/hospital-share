import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Box } from '@components/atoms/Box';
import { SignIn as SignInForm } from '@components/forms';

type FormValues = {
  username: string;
  password: string;
  remember: boolean;
};

const SignInContainer = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
    remember: true,
  };

  const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    console.log(values);
    helpers.setSubmitting(false);
  };

  return (
    <Box margin="auto" mt="180px" width={330} height={380}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SignInForm />
      </Formik>
    </Box>
  );
};

export default SignInContainer;
