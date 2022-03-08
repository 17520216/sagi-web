
$(document).ready(function () {
    handleFixedMenu();
    handleScrollMenu();
    sliderHome();
    sliderCollabor();
});


/* ------------ 05. Remove Class Active Menu ------------ */
function removeClassActiveMenu(menuList) {
    menuList.forEach((item) => item.classList.remove('active'));
}

/* ------------------- 06. Scroll Menu ------------------ */
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
                top: section.offsetTop - heightHeader + 1,
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

/* ------------------- 07. Fixed Menu ------------------- */
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




/* ------------------- 10. Menu Mobile ------------------ */
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


/* <-------  News  -------> */
const left = document.querySelector(".news .container").getBoundingClientRect().x + 15;
const slider = document.querySelector(".news .slider");

$(slider).css(`margin-left`, `${left}px`)

/* <-------  Handle resize  -------> */
$(window).resize(function () {
    const left = document.querySelector(".news .container").getBoundingClientRect().x + 15;
    $(slider).css(`margin-left`, `${left}px`)
});


/* <-------  slider news  -------> */
function sliderHome() {
    let slider = $('.slider');
    slider.flickity({
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
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
    let slider = $('.slide');
    let pagingNumber = $('.scslider__bottom-paging span');
    let paging = $('.scslider__bottom-paging');
    slider.flickity({
        wrapAround: true,
        prevNextButtons: false,
        pauseAutoPlayOnHover: false,
        fade: true,
        on: {
            change(index) {
                let number = index + 1;
                pagingNumber.html(number.toString().padStart(2, 0));
            },
            ready() {
                let dots = $('.flickity-page-dots');
                paging.append(dots);
            },
        },
    });

    $('.btn-around.colab.--prev').on('click', function (e) {
        e.preventDefault();
        slider.flickity('previous');
    });
    $('.btn-around.colab.--next').on('click', function (e) {
        e.preventDefault();
        slider.flickity('next');
    });
}



