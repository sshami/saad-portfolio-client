import $ from 'jquery'
  
export function initTileHoverTitles() {
    /*
    *
    *  --- Tile Hover Titles ----
    *
    */

    /* Show web tile title on hover */
    $("#web-tile").hover(function(){
        $("#tile-hover-title-web").addClass("reveal");
        $("#mobile-lc").addClass("shift");
        $("#mobile-ss").addClass("shift");
    }, function(){
        $("#tile-hover-title-web").removeClass("reveal");
        $("#mobile-lc").removeClass("shift");
        $("#mobile-ss").removeClass("shift");
    });

    /* Show photography tile title on hover */
    $("#photography-tile").hover(function(){
        $("#tile-hover-title-photography").addClass("reveal");
        $("#photography-display").addClass("shift");
    }, function(){
        $("#tile-hover-title-photography").removeClass("reveal");
        $("#photography-display").removeClass("shift");
    });
}