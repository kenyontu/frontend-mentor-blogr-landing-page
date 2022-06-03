import styled, { css } from 'styled-components/macro'

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`

const Svg = styled.svg<{ open: boolean }>`
  height: 2rem;

  & path:nth-child(1),
  & path:nth-child(3) {
    transition: transform 100ms ease-in-out;
    transform-origin: center;
  }

  & path:nth-child(2) {
    transition: opacity 100ms ease-in;
  }

  ${(props) =>
    props.open &&
    css`
      & path:nth-child(1) {
        transform: rotate(45deg) translateY(23%);
      }

      & path:nth-child(2) {
        opacity: 0;
      }

      & path:nth-child(3) {
        transform: rotate(-45deg) translateY(-27%);
      }
    `}
`

type Props = {
  open: boolean
  onClick: () => void
  className?: string
}

function HamburgerMenu({ open, onClick, className = '' }: Props) {
  return (
    <Button className={className} onClick={onClick}>
      <Svg open={open} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF">
          <path d="M0 8h32v2H0z" />
          <path d="M0 16h32v2H0z" />
          <path d="M0 24h32v2H0z" />
        </g>
      </Svg>
    </Button>
  )
}

export { HamburgerMenu }
