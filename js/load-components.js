// Load shared components
$(document).ready(function() {
    // Remove pretty URL rewrites; use direct .html links
    function rewriteInternalLinks() {}

    // Get current page name for active state
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Load navbar
    $('#navbar-placeholder').load('components/navbar.html', function() {
        // Set active class based on current page
        $('.nav-link').removeClass('active');
        
        if (currentPage === 'index.html' || currentPage === '') {
            $('a[href="index.html"]').addClass('active');
        } else if (currentPage === 'ungdung.html') {
            $('a[href="ungdung.html#hero"]').addClass('active');
        } else if (currentPage === 'product.html') {
            $('a[href="product.html#hero"]').addClass('active');
        } else if (currentPage === 'news.html') {
            $('a[href="news.html"]').addClass('active');
        } else if (currentPage === 'downloads.html') {
            $('a[href="downloads.html"]').addClass('active');
        } else if (currentPage === 'aboutkeith.html') {
            $('a[href="aboutkeith.html"]').addClass('active');
        } else if (currentPage === 'aboutnhutin.html') {
            $('a[href="aboutnhutin.html"]').addClass('active');
        }

        // After navbar is injected, ensure current language is applied to new elements
        console.log('🔧 load-components: navbar loaded, checking language...');
        var storedLang = localStorage.getItem('site_lang');
        var bodyLang = document.body.getAttribute('data-lang');
        console.log('🔧 load-components: stored =', storedLang, ', body =', bodyLang);
        
        // Use body attribute as the source of truth (set by i18n.js)
        var lang = bodyLang || (storedLang === 'en' ? 'en' : 'vi');
        
        // Only set body attribute if not already set by i18n.js
        if (!bodyLang) {
            console.log('🔧 load-components: Setting body data-lang to', lang);
            document.body.setAttribute('data-lang', lang);
        } else {
            console.log('🔧 load-components: Using existing body data-lang:', lang);
        }
        
        // Apply translation to newly loaded navbar elements
        if (typeof window.translatePage === 'function') {
            window.translatePage(lang);
        }
        
        // Update toggle button to show target language
        var label = (lang === 'vi') ? 'EN' : 'VI';
        var $toggle = $('[data-toggle-lang] .lang-toggle');
        if ($toggle.length) { $toggle.text(label); }

        // Ensure language toggle works reliably
        $('[data-toggle-lang] .lang-toggle').off('click').on('click', function(){
            var current = document.body.getAttribute('data-lang') === 'en' ? 'en' : 'vi';
            var next = current === 'vi' ? 'en' : 'vi';
            if (typeof window.setLanguage === 'function') {
                window.setLanguage(next);
            }
        });
        // Rewrite links inside navbar
        rewriteInternalLinks();
    });
    
    // Load footer
    $('#footer-placeholder').load('components/footer.html', function(){
        // Footer is injected; apply current language to footer elements
        var lang = document.body.getAttribute('data-lang') || 'vi';
        console.log('🔧 load-components: footer loaded, applying language:', lang);
        if (typeof window.translatePage === 'function') {
            window.translatePage(lang);
        }
        // Rewrite links inside footer
        rewriteInternalLinks();
    });
});
