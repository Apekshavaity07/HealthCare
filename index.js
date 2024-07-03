$(document).ready(function() {
    // Hide the loading screen after 5 seconds
    setTimeout(function(){
        $('#loading').fadeOut('slow');
    }, 5000);

    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 3, // Number of items displayed
        loop: true, // Loop the carousel items
        margin: 10, // Margin between items
        nav: true, // Show navigation arrows
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
