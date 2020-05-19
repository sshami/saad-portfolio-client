import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import { animateLine } from './anime-animations.js'


// ScrollMagic Controller
var controller = null;

/*  Initialize Scroll Magic Controller */
export function initScrollMagicController() {
    controller = new ScrollMagic.Controller();
}

/* Builds Scroll Magic Scenes */
export function buildScrollMagicScenes() {

    /* ------ Scroll Magic Scene Bio Fade-In ------ */
    /* Scroll magic scene for bio fade-in animation */


    // Build Scene Bio Fade-In
    new ScrollMagic.Scene({
        triggerElement: '#bio',
        triggerHook: 0.95
    })
    .setClassToggle('.flatlay', 'shift')
    .on('start', function (event) {
            var scrollDirection = event.scrollDirection;

            if (scrollDirection == 'FORWARD'){
                // TODO: Needed to comment out other animations due to browser lag - investigate
                //animateText('rise', '.rising-bio-title');
                //animateLine('.animated-line');
                // animateText('left-shift', '.rising-bio-text-p1');
                // animateText('left-shift', '.rising-bio-text-p2');
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
                animateLine('.tile-title-line-web');
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
                animateLine('.tile-title-line-photography');
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