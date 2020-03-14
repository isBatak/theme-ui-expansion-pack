/** @jsx jsx */
/* eslint jsx-a11y/anchor-has-content: 0 */
import { jsx } from 'theme-ui';
import isAbsoluteURL from 'is-absolute-url';
import NextLink from 'next/link';

const styles = {
  variant: 'links.nav',
};

export default ({ href, ...props }) => {
  const isExternal = isAbsoluteURL(href || '');
  if (isExternal) {
    return <a {...props} href={href} sx={styles} />;
  }
  const to = props.to || href;
  return (
    <NextLink href={to}>
      <a {...props} sx={styles} />
    </NextLink>
  );
};
