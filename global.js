import { createGlobalStyle } from 'styled-components'
import { device } from './constants/device'

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat.ttf');
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
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.black};
}

h1,
h2,
h3,
h4 {
  font-family: 'Oswald-Bold', sans-serif;
}
h1 {
  font-size: 4rem;
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light};
}
a {
  color: inherit;
  text-decoration: none;
}

strong {
  font-family: 'Montserrat-Bold', sans-serif;
}

ol, ul {
  li {
    list-style: disc;
    margin: 10px 0;
    font-size: 1.2rem;
    &::marker {
      color: ${({ theme }) => theme.accent};

    }
  }
}

blockquote {
  background: ${({ theme }) => theme.gray};
  font-family: 'Montserrat-Bold';
  font-size: 1.2rem;
  padding: 20px 30px;
  margin: 50px auto;
  width: 80%;
  max-width: 500px;
  border: solid 2px ${({ theme }) => theme.accent};
  box-shadow: 15px 15px 0 0 ${({ theme }) => theme.accent};
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
  margin: 0;
  width: 100%;
}

.kg-card.kg-image-card .kg-image {
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
