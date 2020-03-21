import React from 'react';
import { Menu as AntMenu } from 'antd';
import { MenuProps as AntMenuProps } from 'antd/lib/menu';
import AntMenuItem, { MenuItemProps as AntItemProps } from 'antd/lib/menu/MenuItem';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';
import { styled } from '@utils';

export type ItemProps = AntItemProps & StyledSystemStyles;

const StyledItem = styled(AntMenuItem)(styledSystemStyles);

export const MenuItem = (props: ItemProps) => <StyledItem {...props} />;

export type MenuProps = Omit<AntMenuProps, 'theme'> & StyledSystemStyles;

const StyledMenu = styled(AntMenu)(styledSystemStyles);

export const Menu = (props: MenuProps) => (<StyledMenu {...props} />) as any;

Menu.Item = AntMenu.Item;
