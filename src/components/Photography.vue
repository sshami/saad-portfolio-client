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

        <!-- <div class="wrapper" id="js-wrapper">
            <div class="slide-container" id="js-slideContainer">
                <div class="photos-container">
                    <img class="photo" src="https://66.media.tumblr.com/0a82fa7ce59404e7a713ded2fd5aa81d/tumblr_pkf8ro270V1v57djwo1_1280.jpg" />
                    <img class="photo" src="https://66.media.tumblr.com/1d87611e8ffffe6701377dc2b58b1638/tumblr_pf48obYBwN1v57djwo1_1280.jpg" />
                    <img class="photo" src="https://66.media.tumblr.com/ac9b62f320dee8a607f09078629a2c82/tumblr_pf48pwtn2v1v57djwo1_1280.jpg" />
                    <img class="photo" src="https://66.media.tumblr.com/e16bdff3d9aedd32991e7efcf2f10468/tumblr_pehq47jW131v57djwo1_1280.jpg" />
                    <img class="photo" src="https://66.media.tumblr.com/3b4baff7e0146ef48f6e8e408dd4d108/tumblr_pcnqksLOZq1v57djwo1_1280.jpg" />
                </div>
            </div>
        </div> -->

        <div class="photos-container" id="photos-container" >
            <div class="block" id="start">
                <img class="photo" src="https://66.media.tumblr.com/0a82fa7ce59404e7a713ded2fd5aa81d/tumblr_pkf8ro270V1v57djwo1_1280.jpg" />
            </div>

            <div class="block">
                <img class="photo" src="https://66.media.tumblr.com/1d87611e8ffffe6701377dc2b58b1638/tumblr_pf48obYBwN1v57djwo1_1280.jpg" />
            </div>

            <div class="block">
                <img class="photo" src="https://66.media.tumblr.com/ac9b62f320dee8a607f09078629a2c82/tumblr_pf48pwtn2v1v57djwo1_1280.jpg" />
            </div>

            <div class="block">
                <img class="photo" src="https://66.media.tumblr.com/e16bdff3d9aedd32991e7efcf2f10468/tumblr_pehq47jW131v57djwo1_1280.jpg" />
            </div>

            <div class="block">
                <img class="photo" src="https://66.media.tumblr.com/3b4baff7e0146ef48f6e8e408dd4d108/tumblr_pcnqksLOZq1v57djwo1_1280.jpg" />
            </div>

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
import { initHorizontalScroll, createPhotoMenuTriggerEvent } from '../static/js/photography.js'

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

    initHorizontalScroll();
    setTimeout(function(){
        createPhotoMenuTriggerEvent();
    }, 500);
    // horizontal.on('scroll', function(event) {  
    //     console.log(event);
    // });
    // initScrollMagicController()
    // scrollMagicPhotographySlideScene()
    /* Setup photo slide for desktop - need to give it some time to get accurate photo widths */
    // if (window.innerWidth > 1367){
    //     setTimeout(function(){
    //         initScrollMagicController();
    //         initSlideTimeline();
    //         createPhotographySlideScene();
    //     }, 500);
    /* Otherwise setup regular photo vertical page scroll for mobile/tablet sizes */
    // } else {
    //     $('.photo').each(function(){
    //         $(this).addClass("mobile");
    //     });
    //     $('.slide-container').addClass("mobile")
    //     $('.wrapper').addClass("mobile")
    //     $('.photography-page-title-container').addClass("mobile");
    //     $('.photography-page-title').addClass("mobile");
        
    // }
  },
  beforeDestroy(){
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  destroyed() {
        this.closingTransition();
        // Cleanup
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
    /* Window resize event -  need to recalculate photo menu trigger and reset event */
    onResize() {
        setTimeout(function(){
            createPhotoMenuTriggerEvent();
        }, 500);
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
        width: 100%;
    }

    .photography-page-title-container {
        position: fixed;
        background-color: $neutral-pink;
        height: 100%;
        width: 40px;
        z-index: 2;

        &.mobile {
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

        &.mobile {
            position: relative;
            top: auto;
            left: auto;
            width: auto;
            transform: inherit;
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

    .homepage-link {
        position: fixed;
        top: 0px;
        left: 55px;
        z-index: 2;

    }

    // ---------- Photo slide styles ---------- //

    .wrapper{
        //width: 100%;
        height: 100vh;
        //overflow: hidden;
        perspective: 1000;
        margin-left: 50px;

        &.mobile {
            height: 100%;
            margin-left: 0px;
        }

    }

    .slide-container {
        height: 100%;
        //backface-visibility: hidden;

        &.mobile {
            width: 45%;
            margin: 0px auto;
            max-width: 1250px;

            /* 1000px to 701px */
            @media only screen and (max-width: 1367px) and (min-width: 701px) {
                width: 60%;
            }

            /* 700px to 416px */
            @media only screen and (max-width: 700px) and (min-width: 416px) {
                width: 75%;
            }

            /* 415px and down */
            @media only screen and (max-width: 415px) {
                width: 95%;
            }

        }
    }

    .photos-container {
        height: 100%;
    }

    .photo {
        // float: left;
        // margin-left: 80px;
        height: 100%;
        // padding-top: 110px;
        // padding-bottom: 110px;

        &.mobile {
            float: none;
            margin-left: 0px;
            width: 100%;
            padding: 0px 0px 80px 0px;

        }

    }




        .photos-container {
            display: flex;
            font-family: sans-serif;
            height: 100vh;
        }

        .photos-container {
            display: flex;
            flex: 1;
            height: 100vh;
        }

        .block {
            height: 100%;
            font-size: 32px;
            color: black;
            margin-left: 50px;
            padding: 90px 0px 90px 0px;
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