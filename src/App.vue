<template>
    <div id="app">
    <header class="nav-container">
      <button class="c-hamburger c-hamburger--htx" @click="mobileNavToggle">
              <span>toggle menu</span>
      </button>
      <div class="title-logo" v-bind:class="[(currentRouteName == 'photography' ? 'shift' : '')]">
        <router-link :to="{ name: 'homepage'}"><img src="./assets/saad-logo.png" alt="SAAD"></router-link>
      </div>
      <div class="navigation">
        <div class="nav-links">
          <a href="" class="active">Home</a>
          <a href="">About</a>
          <a href="">Web Dev</a>
          <a href="">Photography</a>
        </div>
      </div>
    </header>
    <div id="myNav" class="overlay">
      <!-- The mobile nav overlay content -->
      <div class="overlay-content">
        <a href="" class="active nav-open">Home</a>
        <a href="" class="nav-open">About</a>
        <a href="" class="nav-open">Web Dev</a>
        <a href="" class="nav-open">Photography</a>
      </div>
    </div>
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

import * as common from './static/js/common.js'

export default {
  name: 'App',
  methods: {
    mobileNavToggle() {
      common.mobileNavToggle();
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
}
</script>

<style lang="scss">

    /* Import Vendor Stylings */
    @import '~bootstrap/dist/css/bootstrap.css';
    @import '~socicon/css/socicon.css';

    @import './static/styles/hamburger.scss';

    /* Colors */
    // TODO: Figure out how to make these global
    $base-cream: #FFFCF4;
    $violet-blue: #F4F6FD;
    $neutral-pink: #fddecc;
    $neutral-pink-dark: #fbc6a7;

    $header-height: 60px;

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

    header {
      height: $header-height;
      top: 0;
      transition: box-shadow 0.5s ease-in-out, top 0.2s ease-in-out;
      width: 100%;
      z-index: 15;
      line-height: 1;
      position: fixed;

      a:hover {
        text-decoration: none;
      }

      &.shadow {
        background-color: $base-cream;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
      }

      &.mobile-nav {
          background: rgba(255, 255, 255, 0);
      }
    }

    // we'll add this class using javascript
    .nav-container {

      &.up {
        top: -$header-height;

        // @media screen and (max-width: 1036px) {
        //       top: -$header-height - 10px;
        // }
      }


    }

    // @font-face {
    //     font-family: LemonMilk;
    //     src: url("/assets/fonts/lemon-milk/LEMONMILK-Regular.woff") format("woff"), url("/assets/fonts/lemon-milk/LEMONMILK-Regular.ttf")  format("truetype");
    // }

    // @font-face {
    //     font-family: LemonMilkLight;
    //     src: url("/assets/fonts/lemon-milk/light/LEMONMILK-Light.eot"); /* IE9 Compat Modes */
    //     src: url("/assets/fonts/lemon-milk/light/LEMONMILK-Light.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    //         url("/assets/fonts/lemon-milk/light/LEMONMILK-Light.woff") format("woff"), /* Modern Browsers */
    //         url("/assets/fonts/lemon-milk/light/LEMONMILK-Light.ttf")  format("truetype"), /* Safari, Android, iOS */
    //         url("/assets/fonts/lemon-milk/light/LEMONMILK-Light.svg#svgFontName") format("svg"); /* Legacy iOS */
    // }

    // @font-face {
    //     font-family: AgueroSerif;
    //     src: url("/assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff2") format("woff2");
    // }

    // @font-face {
    //   font-family: 'aguero_serif_freeregular';
    //   src: url("/assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff2") format('woff2'),
    //       url("/assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff") format('woff');
    //   font-weight: normal;
    //   font-style: normal;
    // }

    .title-logo {
      float:left;
      margin: 5px 0px 5px 15px;
      padding: 7px;
      width: 10%;
      font-size: 30px;
      letter-spacing: 3px;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;

      img {
        max-width: 100px;
      }

      &.shift {
        margin-left: 60px;
      }

    }

    .navigation {
      float:right;
      margin-top: 10px;
      width: 50%;
      padding: 12px;
      text-transform: uppercase;

      /* 1050px and down */
      @media only screen and (max-width: 1050px) {
            display: none;
        }
    }

    .nav-links {
      float: right;
      letter-spacing: 1.5px;
      font-size: 13px;
      font-weight: bolder;

      a {
          margin-right: 40px;
          color: black;

          &.active {
              border-bottom: 1px solid #000;
              padding-bottom: 2px;
          }
      }

    }

    /* 
    ----------------------
      Mobile Nav Overlay  
    ----------------------
    */

    /* Mobile Nav Overlay (background) */
    .overlay {
        /* Height & width depends on how you want to reveal the overlay (see JS below) */    
        height: 0%;
        width: 100%;
        position: fixed; /* Stay in place */
        z-index: 5; /* Sit on top */
        left: 0;
        top: 0;
        background-color: $base-cream; /* Nude fallback color */
        /* background-color: rgba(28,28,28, 0.9); /* Nude w/opacity */
        overflow-x: hidden; /* Disable horizontal scroll */
        transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
    }

    /* Position the content inside the overlay */
    .overlay-content {
        position: relative;
        top: 25%; /* 15% from the top */
        width: 100%; /* 100% width */
        text-align: center; /* Centered text/links */
        margin-top: 10px; /* 30px top margin to avoid conflict with the close button on smaller screens */
        line-height: 50px;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
        font-weight: lighter;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }

    /* The navigation links inside the overlay */
    .overlay a {
        margin-bottom: 50px;
        text-decoration: none;
        font-size: 15px;
        color: black;
        display: block; /* Display block instead of inline */
        transition: 0.3s; /* Transition effects on hover (color) */
        transition: opacity 0.9s ease;
        transition: transform 0.3s ease;

        &.nav-open {
            transform: scale(2,2);
        }

        &.active {
            text-decoration: underline;
            text-underline-position: under;
        }

    }

    /* When you mouse over the navigation links, change their color */
    .overlay a:hover, .overlay a:focus {
        color: black;
    }

    /* Position the close button (top right corner) */
    .overlay .closebtn {
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 60px;
    }

    /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
    @media screen and (max-height: 450px) {
        .overlay a {font-size: 20px}
        .overlay .closebtn {
            font-size: 40px;
            top: 15px;
            right: 35px;
        }
    }

    .menu-mobile {
        top: 30px;
        float: right;
        @media screen and (min-width: 992px) {
            display: none;
        }
    }

    .stop-scrolling {
      //height: 100%;
      overflow: hidden;
    }


    /* 
    ----------------------
      Page Transitions  
    ----------------------
    */


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
      z-index: 20;
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
      z-index: 20;
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
      z-index: 20;
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
      z-index: 20;
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

    .square-btn {
        background-color: #FFFCF4;
        padding: 10px 10px 10px 0px;


        h2{
            letter-spacing: 5px;
        }

        &.left-arrow {
          img {
            transform: rotate(-180deg);
            opacity: 60%;
          }
        }

        &.color-cream {
          background-color: $base-cream;
        }

        &.color-pink-dark {
          background-color: $neutral-pink-dark
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
