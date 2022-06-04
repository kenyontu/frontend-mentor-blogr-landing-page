# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

| Mobile                                                                                                                   | Desktop                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| <a href="./screenshots/mobile-375px.png"><img src="./screenshots/mobile-375px-thumbnail.png" alt="mobile preview" /></a> | <a href="./screenshots/desktop-1440px.png"><img src="./screenshots/desktop-1440px-thumbnail.png" alt="desktop preview" /></a> |

Placeholder

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)

### What I learned

#### Referencing CSS variables inside a Styled Components' theme object

When using CSS variables, you can change their values with media queries. But this is not currently supported within a Styled Components' theme object.

Since I initially started this project with CSS modules, I wondered if I could keep the CSS variable and reference it inside the theme object:

```css
:root {
  --my-variable: 1rem;
}

@media only screen and (min-width: 768px) {
  --my-variable: 2rem;
}
```

```js
const theme = {
  myVariable: 'var(--my-variable)',
}
```

It worked and upon further research I found this [Github issue](https://github.com/styled-components/styled-components/issues/2963#issuecomment-579002099) commenting about it, confirming it is a valid use.

Using this approach also has the added benefit of TypeScript checking and auto-completion.
