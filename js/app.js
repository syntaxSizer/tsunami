$(document).foundation()
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// nav bar

$(document).ready(function () {

    // Function to change the nav-bar on scroll
    $(window).scroll(function () {
        ($(window).scrollTop() >= 100) ? (
            $('.fixed-nav-bar').addClass('scrolled'),
            $('.the-bass').addClass('scrolled')
        ) : (
            $('.fixed-nav-bar').removeClass('scrolled'),
            $('.the-bass').removeClass('scrolled')
        );
    });

    // Drop Down Function
    $('#menuButton').on('change', function () {
        ($('#menuButton').is(':checked')) ? (
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });

});
