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

    let slider = $("#slider-range" ).slider({
        range: true,
        min: 0,
        max: 50000,
        values: [1500, 37000],
        slide: function( event, ui ) {
            $("#amount" ).val(ui.values[ 0 ]);
            $("#amount-1" ).val(ui.values[ 1 ]);
        }
    });
    $( "#amount" ).on( "change", function() {
        let arr = slider.slider( "option", "values" );
        let pos = parseInt($(this).val());
        slider.slider( "values", [pos,arr[1]] );
    });
    $( "#amount-1" ).on( "change", function() {
        let arr = slider.slider( "option", "values" );
        let pos = parseInt($(this).val());
        slider.slider( "values", [arr[0],pos] );
    });
    $("#amount").val( $( "#slider-range" ).slider("values", 0));
    $("#amount-1").val( $( "#slider-range" ).slider("values", 1));

    let sortArr = document.querySelectorAll('.sort-negative');
    let sortBut = document.querySelector('.sort-list');
    sortArr.forEach(function (el) {
        el.onclick = function () {
            if(!sortBut.classList.contains('sort-list-open')){
                sortBut.classList.add('sort-list-open');
            }
            else {
                sortBut.classList.remove('sort-list-open');
            }
            sortArr.forEach(function (elem) {
                elem.classList.remove('sort-activ')
            })
            el.classList.add('sort-activ')
        }
    })
    let calcBut = document.querySelector('.size-calc-button');
    let sizeRes = document.querySelector('.size-result');
    if(calcBut){
        calcBut.onclick = function (el) {
            sizeRes.classList.add('size-result-show');
        }
    }
    $('.product-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        mobileFirst: true,
        asNavFor: '.product-slider-slave',
        prevArrow: '<a href="#"><img src="../img/keyboard_arrow_right-24px.svg" alt=""></a>',
        nextArrow: '<a href="#"><img src="../img/keyboard_arrow_right-24px.svg" alt=""></a>',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 300,
                settings: {
                    arrows: true
                }
            }
        ]
    });
    $('.product-slider-slave').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slider-main',
        mobileFirst: true,
        dots: false,
        arrows: true,
        prevArrow: '<a href="#"><img src="../img/keyboard_arrow_right-24px.svg" alt=""></a>',
        nextArrow: '<a href="#"><img src="../img/keyboard_arrow_right-24px.svg" alt=""></a>',
        focusOnSelect: true,
    });





});