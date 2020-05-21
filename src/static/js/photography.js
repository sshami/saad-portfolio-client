import $ from 'jquery'
import { gsap, TimelineMax } from 'gsap/src/all'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

//CSSPlugin.defaultForce3D = false;

ScrollMagicPluginGsap(ScrollMagic, gsap);

/* Get total width of photos in set (including padding) */
function getPhotoWidths() {
    var totalWidths = 0;
    $('.photo').each(function(){
        totalWidths += $(this).outerWidth(true);
    });

    return totalWidths;
}

// ScrollMagic Controller
var photographyScrollMagicController = null;
// Horizontal Slide (TimeLineMax)
var horizontalSlideTimeLine = null;

/*  Initialize Scroll Magic Controller */
export function initScrollMagicController() {
    photographyScrollMagicController = new ScrollMagic.Controller();
}

/*  Initialize TimelineMax Horizontal Slide */
export function initSlideTimeline() {
    
    // Get total width of photos in the slide
    var photoWidths = getPhotoWidths();
    // Calculate and set the width of the slide container according to width of all photos
    var sectionsContainerWidth = photoWidths + $(window).width();
    $("#js-slideContainer").css("width", sectionsContainerWidth);

    // Calculate X translate percentage for timeline slide tween
    var x_translate = ((photoWidths)) / sectionsContainerWidth;
    var x_translate_percentage = (x_translate) * 100;

    // Initialize timeline
    horizontalSlideTimeLine = new TimelineMax()
    // note: need to add rotation for Firefox
    .to("#js-slideContainer", 1,   {x: "-" + (x_translate_percentage) + "%", rotation: 0.05})
}

/*  Create ScrollMagic Scene and add to ScrollMagic Controller */
export function createPhotographySlideScene() {
  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "900%"
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

/* Resets TimeLine Max Timeline */
export function resetTimeline() {
    horizontalSlideTimeLine.restart();
}

/* Removes ScrollMagic DOM nodes */
export function removeScrollMagicDom(){
    var cnt = $(".scrollmagic-pin-spacer").contents();
    $(".scrollmagic-pin-spacer").replaceWith(cnt);
}

