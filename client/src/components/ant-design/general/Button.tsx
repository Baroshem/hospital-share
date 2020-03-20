import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps as AntButtonProps } from 'antd/lib/button';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type ButtonProps = AntButtonProps & StyledSystemStyles;

const StyledButton = styled(AntButton)(styledSystemStyles);

export const Button = (props: ButtonProps) => <StyledButton {...props} />;
