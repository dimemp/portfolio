/**
 * Scrolling menu.
 */

$('#about').on('click', function() {

    $('html, body').animate({
        scrollTop: $("#section-about").offset().top
    }, 1500);
});

$('#work').on('click', function() {

    $('html, body').animate({
        scrollTop: $("#section-work").offset().top
    }, 1500);
});

$('#contact').on('click', function() {

    $('html, body').animate({
        scrollTop: $("#section-contact").offset().top
    }, 2000);
});