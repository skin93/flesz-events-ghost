import { createGlobalStyle } from 'styled-components'
import { device } from './constants/device'

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Montserrat-Medium';
  src: url('/fonts/Montserrat-Medium.ttf');
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat-Bold';
  src: url('/fonts/Montserrat-Bold.ttf');
  font-display: swap;
}

@font-face {
  font-family: 'Oswald';
  src: url('/fonts/Oswald.ttf');
  font-display: swap;
}

@font-face {
  font-family: 'Oswald-Bold';
  src: url('/fonts/Oswald-Bold.ttf');
  font-display: swap;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat-Medium', sans-serif;
  background-color: ${({ theme }) => theme.gray};
}

h1,
h2,
h3,
h4 {
  font-family: 'Oswald-Bold', sans-serif;
}
h1 {
  font-size: 3rem;
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light};
}

h3 {
  font-size: 2rem;
  color: ${({ theme }) => theme.light}
}
a {
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
}

strong {
  font-family: 'Montserrat-Bold', sans-serif;
}

ol, ul {
  li {
    margin: 10px 0;
    font-size: 1.1rem;
    &::marker {
      color: ${({ theme }) => theme.accent};
      font-family: 'Oswald-Bold';

    }
  }
}

ul {
  li {
    list-style: square;
  }
}

.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */

  iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  }
}

.kg-card.kg-embed-card {

  margin: 30px auto;
}

.kg-card.kg-embed-card {
  display: flex;
 flex: 1 1;
 justify-content: center;
 align-items: center;
}


.kg-card.kg-embed-card iframe  {
 width: 100%;
}

.kg-card.kg-image-card {
  margin: 0 auto;
  max-width: 600px;
}

.kg-image {
  width: 100%;
}

.kg-card.kg-gallery-card.kg-width-wide {
  margin: 0;
  width: 100%;
}

.kg-gallery-container {
  width: 100%;
  height: 100%;
}

.kg-gallery-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.kg-gallery-image img {
  padding: 20px;
  width: 100%;
  height: 100%;
}

figcaption {
  text-align: center;
  font-family: 'Oswald-Bold';
  color: ${({ theme }) => theme.light};
}

@media ${device.tablet} {
  .kg-gallery-row {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .kg-gallery-image img {
    padding: 20px;
    width: 100%;
    height: 100%;
  }
}
@media ${device.tablet} {
.kg-card.kg-embed-card iframe {
    width: 80%;
  }
}

@media ${device.laptopL} {

  .kg-gallery-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* scrollbar */


/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.accent};
  border-radius: 50px;
}

`
