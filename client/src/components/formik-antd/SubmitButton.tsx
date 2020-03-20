import React, { ComponentProps } from 'react';
import { SubmitButton as AntSubmitButton } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type SubmitButtonProps = ComponentProps<typeof AntSubmitButton> & StyledSystemStyles;

const StyledSubmitButton = styled(AntSubmitButton)(styledSystemStyles);

export const SubmitButton = (props: SubmitButtonProps) => <StyledSubmitButton {...props} />;
