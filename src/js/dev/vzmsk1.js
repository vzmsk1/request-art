/**
 * changes the speed of wave animation
 */
const changeWaveAnimDur = () => {
    if (document.querySelectorAll('[data-wave-line]').length) {
        document.querySelectorAll('[data-wave-line]').forEach((waveLine) => {
            const data = waveLine.dataset.waveLine.trim().split(',');
            const animEl = waveLine.querySelector('animate');
            const props = {
                desk: `${data[0]}s`,
                mob: `${data[1]}s`
            };

            animEl.setAttribute('dur', `${window.innerWidth > 768 ? props.desk : props.mob}`);
        });
    }
};
changeWaveAnimDur();

// ------------------------------ hero gallery ------------------------------

import '../components/hero-gallery.js';

// --------------------------------- events ---------------------------------

window.addEventListener('resize', changeWaveAnimDur);
