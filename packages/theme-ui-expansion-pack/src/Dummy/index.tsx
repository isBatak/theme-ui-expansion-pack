import React, { forwardRef } from 'react';
import { Box, BoxProps } from '@theme-ui/components';

export const Dummy = forwardRef<undefined, BoxProps>(({ sx, ...rest }, ref) => (
  <Box
    as="span"
    ref={ref}
    sx={{
      bg: 'neutralLight20',
      height: 'inherit',
      borderRadius: '2px',
      display: 'inline-block',
      lineHeight: 'inherit',
      verticalAlign: 'middle',
      ...sx,
    }}
    {...rest}
  >
    &nbsp;
  </Box>
));
