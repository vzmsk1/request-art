import IMask from 'imask';

// --------------------------------------------------------------------------

const phoneInputs = document.querySelectorAll('[data-phone-mask]');
if (phoneInputs.length) {
    phoneInputs.forEach((phoneInput) => {
        const mask = new IMask(phoneInput, {
            mask: '+{7} (000) 000 00-00'
        });
    });
}
