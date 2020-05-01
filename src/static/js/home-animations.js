import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import anime from 'animejs'

$(document).ready(function(){ 

  // var rellax = new Rellax('.rellax');

  /* ------- Animated Text JS ------ */

  /* Animates text that has the passed in class */
  // function animateText(animationType, txtClass) {
    
  //   var textClass = txtClass;

  //   if (animationType == 'rise') {
  //     // Wrap every letter in a span
  //     var textWrapper = document.querySelector(textClass);
  //     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  //     anime.timeline({loop: false})
  //       .add({
  //         targets: textClass + ' .letter',
  //         translateY: [100,0],
  //         translateZ: 0,
  //         opacity: [0,1],
  //         easing: "easeOutExpo",
  //         duration: 1400,
  //         delay: (el, i) => 300 + 30 * i
  //       });
  //   } else if (animationType == 'left-shift') {
  //     // Wrap every word in a span
  //     var textWrapper2 = document.querySelector(textClass);
  //     textWrapper2.innerHTML = textWrapper2.textContent.replace(/\w+/g, "<span class='letter'>$&</span>");

  //     anime.timeline({loop: false})
  //       .add({
  //         targets: textClass + ' .letter',
  //         translateX: [40,0],
  //         translateZ: 0,
  //         opacity: [0,1],
  //         easing: "easeOutExpo",
  //         duration: 1200,
  //         delay: (el, i) => 500 + 30 * i
  //       });
  //   }

  // }

  /* Animates line that has the passed in class */
  function animateLine(lineCls) {
    var lineClass = lineCls;
    var textWrapper3 = document.querySelector(lineClass);
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: lineClass,
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutExpo",
        duration: 1000,
        delay: 500
      });
  }
  

  /*
  *   
  *  ----- Scroll Magic Scenes -------
  *
  */

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

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
            animateLine('.animated-line');
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


  /*
  *   
  *  ----- End Scroll Magic Scenes -------
  *
  */


  /*
  *
  *  --- Tile Hover Titles ----
  *
  */

  /* Show web tile title on hover */
  $("#web-tile").hover(function(){
    $("#tile-hover-title-web").addClass("show");
  }, function(){
    $("#tile-hover-title-web").removeClass("show");
  });

  /* Show photography tile title on hover */
  $("#photography-tile").hover(function(){
    $("#tile-hover-title-photography").addClass("show");
  }, function(){
    $("#tile-hover-title-photography").removeClass("show");
  });



});