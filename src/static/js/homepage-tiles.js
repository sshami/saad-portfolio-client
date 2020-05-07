import $ from 'jquery'
  
export function initTileHoverTitles() {
    /*
    *
    *  --- Tile Hover Titles ----
    *
    */

    /* Show web tile title on hover */
    $("#web-tile").hover(function(){
        $("#tile-hover-title-web").removeClass("animate__fadeOutDown");
        $("#tile-hover-title-web").addClass("animate__animated animate__fadeInUp");
        $("#mobile-lc").addClass("shift");
        $("#mobile-ss").addClass("shift");
    }, function(){
        $("#tile-hover-title-web").removeClass("animate__fadeInUp");
        $("#tile-hover-title-web").addClass("animate__animated animate__fadeOutDown");
        $("#mobile-lc").removeClass("shift");
        $("#mobile-ss").removeClass("shift");
    });

    /* Show photography tile title on hover */
    $("#photography-tile").hover(function(){
        $("#tile-hover-title-photography").removeClass("animate__fadeOutDown");
        $("#tile-hover-title-photography").addClass("animate__animated animate__fadeInUp");
        $("#photography-display").addClass("shift");
    }, function(){
        $("#tile-hover-title-photography").removeClass("animate__fadeInUp");
        $("#tile-hover-title-photography").addClass("animate__animated animate__fadeOutDown");
        $("#photography-display").removeClass("shift");
    });
}