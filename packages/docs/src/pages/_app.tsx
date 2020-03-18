import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import theme from '../theme';
import { MDXComponents } from '../components/MDXComponents';

function DocsApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXComponents>
        <Component {...pageProps} />
      </MDXComponents>
    </ThemeProvider>
  );
}

export default DocsApp;
