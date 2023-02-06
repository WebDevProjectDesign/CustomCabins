import { createContext, useContext } from 'react';
import { pl } from './lang';
import { AvailableLanguagesProps } from './types';

interface LangContextProps {
  t: <K extends keyof typeof pl>(key: K) => typeof pl[typeof key];
  setAppLanguage: (lang: keyof AvailableLanguagesProps) => void;
}

export const TransactionContext = createContext<LangContextProps | undefined>(
  undefined
);

export const useTranslationContext = () => {
  const ctx = useContext(TransactionContext);

  if (ctx === undefined)
    throw new Error(`No provider for TransactionContext given`);
  return ctx;
};
