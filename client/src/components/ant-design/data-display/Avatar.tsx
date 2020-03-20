import React from 'react';
import { Avatar as AntAvatar } from 'antd';
import { AvatarProps as AntAvatarProps } from 'antd/lib/avatar';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type AvatarProps = AntAvatarProps & StyledSystemStyles;

const StyledAvatar = styled(AntAvatar)(styledSystemStyles);

export const Avatar = (props: AvatarProps) => <StyledAvatar {...props} />;
