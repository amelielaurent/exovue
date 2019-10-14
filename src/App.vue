<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">


$font_path: '~@/assets/fonts/';

@font-face {
  font-family: 'Nunito';
  src: url($font_path + 'Nunito-Bold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}


@font-face {
  font-family: 'Nunito';
  src: url($font_path + 'Nunito-Regular.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}


@font-face {
  font-family: 'Nunito';
  src: url($font_path + 'Nunito-ExtraBold.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}

$font-nunito: "Nunito", sans-serif;

html {
  	font-size: 62.5%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	scroll-behavior: smooth;
}
body {
  font-size: 1.6rem;
  font-family: $font-nunito;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

/*.router-link-exact-active {
  color: red !important;
}*/

/* Variables */
$green : #D0FFAE;
$orange : #FEC180;
$blue: #34EBE9;

.main__title {
  font-size: 3rem;
  font-weight: 800;
  color: $orange;
  border-bottom: 2px solid $orange;
  margin-top: 7.8rem;
  margin-bottom: 6rem;
  width: fit-content;
  text-transform: uppercase;

  @media screen and (max-width: 640px) {
    font-size: 2rem;
  }
}

button {
  outline: none;
}
</style>
