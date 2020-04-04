import { useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import { get } from 'theme-ui';

export const useVariant = (key: string, variant: string) => {
  const theme = useContext(ThemeContext);
  return variant ? get(theme, key + '.' + variant) : {};
};
