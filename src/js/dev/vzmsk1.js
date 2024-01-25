import { msnry } from '../components/masonry.js';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { remToPx, bodyLockStatus, bodyLock, bodyUnlock, removeClasses } from '../utils/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// --------------------------------------------------------------------------

/**
 * changes properties (desk / mobile) for wave svg element
 */
const setWaveSvgProps = () => {
    if (document.querySelectorAll('[data-wave-line]').length) {
        document.querySelectorAll('[data-wave-line]').forEach((waveLine) => {
            const svg = waveLine.closest('svg');
            const data = waveLine.dataset.waveLine.trim().split(',');
            const animEl = waveLine.querySelector('animate');
            const textPath = animEl.closest('textPath');
            const deskPath = waveLine.querySelector('#wavepath');
            const mobPath = waveLine.querySelector('#wavepath-m');
            const props = {
                widthD: `${data[0]}`,
                heightD: `${data[1]}`,
                widthM: `${data[2]}`,
                heightM: `${data[3]}`
            };

            if (mobPath) {
                textPath.setAttribute(
                    'href',
                    `${window.innerWidth > 768 ? '#' + deskPath.id : '#' + mobPath.id}`
                );
                svg.setAttribute(
                    'viewBox',
                    `${
                        window.innerWidth > 768
                            ? `0 0 ${props.widthD} ${props.heightD}`
                            : `0 0 ${props.widthM} ${props.heightM}`
                    }`
                );
            }
        });
    }
};
setWaveSvgProps();

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

/**
 * initializes select modal
 */
const initSelectModal = () => {
    if (document.querySelectorAll('[data-sel-popup]').length) {
        const selectPopup = document.getElementById('selectPopup');
        const popupTitle = document.getElementById('SPTitle');
        const popupBody = document.getElementById('SPBody');

        const showPopup = (title, options) => {
            document.documentElement.classList.add('_show-select-popup');
            popupTitle.innerHTML = title;
            popupBody.innerHTML = options;
            selectPopup.querySelector('.select__scroll').removeAttribute('data-simplebar');
            selectPopup.querySelector('.select__scroll').setAttribute('data-simplebar', '');
            bodyLock();
        };
        const hidePopup = () => {
            document.documentElement.classList.remove('_show-select-popup');
            bodyUnlock();
        };

        const setSelectData = () => {
            document.querySelectorAll('[data-sel-popup]').forEach((dropdown) => {
                const selectBtn = dropdown.querySelector('.select__title');
                const data = dropdown.dataset.selPopup;
                const title =
                    data === 'date' ? 'Фильтр по дате' : data === 'category' ? 'Фильтр по категории' : '';

                selectBtn.addEventListener('click', function () {
                    if (window.innerWidth <= 768) {
                        const parent = selectBtn.closest('.select');
                        const options = parent.querySelector('.select__options').outerHTML;
                        if (!selectBtn.closest('._select-opened') && bodyLockStatus) {
                            showPopup(title, options);
                        }
                    }
                });
            });
        };

        const handleClickEvent = () => {
            selectPopup.addEventListener('click', function (e) {
                const target = e.target;

                if (
                    document.documentElement.classList.contains('_show-select-popup') &&
                    bodyLockStatus &&
                    window.innerWidth <= 768
                ) {
                    if (
                        target.closest('.select-popup__close-btn') ||
                        !target.closest('.select-popup__inner')
                    ) {
                        hidePopup();
                    }
                    if (target.closest('.select__option')) {
                        removeClasses(selectPopup.querySelectorAll('.select__option'), '_select-selected');
                        target.closest('.select__option').classList.add('_select-selected');
                    }
                }
            });
        };

        setSelectData();
        handleClickEvent();
        if (window.innerWidth > 768) {
            hidePopup();
        }
    }
};
initSelectModal();

/**
 * changes scrollable dropdowns height (desk / mobile)
 */
const changeScrollableHeight = () => {
    if (document.querySelectorAll('.select__scroll').length) {
        document.querySelectorAll('.select__scroll').forEach((el) => {
            const data = el.dataset.selScroll.trim().split(',');
            el.style.maxHeight = `${window.innerWidth > 768 ? data[0] : data[1]}rem`;
        });
    }
};
changeScrollableHeight();

/**
 * animated portfolio hero ellipse on scroll
 */
const animateEllipse = () => {
    if (document.getElementById('PHEllipse')) {
        const mm = gsap.matchMedia();

        mm.add('(min-width: 768px)', () => {
            const tl = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '#portfolioHero',
                        scrub: !0,
                        start: () => 'top top',
                        end: () => 'bottom top',
                        invalidateOnRefresh: !0,
                        overwrite: 'auto'
                    }
                })
                .fromTo(
                    '#PHEllipse',
                    {
                        scale: 1
                    },
                    {
                        scale: 1.88
                    }
                );
        });

        // mm.revert();
    }
};
animateEllipse();

/**
 * toggles filters menu
 */
const toggleFiltersMenu = () => {
    if (document.getElementById('showFiltersBtn') && bodyLockStatus) {
        const showFiltersMenu = () => {
            document.documentElement.classList.add('_show-filters-menu');
            bodyLock();
        };
        const hideFiltersMenu = () => {
            document.documentElement.classList.remove('_show-filters-menu');
            bodyUnlock();
        };

        document.getElementById('showFiltersBtn').addEventListener('click', showFiltersMenu);
        document.getElementById('hideFiltersBtn').addEventListener('click', hideFiltersMenu);

        if (window.innerWidth > 768) {
            hideFiltersMenu();
        }
    }
};
toggleFiltersMenu();

/**
 * removes attribute from dom element
 * @param {HTMLElement | HTMLCollection} node
 */
const removeAttribute = (node, attr) => {
    const remove = (el) => {
        el.removeAttribute(attr);
    };

    if (node.length > 1) {
        node.forEach((el) => {
            console.log(el);
            remove(el);
        });
    } else if (node.length === 1) {
        remove(el);
    }
};

if (document.querySelector('.portfolio__cards') && window.innerWidth > 768) {
    removeAttribute(document.querySelector('.portfolio__cards'), 'style');
    removeAttribute(document.querySelectorAll('.portfolio__card'), 'style');
}

// ------------------------------ hero gallery ------------------------------

import '../components/hero-gallery.js';

// ---------------------------------- macy ----------------------------------

import '../components/masonry.js';

// --------------------------------- events ---------------------------------

window.addEventListener('resize', function () {
    setWaveSvgProps();
    initSelectModal();
    changeScrollableHeight();
    animateEllipse();
    toggleFiltersMenu();
    if (document.querySelector('.portfolio__cards') && window.innerWidth > 768) {
        msnry.destroy();
        setTimeout(() => {
            removeAttribute(document.querySelector('.portfolio__cards'), 'style');
            removeAttribute(document.querySelectorAll('.portfolio__card'), 'style');
        }, 0);
    } else {
        msnry.initLayout = true;
        msnry.reloadItems();
        msnry.layout();
    }
});
