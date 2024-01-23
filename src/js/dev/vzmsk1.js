import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { remToPx } from '../utils/utils';
import gsap from 'gsap';

// --------------------------------------------------------------------------

/**
 * changes the speed of wave animation
 */
const changeWaveAnimDur = () => {
    if (document.querySelectorAll('[data-wave-line]').length) {
        document.querySelectorAll('[data-wave-line]').forEach((waveLine) => {
            const data = waveLine.dataset.waveLine.trim().split(',');
            const animEl = waveLine.querySelector('animate');
            const textPath = animEl.closest('textPath');
            const deskPath = waveLine.querySelector('#wavepath');
            const mobPath = waveLine.querySelector('#wavepath-m');
            const props = {
                desk: `${data[0]}s`,
                mob: `${data[1]}s`
            };

            animEl.setAttribute('dur', `${window.innerWidth > 768 ? props.desk : props.mob}`);

            if (mobPath)
                textPath.setAttribute(
                    'href',
                    `${window.innerWidth > 768 ? '#' + deskPath.id : '#' + mobPath.id}`
                );
        });
    }
};
changeWaveAnimDur();

/**
 * initializes sliders
 */
const initSliders = () => {
    if (document.querySelector('.stages__slider')) {
        const stagesSlider = new Swiper('.stages__slider', {
            modules: [Navigation],
            slidesPerView: 'auto',
            spaceBetween: `${remToPx(6)}rem`,
            rewind: true,
            speed: 800,
            navigation: {
                nextEl: '.stages .sl-btn_next',
                prevEl: '.stages .sl-btn_prev'
            }
        });
    }
};
initSliders();

/**
 * creates marquee animation
 */
const createMarquee = () => {
    if (document.querySelectorAll('[data-marquee-part]').length) {
        gsap.to('[data-marquee-part]', {
            xPercent: -100,
            repeat: -1,
            duration: 5,
            ease: 'linear'
        }).totalProgress(0.5);
    }
};
createMarquee();

// ------------------------------ hero gallery ------------------------------

import '../components/hero-gallery.js';

// --------------------------------- events ---------------------------------

window.addEventListener('resize', changeWaveAnimDur);
