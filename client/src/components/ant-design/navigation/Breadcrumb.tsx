import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { BreadcrumbProps as AntBreadcrumbProps } from 'antd/lib/breadcrumb';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type BreadcrumbProps = AntBreadcrumbProps & StyledSystemStyles;

const StyledBreadcrumb = styled(AntBreadcrumb)(styledSystemStyles);

export const Breadcrumb = (props: BreadcrumbProps) => <StyledBreadcrumb {...props} />;
