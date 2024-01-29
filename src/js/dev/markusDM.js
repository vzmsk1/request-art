import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, EffectFade, Thumbs, Autoplay } from 'swiper/modules';
import  'jquery.marquee';


export const rem = function (rem) {
    if ($(window).width() > 768) {
      return 0.005208335 * $(window).width() * rem;
    } else {
      return (100 / 390) * (0.1 * $(window).width()) * rem;
    }
  };

  $(document).ready(function() {
    $('.portfolio-d-m__string-text').marquee({
      duration: 12000,
      startVisible: true,
      duplicated: true,
      cache: true,
    });

    
});
  
     
   
  
 

// const portfolioString = new Swiper('.portfolio-d-m__string', {
//     slidesPerView: 'auto',
//     modules: [Autoplay],
//     spaceBetween: rem(1),
//     allowTouchMove: false,
//     speed: 20000,
//     freeMode: true,
//     loop: true,
//     autoplay: {
//       delay: 0,
//       disableOnInteraction: false, //
//     },
  
   
// });


const portfolioSwiper = new Swiper('.portfolio-d__swiper', {
    slidesPerView: 1.3,
    spaceBetween: rem(2.4),
    breakpoints: {
      769: {
          slidesPerView: 2,
          spaceBetween: rem(6),
        },
      },
     
    
 
});






  var root = document.documentElement;
  var wrap = document.querySelector('.portfolio-d-m__content-image');
  if(wrap) {
    wrap.addEventListener("mousemove", function(e) {
      var w = wrap.offsetWidth;
      var h = wrap.offsetHeight;
      var center = w / 2;
      var middle = h / 2;
      
        var x = e.clientX - wrap.offsetLeft; 
        var y = e.clientY - wrap.offsetTop;
    
      var gradientX = 1 - (x / w);
      var gradientY = 1 - (y / h);
      
      if(x < center) {
        x = 1 - (x / center);
        x = -x;
      }else {
        x = (x - center)/center; 
      }
      
      if(y < middle) {
        y = 1 - (y / middle);
        y = -y;
      }else {
        y = (y - middle)/middle; 
      }
      
        root.style.setProperty("--mouse-x", x);
        root.style.setProperty("--mouse-y", y);
      
      root.style.setProperty("--gradient-x", gradientX);
      root.style.setProperty("--gradient-y", gradientY);
    
    }); 
    
  }
  