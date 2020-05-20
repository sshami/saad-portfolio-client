import $ from 'jquery'
import { gsap, TimelineMax } from 'gsap/src/all'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, gsap);


function getPhotoWidths() {
    var totalWidths = 0;
    $('.photo').each(function(){
        totalWidths += $(this).outerWidth(true);
    });

    return totalWidths;
}

// ScrollMagic Controller
var photographyScrollMagicController = null;
var horizontalSlideTimeLine = null;

/*  Initialize Scroll Magic Controller */
export function initScrollMagicControllerAndTimeline() {
    photographyScrollMagicController = new ScrollMagic.Controller();

    // NEED TO CALCULATE THE X-TRANSLATE PERCENTAGE ON LOAD AND ANYTIME BROWSER WINDOW IS RESIZED
    // Calculate: 
    // "width of all the photos in the set" + plus "left/right margins and paddings" - minus "width of the browser window"
    // / divided by
    // "total width of the sections container" (which changes according to width of browser window)
    // x times 
    // 100 (to get percentage)
    var photoWidths = getPhotoWidths();
    var x_translate = ((photoWidths) - $(window).width()) / $("#js-slideContainer").width();
    var slideEndSpace = 0.09;
    var x_translate_percentage = (x_translate + slideEndSpace) * 100;

    horizontalSlideTimeLine = new TimelineMax()
    // note: need to add rotation for Firefox
    .to("#js-slideContainer", 1,   {x: "-" + x_translate_percentage + "%", rotation: 0.05})
}

export function createPhotographySlideScene() {

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "800%"
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

