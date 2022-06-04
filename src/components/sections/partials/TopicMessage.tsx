import styled, { css } from 'styled-components/macro'

const TopicMessage = styled.p`
  margin-top: 0.8rem;
  font-size: 1.05rem;
  text-align: center;
  line-height: 1.66;
  letter-spacing: 0.15px;

  ${(props) => css`
    font-weight: ${props.theme.ff.overpass.fw600};
    color: ${props.theme.color.blue900};

    @media ${props.theme.media.lg} {
      font-weight: ${props.theme.ff.overpass.fw300};
      margin-top: 1.55rem;
      font-size: 1.05rem;
      text-align: left;
      line-height: 1.66;
      letter-spacing: 0.14px;
    }
  `}
`
export { TopicMessage }
