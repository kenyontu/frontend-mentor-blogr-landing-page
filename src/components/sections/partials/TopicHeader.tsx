import styled, { css } from 'styled-components/macro'

const TopicHeader = styled.h1`
  font-size: 1.77rem;
  text-align: center;

  ${(props) => css`
    color: ${props.theme.color.blue600};

    @media ${props.theme.media.lg} {
      text-align: left;
      letter-spacing: -0.42px;
    }
  `}
`

export { TopicHeader }
