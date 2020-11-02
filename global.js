import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Roboto';
  src: url('/fonts/Roboto.ttf');
}

@font-face {
  font-family: 'Oswald';
  src: url('/fonts/Oswald.ttf');
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.black};
}

h1,
h2,
h3,
h4 {
  font-family: 'Oswald', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.kg-card.kg-embed-card {

  margin: 30px auto;
}

.kg-card.kg-embed-card iframe {
  height: 400px;
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

@media only screen and (min-width: 600px) {
  .kg-gallery-row {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  /* .kg-gallery-image img:hover {
    transform: scale(2);
  } */

  .kg-gallery-image img {
    padding: 20px;
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 1200px) {
  .kg-gallery-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  /* .kg-gallery-image img:hover {
    transform: scale(2);
  } */

  /* .kg-gallery-image img {
    padding: 20px;
    width: 100%;
    height: 100%;
  } */
}

`
