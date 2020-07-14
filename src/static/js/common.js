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
        console.log("SCROLL DOWN");
        $('header').addClass('up');
    } 
    else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            console.log("SCROLL UP");
            $('header').removeClass('up');
        }
    }
    
    lastScrollTop = st;
}


