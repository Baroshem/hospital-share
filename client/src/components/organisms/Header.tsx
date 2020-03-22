import React from 'react';
import { styled } from '@utils';
import { Button } from '@components/ant-design';
import { Link } from "react-router-dom";

import { Account } from '@components/molecules/HeaderAccount'

const Wrapper = styled.div({
  width: '100%',
  padding: '10px',
  position: 'fixed',
  top: '0',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  zIndex: 100
});

export const Header = () => {
  return (
    <Wrapper>
      <Link to="/">LOGO</Link>
      <div>
        <Account />
        <Button type="primary">Utwórz zgłoszenie</Button>
      </div>
    </Wrapper>
  );
};
