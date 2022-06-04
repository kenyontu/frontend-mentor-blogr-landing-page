import { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import { useOnResizeEvent } from '../../hooks/useOnResizeEvent'

import { HamburgerMenu } from './partials/HamburgerMenu'
import { Logo } from './partials/Logo'
import { NavBar } from './partials/NavBar'

const Container = styled.header`
  min-width: 375px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin-top: 2.7rem;

  ${(props) => css`
    padding: 0.5rem ${props.theme.size.sideSpacing};

    @media ${props.theme.media.sm} {
      margin-top: 3rem;
    }

    @media ${props.theme.media.md} {
      margin-top: 2.6rem;
    }
  `}
`

const MenuButton = styled(HamburgerMenu)`
  ${(props) => css`
    @media ${props.theme.media.lg} {
      display: none;
    }
  `}
`

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(null)

  useOnResizeEvent(() => setIsMenuOpen(null))

  return (
    <Container>
      <Logo />
      <NavBar open={isMenuOpen} />
      <MenuButton
        aria-label="Menu"
        open={Boolean(isMenuOpen)}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      />
    </Container>
  )
}

export { Header }
