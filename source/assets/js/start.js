(function( $ ) { 
/**
 * START - ONLOAD - JS
 * 1. Set Height Block Watch Details
 * 2. Feature Gallery 
 * 3. Zoom Gallery
 * 4. WAYPOINT
 * 5. Show Video
 * 6. Light Gallery
 * 7. Video Light Gallery
 * 8. Slider Gallery on Mobile
 * 9. Show More Story
 */
/* ----------------------------------------------- */
/* ------------- FrontEnd Functions -------------- */
/* ----------------------------------------------- */
/**
 * 1. Set Height Block Watch Details
 */
function setHeightBlkWatchDetails() {
    if(!$('.blk-desc').length
    || $(window).width() <= 940) { return;}

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
        arrows: false,
        fade: true,
        asNavFor: '.feature-gallery .fea-nav',
        infinite: false
    });
    $('.feature-gallery .fea-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.feature-gallery .fea-img',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        infinite: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                arrows: true
              }
            }
        ]
    });
}
/**
 * 3. Zoom Gallery
 */
function zoomGallery() {
    if(!$('.fea-gal-item').length
    || $(window).width() < 768) { return;}

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
function blockScroll(itmScroll, name, offset) {
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
/**
 * 6. Light Gallery
 */
function funcLightGallery() {
    if(!$('.fea-img .slick-track').length) {return; }

    $('.fea-img .slick-track').lightGallery({
        thumbnail:false,
        share: false,
        actualSize: false,
        download: false
    }); 
}
/**
 * 7. Video Light Gallery
 */
function videoLigthGallery() {
    if(!$('.fea-nav-itm.has-video').length) {return; }

    $('.fea-nav-itm.has-video').lightGallery({
        selector: 'this',
        thumbnail:false,
        share: false,
        actualSize: false,
        download: false,
        videojs: true
    });
}
/**
 * 8. Slider Gallery on Mobile
 */
function sliderGalleryMobile() {
    if(!$('.gallery-mb').length) { return; }

    $('.gallery-mb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        dots: true,
        // autoplay: true
    });
}
/**
 * 9. Show More Story
 */
function showMoreStory() {
    if(!$('.blk-desc .desc-right .txt').length) { return; }

    var story_h = $('.blk-desc .desc-right .txt').outerHeight();

    if(story_h > 160) {
        $('.blk-desc .desc-right .txt').addClass('more');
        $('.blk-desc .desc-right .shw_more').addClass('act');

        $('.blk-desc .desc-right .shw_more').on('click', function(e) {
            e.preventDefault();

            var $a_more = $(this),
                $text   = $a_more.siblings('.txt');

            if($a_more.hasClass('clicked')) {
                $a_more.removeClass('clicked');
                $text.addClass('more');

                $a_more.text('read more');
            } else {
                $a_more.addClass('clicked');
                $text.removeClass('more');

                $a_more.text('read less');
            }
        }); 
    }
}
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* OnLoad Page */
$(document).ready(function($){
    // 1.
    // setHeightBlkWatchDetails();
    // 2.
    featureGallery();
    // 3
    zoomGallery();
    // 4
    blockScroll('.blk-desc', 'blk-desc', 70);
    blockScroll('.blk-movement', 'blk-movement', 80);
    blockScroll('.blk-gallery', 'blk-gallery', 80);
    blockScroll('.blk-article', 'blk-article', 80);
    blockScroll('.blk-collection', 'blk-collection', 80);
    blockScroll('.blk-prod-related', 'blk-prod-related', 80);
    blockScroll('.blk-newsletter', 'blk-newsletter', 80);
    blockScroll('.blk-authorized', 'blk-authorized', 80);
    // 5.
    // showVideo('.fea-gal-item.video .ico-play');
    // showVideo('.video_avt');
    // 6.
    funcLightGallery();
    // 7.
    videoLigthGallery();
    // 8. 
    sliderGalleryMobile();
    // 9.
    showMoreStory();
});
/* OnLoad Window */
var init = function () {   

};
window.onload = init;
})(jQuery);