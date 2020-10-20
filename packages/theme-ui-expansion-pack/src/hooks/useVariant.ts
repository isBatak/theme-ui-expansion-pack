import { useContext } from 'react';
import { ThemeContext } from '@emotion/core';
import { get } from 'theme-ui';

export const useVariant = (key: string, variant: string) => {
  const theme = useContext(ThemeContext);
  if (variant) {
    const variation = get(theme, key + '.' + variant);
    if (variation) {
      return variation;
    }
  }
  return {};
};
