<template>
    <div class="page">
        <div id="web-page-title"  class="web-page-title-container">
            <div class="row web-page-title">
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-wl" class="draw-line left"></div></div>
                <div class="col-auto"><h1>Web Development</h1></div>
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-wr" class="draw-line"></div></div>
            </div>
        </div>

        <div class="webdev-container" id="webdev-container">
            <span id="start"></span>
            <div id="intro" class="block intro">
                <div class="intro-photos-container">
                    <img src="../assets/home/web-mobile-lc3d.png" id="mobile-web-left" class="mobile-web-left">
                    <img src="../assets/home/web-mobile-ss3d.png" id="mobile-web-right" class="mobile-web-right">
                </div>
            </div>
            <div id="page-title-container" class="block title-desktop">
                <div id="page-title" class="page-title desktop">Web/App Development</div>
            </div>
            <div class="block">
                <div class="project-display">
                    <div class="display-images">
                            <img src="../assets/web/temp/lauren-desktop-home.png" class="laptop">
                            <img src="../assets/web/temp/lauren-mobile-home.png" class="mobile">
                    </div>
                    <!-- <div class="mobile">
                        <img src="../assets/web/temp/lauren-mobile-home.png">
                    </div> -->
                </div>
                <div class="description">
                    <div class="description-text">
                        <h1>Lauren Emily Castle</h1>
                        <p class="url">laurenemilycastle.com</p>
                        <p class="desc">Lauren Emily Castle’s website is a collection of her portraits 
                        captured in collaboration with various photographers, hair/makeup artists, 
                        and clothing designers. Her website was built using the Django web framework 
                        along with the Wagtail CMS.</p>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="project-display">
                    <div class="display-images">
                            <img src="../assets/web/temp/saad-desktop-home.png" class="laptop">
                            <img src="../assets/web/temp/saad-mobile-home2.png" class="mobile">
                    </div>
                    <!-- <div class="mobile">
                        <img src="../assets/web/temp/lauren-mobile-home.png">
                    </div> -->
                </div>
                <div class="description">
                    <div class="description-text">
                        <h1>Saad</h1>
                        <p class="url">saadcreative.com</p>
                        <p class="desc">Froth robust robusta caramelization et trifecta siphon variety. 
                        Carajillo plunger pot, aroma a, beans coffee, spoon white latte roast coffee brewed. 
                        Seasonal, doppio that redeye con panna eu decaffeinated ristretto doppio organic and java.</p>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="project-display">
                    <div class="display-images">
                            <img src="../assets/web/temp/smart-mirror-reflect.png" class="standard">
                    </div>
                    <!-- <div class="mobile">
                        <img src="../assets/web/temp/lauren-mobile-home.png">
                    </div> -->
                </div>
                <div class="description shift-left">
                    <div class="description-text">
                        <h1>Smart Mirror</h1>
                        <p class="desc">Froth robust robusta caramelization et trifecta siphon variety. 
                        Carajillo plunger pot, aroma a, beans coffee, spoon white latte roast coffee brewed. 
                        Seasonal, doppio that redeye con panna eu decaffeinated ristretto doppio organic and java.</p>
                    </div>
                </div>
            </div>
            <div class="block end" id="end">
                <div id="slide-space" class="slide-space">
                </div>
            </div>
            <!-- <img data-v-96abf462="" src="http://45.55.51.168/mediafiles/original_images/1M5A5199-1500.jpg" class="photo--web">
            <img data-v-96abf462="" src="http://45.55.51.168/mediafiles/original_images/1M5A5199-1500.jpg" class="photo--web">
            <img data-v-96abf462="" src="http://45.55.51.168/mediafiles/original_images/1M5A5199-1500.jpg" class="photo--web">
            <img data-v-96abf462="" src="http://45.55.51.168/mediafiles/original_images/1M5A5199-1500.jpg" class="photo--web">
            <img data-v-96abf462="" src="http://45.55.51.168/mediafiles/original_images/1M5A5199-1500.jpg" class="photo--web">
            <img data-v-96abf462="" src="http://45.55.51.168/mediafiles/original_images/1M5A5199-1500.jpg" class="photo--web">
            <img data-v-96abf462="" src="http://45.55.51.168/mediafiles/original_images/1M5A5199-1500.jpg" class="photo--web"> -->
        </div>
    </div>
</template>


<script>
import $ from 'jquery'
import { animateText } from '../static/js/anime-animations.js'
import { initHorizontalScroll, getHorizontalScroll, calculateAllTriggers, createPageScrollEvent, removePageScrollEvent, destroyHorizontalScroll } from '../static/js/webdev.js'

export default {
  name: 'WebDevelopment',
  beforeMount() {
      /* animate opening swipe-in transition */
      $("#transition-screen-web-in").addClass("swipe");
      $("#transition-web-title").addClass("show");
      animateText('rise', '.transition-web-title-text');
  },
  mounted() {
    // Register a resize event listener when the Vue component is ready
    window.addEventListener('resize', this.onResize)
    this.openingTransition();

    /* Setup horizontal scrolling view if desktop */
    if (window.innerWidth > 1050){
        initHorizontalScroll();
        setTimeout(function(){
            calculateAllTriggers();
            createPageScrollEvent();
        }, 1000);
    }

    // Animate intro phones
    $("#mobile-web-left").addClass("fix");
    $("#mobile-web-right").addClass("fix");
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
    removePageScrollEvent();
  },
  destroyed() {
      this.closingTransition()
      destroyHorizontalScroll();
  },
  methods: {
    /* Opening Transition */
    openingTransition() {
        /* show opening swipe-out transition */
        setTimeout(function(){ 
            $("#transition-screen-web-out").addClass("show");
        }, 900);
        /* hide opening swipe-in transition */
        setTimeout(function(){ 
            $("#transition-web-title").removeClass("show");
            $("#transition-screen-web-in").addClass("hide");
        }, 1200);
        /* animate opening swipe-out transition */
        setTimeout(function(){ 
            $("#transition-screen-web-out").addClass("swipe");
            $("#draw-line-page-wl").addClass("draw");
            $("#draw-line-page-wr").addClass("draw");
        }, 1500);
    },
    /* Opening Transition */
    closingTransition() {
        $("#transition-screen-web-out").removeClass("swipe");
        setTimeout(function(){ 
            $("#transition-screen-web-in").removeClass("hide");
        }, 900);
        setTimeout(function(){ 
            $("#transition-screen-web-out").removeClass("show");
        }, 1200);
        setTimeout(function(){ 
            $("#transition-screen-web-in").removeClass("swipe");
        }, 1500);
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
                removePageScrollEvent();
                calculateAllTriggers();
                createPageScrollEvent();
            }, 500);
        } else {
            /* destroy horizontal scrolling if not already */
            if (getHorizontalScroll() != null) {
                removePageScrollEvent();
                destroyHorizontalScroll();
            }
        }
    }
  }
}
</script>

<style scoped lang="scss">

    $violet-blue: #F4F6FD;
    $violet-blue-dark: #CED9FD;
    $neutral-pink: #fddecc;
    $gray: #717171;
    $light-gray: #A2A2A2;

    @font-face {
      font-family: 'aguero_serif_freeregular';
      src: url("../assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff2") format('woff2'),
          url("../assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff") format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @mixin aspect-ratio($width, $height) {
        position: relative;
        &:before {
            display: block;
            content: "";
            width: 100%;
            padding-top: ($height / $width) * 100%;
        }
    }

    .page {
        height: 100vh;
        /* fixed position so it doesn't jitter when loading new route/page */
        //position: fixed;
    }

    .web-page-title-container {
        position: fixed;
        background-color: $violet-blue;
        height: 100%;
        width: 40px;
        left: 0;
        z-index: 10;

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

    .web-page-title {
        position: absolute;
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
            color: $gray;
            margin-top: 100px;
        }

    }

    .webdev-container {
        display: flex;
        font-family: sans-serif;
        height: 100vh;
        align-items: center;
        padding: 90px;
        transition: all 1s ease;

        &.change-bg-color {
            background-color: $violet-blue;
        }

    }

    .webdev-container {
        display: flex;
        flex: 1;
        height: 100vh;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            display: block;
            flex: unset;
            height: auto;
            width: auto;
            padding: 0px 0px 0px 0px;
            margin-left: unset;
        }

    }

    .block {
        //height: 100%;
        font-size: 32px;
        color: black;
        margin-left: 50px;
        min-width: 100vw;
        max-height: 3000px;
        flex: 0 0 auto;
        //background-color: gray;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            padding: auto;
            margin-left: unset;
            max-height: unset;
            padding: 0px 0px 90px 0px;

            &.title-desktop {
                display: none;
            }

            &.title-mobile {
                height: 80vh;
            }

        }

        &.intro {
            position: fixed;
            min-width: 40vw;
            transition: all 0.7s ease;
            will-change: transform;
            //background-color: lightgrey;
            padding: 10px;

            &.hide {
                opacity: 0;
            }

            .intro-photos-container {
                @include aspect-ratio(8, 9);

                .mobile-web-left {
                    transition: all 4s ease-in-out;
                    position: absolute;
                    top: 15%;
                    width: 70%;

                    &.fix {
                        transform: translateY(40px) rotate(5deg);
                    }
                }

                .mobile-web-right {
                    transition: all 4s ease-in-out;
                    position: absolute;
                    top: 2%;
                    left: 35%;
                    width: 82%;

                    &.fix {
                        transform: translateY(20px) rotate(-3deg);
                    }
                }

            }

            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                position: relative;
                max-width: 85vw;
                height: 100vh;
            }
        }

        &.end {
            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: none;
            }   
        }
    }

    .block a {
        color: inherit;
    }

    .slide-space {
        width: 60vw;
    }

    .page-title {
        font-size: calc(10.50vw + 10.50vh);
        line-height: 1.3;
        text-transform: uppercase;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: 'aguero_serif_freeregular', serif;
        color: $violet-blue-dark;
        transition: all 1s ease;
        letter-spacing: 30px;
        
        &.desktop {
            font-size: calc(12.0vw + 12.0vh);
            margin-left: 45vw;
            width: 100vw;

            @media only screen and (max-width: 1530px) and (min-width: 1251px) {
                font-size: calc(11vw + 11vh);
            }

            @media only screen and (max-width: 1250px) and (min-width: 1051px) {
                font-size: calc(10vw + 10vh);
            }

            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: none;
            }

            &.reveal {
                color: $violet-blue-dark;
            }
        }

        &.mobile {
            display: none;
            margin-left: unset;
            margin-top: 14vh;
            font-size: calc(9.5vw + 9.5vh);
            color: grey;
            padding: 20px;


            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: block;

                /* 430px and down */
                @media only screen and (max-width: 430px) {
                    font-size: calc(6vw + 5vh);
                    letter-spacing: 12px;
                }
            }
        }

    }

    .project-display {
        width: 50%;
        height: 80%;
        margin-top: 5%;
        //background-color: green;
        position: relative;
        float: left;

        .display-images {
            @include aspect-ratio(8, 6);
            //background-color: blue;
            margin-top: 5vh;

            .laptop {
                position: absolute;
                width: 90%;
                top: 8%;
                left: 7%;
            }

            .mobile {
                position: absolute;
                width: 20%;
                top: 32%;
                right: 7%;
            }

            .standard {
                position: absolute;
                width: 100%;
                top: 0;
            }
        }

        /* 800px and down */
        @media only screen and (max-width: 800px) {
            width: 100%;
            height: 100%;
        }

    }

    .description {
        width: 50%;
        height: 55vh;
        margin-top: 5%;
        //background-color: pink;
        position: relative;
        float: left;
        padding: 50px;
        display: flex;
        justify-content: center;
        align-items: center; 

        &.shift-left {
            justify-content: normal;

        }

        .description-text {
            margin-top: 30px;
            width: 35vw;

            h1 {
                margin-bottom: 0px;
            }

            .url {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: bolder;
                color: $light-gray;
                margin-top: 8px;
            }

            .desc {
                font-size: 15px;
                margin-top: 40px;
                line-height: 2.5;
            }

            /* 800px and down */
            @media only screen and (max-width: 800px) {
                margin-top: 0px;
                width: 100%;
            }

        }

        /* 800px and down */
        @media only screen and (max-width: 800px) {
            width: 100%;
            height: 100%;
            margin-top: 0px;
            display: block;
            padding: 40px;
            justify-content: unset;
            align-items: unset;
            text-align: center;
        }
    }

</style>