AOS.init({
    // offset: 0    
});

$(".banner__slider").slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
    {
        breakpoint: 992,    
        settings: {
        arrows: true,   
        },
    },
    ],
});

$(".review__slider").slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        },
    },
    {
        breakpoint: 992,
        settings: {
        slidesToShow: 3,
        },
    },
    ],
});

$(".media__slider").slick({
    arrows: false,
    mobileFirst: true,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        },
    },
    {
        breakpoint: 992,
        settings: {
        slidesToShow: 3,
        },
    },
    ],
});

$(window).scroll(function () {  
    console.log("scroling...");
    if (window.pageYOffset > 100) {
        document.getElementsByClassName("header")[0].classList.add("fixed");
    } else {
        document
        .getElementsByClassName("header")[0]
        .classList.remove("fixed");
    }
});

// // alert("window loaded successfully");
// gsap.from(".header__logo", {
//     x: -100,
//     duration: 0.8,
// });

// gsap.from(".nav__list li", {
//     y: -100,
//     stagger: 0.1,
//     duration: 0.4,  
//     ease: "none",
// });



// gsap.from(".social__anchor", {
//     scrollTrigger:{
//         trigger:".social",
//     },
//     y: 100,
//     stagger: 0.1,
//     duration: 5,
//     ease: "none",
// }); 

// gsap.from(".author__img", {
//     scrollTrigger:{
//         trigger:".author",
//     },
//     x: -200,
//     duration: .4,
//     ease: "none",
// });     