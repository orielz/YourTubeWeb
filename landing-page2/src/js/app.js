/**
 * Created by Oriel.Zaken on 7/9/2015.
 */

$(document).ready(function() {

    var showTime = 6 * 1000;
    var delayUntillNewLoop = 50;

    function startIntervals() {
        $('.search').animate({opacity:"show"}, 750);
        $('.search').find('.text').animate({'left':'20px'}, 750);

        // Hide search and save - show downloads
        setTimeout(function() {

            $('.search').animate({opacity:"hide"}, 750, function() {
                $('.search .text').css('left', '0');
            });

            $('.save').animate({opacity:"hide"}, 750, function() {
                $('.save .text').css('left', '0');
            });

            $('.download').animate({opacity:"show"}, 750);
            $('.download').find('.text').animate({'left':'20px'}, 750);
        }, showTime);

        // Hide search and downloads - show save
        setTimeout(function() {
            $('.search').animate({opacity:"hide"}, 750, function() {
                $('.search .text').css('left', '0');
            });
            $('.download').animate({opacity:"hide"}, 750, function() {
                $('.download .text').css('left', '0');
            });

            $('.save').animate({opacity:"show"}, 750);
            $('.save').find('.text').animate({'left':'20px'}, 750);
        }, showTime * 2);

        setTimeout(function() {
            $('.save').animate({opacity:"hide"}, 750, function() {
                $('.save .text').css('left', '0');
            });
        }, showTime * 3);
    }

    startIntervals();

    setInterval(function(){
        startIntervals()
    }, showTime * 3 + delayUntillNewLoop);


    // Set height in pixels on load \ resize
    function setHeight() {
        $('.panel-body').css('height', 'auto');
        var currentheight = $('.search').height() + "px";
        $('.panel-body').css('height', currentheight);
    };

    $(window).resize(function() { setHeight(); });

    setHeight();


});