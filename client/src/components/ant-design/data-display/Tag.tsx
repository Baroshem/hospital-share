import React from 'react';
import { Tag as AntTag } from 'antd';
import { TagProps as AntTagProps } from 'antd/lib/tag';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type TagProps = AntTagProps & StyledSystemStyles;

const StyledTag = styled(AntTag)(styledSystemStyles);

export const Tag = (props: TagProps) => <StyledTag {...props} />;
