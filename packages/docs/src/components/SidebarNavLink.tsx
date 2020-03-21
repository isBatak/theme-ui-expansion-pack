/** @jsx jsx */
/* eslint jsx-a11y/anchor-has-content: 0 */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import isAbsoluteURL from 'is-absolute-url';
import NextLink, { LinkProps } from 'next/link';
import isString from 'lodash/isString';
import { NavLink } from 'theme-ui';

export const SidebarNavLink: FC<LinkProps & { className: string }> = ({ href, children, className, ...props }) => {
  const isExternal = isString(href) && isAbsoluteURL(href || '');

  if (isExternal && isString(href)) {
    return (
      <NavLink href={href} className={className}>
        {children}
      </NavLink>
    );
  }

  return (
    <NextLink href={href} as={`${process.env.linkPrefix}${href}`} {...props} passHref>
      <NavLink>{children}</NavLink>
    </NextLink>
  );
};
