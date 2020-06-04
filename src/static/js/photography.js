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

function calculatePhotosetTitleTriggerStart() {
    var firstPhotoWidth = $("#start").width();
    photosetTitleTriggerStartPosition = firstPhotoWidth/2;
}

function calculatePhotosetTitleTriggerEnd() {
    var firstPhotoWidth = $("#start").width();
    var photosetTitleWidth = $("#photoset-title").width();
    var scrollEnd = firstPhotoWidth + photosetTitleWidth;
    photosetTitleTriggerEndPosition = scrollEnd - (photosetTitleWidth/2.8);
}

/* Calculates scroll value at which photo album menu should appear */
function calculatePhotoMenuTrigger() {
    var scrollWidth = $("#photos-container")[0].scrollWidth; 
    var containerWidth = $("#photos-container").width();
    var scrollEnd = scrollWidth - containerWidth;
    menuTriggerPosition = scrollEnd - (containerWidth/2.5);
    //return menuTriggerPosition;
}

/* Calculates and sets all triggers */
export function calculateAllTriggers() {
    calculatePhotoMenuTrigger();
    calculatePhotosetTitleTriggerStart();
    calculatePhotosetTitleTriggerEnd();
    console.log("PHOTO MENU TRIGGER: " + menuTriggerPosition);
    console.log("TITLE START TRIGGER: " + photosetTitleTriggerStartPosition);
    console.log("TITLE END TRIGGER: " + photosetTitleTriggerEndPosition);
}

/* Changes body background color */
function changeBackgroundColor(on){
    if (on){
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

/* Event listener function to change body color when end album menu is reached */
function photoMenuTriggerListener(event) {
    console.log(event);
    if (event >= menuTriggerPosition) {
        //console.log("menu - in if");
        changeBackgroundColor(true);
    } else if (photosetTitleTriggerEndPosition < event && event < menuTriggerPosition) {
        //console.log("menu - in else");
        changeBackgroundColor(false);
    }
}

/* Event listener function to change body color when photoset title is reached */
function photosetTitleTriggerListener(event) {
    if (event <  photosetTitleTriggerStartPosition) {
        //console.log("title - in if");
        changeBackgroundColor(false);
    } else if (photosetTitleTriggerStartPosition <= event && event < photosetTitleTriggerEndPosition) {
        console.log("title - in else");
        changeBackgroundColor(true);
    }
}

export function createPhotosetTitleTriggerEvent() {
    horizontal.on('scroll', photosetTitleTriggerListener);
}

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