<template>
  <div id="app">
    <!-- Page Transition Overlays -->
    <div id="transition-screen-photography-in" class="transition-screen-photography-in">
      <div id="transition-photography-title" class="transition-photography-title">
        <h1 class="transition-photography-title-text">Photography</h1>
      </div>
    </div>
    <div id="transition-screen-photography-out" class="transition-screen-photography-out"></div>
    <div id="transition-screen-web-in" class="transition-screen-web-in">
      <div id="transition-web-title" class="transition-web-title">
        <h1 class="transition-web-title-text">Web Development</h1>
      </div>
    </div>
    <div id="transition-screen-web-out" class="transition-screen-web-out"></div>
    <!-- This is where Vue JS renders the route component we're navigating to -->
    <transition name="view"> 
      <router-view></router-view>
    </transition>
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
    $neutral-pink: #fddecc;

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

      &.set-pink {
        transition: all 1s ease;
        background-color: $neutral-pink;
      }

      &.unset-pink {
        transition: all 1s ease;
        background-color: $base-cream;
      }

    }

    @font-face {
        font-family: LemonMilk;
        src: url("/assets/fonts/lemon-milk/LEMONMILK-Regular.woff") format("woff"), url("/assets/fonts/lemon-milk/LEMONMILK-Regular.ttf")  format("truetype");
    }

    @font-face {
        font-family: LemonMilk;
        src: url("/assets/fonts/lemon-milk/LEMONMILK-Regular.eot"); /* IE9 Compat Modes */
        src: url("/assets/fonts/lemon-milk/LEMONMILK-Regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
            url("/assets/fonts/lemon-milk/LEMONMILK-Regular.woff") format("woff"), /* Modern Browsers */
            url("/assets/fonts/lemon-milk/LEMONMILK-Regular.ttf")  format("truetype"), /* Safari, Android, iOS */
            url("/assets/fonts/lemon-milk/LEMONMILK-Regular.svg#svgFontName") format("svg"); /* Legacy iOS */
    }


    .transition-screen-photography-in {
      position: fixed;
      pointer-events: none;
      background: linear-gradient(to right, transparent 50%, $neutral-pink 50%);
      background-size: 200% 100%;
      background-position: left bottom;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: 5;
      transition: all 1s ease;

      &.swipe {
          background-position: right bottom;
      }

      &.hide {
        opacity: 0;
      }
    }

    .transition-screen-photography-out {
      position: fixed;
      pointer-events: none;
      background: linear-gradient(to right, $neutral-pink 50%,  transparent 50%);
      background-size: 200% 100%;
      background-position: left bottom;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: 5;
      transition: all 1s ease;
      opacity: 0;

      &.swipe {
          background-position: right bottom;
      }

      &.show {
        opacity: 1;
      }
    }

    .transition-photography-title {
      position: relative;
      width: 201px;
      top: 50%;
      margin: 0 auto;
      opacity: 0;
      transition: all 1s ease-in;

      &.show {
        opacity: 1;
      }
    }

    .transition-web-title {
      position: relative;
      width: 271px;
      top: 50%;
      margin: 0 auto;
      opacity: 0;
      transition: all 1s ease-in;

      &.show {
        opacity: 1;
      }
    }


    .transition-photography-title-text .letter, .transition-web-title-text .letter {
      display: inline-block;
      line-height: 1em;
    }

    .transition-screen-web-in {
      position: fixed;
      pointer-events: none;
      background: linear-gradient(to left, transparent 50%, $violet-blue 50%);
      background-size: 200% 100%;
      background-position: right bottom;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: 5;
      transition: all 1s ease;

      &.swipe {
          background-position: left bottom;
      }

      &.hide {
        opacity: 0;
      }
    }

    .transition-screen-web-out {
      position: fixed;
      pointer-events: none;
      background: linear-gradient(to left, $violet-blue 50%, transparent 50%);
      background-size: 200% 100%;
      background-position: right bottom;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: 5;
      transition: all 1s ease;
      opacity: 0;

      &.swipe {
          background-position: left bottom;
      }

      &.show {
        opacity: 1;
      }
    }

    .view-enter-active, .view-leave-active {
      transition: opacity 1.5s ease-in-out, transform 1.5s ease;
    }

    .view-enter-active {
      transition-delay: 1.3s;
    }

    .view-enter, .view-leave-to {
      opacity: 0;

    }

    .view-enter-to, .view-leave {
      opacity: 1;
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



    .draw-line {
      height:0px;
      width:1px;
      border-bottom:1px solid #000;

      &.left {
        float: right;
      }
      
      &.draw {
        -webkit-animation: increase 3s;
        -moz-animation:    increase 3s; 
        -o-animation:      increase 3s; 
        animation:         increase 3s; 
        animation-fill-mode: forwards;
      }

      &.undraw {
        -webkit-animation: decrease 3s;
        -moz-animation:    decrease 3s; 
        -o-animation:      decrease 3s; 
        animation:         decrease 3s; 
        animation-fill-mode: forwards;
      }

      @keyframes increase {
          100% {
              width: 100%;
          }
      }

      @keyframes decrease {
          0% {
              width: 1px;
          }
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
