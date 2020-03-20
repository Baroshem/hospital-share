import React from 'react';
import {
  Checkbox as AntCheckbox,
  CheckboxProps as AntCheckboxProps,
  CheckboxGroupProps as AntCheckboxGroupProps,
} from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type CheckboxProps = AntCheckboxProps & StyledSystemStyles;

const StyledCheckbox = styled(AntCheckbox)(styledSystemStyles);

export const Checkbox = (props: CheckboxProps) => <StyledCheckbox {...props} />;

export type CheckboxGroupProps = AntCheckboxGroupProps & StyledSystemStyles;

const StyledCheckboxGroup = styled(AntCheckbox.Group)(styledSystemStyles);

const CheckboxGroup = (props: CheckboxGroupProps) => <StyledCheckboxGroup {...props} />;

Checkbox.Group = CheckboxGroup;
