/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { useState, useRef } from 'react'
import { Flex, Box } from '@theme-ui/components'
import { AccordionNav } from '@theme-ui/sidenav'
import { Link } from 'gatsby'

import SkipLink from './skip-link'
import Pagination from './pagination'
import EditLink from './edit-link'
import Head from './head'
import MenuButton from './menu-button'
import NavLink from './nav-link'
import Button from './button'
import Sidebar from '../sidebar.mdx'

const modes = ['default', 'dark', 'deep', 'swiss']

const sidebar = {
  wrapper: AccordionNav,
  a: NavLink,
}

const getModeName = mode => {
  switch (mode) {
    case 'dark':
      return 'Dark'
    case 'deep':
      return 'Deep'
    case 'swiss':
      return 'Swiss'
    case 'default':
      return 'Light'
    default:
      return mode
  }
}

export default props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)
  const [mode, setMode] = useColorMode()
  const fullwidth =
    (props.pageContext.frontmatter &&
      props.pageContext.frontmatter.fullwidth) ||
    props.location.pathname === '/'

  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const next = modes[(i + 1) % modes.length]
    setMode(next)
  }

  return (
    <Styled.root>
      <Head {...props} />
      <SkipLink>Skip to content</SkipLink>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
        <Flex
          as="header"
          sx={{
            height: 64,
            px: 3,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Flex sx={{ alignItems: 'center' }}>
            <MenuButton
              onClick={e => {
                setMenuOpen(!menuOpen)
                if (!nav.current) return
                const navLink = nav.current.querySelector('a')
                if (navLink) navLink.focus()
              }}
            />
            <Link to="/" sx={{ variant: 'links.nav' }}>
              Theme UI
            </Link>
          </Flex>
          <Flex>
            <NavLink href="https://github.com/system-ui/theme-ui">
              GitHub
            </NavLink>
            <Button
              sx={{
                ml: 2,
              }}
              onClick={cycleMode}>
              {getModeName(mode)}
            </Button>
          </Flex>
        </Flex>
        <Box
          sx={{
            flex: '1 1 auto',
          }}>
          <div
            sx={{
              display: ['block', 'flex'],
            }}>
            <div
              ref={nav}
              onFocus={e => {
                setMenuOpen(true)
              }}
              onBlur={e => {
                setMenuOpen(false)
              }}
              onClick={e => {
                setMenuOpen(false)
              }}>
              <Sidebar
                open={menuOpen}
                components={sidebar}
                pathname={props.location.pathname}
                sx={{
                  display: [null, fullwidth ? 'none' : 'block'],
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
                maxWidth: fullwidth ? 'none' : 768,
                mx: 'auto',
                px: fullwidth ? 0 : 3,
              }}>
              {props.children}
              <EditLink />
              {!fullwidth && <Pagination />}
            </main>
          </div>
        </Box>
      </Flex>
    </Styled.root>
  )
}
