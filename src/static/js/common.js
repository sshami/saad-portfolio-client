import $ from 'jquery'

/* 
--------------------------------------
Header Navigation Hide/Reveal Settings 
--------------------------------------
*/

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 18;

$(window).scroll(function(){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(window).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) {
        return;
    }

    // Add drop shadow to header when not at the top
    if (st > 100){
        $('header').addClass('shadow');
    } else {
        $('header').removeClass('shadow');
    }
    
    // If they scrolled down and are past the navbar, add class .up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').addClass('up');
    } 
    else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('up');
        }
    }
    
    lastScrollTop = st;
}


/* 
----------------------
Mobile Hamburger Menu  
----------------------
*/

/* Mobie Nav Toggle */
var navOpen = false;
export function mobileNavToggle() {
    if (navOpen){
        closeNav();
    } else {
        openNav()
    }
    navOpen = !navOpen;
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";

    /* Modify header items */
    $('#header').addClass('mobile-nav');
    $('#navigation-items').addClass('mobile-nav');
    $('#myNav').find('a').addClass('nav-open');

    /* Modify body to disable scrolling */
    $('html').addClass('stop-scrolling');
    $('body').addClass('stop-scrolling');

    $('header').removeClass('shadow');
    //$('body').bind('touchmove', function(e){e.preventDefault()});
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";

    /* Modify header items */
    $('#header').removeClass('mobile-nav');
    $('#navigation-items').removeClass('mobile-nav');
    $('#myNav').find('a').removeClass('nav-open');

    /* Modify body to enable scrolling */
    $('html').removeClass('stop-scrolling');
    $('body').removeClass('stop-scrolling');

    if ($(window).scrollTop() > 100){
        $('header').addClass('shadow');
    }
    //$('body').unbind('touchmove');

}

(function() {

    "use strict";
  
    var toggles = document.querySelectorAll(".c-hamburger");
  
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    }
  
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  
  })();