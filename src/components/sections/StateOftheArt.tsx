import styled, { css } from 'styled-components/macro'

import phonesImage from '../../assets/images/illustration-phones.svg'
import bgPatternCircles from '../../assets/images/bg-pattern-circles.svg'
import { TopicMessage } from './partials/TopicMessage'

const Section = styled.section`
  position: relative;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      padding: 1.5rem 0 3.5rem;
    }

    @media ${props.theme.media.xl} {
      padding: 3.5rem 0 5.5rem;
    }
  `}
`

const Content = styled.div`
  --image-height: 25rem;
  --image-offset: calc((var(--image-height) * 0.465));
  margin-top: calc(var(--image-offset) + 1.8rem);

  ${(props) => css`
    padding: 14.2rem ${props.theme.size.sideSpacing} 7.5rem;
    color: ${props.theme.color.white};
    border-top-right-radius: ${props.theme.borderRadius.sectionRoundCorner};
    border-bottom-left-radius: ${props.theme.borderRadius.sectionRoundCorner};
    background: url(${bgPatternCircles}) no-repeat,
      linear-gradient(
        ${props.theme.gradient.blue.ltr},
        ${props.theme.gradient.blue.dkr}
      );
    background-size: 37.5rem;
    background-position: 50% -14.5rem, 0;

    ${(props) => css`
      @media ${props.theme.media.lg} {
        --image-offset: -2.5rem;
        min-height: 20rem;
        display: flex;
        align-items: center;
        margin-top: 0;
        padding: 2rem ${props.theme.size.sideSpacing} 2rem;
        background: url(${bgPatternCircles}) no-repeat,
          linear-gradient(
            90deg,
            ${props.theme.gradient.blue.ltr},
            ${props.theme.gradient.blue.dkr}
          );
        background-size: 50rem auto, cover;
        background-position: -11rem -25rem, 50%;
      }

      @media ${props.theme.media.xl} {
        min-height: 25rem;
        background-size: 65rem, cover;
        background-position: -14.5rem -30rem, 50%;
      }
    `}
  `}
`

const Img = styled.img`
  position: absolute;
  max-width: unset;
  height: var(--image-height);
  top: calc(var(--image-offset) * -1);
  left: 50%;
  transform: translateX(-50%);

  ${(props) => css`
    @media ${props.theme.media.lg} {
      height: 100%;
      transform: unset;
      top: 0;
      bottom: 0;
      left: ${props.theme.size.sideSpacing};
    }

    @media ${props.theme.media.xl} {
      left: calc(7% + ${props.theme.size.sideSpacing});
    }
  `}
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      max-width: 600px;
      margin-left: calc(10% + 20rem);
    }

    @media ${props.theme.media.xl} {
      max-width: 600px;
      margin-left: calc(10% + 35rem);
    }
  `}
`

const Title = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  line-height: 1.27;
  letter-spacing: -0.75px;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      text-align: left;
    }
  `}
`

const Message = styled(TopicMessage)`
  color: inherit;
`

function StateOftheArt() {
  return (
    <Section>
      <Content>
        <Img src={phonesImage} alt="" />
        <InfoContainer>
          <Title>State of the Art Infrastructure</Title>
          <Message>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </Message>
        </InfoContainer>
      </Content>
    </Section>
  )
}

export { StateOftheArt }
