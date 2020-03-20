import React from 'react';
import { TimePicker as AntTimePicker, TimePickerProps as AntTimePickerProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type TimePickerProps = AntTimePickerProps & StyledSystemStyles;

const StyledTimePicker = styled(AntTimePicker)(styledSystemStyles);

export const TimePicker = (props: TimePickerProps) => <StyledTimePicker {...props} />;
