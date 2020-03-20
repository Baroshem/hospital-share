import React from 'react';
import { Row as AntRow } from 'antd';
import { RowProps as AntRowProps } from 'antd/lib/row';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type RowProps = AntRowProps & StyledSystemStyles;

const StyledRow = styled(AntRow)(styledSystemStyles);

export const Row = (props: RowProps) => <StyledRow {...props} />;
