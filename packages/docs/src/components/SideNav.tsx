import { ThemeProvider, Box } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { forwardRef } from 'react';
import merge from 'deepmerge';

interface ISideNavProps {
  styles?: any;
  components?: any;
}

export const SideNav = forwardRef<HTMLDivElement, ISideNavProps>(({ styles = {}, components, ...props }, ref) => {
  return (
    <ThemeProvider
      theme={{
        styles: merge(
          {
            ul: {
              listStyle: 'none',
              p: 0,
              m: 0,
              ul: {
                a: {
                  pl: 4,
                },
              },
            },
            a: {
              display: 'block',
              px: 2,
              py: 2,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 1,
              fontWeight: 'bold',
            },
          },
          styles,
        ),
      }}
    >
      <MDXProvider components={components}>
        <Box {...props} ref={ref} />
      </MDXProvider>
    </ThemeProvider>
  );
});
