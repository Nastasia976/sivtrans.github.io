$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        draggable: false,
        touchTreshold: 10,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.slider-solution').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        draggable: false,
        touchTreshold: 10,
        waitForAnimate: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.press-center-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        draggable: false,
        touchTreshold: 10,
        waitForAnimate: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 3.5,
                }
            }
        ]
    });

    $('.link-torg').click(function (event) {
        $('.link-torg').addClass('active', 500);
        $('.slider-solution._xo').addClass('active', 2500);
        $('.slider-solution-to').addClass('hide', 500);

        $('.blue-line').addClass('active', 1000);

        $('.link-transp').removeClass('active', 500);
    });


    $('.link-transp').click(function (event) {
        $('.link-torg').removeClass('active');

        $('.slider-solution._xo').removeClass('active', 1000);
        $('.slider-solution').removeClass('hide', 1000);

        $('.blue-line').removeClass('active', 1000);

        $('.link-transp').addClass('active');
    });

    $('.burger').click(function (event) {
        $('.burger-menu').toggleClass('active');
        $('.burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('.burger').click(function (event) {
        $('.catalog-menu, .transp-menu, .torgovoe-menu, .menu-choice').removeClass('active');
    });
    
    $('.transp-nav-link').click(function (event) {
        $('.transp-menu').addClass('active');
    });

    $('.torg-nav-lin').click(function (event) {
        $('.torgovoe-menu').addClass('active');
    });


    $('.choice-nav-link').click(function (event) {
        $('.menu-choice').toggleClass('active');
    });

    $('.back').click(function (event) {
        $('.menu-catalog, .menu-choice').removeClass('active');
    });

    $('.transp-back').click(function (event) {
        $('.transp-menu').removeClass('active');
    });

   

    $('.catalog-link').click(function (event) {
        $('.menu-catalog').toggleClass('active');
    });

    $('.uslugi-link').click(function (event) {
        $('.menu-uslugi').toggleClass('active');
    });

    $('.service-link').click(function (event) {
        $('.menu-service').toggleClass('active');
    });

    $('.solution-link').click(function (event) {
        $('.menu-solution').toggleClass('active');
    });

    $('.back').click(function (event) {
        $('.catalog-menu').removeClass('active');
    });

    $('.choice-button').click(function (event) {
        if ($('.choice-torg').hasClass('active')) { //если есть класс, то ...

            $('.choice-torg').removeClass('active');
            $('.choice-torg').addClass('passive');

            $('.choice-transp').addClass('active');
            $('.choice-transp').removeClass('passive');

            $('.switch').addClass('active');

            $('.img-torg').removeClass('active');
            $('.img-torg').addClass('passive');

            $('.img-transp').addClass('active');
            console.log('First click'); // код для первого клика
        } else { // если иное(второй клик)
            $('.choice-transp').removeClass('active');
            $('.choice-transp').addClass('passive');

            $('.choice-torg').addClass('active');
            $('.choice-torg').removeClass('passive');

            $('.switch').removeClass('active');

            $('.img-transp').removeClass('active');
            $('.img-transp').addClass('passive');

            $('.img-torg').addClass('active');
            // убираем класс
            console.log('Second click'); // код для второго клика
        }
    });
});




$(document).ready(function(){
    $('.nav-link-transp').mouseenter(function(){
        $('.transportnoe-menu').slideDown(500);

        $('.torgovoe-menu').slideUp(200);
        $('.submenu-nav-link-choice').slideUp(200);
        $('.submenu-main-li-about').slideUp(300);
        $('.submenu-main-li-info').slideUp(300);
    });
    $('.close').click(function(){
        $('.transportnoe-menu').slideUp(400);
    });
});

$(document).ready(function(){
    $('.nav-lin-torg').mouseenter(function(){
        $('.torgovoe-menu').slideDown(500);

        $('.transportnoe-menu').slideUp(200);
        $('.submenu-nav-link-choice').slideUp(200);
        $('.submenu-main-li-about').slideUp(300);
        $('.submenu-main-li-info').slideUp(300);
    });
    $('.close').click(function(){
        $('.torgovoe-menu').slideUp(400);
    });
});


$(document).ready(function(){
    $('.nav-link-choice').mouseenter(function(){
        $('.submenu-nav-link-choice').slideDown(500);

        $('.transportnoe-menu').slideUp(300);
        $('.torgovoe-menu').slideUp(300);
        $('.submenu-main-li-about').slideUp(300);
        $('.submenu-main-li-info').slideUp(300);
    });
});

$(document).ready(function(){
    $('.main-li-about').mouseenter(function(){
        $('.submenu-main-li-about').slideDown(500);

        $('.torgovoe-menu').slideUp(300);
        $('.transportnoe-menu').slideUp(300);
        $('.submenu-nav-link-choice').slideUp(300);
        $('.submenu-main-li-info').slideUp(300);
    });
});

$(document).ready(function(){
    $('.main-li-info').mouseenter(function(){
        $('.submenu-main-li-info').slideDown(500);

        $('.torgovoe-menu').slideUp(300);
        $('.transportnoe-menu').slideUp(300);
        $('.submenu-nav-link-choice').slideUp(300);
        $('.submenu-main-li-about').slideUp(500);
    });
});
$(document).ready(function(){
    $('.submenu-main-li-info').mouseleave(function(){
        $('.submenu-main-li-info').slideUp(500);
    });
});

$(document).ready(function(){
    $('.submenu-nav-link-choice').mouseleave(function(){
        $('.submenu-nav-link-choice').slideUp(500);
    });
});

$(document).ready(function(){
    $('.submenu-main-li-about').mouseleave(function(){
        $('.submenu-main-li-about').slideUp(500);
    });
});

$(document).ready(function () {
    let original_positions = [];
    let da_elements = document.querySelectorAll('[data-da]');
    let da_elements_array = [];
    let da_match_media = [];

    if (da_elements.length > 0) {
        let number = 0;
        for (let index = 0; index < da_elements.length; index++) {
            const da_element = da_elements[index];
            const da_move = da_element.getAttribute('data-da');
            const da_array = da_move.split(',');
            if (da_array.length == 3) {
                da_element.setAttribute('data-da-index', number);
                original_positions[number] = {
                    "parent": da_element.parentNode,
                    "index": index_in_parent(da_element)
                };
                da_elements_array[number] = {
                    "element": da_element,
                    "destination": document.querySelector('.' + da_array[0].trim()),
                    "place": da_array[1].trim(),
                    "breakpoint": da_array[2].trim()
                }
                number++;
            }
        }
        dynamic_adapt_sort(da_elements_array);
        for (let index = 0; index < da_elements_array.length; index++) {
            const el = da_elements_array[index];
            const da_breakpoint = el.breakpoint;
            const da_type = "max";

            da_match_media.push(window.matchMedia("(" + da_type + "-width: " + da_breakpoint + "px)"));
            da_match_media[index].addListener(dynamic_adapt);
        }
    }

    function dynamic_adapt(e) {
        for (let index = 0; index < da_elements_array.length; index++) {
            const el = da_elements_array[index];
            const da_element = el.element;
            const da_destination = el.destination;
            const da_place = el.place;
            const da_breakpoint = el.breakpoint;
            const da_classname = "_dynamic_adapt_" + da_breakpoint;

            if (da_match_media[index].matches) {
                if (!da_element.classList.contains(da_classname)) {
                    let actual_index;
                    if (da_place == 'first') {
                        actual_index = index_of_elements(da_destination)[0];
                    } else if (da_place == 'last') {
                        actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
                    } else {
                        actual_index = index_of_elements(da_destination)[da_place];
                    }
                    da_destination.insertBefore(da_element, da_destination.children[actual_index]);
                    da_element.classList.add(da_classname);
                }
            } else {
                if (da_element.classList.contains(da_classname)) {
                    dynamic_adapt_back(da_element);
                    da_element.classList.remove(da_classname);
                }
            }
        }
        custom_adapt();
    }

    function dynamic_adapt_back(el) {
        const da_index = el.getAttribute('data-da-index');
        const original_place = original_positions[da_index];
        const parent_place = original_place['parent'];
        const index_place = original_place['index'];
        const actual_index = index_of_elements(parent_place, true)[index_place];
        parent_place.insertBefore(el, parent_place.children[actual_index]);
    }

    function index_in_parent(el) {
        var children = Array.prototype.slice.call(el.parentNode.children);
        return children.indexOf(el);
    }

    function index_of_elements(parent, back) {
        const children = parent.children;
        const children_array = [];
        for (let i = 0; i < children.length; i++) {
            const children_element = children[i];
            if (back) {
                children_array.push(i);
            } else {
                if (children_element.getAttribute('data-da') == null) {
                    children_array.push(i);
                }
            }
        }
        return children_array;
    }
    function dynamic_adapt_sort(arr) {
        arr.sort(function (a, b) {
            if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
        });
        arr.sort(function (a, b) {
            if (a.place > b.place) { return 1 } else { return -1 }
        });
    }
    function custom_adapt() {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    window.addEventListener('resize', function (event) {

    });
});