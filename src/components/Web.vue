<template>
    <div class="page">
        <div id="web-page-title"  class="web-page-title-container">
            <div class="row web-page-title">
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-wl" class="draw-line left"></div></div>
                <div class="col-auto"><h1>Web Development</h1></div>
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-wr" class="draw-line"></div></div>
            </div>
        </div>
    </div>
</template>


<script>
import $ from 'jquery'
import { animateText } from '../static/js/anime-animations.js'

export default {
  name: 'WebDevelopment',
  beforeMount() {
      /* animate opening swipe-in transition */
      $("#transition-screen-web-in").addClass("swipe");
      $("#transition-web-title").addClass("show");
      animateText('rise', '.transition-web-title-text');
  },
  mounted() {
      this.openingTransition();
  },
  destroyed() {
      this.closingTransition()
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
    }
  }
}
</script>

<style scoped lang="scss">
    $violet-blue: #F4F6FD;

    .page {
        height: 100vh;
        /* fixed position so it doesn't jitter when loading new route/page */
        position: fixed;
    }

    .web-page-title-container {
        position: fixed;
        background-color: $violet-blue;
        height: 100%;
        width: 40px;
        right: 0;
    }

    .web-page-title {
        position: absolute;
        top: 47%;
        left: -175px;
        width: 400px;
        text-transform: uppercase;
        transform: rotate(-270deg);
    }

</style>