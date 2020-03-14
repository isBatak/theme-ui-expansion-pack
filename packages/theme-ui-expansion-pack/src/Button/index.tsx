import React, { forwardRef, ElementType } from 'react';
import { Button as ThemeUIButton, Box, Spinner, ButtonProps, Text } from 'theme-ui';

interface IButtonProps extends ButtonProps {
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ leftIcon, rightIcon, isLoading, sx, children, ...rest }, ref) => {
    return (
      <ThemeUIButton ref={ref} sx={{ position: 'relative', px: 4, py: [3, 2], ...sx }} {...rest}>
        <Text
          as="span"
          style={{ visibility: isLoading ? 'hidden' : null }}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {leftIcon && <Box as={leftIcon} mr={2} />}
          {children}
          {rightIcon && <Box as={rightIcon} ml={2} />}
        </Text>
        {isLoading && (
          <Text
            as="span"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <Spinner size={24} sx={{ color: 'currentColor' }} />
          </Text>
        )}
      </ThemeUIButton>
    );
  },
);
