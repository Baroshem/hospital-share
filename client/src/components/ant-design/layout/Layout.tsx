import React from 'react';
import { Layout as AntLayout } from 'antd';
import { LayoutProps as AntLayoutProps } from 'antd/lib/layout';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type LayoutProps = AntLayoutProps & StyledSystemStyles;

const StyledLayout = styled(AntLayout)(styledSystemStyles);

export const Layout = (props: LayoutProps) => <StyledLayout {...props} />;

export type HeaderProps = AntLayoutProps & StyledSystemStyles;

const StyledHeader = styled(AntLayout.Header)(styledSystemStyles);

Layout.Header = (props: HeaderProps) => <StyledHeader {...props} />;

export type FooterProps = AntLayoutProps & StyledSystemStyles;

const StyledFooter = styled(AntLayout.Footer)(styledSystemStyles);

Layout.Footer = (props: FooterProps) => <StyledFooter {...props} />;

export type ContentProps = AntLayoutProps & StyledSystemStyles;

const StyledContent = styled(AntLayout.Content)(styledSystemStyles);

Layout.Content = (props: ContentProps) => <StyledContent {...props} />;

Layout.Sider = AntLayout.Sider;
