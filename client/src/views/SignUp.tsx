import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Box } from '@components/atoms/Box';
import { SignUp as SignUpForm } from '@components/forms';
import { Title } from '@components/ant-design';

type FormValues = {
  email: string;
  password: string;
};

const SignUpContainer = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    console.log(values);
    helpers.setSubmitting(false);
  };

  return (
    <div>
      <Box display="flex" width="100%" justifyContent="center" mb={3} mt="80px">
        <Title>LOGO PLATFORMY</Title>
      </Box>
      <Box margin="auto" width={600} height={820}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <SignUpForm />
        </Formik>
      </Box>
    </div>
  );
};

export default SignUpContainer;
