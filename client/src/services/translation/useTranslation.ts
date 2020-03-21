import { TOptionsBase } from 'i18next';
import { useTranslation as i18nUseTranslation, UseTranslationOptions, getI18n } from 'react-i18next';
import { Translations } from './types.generated';

export const useTranslation = <T extends keyof Translations>(
  ns: T,
  options?: UseTranslationOptions,
): {
  t: (key: Translations[T] | any, options?: TOptionsBase | Record<string, string | number>) => string;
  i18n: ReturnType<typeof getI18n>;
} => {
  return i18nUseTranslation(ns, options);
};
