import React, { FC } from 'react';
import { Box, Text } from 'theme-ui';

import { LogoIcon } from './icons/LogoIcon';

export const Footer: FC = () => {
  return (
    <Box as="footer" sx={{ bg: 'muted', p: 4 }}>
      <Text>
        <Box as="span" sx={{ color: 'primary', verticalAlign: 'middle' }}>
          <LogoIcon />
        </Box>
        &nbsp; © 2020 Theme UI Expansion Pack
      </Text>
    </Box>
  );
};
