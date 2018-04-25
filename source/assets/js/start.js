(function( $ ) { 
/**
 * START - ONLOAD - JS
 * 1. Set Height Block Watch Details
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */
/**
 * 1. Set Height Block Watch Details
 */
function setHeightBlkWatchDetails() {
    if(!$('.blk-desc').length
    || $(window).width() < 768) { return;}

    var h_col_left = $('.blk-desc .desc-left').outerHeight();
    $('.blk-desc .desc-right .inner').css('height', h_col_left);

    $( window ).resize(
        $.debounce(300, function(e){
            var h_col_left = $('.blk-desc .desc-left').outerHeight();
            $('.blk-desc .desc-right .inner').css('height', h_col_left);
        })
    );
}
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    // 1.
    setHeightBlkWatchDetails();
});
/* OnLoad Window */
var init = function () {   

};
window.onload = init;
})(jQuery);