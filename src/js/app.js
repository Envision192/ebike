import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; 

const swiper = new Swiper('.bikeSwiper', {
	direction: 'vertical',
	effect: "fade",
	autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
	pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  	loop: true,
});

const swiper2 = new Swiper('.pageSwiper', {
	direction: 'vertical',
	effect: "fade",
	autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
	pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
  	loop: true,
});