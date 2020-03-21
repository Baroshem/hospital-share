import React from 'react';
import { Tag as AntTag } from 'antd';
import { TagProps as AntTagProps, CheckableTagProps as AntCheckableTagProps } from 'antd/lib/tag';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type TagProps = AntTagProps & StyledSystemStyles;

const StyledTag = styled(AntTag)(styledSystemStyles);

export const Tag = (props: TagProps) => <StyledTag {...props} />;

export type CheckableTagProps = AntCheckableTagProps & StyledSystemStyles;

const StyledCheckableTag = styled(AntTag.CheckableTag)(styledSystemStyles);

Tag.CheckableTag = (props: CheckableTagProps) => <StyledCheckableTag {...props} />;
