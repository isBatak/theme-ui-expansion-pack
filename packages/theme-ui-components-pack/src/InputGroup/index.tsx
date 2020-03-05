import React, { Children, forwardRef, isValidElement, cloneElement } from 'react';
import { BoxProps, Box, Input } from 'theme-ui';

export const InputLeftElement = forwardRef<undefined, BoxProps>(({sx, ...rest}, ref) => (
  <Box
    ref={ref}
    sx={{
      height: '100%',
      width: '40px',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sx
    }}
    {...rest}
  />
));

export const InputRightElement = forwardRef<undefined, BoxProps>(({ sx, ...rest}, ref) => (
  <Box
    ref={ref}
    sx={{
      height: '100%',
      width: '40px',
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sx,
    }}
    {...rest}
  />
));

export const InputGroup = forwardRef<undefined, BoxProps>(({ children, sx, ...rest }, ref) => {
  let inputPaddingLeft = null;
  let inputPaddingRight = null;

  return (
    <Box ref={ref} sx={{ position: 'relative', ...sx }} {...rest}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return null;
        }

        if (child.type === InputLeftElement) {
          inputPaddingLeft = '40px';
        }

        if (child.type === InputRightElement) {
          inputPaddingRight = '40px';
        }

        if (child.type === Input) {
          return cloneElement(child, {
            pl: child.props.pl || inputPaddingLeft,
            pr: child.props.pr || inputPaddingRight,
          });
        }

        return cloneElement(child);
      })}
    </Box>
  );
});
