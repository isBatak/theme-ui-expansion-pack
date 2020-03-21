/** @jsx jsx */
import { jsx, Styled, useColorMode, Flex, Box, NavLink, Label } from 'theme-ui';
import { FC, useState, useRef } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import MenuButton from './menu-button';
import { SidebarNavLink } from './SidebarNavLink';
import Button from './button';
import Sidebar from '../sidebar.mdx';
import { SideNav } from './Sidenav';
import { SidebarNavHeading } from './SidebarNavHeading';

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
  const router = useRouter();

  const cycleMode = (e) => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };

  return (
    <Styled.root>
      <Flex
        sx={{
          flexDirection: 'column',
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
                setMenuOpen(!menuOpen);
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
        <Box
          sx={{
            flex: '1 1 auto',
          }}
        >
          <div
            sx={{
              display: ['block', 'flex'],
            }}
          >
            <div
              ref={nav}
              onFocus={(e) => {
                setMenuOpen(true);
              }}
              onBlur={(e) => {
                setMenuOpen(false);
              }}
              onClick={(e) => {
                setMenuOpen(false);
              }}
            >
              <Sidebar
                open={menuOpen}
                components={sidebar}
                sx={{
                  display: [null, props.fullwidth ? 'none' : 'block'],
                  width: 256,
                  flex: 'none',
                  px: 3,
                  pt: 3,
                  pb: 4,
                  mt: [64, 0],
                }}
              />
            </div>
            <main
              id="content"
              sx={{
                width: '100%',
                minWidth: 0,
                maxWidth: props.fullwidth ? 'none' : 768,
                mx: 'auto',
                px: props.fullwidth ? 0 : 3,
              }}
            >
              {props.children}
            </main>
          </div>
        </Box>
      </Flex>
    </Styled.root>
  );
};
