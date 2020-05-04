import $ from 'jquery'
  
export function initTileHoverTitles() {
    /*
    *
    *  --- Tile Hover Titles ----
    *
    */

    /* Show web tile title on hover */
    $("#web-tile").hover(function(){
        $("#tile-hover-title-web").addClass("show");
    }, function(){
        $("#tile-hover-title-web").removeClass("show");
    });

    /* Show photography tile title on hover */
    $("#photography-tile").hover(function(){
        $("#tile-hover-title-photography").addClass("show");
    }, function(){
        $("#tile-hover-title-photography").removeClass("show");
    });
}