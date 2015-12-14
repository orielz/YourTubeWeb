/**
 * Created by Oriel on 06/12/2015.
 */
$(window).load(function() {
    adjustBestAppearance();
});

$( window ).resize(function() {
    setTimeout(function() {
        adjustBestAppearance();
    }, 0);

});

function adjustBestAppearance() {
    var viewPortHeight = $( window ).height();
    var viewPortWidth = $( window ).width();
    var logoHeight = $('img.logo').parent().outerHeight();

    var fullBgHeight = viewPortHeight - logoHeight;
    var imageHeight = fullBgHeight - 200;

    $('div.full-bg').css({
        'min-height': viewPortHeight - logoHeight //,
    });

    if (viewPortWidth >= 820) {

        $('div.full-bg img').css({
            'height': imageHeight
        });
    }
}