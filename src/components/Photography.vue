<template>
    <div class="page">
        <div id="photography-page-title"  class="photography-page-title-container">
            <div class="row photography-page-title">
                <div class="col tile-title-line-photography left"></div>
                <div class="col-auto"><h1>Photography</h1></div>
                <div class="col tile-title-line-photography right"></div>
            </div>
        </div>
        <!-- <div class="photos">
            <img src="https://66.media.tumblr.com/0a82fa7ce59404e7a713ded2fd5aa81d/tumblr_pkf8ro270V1v57djwo1_1280.jpg" /> 
        </div> -->

        <div class="wrapper" id="js-wrapper">
            <div class="sections" id="js-slideContainer">
                <section class="section">
                    <span class="section__title" id="title1">Section One</span>
                <span id="trigger--title1"></span>
                </section>
                <section class="section">
                    <span class="section__title" id="title2">Section Two</span>
                <span id="trigger--title2"></span>
                </section>
                <section class="section">
                    <span class="section__title" id="title3">Section Three</span>
                <span id="trigger--title3"></span>
                </section>
                <section class="section">
                    <span class="section__title" id="title4">Section Four</span>
                <span id="trigger--title4"></span>
                </section>
                <section class="section">
                    <span class="section__title" id="title5">Section Five</span>
                <span id="trigger--title5"></span>
                </section>
                <section class="section">
                    <span class="section__title" id="title6">Section Six</span>
                <span id="trigger--title6"></span>
                </section>
            </div>
        </div>

    </div>
</template>


<script>
import $ from 'jquery'
import { animateText, animateLine } from '../static/js/anime-animations.js'
import { createPhotographySlide } from '../static/js/photography.js'

export default {
  name: 'Photography',
  beforeMount() {
      /* animate opening swipe-in transition */
      $("#transition-screen-photography-in").addClass("swipe");
      $("#transition-photography-title").addClass("show");
      animateText('rise', '.transition-photography-title-text');
  },
  mounted() {
      this.openingTransition();
      createPhotographySlide();
  },
  destroyed() {
      this.closingTransition()
  },
  methods: {
    /* Opening Transition */
    openingTransition() {
        /* show opening swipe-out transition */
        setTimeout(function(){ 
            $("#transition-screen-photography-out").addClass("show");
        }, 900);
        /* hide opening swipe-in transition */
        setTimeout(function(){ 
            $("#transition-photography-title").removeClass("show");
            $("#transition-screen-photography-in").addClass("hide");
        }, 1200);
        /* animate opening swipe-out transition */
        setTimeout(function(){ 
            $("#transition-screen-photography-out").addClass("swipe");
            animateLine('.tile-title-line-photography');
        }, 1500);
    },
    /* Opening Transition */
    closingTransition() {
        $("#transition-screen-photography-out").removeClass("swipe");
        setTimeout(function(){ 
            $("#transition-screen-photography-in").removeClass("hide");
        }, 900);
        setTimeout(function(){ 
            $("#transition-screen-photography-out").removeClass("show");
        }, 1200);
        setTimeout(function(){ 
            $("#transition-screen-photography-in").removeClass("swipe");
        }, 1500);
    }
  }
}
</script>


<style scoped lang="scss">

    $neutral-pink: #fddecc;

    .page {
        height: 100%;
        /* fixed position so it doesn't jitter when loading new route/page */
        //position: fixed;
    }

    .photography-page-title-container {
        position: fixed;
        background-color: $neutral-pink;
        height: 100%;
        width: 40px;
    }

    .photography-page-title {
        position: fixed;
        top: 47%;
        left: -155px;
        width: 400px;
        text-transform: uppercase;
        transform: rotate(-90deg);
    }

    .tile-title-line-photography  {
    left: 0;
    height: 1px;
    width: 100%;
    background-color: black;
    top: 7px;
    //opacity: 0;

    &.left {
        transform-origin: 100% 100%;
    }

    &.right {
        transform-origin: 0% 0%;
    }
    }

    .photos {
        height: 100vh;
        margin-left: 200px;
        padding: 60px;
        width: 100%;

        img {
            max-width:100%;
            max-height:100%;
            margin-right: 150px;
        }
    }


    // ---------- SCROLLING STYLES ---------- //

    $panelcount: 5; // set # of panels/sections here

    .wrapper{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        perspective: 1000;
        margin-left: 50px;
        background-color: gray;
    }

    // .sections {
    //     width: 600%;
    // }

    .section {
    & {
        height: 100%;
        width: 900px;
        //width: calc( 100% / #{$panelcount} );
        float: left;

        // aesthetic only ----
        position: relative;
        
        $colors: #F64747, #22A7F0, #F9690E, #9B59B6, #03C9A9, green;
        @for $i from 1 through length($colors) {
        &:nth-child(#{$i}) {
            background: nth($colors, $i)
        }
        }
    }
    &s {
        width: percentage($panelcount);
        height: 100%;
    }
    &__title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        font-size: 30px;
        color: #fff;
    }
    }

</style>