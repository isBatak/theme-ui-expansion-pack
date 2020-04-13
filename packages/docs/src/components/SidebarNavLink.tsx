/** @jsx jsx */
/* eslint jsx-a11y/anchor-has-content: 0 */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import isAbsoluteURL from 'is-absolute-url';
import NextLink, { LinkProps } from 'next/link';
import isString from 'lodash/isString';
import { NavLink } from 'theme-ui';
import { useRouter } from 'next/router';

const ActiveNavLink: FC<{ href?: string }> = ({ href, children, ...rest }) => {
  const router = useRouter();

  return router.asPath.startsWith(href) ? (
    <NavLink
      as="div"
      sx={{ p: 2, fontSize: 1, fontWeight: 'bold', color: 'textInverted', bg: 'primary', borderRadius: 4 }}
    >
      {children}
    </NavLink>
  ) : (
    <NavLink href={href} {...rest}>
      {children}
    </NavLink>
  );
};

export const SidebarNavLink: FC<{ href: string; className: string }> = ({ href, children, className, ...props }) => {
  const router = useRouter();
  const isExternal = isString(href) && isAbsoluteURL(href || '');
  const isActive = router.asPath.startsWith(href as string);

  if (isExternal && isString(href)) {
    return (
      <NavLink href={href} className={className}>
        {children}
      </NavLink>
    );
  }

  return (
    <NextLink href={href} as={`${process.env.linkPrefix}${href}`} {...props} passHref>
      <NavLink href={href} isActive={isActive}>
        {children}
      </NavLink>
    </NextLink>
  );
};
