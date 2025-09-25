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

    // Language toggle (VI default, EN secondary) - use Google Translate only
    var storedLang = localStorage.getItem('site_lang');
    var initialLang = storedLang === 'en' ? 'en' : 'vi';
    document.body.setAttribute('data-lang', initialLang);

    function applyGoogleTranslate(lang) {
        try {
            var select = document.querySelector('select.goog-te-combo');
            if (select) {
                if (select.value !== lang) {
                    select.value = lang;
                    select.dispatchEvent(new Event('change'));
                }
                return true;
            }
        } catch (e) {}
        return false;
    }
    // New single-button toggle: show opposite language
    $(document).on('click', '[data-toggle-lang] .lang-toggle', function (e) {
        e.preventDefault();
        var current = document.body.getAttribute('data-lang') === 'en' ? 'en' : 'vi';
        var next = current === 'vi' ? 'en' : 'vi';
        document.body.setAttribute('data-lang', next);
        localStorage.setItem('site_lang', next);
        $(this).text(next === 'vi' ? 'EN' : 'VI');
        // Only apply Google Translate for EN; VI shows original text
        if (next === 'en') {
            if (!applyGoogleTranslate('en')) {
                var attempts = 0;
                var timer = setInterval(function(){
                    attempts++;
                    if (applyGoogleTranslate('en') || attempts > 40) clearInterval(timer);
                }, 250);
            }
        } else {
            // Restore to Vietnamese (original page language)
            applyGoogleTranslate('vi');
        }
    });
    $(function(){
        var lang = document.body.getAttribute('data-lang');
        $('[data-toggle-lang]').each(function(){
            var container = $(this);
            container.find('.lang-toggle').text((lang === 'vi' ? 'EN' : 'VI'));
        });
        // Only auto-apply Google Translate if saved lang is EN
        if (lang === 'en') {
            if (!applyGoogleTranslate('en')) {
                var tries = 0;
                var t = setInterval(function(){
                    tries++;
                    if (applyGoogleTranslate('en') || tries > 40) clearInterval(t);
                }, 250);
            }
        }
    });
})(jQuery);

