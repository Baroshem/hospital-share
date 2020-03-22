import React from 'react';
import { Result as AntResult } from 'antd';
import { ResultProps as AntResultProps } from 'antd/lib/result';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type ResultProps = AntResultProps & StyledSystemStyles;

const StyledResult = styled(AntResult)(styledSystemStyles);

export const Result = (props: ResultProps) => <StyledResult {...props} />;
