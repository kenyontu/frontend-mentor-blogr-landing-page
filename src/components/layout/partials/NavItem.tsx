import styled, { css } from 'styled-components/macro'

import arrowIconMobile from '../../../assets/images/icon-arrow-dark.svg'
import arrowIconDesktop from '../../../assets/images/icon-arrow-light.svg'

const Container = styled.li`
  display: flex;
  flex-direction: column;
  flex-direction: center;

  & + & {
    margin-top: 1.1rem;
  }

  ${(props) => css`
    @media ${props.theme.media.lg} {
      position: relative;

      & + & {
        margin-top: 0;
        margin-left: 1.1rem;
      }

      &:focus {
        outline: none;
      }

      &:hover ${Menu}, &:focus ${Menu}, &:focus-within ${Menu} {
        display: flex;
      }

      &:hover > ${Name}, &:focus > ${Name}, &:focus-within > ${Name} {
        text-decoration: underline;
        opacity: 1;
      }

      &:hover > ${Name}::after, &:focus > ${Name}::after {
        transform: rotate(-180deg);
      }
    }

    @media ${props.theme.media.xl} {
      & + & {
        margin-top: 0;
        margin-left: 1.8rem;
      }
    }
  `}
`

const Name = styled.span<{ open: boolean }>`
  cursor: pointer;
  margin: 0 auto;
  text-decoration: none;
  padding: 0.2rem 0;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  letter-spacing: -0.3px;
  transition: color 100ms ease-in;

  &::after {
    content: '';
    height: 0.8rem;
    width: 0.8rem;
    background: url(${arrowIconMobile}) center no-repeat;
    margin-left: 0.38rem;
    margin-bottom: 0.1em;
    transition: transform 100ms ease-in;
  }

  ${(props) => css`
    font-weight: ${props.theme.ff.overpass.fw600};
    color: ${props.open
      ? props.theme.color.blue600
      : props.theme.color.blue700};
    &::after {
      transform: rotate(${props.open ? '-180deg' : '0deg'});
    }

    @media ${props.theme.media.lg} {
      color: ${props.theme.color.white};
      opacity: ${props.open ? '1' : '0.7'};
      transition: none;
      pointer-events: none;

      &::after {
        background: url(${arrowIconDesktop}) center no-repeat;
      }
    }

    @media ${props.theme.media.xl} {
      font-size: 1.09rem;

      &::after {
        margin-left: 0.3rem;
      }
    }
  `}
`

const Menu = styled.ul<{ open: boolean }>`
  margin-top: 1rem;
  padding: 1.5rem 1rem 1.3rem;
  align-self: stretch;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  list-style: none;

  ${(props) => css`
    display: ${props.open ? 'flex' : 'none'};
    background-color: ${props.theme.color.grayishBlue100};

    & a {
      text-decoration: none;
      color: ${props.theme.color.blue600};
      font-size: 1rem;
      font-weight: ${props.theme.ff.overpass.fw300};
    }

    @media ${props.theme.media.lg} {
      position: absolute;
      top: 1rem;
      align-items: flex-start;
      min-width: 10rem;
      z-index: 10;
      box-shadow: 0 6px 9px 3px rgba(0, 0, 0, 0.2);

      & a:hover,
      & a:focus {
        font-weight: ${props.theme.ff.overpass.fw600};
        outline: none;
      }
    }
  `}

  & > li + li {
    margin-top: 1rem;
  }
`

type NavigationItemData = {
  id: string
  name: string
  subNavItems: { name: string; url: string }[]
}

type Props = {
  open: boolean
  data: NavigationItemData
  onClick: () => void
}

function NavItem({ open, data, onClick }: Props) {
  return (
    <Container tabIndex={0}>
      <Name open={open} onClick={onClick}>
        {data.name}
      </Name>
      <Menu open={open}>
        {data.subNavItems.map((item) => (
          <li key={item.name}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </Menu>
    </Container>
  )
}

export type { NavigationItemData }

export { NavItem }
