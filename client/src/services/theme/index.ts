import { useTheme } from './useTheme';
import { ThemeProvider } from './ThemeProvider';

export * from './types';

export const Theme = {
  use: useTheme,
  Provider: ThemeProvider,
};
