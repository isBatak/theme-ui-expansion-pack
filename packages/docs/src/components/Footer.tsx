import React, { FC } from 'react';
import { Box, Text } from 'theme-ui';

import { Logo } from './svgs/Logo';

export const Footer: FC = () => {
  return (
    <Box as="footer" sx={{ bg: 'muted', p: 4 }}>
      <Text>
        <Box as="span" sx={{ color: 'primary', verticalAlign: 'middle' }}>
          <Logo width={24} height={24} />
        </Box>
        &nbsp; © 2020 Theme UI Expansion Pack
      </Text>
    </Box>
  );
};
