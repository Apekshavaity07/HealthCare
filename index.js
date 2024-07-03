

    $(document).ready(function(){
        
        $(window).on('load', function(){
            $('#loading').fadeOut('slow');
        });
    
        // Initialize Owl Carousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: true,
            lazyLoad: true
        });
    
        // Lazy load images
        $('.lazy').Lazy();
    });