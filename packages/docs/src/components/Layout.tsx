/** @jsx jsx */
import { jsx, Styled, useColorMode, Flex, Box, NavLink, Input } from 'theme-ui';
import { FC, useState, useRef } from 'react';
import NextLink from 'next/link';

import { MenuButton } from './MenuButton';
import { SidebarNavLink } from './SidebarNavLink';
import Button from './button';
import Sidebar from '../sidebar.mdx';
import { SideNav } from './SideNav';
import { SidebarNavHeading } from './SidebarNavHeading';
import { Head } from './Head';
import { Footer } from './Footer';

const modes = ['default', 'dark'];

const sidebar = {
  wrapper: SideNav,
  h1: SidebarNavHeading,
  h2: SidebarNavHeading,
  h3: SidebarNavHeading,
  h4: SidebarNavHeading,
  h5: SidebarNavHeading,
  h6: SidebarNavHeading,
  a: SidebarNavLink,
};

const getModeName = (mode) => {
  switch (mode) {
    case 'dark':
      return 'Dark';
    case 'default':
      return 'Light';
    default:
      return mode;
  }
};

interface ILayoutProps {
  fullwidth?: boolean;
}

export const Layout: FC<ILayoutProps> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef(null);
  const [mode, setMode] = useColorMode();

  const cycleMode = (e) => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };

  return (
    <Styled.root>
      <Head {...props} />
      <Flex
        sx={{
          flexDirection: 'row',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'sticky',
            top: 0,
            width: 299,
            height: '100vh',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: 'border',
          }}
        >
          <Box sx={{ p: '30px', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'border' }}>
            <NextLink href="/" passHref>
              <NavLink>Theme UI Expansion Pack</NavLink>
            </NextLink>
          </Box>
          <Box sx={{ p: '30px', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'border' }}>
            <Input placeholder="Search" />
          </Box>
          <Box sx={{ overflow: 'auto', flex: 1 }}>
            <Sidebar
              components={sidebar}
              sx={{
                px: 3,
                pt: 3,
                pb: 4,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
            minHeight: '100vh',
          }}
        >
          <Flex
            as="header"
            sx={{
              height: 64,
              px: 3,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Flex sx={{ alignItems: 'center' }}>
              <MenuButton
                onClick={() => {
                  setMenuOpen((state) => !state);
                  if (!nav.current) return;
                  const navLink = nav.current.querySelector('a');
                  if (navLink) navLink.focus();
                }}
              />
              <NextLink href="/" passHref>
                <NavLink>Theme UI Expansion Pack</NavLink>
              </NextLink>
            </Flex>
            <Flex>
              <NavLink href="https://github.com/isBatak/theme-ui-expansion-pack">GitHub</NavLink>
              <Button
                sx={{
                  ml: 2,
                }}
                onClick={cycleMode}
              >
                {getModeName(mode)}
              </Button>
            </Flex>
          </Flex>
          <main
            id="content"
            sx={{
              width: '100%',
              minWidth: 0,
              maxWidth: 768,
              mx: 'auto',
              pb: 5,
              px: 3,
              flex: 1,
            }}
          >
            {props.children}
          </main>
          <Footer />
        </Box>
      </Flex>
    </Styled.root>
  );
};
