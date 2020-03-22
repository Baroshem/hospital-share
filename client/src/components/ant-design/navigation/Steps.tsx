import React, { ReactNode } from 'react';
import { Steps as AntSteps } from 'antd';
import { StepsProps as AntStepsProps, StepProps as AntStepProps } from 'antd/lib/steps';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type StepsProps = AntStepsProps &
  StyledSystemStyles & {
    children: ReactNode;
  };

const StyledSteps = styled(AntSteps)(styledSystemStyles);

export const Steps = (props: StepsProps) => <StyledSteps {...props} />;

export type StepProps = AntStepProps & StyledSystemStyles;

const StyledStep = styled(AntSteps.Step)(styledSystemStyles);

Steps.Step = (props: StepProps) => <StyledStep {...props} />;
