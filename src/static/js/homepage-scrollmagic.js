import $ from 'jquery'
import { gsap, TimelineMax, TweenMax } from 'gsap/src/all'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
//import('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
//import { addIndicators } from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'


ScrollMagicPluginGsap(ScrollMagic, gsap);


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
    var laptopTween = TweenMax.to("#laptop", 1, {y: "-35%", rotation: 0.05, ease: "power1.in"});
    var cameraTween = TweenMax.to("#camera", 1, {x: "-70%", y: "10%", rotation: 20, ease: "power1.in"});
    var plantTween = TweenMax.to("#plant", 1, {x: "70%", y: "20%", rotation: 140, ease: "power1.in"});
    var coffeeTween = TweenMax.to("#coffee", 1, {x: "70%", y: "20%", rotation: 10, ease: "power1.in"});
    var bioTween = TweenMax.to("#flatlay-bio", 1, {y: "-30vh", opacity: 1, ease: "power1.in"});
    introTimeline.add(laptopTween).add(cameraTween, 0).add(coffeeTween, 0).add(plantTween, 0).add(bioTween, 0);
}

/* Builds Scroll Magic Scenes */
export function buildScrollMagicScenes() {

    /* ------ Scroll Magic Scene Bio Fade-In ------ */
    /* Scroll magic scene for bio fade-in animation */


    // Build Scene Bio Fade-In
    new ScrollMagic.Scene({
        triggerElement: '#top-trigger',
        triggerHook: 0,
        duration: 250
    })
    //.setClassToggle('.flatlay', 'shift')
    //.setPin("#flatlay-container")
    .setTween(introTimeline)
    .offset(1)
    .on('start', function (event) {
            var scrollDirection = event.scrollDirection;

            if (scrollDirection == 'FORWARD'){
                // TODO: Needed to comment out other animations due to browser lag - investigate
                //animateText('rise', '.rising-bio-title');
                // animateText('left-shift', '.rising-bio-text-p1');
                // animateText('left-shift', '.rising-bio-text-p2');
                $("#draw-line-bio-l").addClass("draw");
                $("#draw-line-bio-r").addClass("draw");
            } else if (scrollDirection == "REVERSE"){
                // TODO: Add reverse animations for bio text and line draw?
            }
    })
    // .addIndicators({
    //   name: 'bio-fade-in'
    // })
    .addTo(controller);

    /* ------ End Magic Scene Bio Fade-In ------ */


    /* ------ Scroll Magic Scene Tile Swipe-In ------ */
    /* Scroll magic scene for tile swipe-in animation */

    // Build Scene Web Tile Background Color Swipe
    new ScrollMagic.Scene({
        triggerElement: '#web-tile',
        triggerHook: 0.95
    })
    .setClassToggle('.web-tile', 'swipe-in')
    .offset(200)
    .reverse(false)
    .on('start', function (event) {
            var scrollDirection = event.scrollDirection;
            if (scrollDirection == 'FORWARD'){
                setTimeout(function(){ 
                $(".web-img").addClass("fade-in");
                //$(".tile-title").css({"opacity":"100%"});
                $("#tile-title-web").css({"opacity":"100%"});
                $("#draw-line-tile-wl").addClass("draw");
                $("#draw-line-tile-wr").addClass("draw");
                }, 1100);
            }
    })
    // .addIndicators({
    //   name: 'web-tile-swipe-in'
    // })
    .addTo(controller);


    // Build Scene Photo Tile Background Color Swipe
    new ScrollMagic.Scene({
        triggerElement: '#photography-tile',
        triggerHook: 0.95
    })
    .setClassToggle('.photography-tile', 'swipe-in')
    .offset(200)
    .reverse(false)
    .on('start', function (event) {
            var scrollDirection = event.scrollDirection;
            if (scrollDirection == 'FORWARD'){
                setTimeout(function(){ 
                $(".photography-display").css({"opacity":"100%"});
                //$(".tile-title").css({"opacity":"100%"});
                $("#tile-title-photography").css({"opacity":"100%"});
                $("#draw-line-tile-pl").addClass("draw");
                $("#draw-line-tile-pr").addClass("draw");
                }, 1300);
            }
    })
    // .addIndicators({
    //   name: 'photo-tile-swipe-in'
    // })
    .addTo(controller);

    /* ------ End Scroll Magic Scene Tile Swipe-In ------ */

}

/* Destroys ScrollMagic Controller and Scenes */
export function destroyScrollMagic(){
    controller.destroy();
}