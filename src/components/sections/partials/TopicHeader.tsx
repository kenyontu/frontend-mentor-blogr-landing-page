import styled, { css } from 'styled-components/macro'

const TopicHeader = styled.h1`
  font-size: 1.77rem;
  text-align: center;

  ${(props) => css`
    color: ${props.theme.color.blue600};

    &:not(:first-child) {
      margin-top: 2.8rem;
    }

    @media ${props.theme.media.lg} {
      text-align: left;
      letter-spacing: -0.42px;

      &:not(:first-child) {
        margin-top: 4.9rem;
      }
    }
  `}
`

export { TopicHeader }
