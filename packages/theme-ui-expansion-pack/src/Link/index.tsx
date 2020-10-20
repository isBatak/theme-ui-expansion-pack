/** @jsx jsx */
import { jsx } from 'theme-ui';
import { forwardRef } from 'react';

import { Box, IBoxProps } from '../Box';
import { useVariant } from '../hooks/useVariant';

export const Link = forwardRef<HTMLAnchorElement, IBoxProps>(function Link({ variant = 'styles.a', ...props }, ref) {
  const variantStyle = useVariant('links', variant);

  // @ts-ignore
  return <Box ref={ref} as="a" {...props} sx={variantStyle} />;
});
