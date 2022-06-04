import styled, { css } from 'styled-components/macro'
import blogrLogo from '../../assets/images/logo.svg'

const Container = styled.footer`
  margin-top: 3.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => css`
    padding: 4.7rem ${props.theme.size.sideSpacing} 3rem;
    background-color: ${props.theme.color.blue900};
    color: ${props.theme.color.white};
    border-top-right-radius: ${props.theme.borderRadius.sectionRoundCorner};
    font-family: ${props.theme.ff.ubuntu.name};

    @media ${props.theme.media.xl} {
      margin-top: 0;
      flex-direction: row;
      align-items: flex-start;

      & > ${LogoContainer} {
        flex: 1;
        position: relative;
      }
    }
  `}
`

const LogoContainer = styled.div``

const Logo = styled.img`
  height: 2.5rem;
  margin-bottom: 3rem;

  ${(props) => css`
    @media ${props.theme.media.xl} {
      position: absolute;
      top: 0;
      right: 0;
    }
  `}
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => css`
    @media ${props.theme.media.lg} {
      align-self: stretch;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
    }

    ${(props) => css`
      @media ${props.theme.media.xl} {
        flex-grow: 3;
        gap: 12rem;
        justify-content: center;
      }
    `}
  `}
`

const LinkList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 0 1.25rem;

  ${(props) => css`
    & > a {
      margin-top: 0.9rem;
      font-size: 1.2rem;
      text-decoration: none;
      line-height: 1;
      color: ${props.theme.color.grayishBlue200};
      font-weight: ${props.theme.ff.ubuntu.fw400};
    }

    & > a:hover,
    & > a:focus {
      text-decoration: underline;
      color: ${props.theme.color.white};
      outline: none;
    }

    & > a:first-of-type {
      margin-top: 1.9rem;
    }

    @media ${props.theme.media.xl} {
      padding: 0 0 1.25rem;
    }
  `}
`

const ListTitle = styled.h1`
  ${(props) => css`
    font-size: 1.13rem;
    font-weight: ${props.theme.ff.ubuntu.fw600};
  `}
`

function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={blogrLogo} alt="" />
      </LogoContainer>
      <Links>
        <LinkList>
          <ListTitle>Product</ListTitle>
          <a href="#/">Overview</a>
          <a href="#/">Pricing</a>
          <a href="#/">Marketplace</a>
          <a href="#/">Features</a>
          <a href="#/">Integrations</a>
        </LinkList>
        <LinkList>
          <ListTitle>Company</ListTitle>
          <a href="#/">About</a>
          <a href="#/">Team</a>
          <a href="#/">Blog</a>
          <a href="#/">Careers</a>
        </LinkList>
        <LinkList>
          <ListTitle>Connect</ListTitle>
          <a href="#/">Contact</a>
          <a href="#/">Newsletter</a>
          <a href="#/">LinkedIn</a>
        </LinkList>
      </Links>
    </Container>
  )
}

export { Footer }
