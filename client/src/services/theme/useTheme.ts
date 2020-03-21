import { useTheme as useEmotionTheme } from 'emotion-theming';
import { ThemeType } from './types';

export const useTheme = (): ThemeType => useEmotionTheme();
