import styled, { css } from 'styled-components/macro'

import editorImageMobile from '../../assets/images/illustration-editor-mobile.svg'
import editorImageDesktop from '../../assets/images/illustration-editor-desktop.svg'
import { media } from '../../theme'
import { SectionHeader } from './partials/SectionHeader'
import { TopicHeader } from './partials/TopicHeader'
import { TopicMessage } from './partials/TopicMessage'
import { TopicContainer } from './partials/TopicContainer'
import { Topic } from './partials/Topic'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  ${(props) => css`
    padding: 6.3rem ${props.theme.size.sideSpacing} 4rem;

    @media ${props.theme.media.lg} {
      position: relative;
      padding: 5rem ${props.theme.size.sideSpacing};
    }

    @media ${props.theme.media.xl} {
      position: relative;
      padding: 1.85rem ${props.theme.size.sideSpacing};
    }
  `}
`

const Title = styled(SectionHeader)`
  ${(props) => css`
    @media ${props.theme.media.lg} {
      position: absolute;
      top: 4rem;
    }

    @media ${props.theme.media.xl} {
      position: absolute;
      top: 6rem;
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
      flex-direction: row-reverse;
      align-items: center;
    }
  `}
`

const Picture = styled.picture`
  margin-top: 2.57rem;
  max-width: unset;
  height: 25.38rem;
  aspect-ratio: 1;
  ${(props) => css`
    @media ${props.theme.media.lg} {
      max-width: unset;
      height: 40rem;
      margin-right: -25rem;
    }

    @media ${props.theme.media.lgr} {
      height: 45rem;
      margin-right: -25rem;
    }

    @media ${props.theme.media.xl} {
      max-width: unset;
      height: 57.8rem;
      margin-right: -25rem;
      aspect-ratio: 1;
    }
  `}
`

function DesignedFor() {
  return (
    <Container>
      <Title>Designed for the Future</Title>
      <Content>
        <Picture>
          <source media={media.lg} srcSet={editorImageDesktop} />
          <img src={editorImageMobile} alt="" />
        </Picture>
        <TopicContainer>
          <Topic>
            <TopicHeader>Introducing an extensible editor</TopicHeader>
            <TopicMessage>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </TopicMessage>
          </Topic>
          <Topic>
            <TopicHeader>Robust content management</TopicHeader>
            <TopicMessage>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </TopicMessage>
          </Topic>
        </TopicContainer>
      </Content>
    </Container>
  )
}

export { DesignedFor }
