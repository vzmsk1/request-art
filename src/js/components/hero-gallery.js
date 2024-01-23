import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollToPlugin } from 'gsap/all';
import { Observer } from 'gsap/all';

import { bodyLock, bodyLockStatus, bodyUnlock } from '../utils/utils.js';

// --------------------------------------------------------------------------

// gsap plugins
gsap.registerPlugin(Draggable);
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollToPlugin);

// gsap defaults
gsap.defaults({ duration: 1 });

if (document.getElementById('gallerySection')) {
    class HeroGallery {
        gallerySection = document.getElementById('gallerySection');

        constructor() {
            this.initGalleryPlane();
            this.initGalleryPopup();
        }

        // init gallery plane
        initGalleryPlane() {
            const planeWrapper = document.getElementById('GPlaneWrap');
            const planeBody = document.getElementById('GPlaneBody');
            const plane = document.getElementById('GPlane');
            const zoomPlaneBtn = document.getElementById('zoomGPlaneBtn');
            const md = window.innerWidth > 768;

            // init gsap observer
            const observe = (draggablePlane) => {
                let vY = 0;
                let vX = 0;

                const obsChangeHandler = (self, isHorizontal) => {
                    const velocity = isHorizontal ? self.velocityX : self.velocityY;
                    const delta = isHorizontal ? self.deltaX : self.deltaY;

                    let v = isHorizontal ? vX : vY;

                    if (Math.abs(velocity) > Math.abs(v) || (delta < 0 && v > 0) || (delta > 0 && v < 0)) {
                        v = velocity * (self.isDragging ? 10 : 1);

                        gsap.ticker.add((time, deltaTime) => {
                            const adjustedVelocity = (deltaTime * v) / 10000;

                            if (Math.abs(v) < 50) {
                                return;
                            }

                            draggablePlane.applyBounds(this.gallerySection);

                            if (isHorizontal) {
                                gsap.set(planeWrapper, {
                                    translateX: `+=${-adjustedVelocity}`
                                });
                            } else {
                                gsap.set(planeWrapper, {
                                    translateY: `+=${-adjustedVelocity}`
                                });
                            }

                            v *= 0.7;
                        });
                    }
                };

                Observer.create({
                    target: '.hero-gallery',
                    type: 'wheel',
                    onChangeY(self) {
                        obsChangeHandler(self, false);
                    },
                    onChangeX(self) {
                        obsChangeHandler(self, true);
                    }
                });
            };

            // zoom plane out
            const zoomOut = () => {
                // disable all gsap observers
                Observer.getAll().forEach((o) => o.disable());

                // window
                gsap.to(window, { scrollTo: 0 });
                // plane section
                gsap.to(this.gallerySection, { paddingTop: 0, marginTop: 0 });
                // plane body
                gsap.to(planeBody, { height: window.innerWidth > 768 ? '63rem' : '73rem' });
                // plane wrapper
                gsap.to(planeWrapper, {
                    scale: 1,
                    translateY: 0,
                    translateX: 0,
                    onStart: () => {
                        gsap.to(zoomPlaneBtn, { opacity: 0, duration: 0 });
                        zoomPlaneBtn.querySelector('.showmore-btn__text').innerHTML = 'смотреть детальнее';
                    },
                    onComplete: () => {
                        gsap.to(zoomPlaneBtn, { translateY: 0, opacity: 1, duration: 0 });
                        zoomPlaneBtn.style.display = 'inline-flex';

                        //remove dragging class
                        this.gallerySection.classList.remove('_dragging');

                        // update draggable instance
                        // draggablePlane.applyBounds(this.gallerySection);
                        // draggablePlane.update();
                        if (Draggable.get(planeWrapper)) Draggable.get(planeWrapper).kill();

                        // unlock body
                        bodyUnlock();
                    }
                });
            };

            // zoom plane in
            const zoomIn = () => {
                if (Draggable.get(planeWrapper)) {
                    Draggable.get(planeWrapper).kill();
                }
                const draggablePlane = new Draggable(planeWrapper, {
                    bounds: this.gallerySection
                });

                // window
                gsap.to(window, { scrollTo: 0 });
                // plane section
                if (window.innerWidth > 768)
                    gsap.to(this.gallerySection, { paddingTop: '8rem', marginTop: '2.5rem' });
                // plane body
                gsap.to(planeBody, { height: '100rem' });
                // plane wrapper
                gsap.to(planeWrapper, {
                    scale: 1.7,
                    translateY: `${
                        window.innerWidth > 768 ? (110 / draggablePlane.target.clientHeight) * -100 : 10
                    }% `,
                    translateX: `${
                        window.innerWidth > 768 ? (166 / draggablePlane.target.clientWidth) * 100 : '-50%'
                    }% `,
                    onStart: () => {
                        zoomPlaneBtn.style.display = 'none';
                        zoomPlaneBtn.querySelector('.showmore-btn__text').innerHTML = 'закрыть';
                    },
                    onComplete: () => {
                        zoomPlaneBtn.style.display = 'inline-flex';
                        gsap.to(zoomPlaneBtn, {
                            translateY: window.innerWidth > 768 ? `-63rem` : 0,
                            opacity: 1
                        });
                    }
                });

                // update draggable plane
                draggablePlane.applyBounds(this.gallerySection);
                draggablePlane.update();

                // add dragging class
                this.gallerySection.classList.add('_dragging');
                // lock body
                bodyLock();

                // init gsap observer
                observe(draggablePlane);
            };

            // toggle plane zoom
            const toggleZoom = () => {
                if (bodyLockStatus && this.gallerySection.classList.contains('_dragging')) {
                    zoomOut();
                } else if (bodyLockStatus && !this.gallerySection.classList.contains('_dragging')) {
                    zoomIn();
                }
            };

            const init = () => {
                // disable drag
                // draggablePlane.disable();

                // events
                zoomPlaneBtn.addEventListener('click', toggleZoom);
                window.addEventListener('resize', function () {
                    // draggablePlane.applyBounds(this.gallerySection);
                    // draggablePlane.update();
                    if (Draggable.get(planeWrapper)) {
                        Draggable.get(planeWrapper).kill();
                    }
                    zoomOut();

                    setTimeout(() => {
                        planeWrapper.style.removeProperty('transform');
                    }, 1000);
                });
            };
            init();
        }

        // init gallery popup
        initGalleryPopup() {
            const popup = document.getElementById('HGPopup');
            const popupTitle = document.getElementById('HGPopupTitle');

            // hide popup
            const hidePopup = () => {
                popup.classList.remove('_active');
            };

            // show popup
            const showPopup = (item) => {
                const title = item.dataset.title;
                const color = item.dataset.color;

                if (title.length && color.length) {
                    popupTitle.innerHTML = title;
                    popup.style.backgroundColor = color;
                    popup.classList.add('_active');
                }

                item.addEventListener('mouseleave', function () {
                    hidePopup();
                });
            };

            const init = () => {
                if (popup) {
                    // events
                    this.gallerySection.addEventListener('mouseover', function (e) {
                        if (!popup.classList.contains('_active') && e.target.closest('.hero-gallery__item')) {
                            const target = e.target.closest('.hero-gallery__item');

                            showPopup(target);
                        }
                    });
                }
            };
            init();
        }
    }
    new HeroGallery();
}
