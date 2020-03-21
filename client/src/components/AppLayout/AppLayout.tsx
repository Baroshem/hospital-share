import React from 'react';
import { useEffectOnce } from 'react-use';
import { useAuthActions, useAuthState } from '@store/auth';
import { Layout, Button } from '@components/ant-design';
import { FC } from '@typings';
import { message } from 'antd';
import { Header } from '@components/organisms';

export const AppLayout: FC = ({ children }) => {
  const user = useAuthState();
  const { fetchProfile, logout } = useAuthActions();

  useEffectOnce(() => {
    message.config({
      maxCount: 1,
    });

    fetchProfile();
  });

  return (
    <Layout>
      <Header />
      {user.data && <Button onClick={logout}>Logout</Button>}
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};
