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
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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

    // Language toggle (VI default, EN secondary)
    var storedLang = localStorage.getItem('site_lang');
    var initialLang = storedLang === 'en' ? 'en' : 'vi';
    document.body.setAttribute('data-lang', initialLang);
    $(document).on('click', '[data-toggle-lang] .lang-btn', function (e) {
        e.preventDefault();
        var lang = $(this).data('lang');
        if (lang !== 'vi' && lang !== 'en') return;
        document.body.setAttribute('data-lang', lang);
        localStorage.setItem('site_lang', lang);
        $(this).closest('[data-toggle-lang]').find('.lang-btn').removeClass('active');
        $(this).addClass('active');
    });
    $(function(){
        var lang = document.body.getAttribute('data-lang');
        $('[data-toggle-lang]').each(function(){
            var container = $(this);
            container.find('.lang-btn').removeClass('active');
            container.find('.lang-btn[data-lang="'+lang+'"]').addClass('active');
        });
    });
})(jQuery);

