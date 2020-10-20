import React, { FC, forwardRef } from 'react';

import { Link } from '../Link';
import { useVariant } from '../hooks/useVariant';
import { IBoxProps } from '../Box';

interface INavLinkProps extends IBoxProps {
  isActive?: boolean;
  variant?: string;
}

export const NavLink: FC<INavLinkProps> = forwardRef<HTMLAnchorElement, INavLinkProps>(function NavLink(
  { isActive, variant = 'nav', sx, ...rest },
  ref,
) {
  const variation = useVariant('links', variant);

  return (
    <Link
      ref={ref}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'inline-block',
        '&:hover, &:focus, &.active': {
          color: 'primary',
        },
        ...variation,
        ...sx,
      }}
      {...rest}
    />
  );
});
