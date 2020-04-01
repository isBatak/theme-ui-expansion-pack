import React, { FC } from 'react';
import { Heading } from 'theme-ui';

interface ISidebarNavHeadingProps {}

export const SidebarNavHeading: FC<ISidebarNavHeadingProps> = (props) => {
  return (
    <Heading
      sx={{ color: 'gray', fontSize: 0, textTransform: 'uppercase', mt: 4, mb: 1, px: 2, ':first-of-type': { mt: 0 } }}
      {...props}
    />
  );
};
