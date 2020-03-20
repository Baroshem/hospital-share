import React from 'react';
import { Col as AntCol } from 'antd';
import { ColProps as AntColProps } from 'antd/lib/col';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type ColProps = AntColProps & StyledSystemStyles;

const StyledCol = styled(AntCol)(styledSystemStyles);

export const Col = (props: ColProps) => <StyledCol {...props} />;
