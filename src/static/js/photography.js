import { gsap, TimelineMax } from 'gsap/src/all'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
//import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

ScrollMagicPluginGsap(ScrollMagic, gsap);

export function createPhotographySlide() {
    console.log("CALLING FUNCTION!");
    var photographyController = new ScrollMagic.Controller();

    var horizontalSlide = new TimelineMax()
    // NEED TO CALCULATE THE X-TRANSLATE PERCENTAGE ON LOAD AND ANYTIME BROWSER WINDOW IS RESIZED
    // Calculate: 
    // "width of all the photos in the set" + plus "left/right margins and paddings" - minus "width of the browser window"
    // / divided by
    // "total width of the sections container" (which changes according to width of browser window)
    // x times 
    // 100 (to get percentage)
    .to("#js-slideContainer", 1,   {x: "-61%"})

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(photographyController);

}


/* Destroys ScrollMagic Controller and Scenes */
export function destroyPhotographySlide(){
    //photographyController.destroy();
}
