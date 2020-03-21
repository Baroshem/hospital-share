import React from 'react';
import {
  Input as AntInput,
  Checkbox as AntCheckbox,
  InputProps as AntInputProps,
  PasswordProps as AntPasswordProps,
  TextAreaProps as AntTextAreaProps,
  CheckboxProps as AntCheckboxProps,
} from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type InputProps = AntInputProps & StyledSystemStyles;

const StyledInput = styled(AntInput)(styledSystemStyles);

export const Input = (props: InputProps) => <StyledInput {...props} />;

export type PasswordProps = AntPasswordProps & StyledSystemStyles;

const StyledPassword = styled(AntInput.Password)(styledSystemStyles);

const Password = (props: PasswordProps) => <StyledPassword {...props} />;

Input.Password = Password;

export type TextAreaProps = AntTextAreaProps & StyledSystemStyles;

const StyledTextArea = styled(AntInput.TextArea)(styledSystemStyles);

const TextArea = (props: TextAreaProps) => <StyledTextArea {...props} />;

Input.TextArea = TextArea;

const StyledCheckbox = styled(AntCheckbox)(styledSystemStyles);

const Checkbox = (props: AntCheckboxProps) => <StyledCheckbox {...props} />;

Input.Checkbox = Checkbox;
