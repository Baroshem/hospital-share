import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { InputProps as AntInputProps } from 'antd/lib/input';
import { styled } from '@utils';
import { styledSystemStyles, StyledSystemStyles } from '@components/shared';

export type RouterLinkProps = LinkProps &
  StyledSystemStyles & {
    to: string;
  };

const StyledLink = styled(Link)(styledSystemStyles);

export const RouterLink = (props: RouterLinkProps) => <StyledLink {...props} />;
