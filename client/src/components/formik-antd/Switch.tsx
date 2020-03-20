import React from 'react';
import { Switch as AntSwitch, SwitchProps as AntSwitchProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type SwitchProps = AntSwitchProps & StyledSystemStyles;

const StyledSwitch = styled(AntSwitch)(styledSystemStyles);

export const Switch = (props: SwitchProps) => <StyledSwitch {...props} />;
