import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import theme from '../theme';
import { MDXComponents } from '../components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXComponents>
        <Component {...pageProps} />
      </MDXComponents>
    </ThemeProvider>
  );
}

export default MyApp;
