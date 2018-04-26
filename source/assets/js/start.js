(function( $ ) { 
/**
 * START - ONLOAD - JS
 * 1. Set Height Block Watch Details
 * 2. Feature Gallery 
 * 3. Zoom Gallery
 * 4. WAYPOINT
 * 5. Show Video
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
/**
 * 2. Feature Gallery
 */
function featureGallery() {
    if(!$('.feature-gallery').length) {return;}

    $('.feature-gallery .fea-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.feature-gallery .fea-nav',
        infinite: false
    });
    $('.feature-gallery .fea-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.feature-gallery .fea-img',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        infinite: false
    });
}
/**
 * 3. Zoom Gallery
 */
function zoomGallery() {
    if(!$('.fea-gal-item').length) { return;}

    $('.fea-gal-item').each(function(i) {
        if($(this).hasClass('video')) { return; }

        $(this).zoom({
            // callback: function(){
            //     $(this).addClass('act');
            // }
            onZoomIn: function() {
                $(this).closest('.fea-gal-item').addClass('act');
                // $(this).closest('.slick-list').siblings('.slick-arrow').addClass('hide');
            },
            onZoomOut: function() {
                $(this).closest('.fea-gal-item').removeClass('act');
                // $(this).closest('.slick-list').siblings('.slick-arrow').removeClass('hide');
            }
        });
    });
}
/**
 * WAYPOINT
 */
function homeScroll(itmScroll, name, offset) {
    if(!$(itmScroll).length) { return; }

    var w_scroll_window = 0;
    if (navigator.appVersion.indexOf("Win")!=-1) {
        w_scroll_window = 20;
    }
    if(($(window).width() + w_scroll_window) > 768 ) {
      var offsetload = offset;

      var blockShow = new Waypoint({
        element: document.getElementById(name),
        handler: function(direction) {
          if (direction === "down" && !$(itmScroll).hasClass('anima')) {
              $(itmScroll).addClass('anima');
          }
        }, offset: offsetload + '%'
      });
    } else {
      $(itmScroll).addClass('anima');
    }
}
/**
 * 5. Show Video
 */
function showVideo(itemClick) {
    if(!$(itemClick).length) { return; }

    $(itemClick).on('click', function(e) {
        var $a_click    =   $(this),
            $video      =   $a_click.siblings('.video-item');
        
        // hide img and then show video
        $('.video_avt').hide();
        $video.show();
        $(".video-item")[0].src += "&autoplay=1";
    });
}
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    // 1.
    setHeightBlkWatchDetails();
    // 2.
    featureGallery();
    // 3
    zoomGallery();
    // 4
    homeScroll('.blk-desc', 'blk-desc', 20);
    homeScroll('.blk-gallery', 'blk-gallery', 60);
    homeScroll('.blk-article', 'blk-article', 40);
    homeScroll('.blk-collection', 'blk-collection', 60);
    homeScroll('.blk-prod-related', 'blk-prod-related', 40);
    homeScroll('.blk-newsletter', 'blk-newsletter', 40);
    homeScroll('.blk-authorized', 'blk-authorized', 20);
    // 5.
    showVideo('.fea-gal-item.video .fa-youtube-play');
    showVideo('.video_avt');
});
/* OnLoad Window */
var init = function () {   

};
window.onload = init;
})(jQuery);