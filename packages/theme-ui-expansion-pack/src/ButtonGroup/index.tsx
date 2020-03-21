import React, { forwardRef } from 'react';
import { Box, BoxProps, ResponsiveStyleValue } from 'theme-ui';

interface IButtonGroup extends BoxProps {
  spacing?: ResponsiveStyleValue<number | string>;
}

export const ButtonGroup = forwardRef<HTMLDivElement, IButtonGroup>(({ sx, spacing = 2, ...rest }, ref) => (
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
