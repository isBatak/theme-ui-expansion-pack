import React from 'react';
import Head from 'next/head';
import { useThemeUI } from 'theme-ui';

export const Meta = () => {
  const { theme } = useThemeUI();

  const urlPrefix = process.env.NODE_ENV === 'production' ? '/theme-ui-expansion-pack/favicon' : '';

  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href={`${urlPrefix}/favicon/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${urlPrefix}/favicon/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${urlPrefix}/favicon/favicon-16x16.png`} />
      <link rel="manifest" href={`${urlPrefix}/manifest.json`} />
      <link rel="mask-icon" href={`${urlPrefix}/favicon/safari-pinned-tab.svg" color="#000000`} />
      <link rel="shortcut icon" href={`${urlPrefix}/favicon/favicon.ico`} />
      <meta name="msapplication-TileColor" content={theme.colors.background} />
      <meta name="msapplication-config" content={`${urlPrefix}/favicon/browserconfig.xml`} />
      <meta name="theme-color" content={theme.colors.background} />
    </Head>
  );
};
