import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import theme from '../theme';
import { MDXComponents } from '../components/MDXComponents';
import { Meta } from '../components/Meta';

function DocsApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXComponents>
        <Meta />
        <Component {...pageProps} />
      </MDXComponents>
    </ThemeProvider>
  );
}

export default DocsApp;
