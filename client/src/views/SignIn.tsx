import React from 'react';

import { Box } from '@components/atoms/Box';
import { SignIn as SignInForm } from '@components/forms';
import { Form, FormItem, Input, Checkbox, SubmitButton } from '@components/formik-antd';
import { Title, Paragraph } from '@components/ant-design';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Theme, Translation, Schema, Validation } from '@services';
import { useAuthActions } from '@store/auth';

const SignInContainer = () => {
  const { yup } = Validation.use();
  const { t } = Translation.use('main');
  const { login } = useAuthActions();

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validationSchema: Schema<FormValues> = yup.object({
    email: yup
      .string()
      .email()
      .label(t('E-mail'))
      .required(),
    password: yup
      .string()
      .label(t('Password'))
      .required(),
  });

  const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    login(values);
    helpers.setSubmitting(false);
  };

  return (
    <Box margin="auto" mt="180px" width={330} height={380}>
      <SignInForm />
    </Box>
  );
};

export default SignInContainer;
