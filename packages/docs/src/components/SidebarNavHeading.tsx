import React, { FC } from 'react';
import { Heading } from 'theme-ui';

interface ISidebarNavHeadingProps {}

export const SidebarNavHeading: FC<ISidebarNavHeadingProps> = (props) => {
  return <Heading sx={{ color: 'gray', fontSize: 2 }} {...props} />;
};
