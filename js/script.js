$(document).ready();


window.onload = function () {
    new Swiper('.sw-visual', {
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-visual-pg',
            type: 'fraction',
            // clickable: true,
        },
    })
}