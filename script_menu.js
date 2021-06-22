//выдвигающееся меню
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

let body = document.querySelector('body');
if (isMobile.any()){
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++){
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i]; 

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function(){
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
}else{
    body.classList.add('mouse') ;
}
//создание бургера
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
//настройка слайдера
new Swiper('.image-slider',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    breakpoints:{
       550:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        992:{
            slidesPerView:4,
        },
    }
})
//текст для слайдера
let p_t = document.querySelectorAll('.p_s');
let p_img = document.querySelectorAll('.p_img');
let slide = document.querySelectorAll('.item_slide');
for(i=0; i<p_t.length; i++){
    let thisLink = p_t[i];
    let img_p = p_img[i];

    slide[i].addEventListener('click', function(){
        thisLink.classList.toggle('not_p');
        img_p.classList.toggle('p');
    });
}