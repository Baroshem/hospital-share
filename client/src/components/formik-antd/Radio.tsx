import React from 'react';
import { Radio as AntRadio, RadioGroupProps as AntRadioGroupProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type RadioProps = AntRadioGroupProps & StyledSystemStyles;

const StyledRadio = styled(AntRadio)(styledSystemStyles);

export const Radio = (props: RadioProps) => <StyledRadio {...props} />;

export type RadioGroupProps = AntRadioGroupProps & StyledSystemStyles;

const StyledRadioGroup = styled(AntRadio.Group)(styledSystemStyles);

const RadioGroup = (props: RadioGroupProps) => <StyledRadioGroup {...props} />;

Radio.Group = RadioGroup;
