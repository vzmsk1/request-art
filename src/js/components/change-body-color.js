import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// --------------------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);

const changeBodyColor = () => {
    const sections = document.querySelectorAll('[data-change-color]');

    if (sections.length) {
        sections.forEach((section) => {
            const color = section.dataset.changeColor;

            const tl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: '-45% top',
                        markers: true
                    }
                })
                .to(section, {
                    backgroundColor: color,
                    onStart: () => {
                        section.classList.add('_is-active');
                    }
                });
        });
    }
};
changeBodyColor();
