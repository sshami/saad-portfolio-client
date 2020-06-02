import $ from 'jquery'
import { gsap, TimelineMax } from 'gsap/src/all'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import HorizontalScroll from '@oberon-amsterdam/horizontal'


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

/* Get Scroll Magic Controller */
export function getPhotographyScrollMagicController() {
    return photographyScrollMagicController;
}

/*  Initialize Scroll Magic Controller */
export function initScrollMagicController() {
    photographyScrollMagicController = new ScrollMagic.Controller({vertical: false});
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

export function scrollMagicPhotographySlideScene() {
    new ScrollMagic.Scene({
        triggerElement: "#end",
        triggerHook: 0.50
      })
    .offset(-0.7)
    .on('start', function (event) {

        console.log(event);
        console.log("STARTING!");

    })
    .on('leave', function (event){
        console.log(event);
        console.log("LEAVING!");
    })
    // .addIndicators({
    //     name: "photo-slide"
    // }) // add indicators (requires plugin)
    .addTo(photographyScrollMagicController);
}






var horizontal = null;

export function initHorizontalScroll() {
    horizontal = new HorizontalScroll({ 
        container: document.querySelector('.photos-container')
    });
}


/* Calculates scroll value at which photo album menu should appear */
function calculatePhotoMenuTrigger() {
    var scrollWidth = $("#photos-container")[0].scrollWidth; 
    var containerWidth = $("#photos-container").width();
    var scrollEnd = scrollWidth - containerWidth;
    var menuTrigger = scrollEnd - (containerWidth/2.5);
    console.log(menuTrigger);
    return menuTrigger;
}

/* Creates scroll event for when scrolled to the photo menu trigger */
export function createPhotoMenuTriggerEvent(){
    var menuTrigger = calculatePhotoMenuTrigger();
    horizontal.on('scroll', function(event) {  
        if (event >= menuTrigger) {
            if ($('body').hasClass("unset-pink")){
                $('body').removeClass("unset-pink");
            }
            $('body').addClass("set-pink");
        } else {
            if ($('body').hasClass("set-pink")){
                $('body').removeClass("set-pink");
            }
            $('body').addClass("unset-pink");
        }
    });
}