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
    var firstPhotoWidth = $("#start").width();
    photosetTitleTriggerStartPosition = firstPhotoWidth/2;
}

/* Calculates scroll value at which album title should disappear (un-revealed) */
function calculatePhotosetTitleTriggerEnd() {
    var firstPhotoWidth = $("#start").width();
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

/* Event listener function to show photo album menu when end of the album is reached */
function photoMenuTriggerListener(event) {
    if (event >= menuTriggerPosition && !$("#album-menu").hasClass("show")) {
        $("#album-menu").addClass("show");
        $("#album-menu-contents").addClass("swipe-in");
    } else if (event > photosetTitleTriggerEndPosition && event < menuTriggerPosition && $("#album-menu").hasClass("show")) {
        $("#album-menu").removeClass("show");
        $("#album-menu-contents").removeClass("swipe-in");
    }
}

/* Event listener function to change background color when photoset title is reached */
function photosetTitleTriggerListener(event) {
    if (event <  photosetTitleTriggerStartPosition && $("#start").hasClass("hide")) {
        $("#photos-container").removeClass("change-bg-color");
        $("#start").removeClass("hide");
        $("#photoset-title").removeClass("reveal");
    } else if (photosetTitleTriggerStartPosition <= event && event < photosetTitleTriggerEndPosition && !$(".photoset-title.desktop").hasClass("reveal")) {
        $("#photos-container").addClass("change-bg-color");
        $("#start").addClass("hide");
        $("#photoset-title").addClass("reveal");
    } else if (event > photosetTitleTriggerEndPosition && event < menuTriggerPosition && $(".photoset-title.desktop").hasClass("reveal")) {
        $("#photoset-title").removeClass("reveal");
        $("#photos-container").removeClass("change-bg-color");
    }
}

/* Creates scroll event for when scrolled to the album title triggers */
export function createPhotosetTitleTriggerEvent() {
    horizontal.on('scroll', photosetTitleTriggerListener);
}

/* Removes the event listener (photosetTitleTriggerListener) */
export function removePhotosetTitleTriggerEvent() {
    horizontal.off('scroll', photosetTitleTriggerListener);
}

/* Creates scroll event for when scrolled to the photo menu trigger */
export function createPhotoMenuTriggerEvent(){
    horizontal.on('scroll', photoMenuTriggerListener);
}

/* Removes the event listener (photoMenuTriggerListener) */
export function removePhotoMenuTriggerEvent() {
    horizontal.off('scroll', photoMenuTriggerListener);
}

/* Destroys horizontal scroll */
export function destroyHorizontalScroll() {
    horizontal.destroy();
    horizontal = null;
}