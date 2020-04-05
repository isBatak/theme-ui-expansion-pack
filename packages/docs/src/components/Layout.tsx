/** @jsx jsx */
import { jsx, useColorMode, Flex, Box, NavLink, Input, useThemeUI, css as cssTUI } from 'theme-ui';
import { FC, useState, useRef } from 'react';
import NextLink from 'next/link';
import Headroom from 'react-headroom';
import { Global, css } from '@emotion/core';

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
  const [mode, setMode] = useColorMode();
  const context = useThemeUI();
  const { theme } = context;

  const cycleMode = () => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };

  const onHamburgerClick = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <>
      <Head {...props} />
      <Global
        styles={css(
          cssTUI({
            body: {
              pl: [null, null, '300px'],
            },
          })(theme) as {},
        )}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 299,
          height: '100vh',
          borderRightWidth: '1px',
          borderRightStyle: 'solid',
          borderRightColor: 'border',
          bg: 'background',
          transition: 'transform 0.2s ease-in-out',
          transform: [null, null, 'translateX(0) !important'],
          zIndex: 1000,
        }}
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <Box sx={{ p: '30px', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'border' }}>
          <NextLink href="/" passHref>
            <NavLink>Theme UI Expansion Pack</NavLink>
          </NextLink>
        </Box>
        {/* <Box sx={{ p: '30px', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'border' }}>
          <Input placeholder="Search" />
        </Box> */}
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

      <Flex
        sx={{
          flexDirection: 'column',
          flex: '1 1 auto',
          minHeight: '100vh',
          zIndex: 500,
        }}
      >
        <Headroom>
          <Flex
            as="header"
            sx={{
              height: 64,
              px: 3,
              alignItems: 'center',
              justifyContent: 'space-between',
              bg: 'background',
            }}
          >
            <Flex sx={{ alignItems: 'center' }}>
              <MenuButton onClick={onHamburgerClick} />
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
        </Headroom>
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
      </Flex>
    </>
  );
};
