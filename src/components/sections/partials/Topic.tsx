import styled, { css } from 'styled-components/macro'

const Topic = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:first-child) {
    margin-top: 2.8rem;
  }

  ${(props) => css`
    @media ${props.theme.media.lg} {
      align-items: flex-start;

      &:not(:first-child) {
        margin-top: 4.9rem;
      }
    }
  `}
`

export { Topic }
