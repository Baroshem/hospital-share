import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Box } from '@components/atoms/Box';
import { Form, FormItem, Input } from '@components/formik-antd';
import { Title, Paragraph, Button } from '@components/ant-design';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Theme, Translation, Schema, Validation } from '@services';
import { useAuthActions, useAuthState } from '@store/auth';
import { Redirect } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

export const SignInComponent = () => {
  const theme = Theme.use();
  const { t } = Translation.use('main');

  const iconStyle = { fill: theme.colors.primary.main };

  return (
    <Form>
      <Box textAlign="center" mb={32}>
        <Title level={4}>{t('Log into your account')}</Title>
      </Box>
      <FormItem name="email" mb={32}>
        <Input name="email" size="large" prefix={<UserOutlined style={iconStyle} />} placeholder={t('E-mail')} />
      </FormItem>
      <FormItem name="password" mb={32}>
        <Input.Password
          name="password"
          size="large"
          prefix={<LockOutlined style={iconStyle} />}
          type="password"
          placeholder={t('Password')}
        />
      </FormItem>
      <Button width="100%" height="40px" type="primary" htmlType="submit">
        {t('Log in')}
      </Button>
      <Box mt={24} textAlign="center">
        <Paragraph>
          {t("Don't have an account?")} <a href="">{t('Register')}</a>
        </Paragraph>
      </Box>
    </Form>
  );
};

const SignInContainer = () => {
  const { yup } = Validation.use();
  const { t } = Translation.use('main');
  const { login } = useAuthActions();
  const user = useAuthState();

  if (user.data) {
    return <Redirect to="/" />;
  }

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
    <Box margin="auto" mt={200} width={330} height={380}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <SignInComponent />
      </Formik>
    </Box>
  );
};

export default SignInContainer;
