import React, { ComponentProps } from 'react';
import { Radio as AntRadio } from 'antd';
import { RadioProps as AntRadioProps, RadioGroupProps as AntRadioGroupProps } from 'antd/lib/radio';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type RadioProps = AntRadioProps & StyledSystemStyles;

const StyledRadio = styled(AntRadio)(styledSystemStyles);

export const Radio = (props: RadioProps) => <StyledRadio {...props} />;

export type RadioGroupProps = AntRadioGroupProps & StyledSystemStyles;

const StyledRadioGroup = styled(AntRadio.Group)(styledSystemStyles);

Radio.Group = (props: RadioGroupProps) => <StyledRadioGroup {...props} />;

export type RadioButtonProps = ComponentProps<typeof AntRadio.Button> & StyledSystemStyles;

const StyledRadioButton = styled(AntRadio.Button)(styledSystemStyles);

Radio.Button = (props: RadioButtonProps) => <StyledRadioButton {...props} />;
