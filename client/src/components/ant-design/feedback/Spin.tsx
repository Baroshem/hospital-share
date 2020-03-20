import React from 'react';
import { Spin as AntSpin } from 'antd';
import { SpinProps as AntSpinProps } from 'antd/lib/spin';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type SpinProps = AntSpinProps & StyledSystemStyles;

const StyledSpin = styled(AntSpin)(styledSystemStyles);

export const Spin = (props: SpinProps) => <StyledSpin {...props} />;
