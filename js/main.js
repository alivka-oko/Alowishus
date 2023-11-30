let cards_swiper = new Swiper('.card-swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-next__cards',
        prevEl: '.swiper-prev__cards',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // centeredSlides:true,
    autoplay: {
        delay: 3000
    },
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
        1291: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        993: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }
});


let reviews_swiper = new Swiper('.reviews-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoHeight: false,

    slidesPerView: 1,
});


let menu__burger = document.querySelector('.menu__burger');
let menu_links = document.getElementsByClassName('menu__link');
const burger = document.querySelector('.burger-menu')
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

for (let i = 0; i < menu_links.length; i++) {
    let li = document.createElement('a');
    li.innerHTML = menu_links[i].innerHTML;
    li.setAttribute('href', menu_links[i].href)
    li.setAttribute('onclick', 'toggleMenu()')
    menu__burger.appendChild(li);
}

function toggleMenu() {
    if (menu__burger.classList.contains('showMenu')) {
        menu__burger.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu__burger.classList.add("showMenu");        
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
