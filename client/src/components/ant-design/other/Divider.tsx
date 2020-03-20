import React from 'react';
import { Divider as AntDivider } from 'antd';
import { DividerProps as AntDividerProps } from 'antd/lib/divider';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type DividerProps = AntDividerProps & StyledSystemStyles;

const StyledDivider = styled(AntDivider)(styledSystemStyles);

export const Divider = (props: DividerProps) => <StyledDivider {...props} />;
