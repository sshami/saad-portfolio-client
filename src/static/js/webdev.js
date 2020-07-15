//import $ from 'jquery'
import HorizontalScroll from '@oberon-amsterdam/horizontal'

var horizontal = null;

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

/* Destroys horizontal scroll */
export function destroyHorizontalScroll() {
    horizontal.destroy();
    horizontal = null;
}