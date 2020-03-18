import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'theme-ui';

interface IButtonGroup extends BoxProps {
  spacing?: any;
}

export const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroup>(({ sx, spacing, ...rest }, ref) => (
  <Box
    ref={ref}
    sx={{
      display: 'flex',
      '& > * + *': {
        ml: spacing,
      },
      ...sx,
    }}
    {...rest}
  />
));
