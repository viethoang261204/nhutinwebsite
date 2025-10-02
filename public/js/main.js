(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    // On fresh navigation, ensure back-to-top is hidden until user scrolls
    $(function(){ $('.back-to-top').hide(); });
    window.addEventListener('pageshow', function(){
        $('.back-to-top').hide();
        $(window).trigger('scroll');
    });
    
    // Initiate the wowjs
    new WOW().init();

    // Navbar: always visible, add shadow/background after scrolling a bit
    var onScroll = function() {
        var y = $(window).scrollTop();
        if (y > 10) {
            $('.sticky-top, .fixed-top').addClass('bg-white shadow-sm');
        } else {
            $('.sticky-top, .fixed-top').removeClass('bg-white shadow-sm');
        }
    };
    onScroll();
    $(window).on('scroll', onScroll);

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    // Ensure correct initial visibility on first load
    $(window).trigger('scroll');
    // Use delegated handler because footer (with the button) is loaded dynamically
    $(document).on('click', '.back-to-top', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });

    // About images carousel - single large slide per view
    $(".about-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 800,
        loop: true,
        dots: true,
        margin: 16,
        items: 1
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dots: true,
        loop: true,
        nav: false
    });

    // Mobile: auto-close navbar after selecting a link
    $(document).on('click', '.navbar-collapse.show .nav-link, .navbar-collapse.show .dropdown-item', function () {
        var $target = $(this);
        // ignore clicks that toggle dropdowns
        if ($target.hasClass('dropdown-toggle')) return;
        var $collapse = $(this).closest('.navbar-collapse');
        $collapse.collapse('hide');
    });

    // Language behavior is handled centrally in js/i18n.js
})(jQuery);

