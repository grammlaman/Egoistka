$(function(){
    let height = 0;
    $(window).scroll(function(e) {
        if (screen.availWidth >= 0){
            height = 1;
        } else if (screen.availWidth >= 1200) {
            height = 112;
        }
        let scrolled = $(this).scrollTop();
        if (scrolled >= height) {
            $('#header').addClass('head-scroll');
        } else {
            $('#header').removeClass('head-scroll');
        }
    });
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
    $('.main-slider-cont').slick({
        mobileFirst: true,
        arrows: true,
        dots: true,
        dotsClass: 'main-slider-dots',
        slidesToScroll: 1,
        slidesToShow: 1,
    });
    $('.news-slider').slick({
        mobileFirst: true,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

















});