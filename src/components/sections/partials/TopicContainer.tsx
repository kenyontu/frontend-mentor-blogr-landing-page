import styled, { css } from 'styled-components/macro'

const TopicContainer = styled.div`
  display: flex;
  margin-top: -1.5rem;
  flex-direction: column;
  line-height: 1.15;
  max-width: 800px;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      margin-top: -0.9rem;
      padding: 3.2rem 5.5rem 0 0;
    }
  `}
`

export { TopicContainer }
