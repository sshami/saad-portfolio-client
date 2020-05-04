<template>
  <div id="app">
    <!-- This is where Vue JS renders the route component we're navigating to -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

    /* Import Vendor Stylings */
    @import '~bootstrap/dist/css/bootstrap.css';
    @import '~socicon/css/socicon.css';

    /* Colors */
    // TODO: Figure out how to make these global
    $base-cream: #FFFCF4;
    $violet-blue: #F4F6FD;
    $neutral-pink: #ECD2D1;

    html, body {
      font-family: 'Lato', sans-serif;
      overflow-x: hidden;
      background-color: $base-cream;
      font-size: 15px;
      font-weight: lighter;
      word-spacing: 4px;
      letter-spacing: 2px;
      line-height: 2;
      margin:0;
      padding:0;
    }

    h1 {
      font-size: 15px;
      font-weight: bold;
      word-spacing: 5px;
      text-transform: uppercase;
      margin-bottom: 20px;
      letter-spacing: 0.5em;
    }

    h2 {
      font-size: 13px;
      font-weight: bold;
      word-spacing: 5px;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .rising-bio-title .letter {
      display: inline-block;
      line-height: 1em;
    }

    .animated-line {
      position: absolute;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: black;
      top: 8px;

      &.left {
        transform-origin: 100% 100%;
      }

      &.right {
        transform-origin: 0% 0%;
      }
    }


    [class^="socicon-"], [class*=" socicon-"] {
      font-family: 'Socicon' !important;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;

      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .bio {
      margin-left: auto;
      margin-right: auto;
      height: 100px;
    }
</style>
