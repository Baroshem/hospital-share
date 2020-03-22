import React from 'react';
import { styled } from '@utils';
import { Button, Layout, Dropdown, Menu, Paragraph } from '@components/ant-design';
import { useAuthState, useAuthActions } from '@store/auth';
import { Box } from '@components/atoms/Box';
import { DownOutlined } from '@ant-design/icons';
import { RouterLink } from '@components/atoms';
import { Translation } from '@services';

const Wrapper = styled(Layout.Header)(({ theme }) => ({
  width: '100%',
  height: 56,
  padding: '0 32px',
  position: 'fixed',
  top: '0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.colors.primary.main,
  color: theme.colors.text.white,

  'a, .ant-typography': {
    color: theme.colors.text.white,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    color: theme.colors.text.white,
    borderColor: theme.colors.text.white,
  },
}));

export const Header = () => {
  const { t } = Translation.use('main');
  const { logout } = useAuthActions();
  const user = useAuthState();

  const menu = (
    <Menu>
      <Menu.Item>
        <RouterLink to="edit-profile">{t('Edit profile')}</RouterLink>
      </Menu.Item>
      <Menu.Item>
        <RouterLink to="my-requests">{t('My help requests')}</RouterLink>
      </Menu.Item>
      <Menu.Item onClick={logout}>{t('Logout')}</Menu.Item>
    </Menu>
  );

  return (
    <Wrapper>
      <Box display="flex" alignItems="center">
        <Box mr={40}>APP NAME</Box>
        <RouterLink to="/about">O Projekcie</RouterLink>
      </Box>
      <Box display="flex" alignItems="center">
        {user.data ? (
          <>
            <StyledButton ghost mr={24}>
              {t('Create request')}
            </StyledButton>
            <Dropdown overlay={menu}>
              <Box display="flex" alignItems="center">
                <Paragraph mr={8}>{user.data.fullName}</Paragraph> <DownOutlined />
              </Box>
            </Dropdown>
          </>
        ) : (
          <>
            <RouterLink mr={16} to="/sign-in">
              {t('Sign in')}
            </RouterLink>
            <RouterLink to="/sign-up">{t('Sign up')}</RouterLink>
          </>
        )}
      </Box>
    </Wrapper>
  );
};
