import React from 'react';
import { useEffectOnce } from 'react-use';
import { useAuthActions } from '@store/auth';
import { Layout } from '@components/ant-design';
import { FC } from '@typings';
import { message } from 'antd';
import { styled } from '@utils';
import { Header } from './/Header';

const StyledLayout = styled(Layout)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
  backgroundColor: theme.colors.background.body,

  '& > .ant-layout-content': {
    marginTop: 56,
    minHeight: 'calc(100vh - 56px)',
    width: '100%',
  },
}));

export const AppLayout: FC = ({ children }) => {
  const { fetchProfile } = useAuthActions();

  useEffectOnce(() => {
    message.config({
      maxCount: 1,
    });

    fetchProfile();
  });

  return (
    <StyledLayout>
      <Header />
      <Layout.Content>{children}</Layout.Content>
    </StyledLayout>
  );
};
