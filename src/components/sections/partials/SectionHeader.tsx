import styled, { css } from 'styled-components/macro'

const SectionHeader = styled.p`
  font-size: 1.615rem;
  letter-spacing: -0.1px;

  ${(props) => css`
    color: ${props.theme.color.blue700};
    font-weight: ${props.theme.ff.overpass.fw600};

    @media ${props.theme.media.lg} {
      font-size: 2.3rem;
    }
  `}
`

export { SectionHeader }
