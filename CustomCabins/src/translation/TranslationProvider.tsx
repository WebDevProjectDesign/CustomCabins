import React, { FC } from 'react';
import { TransactionContext } from './TranslationContext';

import { pl, en } from './lang';
import { AvailableLanguagesProps } from './types';

export const TranslationProvider: FC<{
  activeLanguage: keyof AvailableLanguagesProps;
  children: React.ReactNode;
}> = ({ children, activeLanguage }) => {
  const [appLanguage, setAppLanguage] = React.useState<
    keyof AvailableLanguagesProps
  >(activeLanguage || 'pl');

  const getLangMap = (): typeof pl => {
    switch (appLanguage) {
      case 'en':
        return en;
      case 'pl':
        return pl;

      default:
        return pl;
    }
  };

  const langMap = getLangMap();

  const t = <K extends keyof typeof pl>(key: K) => langMap[key];
  return (
    <TransactionContext.Provider value={{ t, setAppLanguage }}>
      {children}
    </TransactionContext.Provider>
  );
};
