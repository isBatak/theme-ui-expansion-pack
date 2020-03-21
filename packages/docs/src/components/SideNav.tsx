/** @jsx jsx */
import { jsx, css, ThemeProvider } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { Fragment, forwardRef, FC } from 'react';
import { Global } from '@emotion/core';
import merge from 'deepmerge';

interface IOverlayProps {
  onClick?(): void;
}

const Overlay: FC<IOverlayProps> = ({ onClick }) => (
  <Fragment>
    <div
      onClick={onClick}
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    />
    <Global
      // @ts-ignore
      styles={css({
        body: {
          overflow: ['hidden', 'auto'],
        },
      })}
    />
  </Fragment>
);

interface ISideNavProps {
  open?: boolean;
  styles?: any;
  components?: any;
}

export const SideNav = forwardRef<HTMLDivElement, ISideNavProps>(({ open, styles = {}, components, ...props }, ref) => {
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
      {open && <Overlay {...props} />}
      <MDXProvider components={components}>
        <div
          {...props}
          ref={ref}
          sx={{
            position: ['fixed', 'sticky'],
            // @ts-ignore
            top: 0,
            // @ts-ignore
            left: 0,
            // @ts-ignore
            bottom: [0, 'auto'],
            // @ts-ignore
            zIndex: 1,
            // @ts-ignore
            minWidth: 0,
            // @ts-ignore
            width: 256,
            // @ts-ignore
            maxHeight: ['100vh', 'none'],
            // @ts-ignore
            overflowX: 'visible',
            // @ts-ignore
            overflowY: 'auto',
            // @ts-ignore
            WebkitOverflowScrolling: 'touch',
            // @ts-ignore
            transition: 'transform .2s ease-out',
            transform: [open ? 'translateX(0)' : 'translate(-100%)', 'none'],
            bg: ['background', 'transparent'],
          }}
        />
      </MDXProvider>
    </ThemeProvider>
  );
});
