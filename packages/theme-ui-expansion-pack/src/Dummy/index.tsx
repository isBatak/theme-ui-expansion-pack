import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'theme-ui';
import { keyframes } from '@emotion/core';

export const pulse = keyframes({ from: { opacity: 0.1 } });

interface IDummyProps extends BoxProps {
  width?: number | string;
  height?: number | string;
  animated?: boolean;
}

export const Dummy = forwardRef<HTMLDivElement, IDummyProps>(function(
  { sx, width = '100%', height = '1rem', animated = true, ...rest },
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
        animation: animated ? `0.8s infinite alternate ${pulse}` : undefined,
        ...sx,
      }}
      {...rest}
    >
      &nbsp;
    </Box>
  );
});
