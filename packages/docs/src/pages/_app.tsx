import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import theme from '../theme';
import { Layout } from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={theme}
      // @ts-ignore
      components={{
        wrapper: ({ children, ...rest }) => {
          return <Layout {...rest}>{children}</Layout>;
        },
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
