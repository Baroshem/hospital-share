import React from 'react';
import { Card as AntCard } from 'antd';
import { CardProps as AntCardProps } from 'antd/lib/card';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type CardProps = AntCardProps & StyledSystemStyles;

const StyledCard = styled(AntCard)(styledSystemStyles);

export const Card = (props: CardProps) => <StyledCard {...props} />;
