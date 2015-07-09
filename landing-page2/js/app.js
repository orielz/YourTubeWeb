/**
 * Created by Oriel.Zaken on 7/9/2015.
 */

$(document).ready(function() {

    $('.search').animate({opacity:"show"}, 1500);
    $('.search').find('.text').animate({'left':'20px'}, 1500);

    function startIntervals() {
        $('.search').animate({opacity:"show"}, 1500);
        $('.search').find('.text').animate({'left':'20px'}, 1500);

        // Hide search and save - show downloads
        setTimeout(function() {
            var panelHeight = $('.panel-body').css('height');
            $('.panel-body').css('min-height', panelHeight);

            $('.search').animate({opacity:"hide"}, 1500).css('left', '0px');
            $('.save').animate({opacity:"hide"}, 1500).css('left', '0px');
        }, 5500);

        setTimeout(function() {
            $('.download').animate({opacity:"show"}, 1500);
            $('.download').find('.text').animate({'left':'20px'}, 1500);
        }, 7500);

        // Hide search and downloads - show save
        setTimeout(function() {
            $('.search').animate({opacity:"hide"}, 1500).css('left', '0px');
            $('.download').animate({opacity:"hide"}, 1500).css('left', '0px');
        }, 13900);

        setTimeout(function() {
            $('.save').animate({opacity:"show"}, 1500);
            $('.save').find('.text').animate({'left':'20px'}, 1500);
        }, 15500);


        setTimeout(function() {
            $('.save').animate({opacity:"hide"}, 1500).css('left', '0px');
        }, 20300);
    }

    //startIntervals();
    //
    //setInterval(function(){
    //    startIntervals()
    //}, 23000);


});