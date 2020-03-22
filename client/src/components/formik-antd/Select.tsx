import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

const { Option: AntOption } = AntSelect;

export type SelectProps = AntSelectProps & StyledSystemStyles;

const StyledSelect = styled(AntSelect)(styledSystemStyles);

export const Select = (props: SelectProps) => <StyledSelect {...props} />;

const StyledOption = styled(AntOption)(styledSystemStyles);

Select.Option = (props: any) => <StyledOption {...props} />;
