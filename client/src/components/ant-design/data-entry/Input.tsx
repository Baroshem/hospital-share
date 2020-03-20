import React from 'react';
import { Input as AntInput } from 'antd';
import { InputProps as AntInputProps } from 'antd/lib/input';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type InputProps = AntInputProps & StyledSystemStyles;

const StyledInput = styled(AntInput)(styledSystemStyles);

export const Input = (props: InputProps) => <StyledInput {...props} />;
