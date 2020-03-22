import React from 'react';
import { FormItem as AntFormItem, FormItemProps as AntFormItemProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type FormItemProps = AntFormItemProps & StyledSystemStyles;

const StyledFormItem = styled(AntFormItem)(styledSystemStyles);

export const FormItem = (props: FormItemProps) => <StyledFormItem {...props} />;
