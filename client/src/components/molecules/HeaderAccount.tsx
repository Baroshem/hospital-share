import React from 'react';
import { styled } from '@utils';
import { Avatar } from '@components/ant-design';
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useAuthState } from '@store/auth';

const StyledLink = styled(Link)({
  color: 'black',
  margin: '0 10px',
});


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export const Account = () => {
  const user = useAuthState();

  return !user.data ? (
    <>
      <StyledLink to="/about" >O Projekcie</StyledLink>
      <StyledLink to="/sign-in">Zaloguj się</StyledLink>
      <StyledLink to="/sign-up">Zarejestruj się</StyledLink>
    </>
  ) : (
    <>
      <StyledLink to="/about">O Projekcie</StyledLink>
      <Avatar />
      <Dropdown overlay={menu}>
        <Link to="/">
          User Name <DownOutlined />
        </Link>
      </Dropdown>
    </>
  );
};