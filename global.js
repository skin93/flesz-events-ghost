import { createGlobalStyle } from 'styled-components'
import { device } from './constants/device'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Roboto-Regular';
  src: url('/fonts/Roboto-Regular.ttf');
  font-display: swap;
}

html,
body {
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  font-family: 'Roboto-Regular', sans-serif;
}
h1 {
  text-align: center;
  max-width: 100%;
  margin: 30px 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light};
}

h2 {
  color: ${({ theme }) => theme.light}
}
a {
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
}

strong {
  color: ${({ theme }) => theme.light};
}

ol, ul {
  li {
    margin: 10px 0;
    &::marker {
      color: ${({ theme }) => theme.accent};

    }
  }
}

ul {
  li {
    list-style: square;
  }
}

.black-nav {
  transition: background-color 0.2s ease-in-out;
  background-color: black;
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
