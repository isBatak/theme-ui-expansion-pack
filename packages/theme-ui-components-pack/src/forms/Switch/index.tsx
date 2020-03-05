import React, { forwardRef } from 'react';
import { Box, BaseProps } from 'theme-ui';

interface ISwitchKnownProps extends BaseProps {
  checked?: boolean;
  variant?: string;
}

export interface ISwitchProps
  extends ISwitchKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof ISwitchKnownProps> {}

export const Switch = forwardRef<unknown, ISwitchProps>(({ variant = 'primary', checked, sx, ...rest }, ref) => (
  <Box
    ref={ref}
    as="button"
    type="button"
    role="switch"
    __themeKey="switch"
    variant={variant}
    aria-checked={checked}
    sx={{
      appearance: 'none',
      m: 0,
      p: 0,
      width: 40,
      height: 24,
      color: 'primary',
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 9999,
      '&[aria-checked=true]': {
        bg: 'primary',
      },
      ':focus': {
        outline: 'none',
        boxShadow: '0 0 0 2px',
      },
      ...sx
    }}
    {...rest}
  >
    <Box
      aria-hidden
      style={{
        transform: checked ? 'translateX(16px)' : 'translateX(0)',
      }}
      sx={{
        mt: '-1px',
        ml: '-1px',
        width: 24,
        height: 24,
        borderRadius: 9999,
        border: '1px solid',
        borderColor: 'primary',
        bg: 'background',
        transitionProperty: 'transform',
        transitionTimingFunction: 'ease-out',
        transitionDuration: '0.1s',
        variant: `switch.${variant}.thumb`,
      }}
    />
  </Box>
));
