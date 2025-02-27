const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
})

// close menu when clink button x
menuCloseButton.addEventListener("click", () =>menuOpenButton.click());

// clode menu when click link of nav
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});
// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickabale: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    //responsive breakpoints
    breakpoints: {
        0:{
            slidesPerView: 1
        },

        786:{
            slidesPerView: 2
        },
        
        1024:{
            slidesPerView: 3
        }
    }
  });