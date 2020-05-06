<template>
    <div class="page">
        <div id="photography-page-title"  class="photography-page-title-container">
            <div class="row photography-page-title">
                <div class="col tile-title-line-photography left"></div>
                <div class="col-auto"><h1>Photography</h1></div>
                <div class="col tile-title-line-photography right"></div>
            </div>
        </div>
        <div class="photos">
            <img src="https://66.media.tumblr.com/0a82fa7ce59404e7a713ded2fd5aa81d/tumblr_pkf8ro270V1v57djwo1_1280.jpg" /> 
        </div>
    </div>
</template>


<script>
import $ from 'jquery'
import { animateText } from '../static/js/anime-animations.js'

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

    $neutral-pink: #ECD2D1;

    .page {
        height: 100vh;
        /* fixed position so it doesn't jitter when loading new route/page */
        position: fixed;
    }

    .photography-page-title-container {
        position: absolute;
        background-color: $neutral-pink;
        height: 100%;
        width: 40px;
    }

    .photography-page-title {
        position: absolute;
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

</style>