import { gsap, TimelineMax } from 'gsap/src/all'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, gsap);

// ScrollMagic Controller
var photographyScrollMagicController = null;
var horizontalSlideTimeLine = null;

/*  Initialize Scroll Magic Controller */
export function initScrollMagicControllerAndTimeline() {
    photographyScrollMagicController = new ScrollMagic.Controller();

    horizontalSlideTimeLine = new TimelineMax()
    // NEED TO CALCULATE THE X-TRANSLATE PERCENTAGE ON LOAD AND ANYTIME BROWSER WINDOW IS RESIZED
    // Calculate: 
    // "width of all the photos in the set" + plus "left/right margins and paddings" - minus "width of the browser window"
    // / divided by
    // "total width of the sections container" (which changes according to width of browser window)
    // x times 
    // 100 (to get percentage)
    .to("#js-slideContainer", 1,   {x: "-45%"})
}

export function createPhotographySlideScene() {

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlideTimeLine)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(photographyScrollMagicController);
}


/* Destroys ScrollMagic Controller and Scenes */
export function destroyScrollMagic(){
    photographyScrollMagicController.destroy();
}
