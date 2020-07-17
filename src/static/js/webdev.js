import $ from 'jquery'
import HorizontalScroll from '@oberon-amsterdam/horizontal'

var horizontal = null;
var webTitleTriggerStartPosition = null;
var webTitleTriggerEndPosition = null;

/* Initializes horizontal scroll */
export function initHorizontalScroll() {
    horizontal = new HorizontalScroll({ 
        container: document.querySelector('.webdev-container')
    });
}

/* Returns horizontal scroll object */
export function getHorizontalScroll() {
    return horizontal;
}

/* Calculates scroll value at which web title should appear (revealed) */
function calculateWebTitleTriggerStart() {
    var introWidth = $("#intro").width();
    webTitleTriggerStartPosition = introWidth/2;
}

/* Calculates scroll value at which web title should disappear (un-revealed) */
function calculateWebTitleTriggerEnd() {
    var introWidth = $("#intro").width();
    var pageTitleWidth = $("#page-title").width();
    var scrollEnd = introWidth + pageTitleWidth;
    webTitleTriggerEndPosition = scrollEnd - (pageTitleWidth/2.8);
}

/* Calculates and sets all triggers */
export function calculateAllTriggers() {
    calculateWebTitleTriggerStart();
    calculateWebTitleTriggerEnd();
}

/* Event listener function to fire when triggers (scroll values calculated above) are active */
function webdevScrollListener(event) {
    if (event <  webTitleTriggerStartPosition && $("#intro").hasClass("hide")) {
        $("#webdev-container").removeClass("change-bg-color");
        $("#intro").removeClass("hide");
        $("#page-title").removeClass("reveal");
    } else if (webTitleTriggerStartPosition <= event && event < webTitleTriggerEndPosition && !$(".page-title.desktop").hasClass("reveal")) {
        $("#webdev-container").addClass("change-bg-color");
        $("#intro").addClass("hide");
        $("#page-title").addClass("reveal");
    } else if (event > webTitleTriggerEndPosition && $(".page-title.desktop").hasClass("reveal")) {
        $("#page-title").removeClass("reveal");
        $("#webdev-container").removeClass("change-bg-color");
    }
}

/* Creates scroll event */
export function createPageScrollEvent() {
    horizontal.on('scroll', webdevScrollListener);
}

/* Removes scroll event */
export function removePageScrollEvent() {
    horizontal.off('scroll', webdevScrollListener);
}


/* Destroys horizontal scroll */
export function destroyHorizontalScroll() {
    console.log("DESTROYING HORIZONTAL SCROLL!");
    horizontal.destroy();
    horizontal = null;
}