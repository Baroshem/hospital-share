import React from 'react';
import { InputNumber as AntInputNumber, InputNumberProps as AntInputNumberProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type InputNumberProps = AntInputNumberProps & StyledSystemStyles;

const StyledInputNumber = styled(AntInputNumber)(styledSystemStyles);

export const InputNumber = (props: InputNumberProps) => <StyledInputNumber {...props} />;
