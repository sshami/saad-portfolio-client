import $ from 'jquery'
import HorizontalScroll from '@oberon-amsterdam/horizontal'

var horizontal = null;
var menuTriggerPosition = null;
var photosetTitleTriggerStartPosition = null;
var photosetTitleTriggerEndPosition = null;

/* Initializes horizontal scroll */
export function initHorizontalScroll() {
    horizontal = new HorizontalScroll({ 
        container: document.querySelector('.photos-container')
    });
}

/* Returns horizontal scroll object */
export function getHorizontalScroll() {
    return horizontal;
}

/* Calculates scroll value at which album title should appear (revealed) */
function calculatePhotosetTitleTriggerStart() {
    var firstPhotoWidth = $("#hero").width();
    photosetTitleTriggerStartPosition = firstPhotoWidth/2;
}

/* Calculates scroll value at which album title should disappear (un-revealed) */
function calculatePhotosetTitleTriggerEnd() {
    var firstPhotoWidth = $("#hero").width();
    var photosetTitleWidth = $("#photoset-title").width();
    var scrollEnd = firstPhotoWidth + photosetTitleWidth;
    photosetTitleTriggerEndPosition = scrollEnd - (photosetTitleWidth/2.8);
}

/* Calculates scroll value at which photo album menu should appear */
function calculatePhotoMenuTrigger() {
    var scrollWidth = $("#photos-container")[0].scrollWidth; 
    var endSpaceWidth = $("#slide-space").width();
    var scrollEnd = scrollWidth - endSpaceWidth;
    menuTriggerPosition = scrollEnd - (endSpaceWidth/1);
}

/* Calculates and sets all triggers */
export function calculateAllTriggers() {
    calculatePhotoMenuTrigger();
    calculatePhotosetTitleTriggerStart();
    calculatePhotosetTitleTriggerEnd();
}

/* Event listener function to fire when triggers (scroll values calculated above) are active */
function photosetScrollListener(event) {
    if (event <  photosetTitleTriggerStartPosition && $("#hero").hasClass("hide")) {
        $("#photos-container").removeClass("change-bg-color");
        $("#hero").removeClass("hide");
        $("#photoset-title").removeClass("reveal");
    } else if (photosetTitleTriggerStartPosition <= event && event < photosetTitleTriggerEndPosition && !$(".photoset-title.desktop").hasClass("reveal")) {
        $("#photos-container").addClass("change-bg-color");
        $("#hero").addClass("hide");
        $("#photoset-title").addClass("reveal");
    } else if (event > photosetTitleTriggerEndPosition && event < menuTriggerPosition && $(".photoset-title.desktop").hasClass("reveal")) {
        $("#photoset-title").removeClass("reveal");
        $("#photos-container").removeClass("change-bg-color");
    } else if (event >= menuTriggerPosition && !$("#album-menu").hasClass("show")){
        $("#album-menu").addClass("show");
        $("#album-menu-contents").addClass("swipe-in");
    } else if (event > photosetTitleTriggerEndPosition && event < menuTriggerPosition && $("#album-menu").hasClass("show")) {
        $("#album-menu").removeClass("show");
        $("#album-menu-contents").removeClass("swipe-in");
    }
}

/* Creates scroll event */
export function createPhotosetScrollEvent() {
    horizontal.on('scroll', photosetScrollListener);
}

/* Removes scroll event */
export function removePhotosetScrollEvent() {
    horizontal.off('scroll', photosetScrollListener);
}

/* Destroys horizontal scroll */
export function destroyHorizontalScroll() {
    horizontal.destroy();
    horizontal = null;
}