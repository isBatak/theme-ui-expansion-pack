import React, { forwardRef } from 'react';
import { Box, BoxProps } from '@theme-ui/components';

export const Dummy = forwardRef<HTMLDivElement, BoxProps>(({ sx, ...rest }, ref) => (
  <Box
    as="span"
    ref={ref}
    sx={{
      bg: 'neutral',
      height: '1rem',
      borderRadius: '2px',
      display: 'inline-block',
      lineHeight: 'inherit',
      maxWidth: '100%',
      mr: 2,
      ...sx,
    }}
    {...rest}
  >
    &nbsp;
  </Box>
));
