import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { FC } from '@typings';
import { theme } from './theme';

export const ThemeProvider: FC = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);
