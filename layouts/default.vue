<template>
  <div class="app">
    <Header></Header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style>
.app {
  margin: 0;
  padding-left: 3.3vw;
  padding-top: 2.2vw;
  display: flex;
}
main {
  width: 75vw;
  padding-left: 5.5vw;
}
li {
  list-style: none;
}
h1,h2,h3,h4,p,a {
  font-family: Arsenal, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 23px;
  text-align: center;
  color: #000000;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
