import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type SelectProps = AntSelectProps & StyledSystemStyles;

const StyledSelect = styled(AntSelect)(styledSystemStyles);

export const Select = (props: SelectProps) => <StyledSelect {...props} />;
