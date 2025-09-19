// Load shared components
$(document).ready(function() {
    // Get current page name
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Load navbar
    $('#navbar-placeholder').load('components/navbar.html', function() {
        // Set active class based on current page
        $('.nav-link').removeClass('active');
        
        if (currentPage === 'index.html' || currentPage === '') {
            $('a[href="index.html"]').addClass('active');
        } else if (currentPage === 'giaiphap.html') {
            $('a[href="giaiphap.html"]').addClass('active');
        } else if (currentPage === 'aboutkeith.html') {
            $('a[href="aboutkeith.html"]').addClass('active');
        } else if (currentPage === 'aboutnhutin.html') {
            $('a[href="aboutnhutin.html"]').addClass('active');
        } else if (currentPage === 'product1.html') {
            $('a[href="product1.html"]').addClass('active');
        }
    });
    
    // Load footer
    $('#footer-placeholder').load('components/footer.html');
});
