import React from 'react';
import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type DatePickerProps = AntDatePickerProps & StyledSystemStyles;

const StyledDatePicker = styled(AntDatePicker)(styledSystemStyles);

export const DatePicker = (props: DatePickerProps) => <StyledDatePicker {...props} />;
