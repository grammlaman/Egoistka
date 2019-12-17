$(function(){
    $('.new-units').slick({
        mobileFirst: true,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });


















});