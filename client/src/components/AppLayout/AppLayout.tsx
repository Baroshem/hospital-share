import React from 'react';
import { useEffectOnce } from 'react-use';
import { useAuthActions, useAuthState } from '@store/auth';
import { Layout, Button } from '@components/ant-design';
import { FC } from '@typings';
import { message } from 'antd';
import { Header } from '@components/organisms';
import { styled } from '@utils';

const StyledLayout = styled(Layout)({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',

  '& .ant-layout-content': {
    minHeight: '100vh',
    width: '100%',
  },
});

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
    <StyledLayout>
      <Header />
      {user.data && <Button onClick={logout}>Logout</Button>}
      <Layout.Content>{children}</Layout.Content>
    </StyledLayout>
  );
};
