import React, { useState } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, FormItem, Input, Checkbox, SubmitButton } from '@components/formik-antd';
import { Title } from '@components/ant-design';
import { Box } from '@components/atoms/Box';
import { styled } from '@utils';

const StyledUserOutlined = styled(UserOutlined)(({ theme }) => ({
  svg: {
    fill: theme.colors.primary.main,
  },
}));

const StyledLockOutlined = styled(LockOutlined)(({ theme }) => ({
  svg: {
    fill: theme.colors.primary.main,
  },
}));

export const SignIn = () => {
  return (
    <Form>
      <Box display="flex" width="100%" justifyContent="center" mb={3}>
        <Title level={4}>Zaloguj się do konta</Title>
      </Box>

      <FormItem
        name="username"
        marginBottom={3}
        rules={[{ required: true, message: 'Proszę podać nazwę użytkownika!' }]}
      >
        <Input name="username" prefix={<StyledUserOutlined />} placeholder="Nazwa użytkownika" />
      </FormItem>
      <FormItem name="password" marginBottom={3} rules={[{ required: true, message: 'Proszę podać hasło!' }]}>
        <Input.Password name="password" prefix={<StyledLockOutlined />} type="password" placeholder="Hasło" />
      </FormItem>
      <FormItem name="remember" marginBottom={3}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <FormItem name="remember" valuePropName="checked" noStyle>
            <Checkbox name="remember">Zapamiętaj mnie</Checkbox>
          </FormItem>
        </Box>
      </FormItem>

      <FormItem name="submit">
        <Box margin-bottom={3}>
          <SubmitButton width="100%" height="40px" type="primary" htmlType="submit">
            Log in
          </SubmitButton>
        </Box>
        <Box textAlign="center">
          Pierwszy raz na LOGO PLATFORMY? <a href="">Załóż konto</a>
        </Box>
      </FormItem>
    </Form>
  );
};
