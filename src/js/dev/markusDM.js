import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, EffectFade, Thumbs, Autoplay, Mousewheel, FreeMode } from 'swiper/modules';
import 'jquery.marquee';

export const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        return (100 / 390) * (0.1 * $(window).width()) * rem;
    }
};

// $(document).ready(function () {
//     $('.portfolio-d-m__string-text').marquee({
//         duration: 12000,
//         startVisible: true,
//         duplicated: true,
//         cache: true
//     });
// });

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
    modules: [Mousewheel, FreeMode],
    speed: 1200,
    mousewheel: {
        releaseOnEdges: true,
        sensitivity: 0.7
    },
    breakpoints: {
        0: {
            slidesPerView: 1.15,
            spaceBetween: rem(1.2),
            freeMode: {
                enabled: false
            }
        },
        768: {
            mousewheel: {
                releaseOnEdges: true,
                sensitivity: 0.7
            },
            slidesPerView: 'auto',
            spaceBetween: rem(1.2),
            freeMode: {
                enabled: true
            }
        }
    }
});

new Swiper('.portfolio-swiper', {
    modules: [Autoplay],
    speed: 5000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: rem(0)
        }
    }
});

new Swiper('.portfolio-string-swiper', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    speed: 8000,
    spaceBetween: rem(5),
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    }
});

new Swiper('.services-swiper', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    speed: 6000,
    spaceBetween: rem(25),
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            spaceBetween: rem(5)
        }
    }
});

var root = document.documentElement;
var wrap = document.querySelector('.portfolio-d-m__content-image');
if (wrap) {
    wrap.addEventListener('mousemove', function (e) {
        var w = wrap.offsetWidth;
        var h = wrap.offsetHeight;
        var center = w / 2;
        var middle = h / 2;

        var x = e.clientX - wrap.offsetLeft;
        var y = e.clientY - wrap.offsetTop;

        var gradientX = 1 - x / w;
        var gradientY = 1 - y / h;

        if (x < center) {
            x = 1 - x / center;
            x = -x;
        } else {
            x = (x - center) / center;
        }

        if (y < middle) {
            y = 1 - y / middle;
            y = -y;
        } else {
            y = (y - middle) / middle;
        }

        root.style.setProperty('--mouse-x', x);
        root.style.setProperty('--mouse-y', y);

        root.style.setProperty('--gradient-x', gradientX);
        root.style.setProperty('--gradient-y', gradientY);
    });
}
