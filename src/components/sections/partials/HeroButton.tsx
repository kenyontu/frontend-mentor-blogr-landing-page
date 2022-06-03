import styled, { css } from 'styled-components/macro'

const HeroButton = styled.button<{ outlined?: boolean }>`
  display: inline-block;
  width: fit-content;
  border-radius: 2rem;
  padding: 0.7rem 0.1rem;
  cursor: pointer;
  transition: background-color 120ms ease-in-out, color 120ms ease-in-out,
    border 120ms ease-in-out;

  ${(props) => css`
    border: 1px solid ${props.theme.color.white};
    font-weight: ${props.theme.ff.overpass.fw600};
    background-color: ${props.outlined
      ? props.theme.color.transparent
      : props.theme.color.white};
    color: ${props.outlined
      ? props.theme.color.white
      : props.theme.color.red300};

    &:hover,
    &:focus {
      background-color: ${props.outlined
        ? props.theme.color.white
        : props.theme.color.red200};
      color: ${props.outlined
        ? props.theme.color.red300
        : props.theme.color.white};
      border: 1px solid
        ${props.outlined ? props.theme.color.white : props.theme.color.red200};
    }

    &:focus {
      outline: 2px solid ${props.theme.color.white};
      outline-offset: 1px;
    }

    @media ${props.theme.media.sm} {
      padding: 0.7rem 1.2rem 0.6rem;
    }
  `}
`

export { HeroButton }
