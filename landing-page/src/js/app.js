/**
 * Created by Oriel on 06/12/2015.
 */
$(window).load(function () {
    adjustBestAppearance();

    $('.fa-arrow-circle-down').click(function () {
        var $body = $('body');
        var $redBg = $('div.full-bg');
        var $logoRow = $('.logo-row');
        $body.animate({scrollTop: ($redBg.height() + $logoRow.height())}, 500);
    });
});

$(window).resize(function () {
    setTimeout(function () {
        adjustBestAppearance();
    }, 0);

});

function adjustBestAppearance() {
    var viewPortHeight = $(window).height();
    var viewPortWidth = $(window).width();
    var logoHeight = $('img.logo').parent().outerHeight();

    var fullBgHeight = viewPortHeight - logoHeight;
    var imageHeight = fullBgHeight - 280;

    $('div.full-bg').css({
        'min-height': viewPortHeight - logoHeight //,
    });

    if (viewPortWidth >= 820) {

        $('div.full-bg img').css({
            'height': imageHeight
        });
    }
}