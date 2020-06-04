<template>
    <div class="page">
        <div id="photography-page-title"  class="photography-page-title-container">
            <div class="row photography-page-title">
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-pl" class="draw-line left"></div></div>
                <div class="col-auto"><h1>Photography</h1></div>
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-pr" class="draw-line"></div></div>
            </div>
        </div>
        <div class="homepage-link" @click="homePage">
            <span>SAAD</span>
        </div>

        <!-- <div id="photoset-hero" class="photoset-hero">
            <img src="https://66.media.tumblr.com/0a82fa7ce59404e7a713ded2fd5aa81d/tumblr_pkf8ro270V1v57djwo1_1280.jpg" />
        </div> -->

        <div class="photos-container" id="photos-container" >

            <div class="block title-mobile" id="photoset-title-mobile">
                <div class="photoset-title mobile">Union Market DC</div>
            </div>

            <img id="start" class="photo hero" src="https://66.media.tumblr.com/0a82fa7ce59404e7a713ded2fd5aa81d/tumblr_pkf8ro270V1v57djwo1_1280.jpg" />

            <div class="block title-desktop" id="photoset-title">
                <div class="photoset-title desktop">Union Market DC</div>
            </div>

            <img class="photo" src="https://66.media.tumblr.com/1d87611e8ffffe6701377dc2b58b1638/tumblr_pf48obYBwN1v57djwo1_1280.jpg" />
            <img class="photo" src="https://66.media.tumblr.com/ac9b62f320dee8a607f09078629a2c82/tumblr_pf48pwtn2v1v57djwo1_1280.jpg" />
            <img class="photo" src="https://66.media.tumblr.com/e16bdff3d9aedd32991e7efcf2f10468/tumblr_pehq47jW131v57djwo1_1280.jpg" />
            <img class="photo" src="https://66.media.tumblr.com/3b4baff7e0146ef48f6e8e408dd4d108/tumblr_pcnqksLOZq1v57djwo1_1280.jpg" />

            <div class="block" id="end">
                <div class="album-menu">
                    <a href="#start">
                        Back to start
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import $ from 'jquery'
import { animateText } from '../static/js/anime-animations.js'
import { initHorizontalScroll, getHorizontalScroll, calculateAllTriggers, createPhotosetTitleTriggerEvent, removePhotosetTitleTriggerEvent, createPhotoMenuTriggerEvent, removePhotoMenuTriggerEvent, destroyHorizontalScroll } from '../static/js/photography.js'

export default {
  name: 'Photography',
  beforeMount() {
      /* animate opening swipe-in transition */
      $("#transition-screen-photography-in").addClass("swipe");
      $("#transition-photography-title").addClass("show");
      animateText('rise', '.transition-photography-title-text');
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.onResize)
    this.openingTransition();
    
    /* Setup horizontal scrolling view if desktop */
    if (window.innerWidth > 1050){
        initHorizontalScroll();
        setTimeout(function(){
            calculateAllTriggers();
            createPhotosetTitleTriggerEvent();
            createPhotoMenuTriggerEvent();
        }, 500);
    }
     
  },
  beforeDestroy(){
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  destroyed() {
        this.closingTransition();
        // Cleanup
        destroyHorizontalScroll();
        if ($('body').hasClass("unset-pink")){
            $('body').removeClass("unset-pink");
        } else if ($('body').hasClass("set-pink")) {
            $('body').removeClass("set-pink");
        }
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
            $("#draw-line-page-pl").addClass("draw");
            $("#draw-line-page-pr").addClass("draw");
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
    },
    /* Navigate to home page */
    homePage() {
        return this.$router.push('/');
    },
    /* Window resize event */
    onResize() {
        if (window.innerWidth > 1050){
            /* initialize horizontal scroll if not already */
            if (getHorizontalScroll() == null){
                initHorizontalScroll();
            }
            /* recalculate photo menu trigger and reset event */
            setTimeout(function(){
                removePhotoMenuTriggerEvent();
                calculateAllTriggers();
                createPhotosetTitleTriggerEvent();
                createPhotoMenuTriggerEvent();
            }, 500);
        } else {
            /* destroy horizontal scrolling if not already */
            if (getHorizontalScroll() != null) {
                removePhotosetTitleTriggerEvent();
                removePhotoMenuTriggerEvent();
                destroyHorizontalScroll();
            }
        }
    }
  }
}
</script>


<style scoped lang="scss">

    $neutral-pink: #fddecc;
    $neutral-pink-dark: #FDD9CB;
    $gray: #717171;

    @font-face {
      font-family: 'aguero_serif_freeregular';
      src: url("../assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff2") format('woff2'),
          url("../assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff") format('woff');
      font-weight: normal;
      font-style: normal;
    }

    .page {
        height: 100%;
        /* fixed position so it doesn't jitter when loading new route/page */
        //position: fixed;
        width: 100%;
    }

    .photography-page-title-container {
        position: fixed;
        background-color: $neutral-pink;
        height: 100%;
        width: 40px;
        z-index: 2;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            background-color: transparent;
            position: relative;
            height: 40px;
            width: 400px;
            margin: 0px auto;
            margin-top: 50px;
            margin-bottom: 50px;

            /* 415px to 330px */
            @media only screen and (max-width: 415px) and (min-width: 331px) {
                width: 300px;
            }

            /* 330px and down */
            @media only screen and (max-width: 330px) {
                width: 250px;
            }

        }
    }

    .photography-page-title {
        position: fixed;
        top: 47%;
        left: -155px;
        width: 400px;
        text-transform: uppercase;
        transform: rotate(-90deg);

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            position: relative;
            top: auto;
            left: auto;
            width: auto;
            transform: inherit;
        }
    }

    .homepage-link {
        position: fixed;
        top: 0px;
        left: 55px;
        z-index: 2;

    }

    .photoset-title {
        font-size: calc(12.5vw + 12.5vh);
        line-height: 1.3;
        text-transform: uppercase;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: 'aguero_serif_freeregular', serif;
        color: $neutral-pink-dark;
        transition: all 1s ease;
        letter-spacing: 30px;
        transition: all 1s ease;
        
        &.desktop {
            font-size: calc(12.5vw + 12.5vh);
            margin-left: 40vw;
            width: 100vw;

            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: none;
            }
        }

        &.mobile {
            display: none;
            margin-left: unset;
            font-size: calc(9.5vw + 9.5vh);
            color: $gray;

            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: block;
            }
        }

    }

    // ---------- Photo slide styles ---------- //


    .photo {
        height: 100%;
        margin-right: 60px;
        max-width: 100%;
        max-height: 3000px;
        align-self: center;
        flex: 0 0 auto;
        //object-fit: contain;

        &.hero {
            position: fixed;
            padding: 70px 0px 70px 0px;
            transition: all 1.5s ease;

            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                position: relative;
            }

        }

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            width: 100%;
            margin-right: unset;
            margin-bottom: 150px;
        }

    }

    .photos-container {
        display: flex;
        font-family: sans-serif;
        height: 100vh;
        align-items: center;
        padding: 70px;
    }

    .photos-container {
        display: flex;
        flex: 1;
        height: 100vh;
        margin-left: 50px;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            display: block;
            flex: unset;
            height: auto;
            width: auto;
            padding: 0 50px 0 50px;
            margin-left: unset;

            /* 430px and down */
            @media only screen and (max-width: 430px) {
                padding: 0 10px 0 10px;
            }
        }

    }

    .block {
        height: 100%;
        font-size: 32px;
        color: black;
        margin-left: 50px;
        //padding: 90px 0px 90px 0px;
        max-height: 3000px;
        z-index: 5;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            padding: auto;
            margin-left: unset;
            max-height: unset;
            padding: 0px 0px 90px 0px;

            &.title-desktop {
                display: none;
            }

        }
    }

    .album-menu {
        width: 100vw;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .block a {
        color: inherit;
    }

</style>