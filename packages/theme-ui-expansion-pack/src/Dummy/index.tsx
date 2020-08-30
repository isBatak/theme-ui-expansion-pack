import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'theme-ui';

interface IDummyProps extends BoxProps {
  width?: number | string;
  height?: number | string;
}

export const Dummy = forwardRef<HTMLDivElement, IDummyProps>(function(
  { sx, width = '100%', height = '1rem', ...rest },
  ref,
) {
  return (
    <Box
      as="span"
      ref={ref}
      sx={{
        bg: 'neutral',
        height,
        width,
        borderRadius: '2px',
        display: 'inline-block',
        lineHeight: 'inherit',
        maxWidth: '100%',
        ...sx,
      }}
      {...rest}
    >
      &nbsp;
    </Box>
  );
});
