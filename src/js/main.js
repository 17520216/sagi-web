
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
        let section = document.querySelector(`.sc${href}`);
        menuItem.addEventListener('click', function (e) {
            e.preventDefault();

            $('html, body')[0].scrollTo({
                top: section.offsetTop + 1,
            });
            $('.header__right .hamburger').removeClass('active');
            $('nav').removeClass('active');
        });
    });

    menuList.forEach((menuItem, index) => {
        let href = menuItem.getAttribute('href').slice(1);
        let section = document.querySelector(`.sc${href}`);
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