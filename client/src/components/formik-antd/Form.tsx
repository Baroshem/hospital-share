import React, { ComponentProps } from 'react';
import { Form as AntForm } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type FormProps = ComponentProps<typeof AntForm> & StyledSystemStyles;

const StyledForm = styled(AntForm)(styledSystemStyles);

export const Form = (props: FormProps) => <StyledForm {...props} />;
