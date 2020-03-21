import React from 'react';
import { Select as AntSelect } from 'antd';
import { SelectProps as AntSelectProps } from 'antd/lib/select';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type SelectProps = AntSelectProps<any> & StyledSystemStyles;

const StyledSelect = styled(AntSelect)(styledSystemStyles);

export const Select = (props: SelectProps) => <StyledSelect {...props} />;

Select.Option = AntSelect.Option;
