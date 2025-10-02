// Load shared components
$(document).ready(function() {
    // Remove pretty URL rewrites; use direct .html links
    function rewriteInternalLinks() {}

    // Get current page name for active state
    var path = window.location.pathname || '/';
    var slug = path.replace(/^\/+|\/+$/g, '');
    var current = slug === '' ? 'index' : slug;
    
    // Load navbar
    $('#navbar-placeholder').load('components/navbar.html', function() {
        // Set active class based on current page
        $('.nav-link').removeClass('active');
        
        if (current === 'index') {
            $('a[href="/"]').addClass('active');
        } else if (current === 'ungdung') {
            $('a[href="/ungdung#hero"]').addClass('active');
        } else if (current === 'product') {
            $('a[href="/product#hero"]').addClass('active');
        } else if (current === 'news') {
            $('a[href="/news"]').addClass('active');
        } else if (current === 'downloads') {
            $('a[href="/downloads"]').addClass('active');
        } else if (current === 'aboutkeith') {
            $('a[href="/aboutkeith"]').addClass('active');
        } else if (current === 'aboutnhutin') {
            $('a[href="/aboutnhutin"]').addClass('active');
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
        
        // Re-apply current language using the single source of truth in i18n.js
        if (typeof window.setLanguage === 'function') {
            window.setLanguage(lang);
        } else if (typeof window.translatePage === 'function') {
            window.translatePage(lang);
        }
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
