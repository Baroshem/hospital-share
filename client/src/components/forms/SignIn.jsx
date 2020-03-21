import React, { useState } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, FormItem, Input, Checkbox, SubmitButton } from '@components/formik-antd';
import { Title, Tabs, TabPane } from '@components/ant-design';
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
  const [tab, setTab] = useState('1');

  return (
    <Form initialValues={{ remember: true }}>
      <Box display="flex" width="100%" justifyContent="center">
        <Title fontWeight={600} level={4}>
          Zaloguj się do konta
        </Title>
      </Box>

      <Tabs defaultActiveKey={tab} onChange={setTab}>
        <TabPane tab="Szpital" key="1" />
        <TabPane tab="Firma" key="2" />
        <TabPane tab="Osoba prywatna" key="3" />
      </Tabs>

      <FormItem
        name="username"
        margin-bottom={3}
        rules={[{ required: true, message: 'Proszę podać nazwę użytkownika!' }]}
      >
        <Input name="username" prefix={<StyledUserOutlined />} placeholder="Nazwa użytkownika" />
      </FormItem>
      <FormItem name="password" margin-bottom={3} rules={[{ required: true, message: 'Proszę podać hasło!' }]}>
        <Input name="password" prefix={<StyledLockOutlined />} type="password" placeholder="Hasło" />
      </FormItem>
      <FormItem name="remember" margin-bottom={3}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <FormItem name="remember" valuePropName="checked" noStyle>
            <Checkbox name="remember">Zapamiętaj mnie</Checkbox>
          </FormItem>
          <a href="">Zapomniałem hasła</a>
        </Box>
      </FormItem>

      <FormItem name="submit">
        <Box marginBottom={3}>
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
