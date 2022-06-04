import { useState } from 'react'
import styled, { css, keyframes } from 'styled-components/macro'
import { useOnResizeEvent } from '../../../hooks/useOnResizeEvent'

import { NavItem, NavigationItemData } from './NavItem'

const navigationItems: NavigationItemData[] = [
  {
    id: '1',
    name: 'Product',
    subNavItems: [
      { name: 'Overview', url: '#/' },
      { name: 'Pricing', url: '#/' },
      { name: 'Marketplace', url: '#/' },
      { name: 'Features', url: '#/' },
      { name: 'Integrations', url: '#/' },
    ],
  },
  {
    id: '2',
    name: 'Company',
    subNavItems: [
      { name: 'About', url: '#/' },
      { name: 'Team', url: '#/' },
      { name: 'Blog', url: '#/' },
      { name: 'Careers', url: '#/' },
    ],
  },
  {
    id: '3',
    name: 'Connect',
    subNavItems: [
      { name: 'Contact', url: '#/' },
      { name: 'Newsletter', url: '#/' },
      { name: 'LinkedIn', url: '#/' },
    ],
  },
]

const openMenuAnim = keyframes`
  0% {
    visibility: hidden;
  }
  1% {
    visibility: visible;
    opacity: 0;
    top: -15%;
  }
  100% {
    visibility: visible;
    opacity: 1;
    top: var(--top);
  }
`

const closeMenuAnim = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
    top: var(--top);
  }
  99% {
    visibility: visible;
    opacity: 0;
    top: 0;
  }
  100% {
    visibility: hidden;
    opacity: 0;
    top: 0;
  }

`

const Nav = styled.nav<{ open: boolean | null }>`
  --top: 5.3rem;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);

  ${(props) => css`
    background-color: ${props.theme.color.white};
    width: calc(100% - ${props.theme.size.sideSpacing} * 2);
    margin: 0 ${props.theme.size.sideSpacing};

    animation: ${props.open === null
      ? 'unset'
      : props.open
      ? openMenuAnim
      : closeMenuAnim};
    animation-duration: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    & > ul {
      padding: 0;
      list-style: none;
    }

    @media ${props.theme.media.sm} {
      width: 50%;
      left: unset;
      right: 0;
    }

    @media ${props.theme.media.lg} {
      flex-grow: 1;
      position: unset;
      visibility: visible;
      width: unset;
      left: unset;
      right: unset;
      background-color: ${props.theme.color.transparent};
      box-shadow: unset;
      flex-direction: row;
      padding: 0 0;
      margin: 0 0 0 1.5rem;
      animation: unset;

      & > ul {
        flex-grow: 1;
        display: flex;
        align-items: center;
      }
    }

    @media ${props.theme.media.xl} {
      margin: 0 0 0 4rem;
    }
  `}
`

const AuthContainer = styled.div`
  margin-top: 0.5rem;
  padding: 2rem 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => css`
    border-top: 1px solid ${props.theme.color.grayishBlue100};

    @media ${props.theme.media.lg} {
      padding: 0 1rem;
      margin-top: unset;
      border-top: unset;
      flex-direction: row;
      justify-self: flex-end;
    }
  `}
`

const LoginLink = styled.a`
  text-decoration: none;
  font-size: 1.1rem;

  ${(props) => css`
    color: ${props.theme.color.blue700};
    font-weight: ${props.theme.ff.overpass.fw600};

    @media ${props.theme.media.lg} {
      color: ${props.theme.color.white};

      &:hover,
      &:focus {
        outline: none;
        text-decoration: underline;
      }
    }
  `}
`

const SignUpLink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-top: 1.1rem;
  padding: 0.7rem 2.35rem 0.6rem;
  border-radius: 30px;
  font-size: 1.1rem;
  white-space: nowrap;

  ${(props) => css`
    font-weight: ${props.theme.ff.overpass.fw600};
    color: ${props.theme.color.white};
    background: linear-gradient(
      90deg,
      ${props.theme.gradient.red.ltr},
      ${props.theme.gradient.red.dkr}
    );

    @media ${props.theme.media.lg} {
      margin-top: 0;
      margin-left: 2rem;
      color: ${props.theme.color.red300};
      background: ${props.theme.color.white};
      transition: color 120ms ease-in-out, background-color 120ms ease-in-out;

      &:hover,
      &:focus {
        background: ${props.theme.color.red200};
        color: ${props.theme.color.white};
      }

      &:focus {
        outline: 2px solid ${props.theme.color.white};
        outline-offset: 1px;
      }
    }
  `}
`

type Props = {
  open: boolean | null
}

function NavBar({ open }: Props) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  useOnResizeEvent(() => setOpenItem(null))

  return (
    <Nav open={open}>
      <ul>
        {navigationItems.map((navItem) => (
          <NavItem
            key={navItem.id}
            data={navItem}
            open={openItem === navItem.id}
            onClick={() =>
              setOpenItem((openItem) =>
                openItem === navItem.id ? null : navItem.id
              )
            }
          />
        ))}
      </ul>
      <AuthContainer>
        <LoginLink href="#/">Login</LoginLink>
        <SignUpLink href="#/">Sign Up</SignUpLink>
      </AuthContainer>
    </Nav>
  )
}

export { NavBar }
