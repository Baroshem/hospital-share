import React, { FC } from 'react';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { translationFiles } from './translationFiles.generated';

const createLanguageSwitchCode = (): void => {
  const pressed: string[] = [];
  const code = 'langg';

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    pressed.push(e.key);
    pressed.splice(-code.length - 1, pressed.length - code.length);

    if (pressed.join('') === code) {
      const newLang = i18n.language === 'pl' ? 'en' : 'pl';

      i18n.loadLanguages(newLang, () => {
        i18n.changeLanguage(newLang);
      });
    }
  });
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    ns: translationFiles,
  });

createLanguageSwitchCode();

export const TranslationProvider: FC = ({ children }) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
