import React, { FC, forwardRef } from 'react';

import { Link, ILinkProps } from '../Link';
import { useVariant } from '../hooks/useVariant';

interface INavLinkProps extends ILinkProps {
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
