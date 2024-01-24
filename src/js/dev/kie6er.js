import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, EffectFade, Thumbs } from 'swiper/modules';
import { remToPx } from '../utils/utils';

$(document).ready(function () {
    // HEADER
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('open');
        $('.burger-menu').toggleClass('show');
        $('body').toggleClass('lock');
        $('header').toggleClass('show');
    });

    scrollHeader();
    $(window).resize(function () {
        if ($(this).innerWidth() >= 769) {
            $('body').removeClass('lock');
            $('.burger-btn').removeClass('open');
            $('.burger-menu').removeClass('show');
            $('header').removeClass('show');
        }
        scrollHeader();
    });
    $(window).on('scroll', scrollHeader);

    function scrollHeader() {
        if ($(window).innerWidth() < 769) {
            if ($(window).scrollTop() > 1) {
                $('.header').addClass('scroll');
            } else {
                $('.header').removeClass('scroll');
            }
        }
    }

    // SWIPER

    const collectionSwiper = new Swiper('.main-collection__cards', {
        enabled: true,
        slidesPerView: 'auto',
        spaceBetween: `${remToPx(2)}rem`,
        speed: 500,
        breakpoints: {
            768: {
                enabled: false
            }
        }
    });

    const advantagesSwiper = new Swiper('.main-advantages__cards', {
        enabled: true,
        slidesPerView: 'auto',
        spaceBetween: `${remToPx(2.4)}rem`,
        speed: 500,
        breakpoints: {
            768: {
                spaceBetween: 0,
                enabled: false
            }
        }
    });

    const conceptSwiper = new Swiper('.main-concept__content', {
        enabled: true,
        slidesPerView: 'auto',
        spaceBetween: `${remToPx(2.4)}rem`,
        speed: 500,
        breakpoints: {
            768: {
                spaceBetween: 0,
                enabled: false
            }
        }
    });

    if ($(window).outerWidth() > 768) {
        $('.main-concept__left').on('mouseover', function () {
            $(this).addClass('hover');
            $('.main-concept').css('background-color', '#FAD85D');
        });

        $('.main-concept__left').on('mouseleave', function () {
            $(this).removeClass('hover');
            $('.main-concept').css('background', 'none');
        });

        $('.main-concept__right').on('mouseover', function () {
            $(this).addClass('hover');
            $('.main-concept').css('background-color', '#CAD2F4');
        });

        $('.main-concept__right').on('mouseleave', function () {
            $(this).removeClass('hover');
            $('.main-concept').css('background', 'none');
        });
    }
});
