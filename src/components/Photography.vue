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

        <div class="wrapper" id="js-wrapper">
            <div class="sections" id="js-slideContainer">
                <div class="photos-container">
                    <img class="photo" src="https://66.media.tumblr.com/0a82fa7ce59404e7a713ded2fd5aa81d/tumblr_pkf8ro270V1v57djwo1_1280.jpg" />
                    <img class="photo" src="https://66.media.tumblr.com/1d87611e8ffffe6701377dc2b58b1638/tumblr_pf48obYBwN1v57djwo1_1280.jpg" />
                    <img class="photo" src="https://66.media.tumblr.com/ac9b62f320dee8a607f09078629a2c82/tumblr_pf48pwtn2v1v57djwo1_1280.jpg" />
                    <img class="photo" src="https://66.media.tumblr.com/e16bdff3d9aedd32991e7efcf2f10468/tumblr_pehq47jW131v57djwo1_1280.jpg" />
                    <img class="photo" src="https://66.media.tumblr.com/3b4baff7e0146ef48f6e8e408dd4d108/tumblr_pcnqksLOZq1v57djwo1_1280.jpg" />
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import $ from 'jquery'
import { animateText } from '../static/js/anime-animations.js'
import { initScrollMagicController, initSlideTimeline, createPhotographySlideScene, resetTimeline, removeScrollMagicDom, destroyScrollMagic } from '../static/js/photography.js'

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
    /* Setup photo slide - need to give it some time to get accurate photo widths */
    setTimeout(function(){
        initScrollMagicController();
        initSlideTimeline();
        createPhotographySlideScene();
    }, 500);
  },
  beforeDestroy(){
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  destroyed() {
      this.closingTransition();
      destroyScrollMagic();
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
    /* Window resize event -  need to reset scrollmagic and timeline to recalculate sizing for photo slide */
    onResize() {
        window.scrollTo(0, 0);
        resetTimeline();
        destroyScrollMagic();
        removeScrollMagicDom();
        $("#js-wrapper").css("width", "100%");
        initScrollMagicController();
        initSlideTimeline();
        createPhotographySlideScene();

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
    }

    .photography-page-title {
        position: fixed;
        top: 47%;
        left: -155px;
        width: 400px;
        text-transform: uppercase;
        transform: rotate(-90deg);
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


    // ---------- SCROLLING STYLES ---------- //

    $panelcount: 5; // set # of panels/sections here

    .wrapper{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        perspective: 1000;
        margin-left: 50px;
        //background-color: gray;
    }

    // .sections {
    //     backface-visibility: hidden;
    // }

    .photos-container {
        height: 100%;
    }

    .photo {
        float: left;
        margin-left: 80px;
        height: 100%;
        padding-top: 90px;
        padding-bottom: 90px;
    }

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