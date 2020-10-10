//import $ from 'jquery'
import { TimelineMax, TweenMax } from 'gsap/src/all'
import ScrollMagic from 'scrollmagic'
//import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
// import { addIndicators } from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'


// ScrollMagic Controller
var controller = null;
var introTimeline = null;

/*  Initialize Scroll Magic Controller */
export function initScrollMagicController() {
    controller = new ScrollMagic.Controller();
}

/* Initilize Intro Timeline */
export function createIntroTimeline() {
    introTimeline = new TimelineMax();
    var bioIntro = TweenMax.to("#bio-intro", 1, {y: "-30vh", opacity: 0, rotation: 0.05, ease: "power1.in"});
    var bioContent = TweenMax.to("#bio-content", 1, {y: "-60vh", opacity: 1, ease: "power1.in"});
    introTimeline.add(bioIntro, 0).add(bioContent, 0);
}

/* Builds Scroll Magic Scenes */
export function buildScrollMagicScenes() {

    /* ------ Scroll Magic Scene Bio Content Fade-In ------ */
    /* Scroll magic scene for bio fade-in animation */

    // Build Scene Bio Fade-In
    new ScrollMagic.Scene({
        //triggerElement: '#top-trigger',
        triggerHook: 0.5,
        duration: 200
    })
    .setTween(introTimeline)
    .offset(0)
    // .addIndicators({
    //   name: 'bio-fade-in'
    // })
    .addTo(controller);

    /* ------ End Magic Scene Bio Fade-In ------ */

}

/* Destroys ScrollMagic Controller and Scenes */
export function destroyScrollMagic(){
    controller.destroy();
}