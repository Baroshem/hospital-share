import React from 'react';
import { styled } from '@utils';
import { Avatar } from '@components/ant-design';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useAuthState } from '@store/auth';

const Link = styled.a({
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
      <Link href="">O Projekcie</Link>
      <Link href="">Zaloguj się</Link>
      <Link href="">Zarejestruj się</Link>
    </>
  ) : (
    <>
      <Link href="">O Projekcie</Link>
      <Avatar />
      <Dropdown overlay={menu}>
        <Link  onClick={e => e.preventDefault()}>
          User Name <DownOutlined />
        </Link>
      </Dropdown>
    </>
  );
};