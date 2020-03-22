import React from 'react';
import { Menu as AntMenu } from 'antd';
import { MenuProps as AntMenuProps } from 'antd/lib/menu';
import { MenuItemProps as AntItemProps } from 'antd/lib/menu/MenuItem';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type MenuProps = Omit<AntMenuProps, 'theme'> &
  StyledSystemStyles & {
    children: any;
  };

const StyledMenu = styled(AntMenu)(styledSystemStyles);

export const Menu = (props: MenuProps) => <StyledMenu {...props} />;

export type ItemProps = AntItemProps & StyledSystemStyles;

const StyledItem = styled(AntMenu.Item)(styledSystemStyles);

Menu.Item = (props: ItemProps) => <StyledItem {...props} />;
