import styled, { css } from 'styled-components/macro'

import bgPatternMobile from '../../assets/images/bg-pattern-intro-mobile.svg'
import bgPatternDesktop from '../../assets/images/bg-pattern-intro-desktop.svg'
import { HeroButton } from './partials/HeroButton'

const Container = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => css`
    color: ${props.theme.color.white};
    border-bottom-left-radius: ${props.theme.borderRadius.sectionRoundCorner};
    padding: 12.5rem ${props.theme.size.sideSpacing} 9.72rem;
    background: url(${bgPatternMobile}) no-repeat,
      linear-gradient(
        140deg,
        ${props.theme.gradient.red.ltr} 20%,
        ${props.theme.gradient.red.dkr} 75%
      );
    background-size: 300% auto, cover;
    background-position: 36.5% 40%, 50%;

    @media ${props.theme.media.md} {
      background-size: 200% auto, cover;
      background-position: 36.5% 40%, 50%;
    }

    @media ${props.theme.media.lg} {
      background: url(${bgPatternDesktop}) no-repeat,
        linear-gradient(
          90deg,
          ${props.theme.gradient.red.ltr} 20%,
          ${props.theme.gradient.red.dkr} 75%
        );
      background-size: 220% auto, cover;
      background-position: 25% 51%, 50%;
    }
  `}
`

const Title = styled.h1`
  font-size: 2.1rem;
  line-height: 1.35;

  ${(props) => css`
    @media ${props.theme.media.md} {
      margin-top: 2rem;
      font-size: 3rem;
      letter-spacing: -1.1px;
    }

    @media ${props.theme.media.lg} {
      font-size: 3.8rem;
    }
  `}
`

const Message = styled.p`
  margin-top: 0.7rem;
  font-size: 1.2rem;
  letter-spacing: -0.6px;
  line-height: 1.2;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      margin-top: 0.7rem;
      font-size: 1.3rem;
      letter-spacing: -0.35px;
      line-height: 1.2;
    }
  `}
`

const ButtonContainer = styled.div`
  align-self: stretch;
  padding: 0 0.7rem;
  display: flex;
  gap: 1rem;
  margin-top: 3rem;

  ${(props) => css`
    @media ${props.theme.media.sm} {
      align-self: unset;
    }
  `}
`

const Button = styled(HeroButton)`
  flex-grow: 1;
  min-width: 0;

  ${(props) => css`
    @media ${props.theme.media.sm} {
      min-width: 8.5rem;
    }
  `}
`

function Hero() {
  return (
    <Container>
      <Title>A modern publishing platform</Title>
      <Message>Grow your audience and build your online brand</Message>
      <ButtonContainer>
        <Button>Start for Free</Button>
        <Button outlined>Learn More</Button>
      </ButtonContainer>
    </Container>
  )
}

export { Hero }
