import { useTranslation } from './useTranslation';
import { TranslationProvider } from './TranslationProvider';

export * from './types';

export const Translation = {
  use: useTranslation,
  Provider: TranslationProvider,
};
