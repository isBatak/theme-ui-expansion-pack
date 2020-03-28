import React from 'react';
import Head from 'next/head';
import { useThemeUI } from 'theme-ui';

export const Meta = () => {
  const { theme } = useThemeUI();

  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/theme-ui-expansion-pack/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/theme-ui-expansion-pack/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/theme-ui-expansion-pack/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/theme-ui-expansion-pack/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/theme-ui-expansion-pack/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/theme-ui-expansion-pack/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content={theme.colors.background} />
      <meta name="msapplication-config" content="/theme-ui-expansion-pack/favicon/browserconfig.xml" />
      <meta name="theme-color" content={theme.colors.background} />
    </Head>
  );
};
