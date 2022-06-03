import styled, { css } from 'styled-components/macro'

import laptopImageMobile from '../../assets/images/illustration-laptop-mobile.svg'
import laptopImageDesktop from '../../assets/images/illustration-laptop-desktop.svg'
import { media } from '../../theme'
import { TopicHeader } from './partials/TopicHeader'
import { TopicMessage } from './partials/TopicMessage'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  ${(props) => css`
    padding: 1.2rem ${props.theme.size.sideSpacing} 4rem;

    @media ${props.theme.media.lg} {
      position: relative;
      padding: 5rem ${props.theme.size.sideSpacing};
    }

    @media ${props.theme.media.xl} {
      position: relative;
      padding: 0 ${props.theme.size.sideSpacing};
    }
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  `}
`

const Picture = styled.picture`
  margin-top: 2.57rem;
  max-width: unset;
  height: 31rem;
  aspect-ratio: 1;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      max-width: unset;
      height: 40rem;
      margin-left: -25rem;
    }

    @media ${props.theme.media.lgr} {
      height: 45rem;
      margin-left: -25rem;
    }

    @media ${props.theme.media.xl} {
      max-width: unset;
      height: 57.8rem;
      margin-left: -25rem;
    }
  `}
`

const InfoContainer = styled.div`
  display: flex;
  margin-top: -1.5rem;
  flex-direction: column;
  align-items: center;
  line-height: 1.15;
  max-width: 800px;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      margin-top: -0.9rem;
      align-items: flex-start;
      padding: 3.2rem 5.5rem 0 0;
    }
  `}
`

const FirstHeader = styled(TopicHeader)`
  margin-top: -4.6rem;
`

function Info() {
  return (
    <Container>
      <Content>
        <Picture>
          <source media={media.lg} srcSet={laptopImageDesktop} />
          <img src={laptopImageMobile} alt="" />
        </Picture>
        <InfoContainer>
          <FirstHeader>Free, open, simple</FirstHeader>
          <TopicMessage>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </TopicMessage>
          <TopicHeader>Powerful tooling</TopicHeader>
          <TopicMessage>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </TopicMessage>
        </InfoContainer>
      </Content>
    </Container>
  )
}

export { Info }