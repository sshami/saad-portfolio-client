import $ from 'jquery'
import HorizontalScroll from '@oberon-amsterdam/horizontal'

var horizontal = null;
var menuTriggerPosition = null;

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

/* Calculates scroll value at which photo album menu should appear */
function calculatePhotoMenuTrigger() {
    var scrollWidth = $("#photos-container")[0].scrollWidth; 
    var containerWidth = $("#photos-container").width();
    var scrollEnd = scrollWidth - containerWidth;
    menuTriggerPosition = scrollEnd - (containerWidth/2.5);
    //return menuTriggerPosition;
}

/* Event listener function to change body color when end album menu is reached */
function photoMenuTriggerListener(event) {
    if (event >= menuTriggerPosition) {
        if ($('body').hasClass("unset-pink")){
            $('body').removeClass("unset-pink");
        }
        $('body').addClass("set-pink");
    } else {
        if ($('body').hasClass("set-pink")){
            $('body').removeClass("set-pink");
        }
        $('body').addClass("unset-pink");
    }
}

/* Creates scroll event for when scrolled to the photo menu trigger */
export function createPhotoMenuTriggerEvent(){
    calculatePhotoMenuTrigger();
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