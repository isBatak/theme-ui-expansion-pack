import React, { FC, useState, useContext, forwardRef } from 'react';
import { BoxProps, Box, IconButton, Text } from 'theme-ui';

import InfoClose from '../../assets/icons/icon-close.svg';

const defaultState: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> } = {
  isOpen: false,
  setIsOpen: null,
};

export const FooterDrawerContext = React.createContext(defaultState);

export const FooterDrawerWrapper: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(defaultState.isOpen);

  return <FooterDrawerContext.Provider value={{ isOpen, setIsOpen }}>{children}</FooterDrawerContext.Provider>;
};

export const useFooterDrawer = () => {
  return useContext(FooterDrawerContext);
};

export const FooterDrawer = forwardRef<undefined, BoxProps>(({ children, sx, ...rest }, ref) => {
  const { isOpen } = useFooterDrawer();

  return (
    <Box
      ref={ref}
      style={{ transform: `translateY(${isOpen ? 0 : '100%'})`, transition: 'transform .3s ease-in-out' }}
      sx={{
        position: 'fixed',
        width: '100%',
        top: [0, 'auto'],
        bottom: 0,
        height: 'auto',
        overflowY: 'auto',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});
