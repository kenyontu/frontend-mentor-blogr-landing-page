import { createGlobalStyle } from 'styled-components/macro'

const GlobalSyle = createGlobalStyle`
  :root {
    --sz-content-side-spacing: 1.59rem;
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  #root {
    min-height: 100vh;
    min-width: 375px;
    margin: 0;
    line-height: 1.5;
    font-size: 16px;
    font-family: 'Overpass', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    overflow-y: hidden;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  picture,
  img {
    display: block;
    max-width: 100%;
  }

  input,
  button {
    font: inherit;
  }

  @media only screen and (min-width: 425px) {
    :root {
      --sz-content-side-spacing: 4rem;
    }
  }

  @media only screen and (min-width: 768px) {
    :root {
      --sz-content-side-spacing: 8rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    :root {
      --sz-content-side-spacing: 8rem;
    }
  }

  @media only screen and (min-width: 1400px) {
    :root {
      --sz-content-side-spacing: 10.4rem;
    }
  }
`

const breakPoints = {
  sm: '500px',
  md: '768px',
  lg: '1024px',
  lgr: '1200px',
  xl: '1440px',
}

const media = {
  sm: `only screen and (min-width: ${breakPoints.sm})`,
  md: `only screen and (min-width: ${breakPoints.md})`,
  lg: `only screen and (min-width: ${breakPoints.lg})`,
  lgr: `only screen and (min-width: ${breakPoints.lgr})`,
  xl: `only screen and (min-width: ${breakPoints.xl})`,
}

const theme = {
  color: {
    white: 'hsl(0, 0%, 100%)',
    transparent: 'transparent',
    red200: 'hsl(356, 100%, 74%)',
    red300: 'hsl(356, 100%, 66%)',
    blue600: 'hsl(208, 49%, 32%)',
    blue700: 'hsl(208, 49%, 24%)',
    blue900: 'hsl(240, 10%, 16%)',
    grayishBlue100: 'hsl(240, 2%, 94%)',
    grayishBlue200: 'hsl(240, 2%, 79%)',
  },
  gradient: {
    red: {
      ltr: 'hsl(13, 100%, 72%)',
      dkr: 'hsl(353, 100%, 62%)',
    },
    blue: {
      ltr: 'hsl(237, 17%, 21%)',
      dkr: 'hsl(237, 23%, 32%)',
    },
  },
  ff: {
    overpass: {
      name: 'Overpass, sans-serif',
      fw300: '300',
      fw600: '600',
    },
    ubuntu: {
      name: 'Ubuntu, sans-serif',
      fw400: '400',
      fw500: '500',
      fw600: '700',
    },
  },
  borderRadius: {
    sectionRoundCorner: '100px 100px',
    sectionTopRoundCorner: '90px 60px',
  },
  size: {
    sideSpacing: 'var(--sz-content-side-spacing)',
  },
  media,
}

type Theme = typeof theme

export type { Theme }

export { theme, media, GlobalSyle }
