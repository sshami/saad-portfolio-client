import anime from 'animejs'

/* ------- Animated Text JS ------ */

/* Animates text that has the passed in class */
export function animateText(animationType, txtClass) {

    var textClass = txtClass;
  
    if (animationType == 'rise') {
      // Wrap every letter in a span
      var textWrapper = document.querySelector(textClass);
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
      anime.timeline({loop: false})
        .add({
          targets: textClass + ' .letter',
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 300 + 30 * i
        });
    } else if (animationType == 'left-shift') {
      // Wrap every word in a span
      var textWrapper2 = document.querySelector(textClass);
      textWrapper2.innerHTML = textWrapper2.textContent.replace(/\w+/g, "<span class='letter'>$&</span>");
  
      anime.timeline({loop: false})
        .add({
          targets: textClass + ' .letter',
          translateX: [40,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i
        });
    }
  
  }
  
  /* Animates line that has the passed in class */
  export function animateLine(lineCls) {
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

