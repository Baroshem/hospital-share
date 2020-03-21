import React from 'react';
import { Tabs as AntTabs } from 'antd';
import { TabsProps as AntTabsProps } from 'antd/lib/tabs';
import { TabPaneProps as AntTabPaneProps } from 'antd/lib/tabs';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

const { TabPane: AntTabPane } = AntTabs;

export type TabPaneProps = AntTabPaneProps & StyledSystemStyles;

const StyledTabPane = styled(AntTabPane)(styledSystemStyles);

export const TabPane = (props: TabPaneProps) => <StyledTabPane {...props} />;

export type TabsProps = AntTabsProps & StyledSystemStyles;

const StyledTabs = styled(AntTabs)(styledSystemStyles);

export const Tabs = (props: TabsProps) => <StyledTabs {...props} />;
