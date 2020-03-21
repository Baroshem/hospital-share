import React from 'react';
import { Dropdown as AntDropdown } from 'antd';
import { DropDownProps as AntDropdownProps } from 'antd/lib/dropdown';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type DropDownProps = AntDropdownProps & StyledSystemStyles;

const StyledDropdown = styled(AntDropdown)(styledSystemStyles);

export const Dropdown = (props: DropDownProps) => <StyledDropdown {...props} />;
