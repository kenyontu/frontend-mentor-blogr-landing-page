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

    @media ${props.theme.media.xl} {
      margin-top: -1rem;
      padding: 3.2rem 5.47rem 0 0;
    }
  `}
`

export { TopicContainer }
