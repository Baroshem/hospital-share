import React from 'react';
import { Badge as AntBadge } from 'antd';
import { BadgeProps as AntBadgeProps } from 'antd/lib/badge';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type BadgeProps = AntBadgeProps & StyledSystemStyles;

const StyledBadge = styled(AntBadge)(styledSystemStyles);

export const Badge = (props: BadgeProps) => <StyledBadge {...props} />;
