
$(document).ready(function () {
    handleFixedMenu();
    handleScrollMenu();
    sliderNews();
    sliderCollabor();
    onChangeLanguage();
    handleMenuMobile();

    let navMobile = document.querySelector('nav');


    $('.main').imagesLoaded({ background: true }, function () {
        navMobile.classList.remove('--hidden');
    });

});

/* ----------------- Change Language ---------------- */
function onChangeLanguage() {

    let language = $('.lang a');

    language.click(function (e) {
        const currentLang = e.currentTarget.attributes[1].nodeValue;
        if (currentLang === "#en") {
            $(".lang__icon.en").addClass("--hidden");
            $(".lang__icon.vn").removeClass("--hidden");
        } else {
            $(".lang__icon.vn").addClass("--hidden");
            $(".lang__icon.en").removeClass("--hidden");
        }


    });
}

/* ------------------- Menu Mobile ------------------ */
function handleMenuMobile() {
    let nav = $('nav');
    let btnMenu = $('.header__right .hamburger');
    btnMenu.on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        nav.toggleClass('active');
    });

    $(window).resize(function () {
        if (btnMenu.hasClass('active') && $(window).innerWidth() >= 992) {
            btnMenu.removeClass('active');
            nav.removeClass('active');
        }
    });
}



/* ------------ Remove Class Active Menu ------------ */
function removeClassActiveMenu(menuList) {
    menuList.forEach((item) => item.classList.remove('active'));
}

/* ------------------- Scroll Menu ------------------ */
function handleScrollMenu() {
    let menuList = document.querySelectorAll('.header__menu li a');
    let menuMobile = document.querySelectorAll('.navbar ul li a');
    let heightHeader = document.querySelector('.header').offsetHeight;

    let sectionList = [];

    menuMobile.forEach((menuItem) => {
        let href = menuItem.getAttribute('href').slice(1);
        let section = document.querySelector(`.${href}`);
        menuItem.addEventListener('click', function (e) {
            e.preventDefault();

            $('html, body')[0].scrollTo({
                top: section.offsetTop + heightHeader + 1,
            });
            $('.header__right .hamburger').removeClass('active');
            $('nav').removeClass('active');
        });
    });

    menuList.forEach((menuItem, index) => {
        let href = menuItem.getAttribute('href').slice(1);
        let section = document.querySelector(`.${href}`);
        sectionList.push(section);
        menuItem.addEventListener('click', function (e) {
            e.preventDefault();
            $('html, body')[0].scrollTo({
                top: section.offsetTop - heightHeader - 70,
            });

            removeClassActiveMenu(menuList);
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', function () {
        let posScroll = window.scrollY;

        sectionList.forEach((item, index) => {
            if (
                posScroll > item.offsetTop - heightHeader &&
                posScroll < item.offsetTop + item.offsetHeight
            ) {
                removeClassActiveMenu(menuList);
                menuList[index].classList.add('active');
            } else {
                menuList[index].classList.remove('active');
            }
        });
    });
}

/* ------------------- Fixed Menu ------------------- */
function handleFixedMenu() {
    let header = document.querySelector('.header');
    let heightHeader = header.offsetHeight;
    let heightSlider = document.querySelector('.banner').offsetHeight;

    window.addEventListener('scroll', () => {
        let posScroll = window.scrollY;
        if (posScroll > 30) {
            header.classList.add('--fixed');
        } else {
            header.classList.remove('--fixed');
        }
    });
}




/* ------------------- Menu Mobile ------------------ */
function handleMenuMobile() {
    let nav = $('nav');
    let btnMenu = $('.header__right .hamburger');
    btnMenu.on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        nav.toggleClass('active');
    });

    $(window).resize(function () {
        if (btnMenu.hasClass('active') && $(window).innerWidth() >= 992) {
            btnMenu.removeClass('active');
            nav.removeClass('active');
        }
    });
}




/* <-------  slider news  -------> */
function sliderNews() {
    let slider = $('.slider');
    slider.flickity({
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        fade: false,
    });

    $('.btn-around.--prev').on('click', function (e) {
        e.preventDefault();
        slider.flickity('previous');
    });
    $('.btn-around.--next').on('click', function (e) {
        e.preventDefault();
        slider.flickity('next');
    });
}


/* <-------  Slider collaborators  -------> */
function sliderCollabor() {
    let sliderCollab = $('.carousel');
    // sliderCollab.flickity({
    //     fade: true,
    //     prevNextButtons: false,
    // });

    // $('.btn-around.colab.--prev').on('click', function (e) {
    //     e.preventDefault();
    //     sliderCollab.flickity('previous');
    // });
    // $('.btn-around.colab.--next').on('click', function (e) {
    //     e.preventDefault();
    //     sliderCollab.flickity('next');
    // });


    $('.btn-around.colab.--prev').on('click', function (e) {
        e.preventDefault();
        sliderCollab.slick('slickPrev');
    });
    $('.btn-around.colab.--next').on('click', function (e) {
        e.preventDefault();
        sliderCollab.slick('slickNext');
    });
    sliderCollab.slick({
        draggable: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 900,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    })

}






