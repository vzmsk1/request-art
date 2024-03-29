import $ from 'jquery';

import gsap from 'gsap';
import { ScrollTrigger, Linear } from 'gsap/all';

import '../components/ymaps';

gsap.registerPlugin(ScrollTrigger);

$('.collections__articles-item').on('mouseover', function () {
    $(this).addClass('--active');
});

$('.collections__articles-item').on('mouseout', function () {
    $(this).removeClass('--active');
});

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.collections__articles-item-text');

textElements.forEach((text) => {
    gsap.to(text, {
        backgroundSize: '100%',
        ease: Linear.easeNone,
        scrollTrigger: {
            trigger: text,
            start: 'center 100%',
            end: 'center 70%',
            scrub: true
        }
    });
});

const section = document.querySelector('.article__shares');

gsap.to(section, {
    '--scale': 1,
    scrollTrigger: {
        trigger: section,
        start: 'top 100%',
        end: 'bottom 80%',
        scrub: true
    },
    ease: Linear.easeIn
});
