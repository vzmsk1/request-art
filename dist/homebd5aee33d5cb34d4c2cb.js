/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dev/markusDM.js":
/*!********************************!*\
  !*** ./src/js/dev/markusDM.js ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/dev/ukik0.js":
/*!*****************************!*\
  !*** ./src/js/dev/ukik0.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/dev/vzmsk1.js":
/*!******************************!*\
  !*** ./src/js/dev/vzmsk1.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/utils/accordion.js":
/*!***********************************!*\
  !*** ./src/js/utils/accordion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accordion: () => (/* binding */ accordion)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils/utils.js");

const accordion = () => {
  const accordionItems = document.querySelectorAll('[data-accordion]');
  if (accordionItems.length) {
    const initAccordion = function (accordionItems) {
      let matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      accordionItems.forEach(accordionGroup => {
        accordionGroup = matchMedia ? accordionGroup.item : accordionGroup;
        if (matchMedia.matches || !matchMedia) {
          accordionGroup.classList.add('_accordion-init');
          initAccordionBody(accordionGroup);
          accordionGroup.addEventListener('click', setAccordionActions);
        } else {
          accordionGroup.classList.remove('_accordion-init');
          initAccordionBody(accordionGroup, false);
          accordionGroup.removeEventListener('click', setAccordionActions);
        }
      });
    };
    const initAccordionBody = function (accordionGroup) {
      let hideAccordionBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      let titles = accordionGroup.querySelectorAll('[data-accordion-item]');
      if (titles.length) {
        titles = Array.from(titles).filter(item => item.closest('[data-accordion]') === accordionGroup);
        titles.forEach(title => {
          if (hideAccordionBody) {
            title.removeAttribute('tabindex');
            if (!title.classList.contains('_accordion-active')) {
              title.nextElementSibling.hidden = true;
            }
          } else {
            title.setAttribute('tabindex', '-1');
            title.nextElementSibling.hidden = false;
          }
        });
      }
    };
    const setAccordionActions = e => {
      const target = e.target;
      if (target.closest('[data-accordion-item]')) {
        const title = target.closest('[data-accordion-item]');
        const group = title.closest('[data-accordion]');
        const isOneActiveItem = group.hasAttribute('data-accordion-one-active');
        const accordionSpeed = group.dataset.accordionSpeed ? parseInt(group.dataset.accordionSpeed) : 500;
        if (!group.querySelectorAll('._slide').length) {
          if (isOneActiveItem && !title.classList.contains('_accordion-active')) {
            hideAccordionBody(group);
          }
          title.classList.toggle('_accordion-active');
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(title.nextElementSibling, accordionSpeed);
        }
        e.preventDefault();
      }
    };
    const hideAccordionBody = accordionGroup => {
      const activeTitle = accordionGroup.querySelector('[data-accordion-item]._accordion-active');
      const accordionSpeed = accordionGroup.dataset.accordionSpeed ? parseInt(accordionGroup.dataset.accordionSpeed) : 500;
      if (activeTitle && !accordionGroup.querySelectorAll('._slide').length) {
        activeTitle.classList.remove('_accordion-active');
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(activeTitle.nextElementSibling, accordionSpeed);
      }
    };
    const accordionClose = document.querySelectorAll('[data-accordion-close]');
    if (accordionClose.length) {
      document.addEventListener('click', function (e) {
        const target = e.target;
        if (!target.closest('[data-accordion]')) {
          accordionClose.forEach(accordionItemClose => {
            const group = accordionItemClose.closest('[data-accordion]');
            const speed = spollersBlock.dataset.accordionSpeed ? parseInt(group.dataset.accordionSpeed) : 500;
            accordionItemClose.classList.remove('_accordion-active');
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(accordionItemClose.nextElementSibling, speed);
          });
        }
      });
    }
    const regItems = Array.from(accordionItems).filter(function (item, index, self) {
      return !item.dataset.accordion.split(',')[0];
    });

    // init regular accordion items
    if (regItems.length) {
      initAccordion(regItems);
    }

    // get accordion items with media queries
    const mdQueriesArray = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dataMediaQueries)(accordionItems, 'accordion');
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach(mdQueriesItem => {
        // event
        mdQueriesItem.matchMedia.addEventListener('change', function () {
          initAccordion(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        initAccordion(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
  }
};
accordion();

/***/ }),

/***/ "./src/js/utils/forms.js":
/*!*******************************!*\
  !*** ./src/js/utils/forms.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formFieldsInit: () => (/* binding */ formFieldsInit),
/* harmony export */   formSubmit: () => (/* binding */ formSubmit)
/* harmony export */ });
/**
 * adds actions to form fields
 * @param {object} options object
 */
function formFieldsInit() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    viewPass: false
  };
  const formFields = document.querySelectorAll('input[placeholder],textarea[placeholder]');
  if (formFields.length) {
    formFields.forEach(formField => {
      if (!formField.hasAttribute('data-placeholder-nohide')) {
        formField.dataset.placeholder = formField.placeholder;
      }
    });
  }
  document.body.addEventListener('focusin', function (e) {
    const targetElement = e.target;
    if (targetElement.tagName === 'INPUT' && targetElement.type !== 'file' && targetElement.type !== 'checkbox' && targetElement.type !== 'radio' && !targetElement.closest('.quantity') && !targetElement.closest('.input-row') || targetElement.tagName === 'TEXTAREA') {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = '';
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.add('_form-focus');
        targetElement.parentElement.classList.add('_form-focus');
      }
      targetElement.closest('.input').classList.remove('_filled');
      formValidate.removeError(targetElement);
    }
  });
  document.body.addEventListener('focusout', function (e) {
    const targetElement = e.target;
    if (targetElement.tagName === 'INPUT' && targetElement.type !== 'file' && targetElement.type !== 'checkbox' && targetElement.type !== 'radio' && !targetElement.closest('.quantity') && !targetElement.closest('.input-row') || targetElement.tagName === 'TEXTAREA') {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = targetElement.dataset.placeholder;
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.remove('_form-focus');
        targetElement.parentElement.classList.remove('_form-focus');
      }
      if (targetElement.hasAttribute('data-validate')) {
        formValidate.validateInput(targetElement);
      }
      if (!targetElement.classList.contains('_form-error') && targetElement.value.trim()) {
        targetElement.closest('.input').classList.add('_filled');
      } else {
        targetElement.closest('.input').classList.remove('_filled');
      }
    }
  });
  if (options.viewPass) {
    document.addEventListener('click', function (e) {
      let targetElement = e.target;
      if (targetElement.closest('[class*="__viewpass"]')) {
        let inputType = targetElement.classList.contains('_viewpass-active') ? 'password' : 'text';
        targetElement.parentElement.querySelector('input').setAttribute('type', inputType);
        targetElement.classList.toggle('_viewpass-active');
      }
    });
  }
}

// validation var
let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll('*[data-required]');
    if (formRequiredItems.length) {
      formRequiredItems.forEach(formRequiredItem => {
        if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === 'SELECT') && !formRequiredItem.disabled) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;
    if (formRequiredItem.dataset.required === 'email') {
      formRequiredItem.value = formRequiredItem.value.replace(' ', '');
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.type === 'checkbox' && !formRequiredItem.checked) {
      this.addError(formRequiredItem);
      error++;
    } else {
      if (!formRequiredItem.value.trim() && !formRequiredItem.hasAttribute('data-static')) {
        this.addError(formRequiredItem);
        error++;
      } else if (formRequiredItem.dataset.validate === 'letters-only') {
        const pattern = /[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (pattern.test(formRequiredItem.value)) {
          formRequiredItem.dataset.error = ``;
          this.addError(formRequiredItem);
          error++;
        }
      } else {
        this.removeError(formRequiredItem);
      }
    }
    return error;
  },
  addError(formRequiredItem) {
    formRequiredItem.classList.add('_form-error');
    formRequiredItem.parentElement.classList.add('_form-error');
    formRequiredItem.parentElement.classList.remove('_filled');
    let inputError = formRequiredItem.parentElement.querySelector('.form-error');
    if (inputError) formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML('beforeend', `<div class="form-error txt16">${formRequiredItem.dataset.error}</div>`);
    }
    if (formRequiredItem.closest('.input_validate')) {
      formRequiredItem.closest('form').classList.add('_error');
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove('_form-error');
    formRequiredItem.parentElement.classList.remove('_form-error');
    if (formRequiredItem.parentElement.querySelector('.form-error')) {
      formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('.form-error'));
    }
    if (formRequiredItem.closest('.input_validate')) {
      formRequiredItem.closest('form').classList.remove('_error');
    }
  },
  formClean(form) {
    if (!form.hasAttribute('data-save-fields')) {
      form.reset();
      setTimeout(() => {
        let inputs = form.querySelectorAll('input,textarea');
        for (let index = 0; index < inputs.length; index++) {
          const el = inputs[index];
          el.parentElement.classList.remove('_form-focus');
          el.classList.remove('_form-focus');
          formValidate.removeError(el);
        }
        let checkboxes = form.querySelectorAll('.checkbox__input');
        if (checkboxes.length > 0) {
          for (let index = 0; index < checkboxes.length; index++) {
            const checkbox = checkboxes[index];
            checkbox.checked = false;
          }
        }
      }, 0);
    }
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
  }
};

/**
 * adds submit logic
 * @param {object} options object
 */
function formSubmit() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    validate: true
  };
  const forms = document.forms;
  if (forms.length) {
    for (const form of forms) {
      form.addEventListener('submit', function (e) {
        const form = e.target;
        formSubmitAction(form, e);
      });
      form.addEventListener('reset', function (e) {
        const form = e.target;
        formValidate.formClean(form);
      });
    }
  }
  async function formSubmitAction(form, e) {
    const error = !form.hasAttribute('data-no-validate') ? formValidate.getErrors(form) : 0;
    if (error === 0) {
      const ajax = form.hasAttribute('data-ajax');
      if (ajax) {
        e.preventDefault();
        const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
        const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
        const formData = new FormData(form);
        form.classList.add('_sending');
        const response = await fetch(formAction, {
          method: formMethod,
          body: formData
        });
        if (response.ok) {
          let responseResult = await response.json();
          form.classList.remove('_sending');
          formSent(form, responseResult);
        } else {
          alert('error');
          form.classList.remove('_sending');
        }
      } else if (form.hasAttribute('data-dev')) {
        // in development mode
        e.preventDefault();
        formSent(form);
      }
    } else {
      e.preventDefault();
      const formError = form.querySelector('._form-error');
      if (formError && form.hasAttribute('data-goto-error')) {
        gotoBlock(formError, true, 1000);
      }
    }
  }
  // actions after submitting the form
  function formSent(form) {
    let responseResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ``;
    // show popup, if popup module is connected and form has setting
    // setTimeout(() => {
    //     if (modules.modal) {
    //         const modal = form.dataset.modalMessage;
    //         modal ? modules.modal.open(modal) : null;
    //     }
    // }, 0);

    // form submit event
    document.dispatchEvent(new CustomEvent('formSent', {
      detail: {
        form: form
      }
    }));
    // clean form
    formValidate.formClean(form);
  }
}

/***/ }),

/***/ "./src/js/utils/tabs.js":
/*!******************************!*\
  !*** ./src/js/utils/tabs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils/utils.js");

const tabs = () => {
  const tabs = document.querySelectorAll('[data-tabs]');
  let tabsActiveHash = [];
  const init = tabsBlock => {
    let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
    let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
    const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
    const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
    if (tabsActiveHashBlock) {
      const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._active');
      tabsActiveTitle ? tabsActiveTitle.classList.remove('_active') : null;
    }
    if (tabsContent.length) {
      tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsContent.forEach((tabsContentItem, index) => {
        tabsTitles[index].setAttribute('data-tabs-title', '');
        tabsContentItem.setAttribute('data-tabs-item', '');
        if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
          tabsTitles[index].classList.add('_active');
        }
        tabsContentItem.hidden = !tabsTitles[index].classList.contains('_active');
      });
    }
  };
  const setStatus = tabsBlock => {
    let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
    let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
    const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
    if (tabsContent.length) {
      const isHash = tabsBlock.hasAttribute('data-tabs-hash');
      tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsContent.forEach((tabsContentItem, index) => {
        if (tabsTitles[index].classList.contains('_active')) {
          tabsContentItem.hidden = false;
          if (isHash && !tabsContentItem.closest('.popup')) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setHash)(`tab-${tabsBlockIndex}-${index}`);
          }
        } else {
          tabsContentItem.hidden = true;
        }
      });
    }
  };
  const setActions = e => {
    const target = e.target;
    if (target.closest('[data-tabs-title]')) {
      const tabTitle = target.closest('[data-tabs-title]');
      const tabsBlock = tabTitle.closest('[data-tabs]');
      if (!tabTitle.classList.contains('_active') && !tabsBlock.querySelector('._slide')) {
        let tabActiveTitle = tabsBlock.querySelectorAll('[data-tabs-title]._active');
        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter(item => item.closest('[data-tabs]') === tabsBlock) : null;
        tabActiveTitle.length ? tabActiveTitle[0].classList.remove('_active') : null;
        tabTitle.classList.add('_active');
        setStatus(tabsBlock);
      }
      e.preventDefault();
    }
  };
  if (tabs.length) {
    const hash = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getHash)();
    if (hash && hash.startsWith('tab-')) {
      tabsActiveHash = hash.replace('tab-', '').split('-');
    }
    tabs.forEach((tabsBlock, index) => {
      tabsBlock.classList.add('_tab-init');
      tabsBlock.setAttribute('data-tabs-index', index);
      tabsBlock.addEventListener('click', setActions);
      init(tabsBlock);
    });
  }
};
tabs();

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _slideDown: () => (/* binding */ _slideDown),
/* harmony export */   _slideToggle: () => (/* binding */ _slideToggle),
/* harmony export */   _slideUp: () => (/* binding */ _slideUp),
/* harmony export */   dataMediaQueries: () => (/* binding */ dataMediaQueries),
/* harmony export */   getHash: () => (/* binding */ getHash),
/* harmony export */   setHash: () => (/* binding */ setHash)
/* harmony export */ });
/**
 * set hash to url
 * @param {string} hash
 */
const setHash = hash => {
  hash = hash ? `#${hash}` : window.location.href.split('#')[0];
  history.pushState('', '', hash);
};

/**
 * get hash from url
 * @returns string
 */
const getHash = () => {
  if (location.hash) {
    return location.hash.replace('#', '');
  }
};

/**
 *
 * @param {array} array
 * @param {number} dataSetValue
 * process media requests from attributes
 */
const dataMediaQueries = (array, dataSetValue) => {
  // get objects with media queries
  const media = Array.from(array).filter(function (item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(',')[0];
    }
  });
  // objects with media queries initialization
  if (media.length) {
    const breakpointsArray = [];
    media.forEach(item => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(',');
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    // get unique breakpoints
    let mdQueries = breakpointsArray.map(function (item) {
      return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;
    });
    mdQueries = uniqueArray(mdQueries);
    const mdQueriesArray = [];
    if (mdQueries.length) {
      // work with every breakpoint
      mdQueries.forEach(breakpoint => {
        const paramsArray = breakpoint.split(',');
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // objects with conditions
        const itemsArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia
        });
      });
      return mdQueriesArray;
    }
  }
};

/**
 * smoothly slides up
 * @param {HTMLElement} target
 * @param {number} duration
 * @param {boolean} showmore
 */
const _slideUp = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}rem` : `0`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty('height') : null;
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      !showmore ? target.style.removeProperty('overflow') : null;
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideUpDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};

/**
 * smoothly slides down
 * @param {HTMLElement} target
 * @param {number} duration
 * @param {boolean} showmore
 */
const _slideDown = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty('height') : null;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}rem` : `0`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideDownDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};

/**
 * toggles smooth slide
 * @param {HTMLElement} target
 * @param {number} duration
 * @returns function
 */
const _slideToggle = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "DrukCyr";
  font-weight: 500;
  src: url("./assets/fonts/DrukCyr-Medium.woff2") format("woff2");
}
@font-face {
  font-family: "EuclidCircularA";
  font-weight: 400;
  src: url("./assets/fonts/EuclidCircularA-Regular.woff") format("woff");
}
@font-face {
  font-family: "EuclidCircularA";
  font-weight: 500;
  src: url("./assets/fonts/EuclidCircularA-Medium.woff2") format("woff2");
}
@font-face {
  font-family: "EuclidCircularA";
  font-weight: 600;
  src: url("./assets/fonts/EuclidCircularA-SemiBold.woff2") format("woff2");
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "EuclidCircularA";
  font-size: 0.5208335vw;
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  line-height: 1.2;
  margin: 0;
  padding: 0;
}

body {
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: #000000;
  background-color: #ffffff;
}

input,
textarea {
  -webkit-animation: bugfix infinite 1s;
  line-height: inherit;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: inherit;
}

a {
  color: unset;
}

a,
a:hover {
  text-decoration: none;
}

button,
input,
a,
textarea {
  outline: none;
  cursor: pointer;
  font: inherit;
}
button:focus,
input:focus,
a:focus,
textarea:focus {
  outline: none;
}
button:active,
input:active,
a:active,
textarea:active {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font: inherit;
  margin: 0;
  padding: 0;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

button {
  border: none;
  color: inherit;
  font: inherit;
  text-align: inherit;
  padding: 0;
  background-color: transparent;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  width: 141rem;
  margin: 0 auto;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

@media (min-width: 1920px) {
  html {
    font-size: 10px;
  }
}
@media (max-width: 48em) {
  html {
    font-size: 5px;
    font-size: 1.5625vw;
    font-size: 1.3333333333vw;
    -webkit-text-size-adjust: none;
  }
  body {
    -webkit-text-size-adjust: none;
  }
  .container {
    padding: 0 4rem;
    width: 100%;
  }
}
body.lock {
  overflow: hidden;
  touch-action: none;
}

main {
  padding-top: 6.7rem;
}
@media (max-width: 48em) {
  main main {
    padding-top: 12.6rem;
  }
}

.tl1,
.tl2,
.tl3 {
  font-family: DrukCyr;
  font-weight: 500;
  text-transform: uppercase;
}

.tl1 {
  font-size: 20rem;
  line-height: 117%;
}
@media (max-width: 48em) {
  .tl1 {
    font-size: 11rem;
    line-height: 110%;
  }
}

.tl2 {
  line-height: 110%;
  font-size: 10rem;
}

.tl3 {
  font-size: 6rem;
  line-height: 110%;
}
@media (max-width: 48em) {
  .tl3 {
    font-size: 4rem;
    letter-spacing: 0.32rem;
  }
}

.txt32 {
  font-size: 3.2rem;
}
@media (max-width: 48em) {
  .txt32 {
    font-size: 3rem;
    line-height: 140%;
  }
}

.txt20 {
  font-family: DrukCyr;
  font-size: 2.8rem;
}
.txt20_caps {
  font-size: 4rem;
  line-height: 110%;
  letter-spacing: 0.32rem;
  text-transform: uppercase;
}
.txt20_md {
  font-weight: 500;
}
@media (min-width: 48em) {
  .txt20 {
    font-size: 2rem;
    line-height: 140%;
  }
  .txt20_caps {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 109.091%;
    letter-spacing: 0.176rem;
  }
}

.txt28_md {
  font-size: 2.8rem;
  font-weight: 500;
}
@media (max-width: 48em) {
  .txt28_md {
    font-size: 3.6rem;
  }
}

.txt16 {
  font-size: 1.6rem;
}
@media (max-width: 48em) {
  .txt16 {
    font-size: 2.4rem;
  }
}

.btn {
  padding: 1.3rem 1rem 1.3rem 2.8rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  column-gap: 2.2rem;
  border-radius: 9.5rem;
  border: 1px solid #c9fb40;
  transition: background-color 0.3s ease;
}
@media (any-hover: hover) {
  .btn:hover {
    background-color: #c9fb40;
  }
  .btn:hover .btn__text {
    color: #ffffff;
  }
  .btn:hover .btn__icon path {
    fill: #ffffff;
  }
}
@media (max-width: 48em) {
  .btn {
    padding: 3rem 3.6rem 3rem 6rem;
    column-gap: 3.2rem;
    border-radius: 19rem;
  }
}
.btn__text {
  color: #c9fb40;
  transition: color 0.3s ease;
}
.btn__icon {
  flex: 0 0 2.4rem;
  width: 2.4rem;
  height: 2.4rem;
}
.btn__icon path {
  transition: fill 0.3s ease;
}
@media (max-width: 48em) {
  .btn__icon {
    flex: 0 0 5rem;
    width: 5rem;
    height: 5rem;
  }
}

.showmore-btn {
  display: flex;
  align-items: center;
  column-gap: 1.6rem;
}
@media (any-hover: hover) {
  .showmore-btn:hover .showmore-btn__icon circle {
    fill: #ffffff;
  }
  .showmore-btn:hover .showmore-btn__icon path {
    fill: #ed89fb;
  }
}
@media (max-width: 48em) {
  .showmore-btn {
    column-gap: 2.4rem;
  }
}
.showmore-btn__icon {
  flex: 0 0 5.2rem;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
}
.showmore-btn__icon circle,
.showmore-btn__icon path {
  transition: fill 0.3s ease;
}
@media (max-width: 48em) {
  .showmore-btn__icon {
    flex: 0 0 8rem;
    width: 8rem;
    height: 8rem;
  }
}
.showmore-btn__text {
  color: #ed89fb;
}

.link {
  position: relative;
}
.link::after {
  content: "";
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #000000;
  transform-origin: center;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}
@media (any-hover: hover) {
  .link:hover::after {
    transform: scaleX(0.25);
  }
}
@media (max-width: 48em) {
  .link::after {
    top: calc(100% + 1.2rem);
  }
}
input[type=text],
input[type=email],
input[type=tel],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

textarea:focus,
input:focus {
  outline: none;
}

.input {
  position: relative;
}
.input._form-error .input__field {
  border-bottom: 1px solid #ff1212;
}
.input__field {
  padding-bottom: 1.4rem;
  display: block;
  width: 100%;
  border-radius: 0 !important;
  border-bottom: 1px solid #000000;
  font-family: EuclidCircularA;
  line-height: 1;
  color: #000000;
  transition: border-bottom 0.3s ease;
}
.input__field::placeholder {
  color: #000000;
}
@media (max-width: 48em) {
  .input__field {
    padding-bottom: 3rem;
  }
}

textarea.input {
  padding: 0;
  resize: none;
}

.form-error {
  position: absolute;
  top: calc(100% + 0.9rem);
  left: 0;
  color: #ff1212;
}
@media (max-width: 48em) {
  .form-error {
    top: calc(100% + 1.8rem);
  }
}

.tabs__navigation {
  display: flex;
  column-gap: 2rem;
}
.tab {
  padding: 1.6rem 3.3rem 1.9rem 3.3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 4rem;
  text-align: center;
  transition: background-color 0.3s ease;
}
.tab._active {
  background-color: #c9fb40;
}
@media (max-width: 48em) {
  .tab {
    padding: 1.8rem 5rem;
  }
}

.accordion__item {
  border-radius: 4rem;
  background-color: #c9fb40;
}
.accordion__title {
  padding: 3.2rem 3.2rem 3.2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.accordion__title._accordion-active .accordion__title-icon {
  transform: rotate(-180deg);
}
@media (max-width: 48em) {
  .accordion__title {
    padding: 4rem;
  }
}
.accordion__title-icon {
  flex: 0 0 5rem;
  width: 5rem;
  height: 5rem;
  transition: transform 0.3s ease;
}
@media (max-width: 48em) {
  .accordion__title-icon {
    flex: 0 0 8rem;
    width: 8rem;
    height: 8rem;
  }
}
.accordion__body {
  padding: 4rem 3.2rem;
  padding-top: 0;
}
@media (max-width: 48em) {
  .accordion__body {
    padding: 4rem;
    padding-top: 0;
  }
}
.accordion__text {
  font-family: EuclidCircularA;
  max-width: 72.6rem;
}
@media (max-width: 48em) {
  .accordion__text {
    max-width: 62.2rem;
  }
}

.main-collection {
  background-color: #cad2f4;
  padding: 16rem 0;
}
.main-collection__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
}
.main-collection__cards.swiper {
  position: relative;
  width: 83.6rem;
  height: 73.3rem;
  margin: 0;
}
.main-collection__cards-item.swiper-slide {
  width: 51.5rem;
  height: 51.5rem;
  border-radius: 4rem;
  position: absolute;
  padding: 1.2rem;
  overflow: hidden;
}
.main-collection__title {
  color: #1f1f22;
  font-family: "DrukCyr";
  font-size: 10rem;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 110px */
  text-transform: uppercase;
  margin-bottom: 2rem;
  width: 69.5rem;
}
.main-collection__description {
  color: #6a6a6a;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  margin-bottom: 5rem;
  width: 61.8rem;
}

.collection-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.collection-item--rat {
  top: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(223deg, #8792ed 1.18%, #5f6eda 34.96%, #6778df 68.58%, #8792ed 100%);
}
.collection-item--snail {
  right: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(226deg, #455265 0%, #11161e 40.66%, #11161e 60.6%, #455265 103.07%);
}
.collection-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.collection-item__title {
  display: flex;
  flex-direction: column;
  padding-left: 1.2rem;
}
.collection-item__title strong {
  color: #ffffff;
  text-align: left;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.collection-item__title span {
  color: #ffffff;
  text-align: left;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
}
.collection-item__icons {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.collection-item__icons-item {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(13px);
  color: #fff;
  text-align: center;
  font-size: 2rem;
  line-height: 140%; /* 28px */
  display: flex;
  align-items: center;
  justify-content: center;
}
.collection-item__icons-item svg {
  display: block;
  width: 4.4rem;
  height: 4.4rem;
}
.collection-item__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.collection-item__footer-item {
  display: flex;
  width: 24.1rem;
  height: 6.8rem;
  padding: 1.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 5.2rem;
}
.collection-item__footer-item--left {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(30px);
  color: #ffffff;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
}
.collection-item__footer-item--right {
  background: #ffffff;
  backdrop-filter: blur(11.5px);
  align-self: flex-end;
  color: #1f1f22;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
}
.collection-item__footer-item--right strong {
  color: #1f1f22;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 0.5rem;
  align-self: center;
}
.collection-item__footer-item--right span {
  align-self: flex-end;
  margin-bottom: 0.2rem;
}
.collection-item__footer-item--right sup {
  align-self: flex-start;
}
.collection-item__backdrop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  padding: 3.2rem;
}
.collection-item__backdrop img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 48em) {
  .main-collection {
    padding: 10rem 0;
  }
  .main-collection__container {
    padding: 0;
  }
  .main-collection__inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 6.4rem;
  }
  .main-collection__cards.swiper {
    order: 2;
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0 2rem;
  }
  .main-collection__cards-item.swiper-slide {
    width: 65.8rem;
    height: 67rem;
    border-radius: 4rem;
    position: static;
    padding: 2.4rem;
    overflow: hidden;
  }
  .main-collection__info {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
  }
  .main-collection__title {
    width: 90%;
    text-align: center;
    margin-bottom: 2.4rem;
  }
  .main-collection__description {
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 6.4rem;
    width: 93%;
  }
  .collection-item__title {
    padding-left: 0;
  }
  .collection-item__title strong {
    font-size: 3.6rem;
    margin-bottom: 1rem;
    line-height: normal;
  }
  .collection-item__title span {
    font-size: 2.8rem;
    line-height: normal; /* 28px */
  }
  .collection-item__icons {
    gap: 1rem;
  }
  .collection-item__icons-item {
    font-size: 3rem;
  }
  .collection-item__icons-item svg {
    width: 4.6rem;
    height: 4.6rem;
  }
  .collection-item__footer-item {
    display: flex;
    width: 30rem;
    height: 8.8rem;
    padding: 2.4rem;
    border-radius: 4rem;
  }
  .collection-item__footer-item--left {
    font-size: 2.8rem;
  }
  .collection-item__footer-item--right {
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
  }
  .collection-item__footer-item--right strong {
    font-size: 3.6rem;
    margin: 0 0.5rem;
    align-self: center;
  }
  .collection-item__footer-item--right span {
    line-height: 1.1;
    margin-bottom: 0;
  }
  .collection-item__footer-item--right sup {
    line-height: 1.1;
  }
}
.main-links {
  margin-top: 5.2rem;
  margin-bottom: 0;
}
.main-links__list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.main-links__item {
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-family: "DrukCyr";
  font-size: 10rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: background 0.3s linear, color 0.3s linear;
  border-top: 0.1rem solid rgba(201, 243, 43, 0.5);
}
.main-links__item:hover {
  transition: background 0.3s linear, color 0.3s linear;
  background-color: #fad85d;
  color: #282828;
}
.main-links__item a {
  display: block;
  width: 100%;
  padding: 0.6rem 0;
}
.main-links__item--big {
  font-size: 19.9646rem;
  line-height: 23.387rem; /* 117.143% */
}
.main-links__item--big a {
  padding: 1.8rem 0 3.4rem;
}

@media (max-width: 48em) {
  .main-links {
    margin-top: 0;
    margin-bottom: 7.6rem;
  }
  .main-links__list {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .main-links__item {
    line-height: 110%;
    border-top: 0.2rem solid rgba(201, 243, 43, 0.5);
  }
  .main-links__item a {
    padding: 2.4rem 0;
  }
  .main-links__item--big {
    font-size: 11rem;
    line-height: 110%; /* 117.143% */
  }
  .main-links__item--big a {
    padding: 2.4rem 0;
  }
}
.main-rates__inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 9rem;
}
.main-rates__title {
  color: #ffffff;
  font-family: "DrukCyr";
  font-size: 10rem;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 110px */
  text-transform: uppercase;
}
.main-rates__wrapper {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
}
.main-rates__item {
  height: 18rem;
  display: flex;
  align-items: center;
  border-radius: 3rem;
}

.rates-item {
  position: relative;
}
.rates-item::before, .rates-item::after {
  content: "";
  width: 5.1rem;
  height: 5.1rem;
  border-radius: 50%;
  background: #1f1f22;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
}
.rates-item::after {
  right: -2.5rem;
}
.rates-item::before {
  left: -2.5rem;
}
.rates-item--bg--pink {
  background: #ff69c2;
}
.rates-item--bg--blue {
  background: #cad2f4;
}
.rates-item--bg--green {
  background: #c9fb40;
}
.rates-item__left {
  padding: 3.6rem 3.6rem 3.6rem 8.6rem;
  height: 100%;
  width: 57.8rem;
  display: flex;
  align-items: center;
  border-right: 0.3rem dashed #282828;
}
.rates-item__title {
  color: #1f1f22;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: normal;
}
.rates-item__right {
  display: flex;
  align-items: center;
  gap: 20.2rem;
  height: 100%;
  padding-left: 9.3rem;
}
.rates-item__price-top {
  color: #1f1f22;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
}
.rates-item__price-top strong {
  color: #1f1f22;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 0.5rem;
  align-self: center;
}
.rates-item__price-top span {
  align-self: flex-end;
  margin-bottom: 0.2rem;
}
.rates-item__price-top sup {
  align-self: flex-start;
}
.rates-item__price-bottom {
  color: #282828;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
}
.rates-item__options {
  width: 16rem;
  color: #282828;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.rates-item__icon {
  position: absolute;
}

.rates-icon--sunny {
  top: -5rem;
  left: 14.3rem;
  width: 9.7rem;
  height: 8rem;
  transform: rotate(-7.376deg);
}
.rates-icon--shapes {
  right: 35.6rem;
  top: -4.3rem;
  width: 9.2rem;
  height: 9rem;
  transform: rotate(-15deg);
}
.rates-icon--megafon {
  width: 8.7rem;
  height: 7rem;
  transform: rotate(-12.401deg);
  right: 68.6rem;
  bottom: -3.5rem;
}

@media (max-width: 48em) {
  .main-rates__inner {
    gap: 10rem;
  }
  .main-rates__item {
    height: 56rem;
    border-radius: 4rem;
    flex-direction: column;
  }
  .rates-item::before, .rates-item::after {
    width: 9rem;
    height: 9rem;
  }
  .rates-item::after {
    right: -4.5rem;
  }
  .rates-item::before {
    left: -4.5rem;
  }
  .rates-item__left {
    padding: 4.8rem;
    height: 13.4rem;
    width: 100%;
    justify-content: center;
    border-right: 0;
    border-bottom: 0.3rem dashed #282828;
  }
  .rates-item__title {
    font-size: 3rem;
  }
  .rates-item__right {
    flex-direction: column;
    width: 100%;
    gap: 4rem;
    height: auto;
    padding-left: 0;
    padding-top: 2.4rem;
  }
  .rates-item__price-top {
    font-size: 4rem;
  }
  .rates-item__price-top strong {
    font-size: 5.6rem;
    margin: 0 1rem;
  }
  .rates-item__price-top span {
    align-self: flex-end;
    margin-bottom: 0;
  }
  .rates-item__price-top sup {
    align-self: flex-start;
  }
  .rates-item__price-bottom {
    color: #282828;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
  }
  .rates-item__options {
    width: 80%;
    text-align: center;
    font-size: 2.8rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2.8rem;
  }
  .rates-item__icon {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/set.scss","webpack://./src/ui/typo.scss","webpack://./src/ui/buttons.scss","webpack://./src/ui/inputs.scss","webpack://./src/ui/tabs.scss","webpack://./src/ui/accordion.scss","webpack://./src/scss/components/_main-collections.scss","webpack://./src/scss/components/_main-links.scss","webpack://./src/scss/components/_main-rates.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;ACCF;ADEA;EACE,8BAAA;EACA,gBAAA;EACA,sEAAA;ACAF;ADGA;EACE,8BAAA;EACA,gBAAA;EACA,uEAAA;ACDF;ADIA;EACE,8BAAA;EACA,gBAAA;EACA,yEAAA;ACFF;ACnBA;;;EAGE,sBAAA;ADqBF;;ACnBA;EACE,8BAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;ADsBF;;ACnBA;EACE,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,cDjBM;ECkBN,yBDnBM;AAyCR;;ACnBA;;EAEE,qCAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;EACA,6BAAA;EACA,YAAA;EACA,cAAA;ADsBF;;ACpBA;EACE,YAAA;ADuBF;;ACrBA;;EAEE,qBAAA;ADwBF;;ACrBA;;;;EAIE,aAAA;EACA,eAAA;EACA,aAAA;ADwBF;ACvBE;;;;EACE,aAAA;AD4BJ;AC1BE;;;;EACE,aAAA;AD+BJ;;AC3BA;;;;;;EAME,aAAA;EACA,SAAA;EACA,UAAA;AD8BF;;AC5BA;EACE,aAAA;EACA,gBAAA;AD+BF;;AC5BA;EACE,WAAA;EACA,YAAA;EACA,cAAA;AD+BF;;AC5BA;EACE,YAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,6BAAA;AD+BF;;AC7BA;EACE,UAAA;EACA,SAAA;ADgCF;;AC7BA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;ADgCF;;AC7BA;EACE,aAAA;EACA,cAAA;ADgCF;;AC7BA;;EAEE,wBAAA;EACA,SAAA;ADgCF;;AC7BA;EACE,0BAAA;ADgCF;;AC7BA;EACE;IACE,eAAA;EDgCF;AACF;AC7BA;EACE;IACE,cAAA;IACA,mBAAA;IACA,yBAAA;IACA,8BAAA;ED+BF;EC5BA;IACE,8BAAA;ED8BF;EC3BA;IACE,eAAA;IACA,WAAA;ED6BF;AACF;AAzIE;EACE,gBAAA;EACA,kBAAA;AA2IJ;;AAtIA;EACE,mBAAA;AAyIF;AAxIE;EACE;IACE,oBAAA;EA0IJ;AACF;;AElLA;;;EAGE,oBAAA;EACA,gBAAA;EACA,yBAAA;AFqLF;;AElLA;EACE,gBAAA;EACA,iBAAA;AFqLF;AEpLE;EAHF;IAII,gBAAA;IACA,iBAAA;EFuLF;AACF;;AEpLA;EACE,iBAAA;EACA,gBAAA;AFuLF;;AEpLA;EACE,eAAA;EACA,iBAAA;AFuLF;AEtLE;EAHF;IAII,eAAA;IACA,uBAAA;EFyLF;AACF;;AEpLA;EACE,iBAAA;AFuLF;AEtLE;EAFF;IAGI,eAAA;IACA,iBAAA;EFyLF;AACF;;AEtLA;EACE,oBAAA;EACA,iBAAA;AFyLF;AExLE;EACE,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;AF0LJ;AExLE;EACE,gBAAA;AF0LJ;AExLE;EAZF;IAaI,eAAA;IACA,iBAAA;EF2LF;EE1LE;IACE,iBAAA;IACA,gBAAA;IACA,qBAAA;IACA,wBAAA;EF4LJ;AACF;;AEvLE;EACE,iBAAA;EACA,gBAAA;AF0LJ;AEzLI;EAHF;IAII,iBAAA;EF4LJ;AACF;;AExLA;EACE,iBAAA;AF2LF;AE1LE;EAFF;IAGI,iBAAA;EF6LF;AACF;;AG5QA;EACE,kCAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,sCAAA;AH+QF;AG9QE;EACE;IACE,yBHDE;EAiRN;EG/QI;IACE,cHRA;EAyRN;EG9QM;IACE,aHZF;EA4RN;AACF;AG5QE;EAtBF;IAuBI,8BAAA;IACA,kBAAA;IACA,oBAAA;EH+QF;AACF;AG5QE;EACE,cHpBI;EGqBJ,2BAAA;AH8QJ;AG1QE;EACE,gBAAA;EACA,aAAA;EACA,cAAA;AH4QJ;AG3QI;EACE,0BAAA;AH6QN;AG3QI;EAPF;IAQI,cAAA;IACA,WAAA;IACA,YAAA;EH8QJ;AACF;;AG1PA;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;AH6PF;AG5PE;EAGM;IACE,aHrEF;EAiUN;EG1PM;IACE,aHrEH;EAiUL;AACF;AGxPE;EAhBF;IAiBI,kBAAA;EH2PF;AACF;AGvPE;EACE,gBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;AHyPJ;AGxPI;;EAEE,0BAAA;AH0PN;AGxPI;EATF;IAUI,cAAA;IACA,WAAA;IACA,YAAA;EH2PJ;AACF;AGtPE;EACE,cHnGG;AA2VP;;AGjOA;EACE,kBAAA;AHoOF;AGnOE;EACE,WAAA;EACA,kBAAA;EACA,wBAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,yBHrII;EGsIJ,wBAAA;EACA,oBAAA;EACA,+BAAA;AHqOJ;AGnOE;EAEI;IACE,uBAAA;EHoON;AACF;AGjOE;EACE;IACE,wBAAA;EHmOJ;AACF;AI7XA;;;;EAIE,wBAAA;EACA,qBAAA;EACA,gBAAA;AJ+XF;;AI7XA;;EAEE,aAAA;AJgYF;;AI7XA;EACE,kBAAA;AJgYF;AI3XI;EACE,gCAAA;AJ6XN;AIxXE;EACE,sBAAA;EACA,cAAA;EACA,WAAA;EACA,2BAAA;EACA,gCAAA;EACA,4BAAA;EACA,cAAA;EACA,cJ3BI;EI4BJ,mCAAA;AJ0XJ;AIzXI;EACE,cJ9BE;AAyZR;AIzXI;EAbF;IAcI,oBAAA;EJ4XJ;AACF;;AIxXA;EACE,UAAA;EACA,YAAA;AJ2XF;;AIxXA;EACE,kBAAA;EACA,wBAAA;EACA,OAAA;EACA,cJvCI;AAkaN;AI1XE;EALF;IAMI,wBAAA;EJ6XF;AACF;;AKlbE;EACE,aAAA;EACA,gBAAA;ALqbJ;AKlaA;EACE,oCAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sCAAA;ALoaF;AKnaE;EACE,yBLxBI;AA6bR;AKnaE;EAZF;IAaI,oBAAA;ELsaF;AACF;;AMzcE;EACE,mBAAA;EACA,yBNKI;AAucR;AMvcE;EACE,kCAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;ANycJ;AMvcM;EACE,0BAAA;ANycR;AMtcI;EAXF;IAYI,aAAA;ENycJ;AACF;AMpcE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,+BAAA;ANscJ;AMrcI;EALF;IAMI,cAAA;IACA,WAAA;IACA,YAAA;ENwcJ;AACF;AM9bE;EACE,oBAAA;EACA,cAAA;ANgcJ;AM/bI;EAHF;IAII,aAAA;IACA,cAAA;ENkcJ;AACF;AM7bE;EACE,4BAAA;EACA,kBAAA;AN+bJ;AM9bI;EAHF;IAII,kBAAA;ENicJ;AACF;;AOhgBA;EACE,yBAAA;EACA,gBAAA;APmgBF;AOjgBE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;APmgBJ;AOhgBE;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,SAAA;APkgBJ;AOhgBE;EACE,cAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;APkgBJ;AO/fE;EACE,cAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,UAAA;EACA,yBAAA;EACA,mBAAA;EAEA,cAAA;APggBJ;AO7fE;EACE,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;EACA,mBAAA;EACA,cAAA;AP+fJ;;AO5fA;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;AP+fF;AO7fE;EACE,MAAA;EACA,OAAA;EACA,UAAA;EAEA,gGAAA;AP8fJ;AOtfE;EACE,QAAA;EACA,SAAA;EACA,UAAA;EAEA,+FAAA;APufJ;AO7eE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AP+eJ;AO5eE;EACE,aAAA;EACA,sBAAA;EACA,oBAAA;AP8eJ;AO5eI;EACE,cPzFE;EO0FF,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AP8eN;AO3eI;EACE,cPlGE;EOmGF,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AP6eN;AOzeE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AP2eJ;AO1eI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oCAAA;EACA,2BAAA;EAEA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA,EAAA,SAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AP0eN;AOxeM;EACE,cAAA;EACA,aAAA;EACA,cAAA;AP0eR;AOreE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;APueJ;AOteI;EACE,aAAA;EACA,cAAA;EACA,cAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,qBAAA;APweN;AOteM;EACE,oCAAA;EACA,2BAAA;EAEA,cPxJA;EOyJA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;APueR;AOreM;EACE,mBPhKA;EOiKA,6BAAA;EACA,oBAAA;EAEA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;APseR;AOpeQ;EACE,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;APseV;AOpeQ;EACE,oBAAA;EACA,qBAAA;APseV;AOpeQ;EACE,sBAAA;APseV;AOheE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;APkeJ;AOheI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;APkeN;;AO7dA;EACE;IACE,gBAAA;EPgeF;EO/dE;IACE,UAAA;EPieJ;EO9dE;IACE,aAAA;IACA,mBAAA;IACA,sBAAA;IACA,8BAAA;IACA,WAAA;EPgeJ;EO7dE;IACE,QAAA;IACA,kBAAA;IACA,WAAA;IACA,YAAA;IACA,SAAA;IACA,eAAA;EP+dJ;EO7dE;IACE,cAAA;IACA,aAAA;IACA,mBAAA;IACA,gBAAA;IACA,eAAA;IACA,gBAAA;EP+dJ;EO5dE;IACE,QAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,eAAA;EP8dJ;EO3dE;IACE,UAAA;IACA,kBAAA;IACA,qBAAA;EP6dJ;EO1dE;IACE,iBAAA;IACA,kBAAA;IACA,qBAAA;IACA,UAAA;EP4dJ;EOvdE;IACE,eAAA;EPydJ;EOvdI;IACE,iBAAA;IACA,mBAAA;IACA,mBAAA;EPydN;EOtdI;IACE,iBAAA;IACA,mBAAA,EAAA,SAAA;EPwdN;EOpdE;IACE,SAAA;EPsdJ;EOrdI;IACE,eAAA;EPudN;EOtdM;IACE,aAAA;IACA,cAAA;EPwdR;EOldI;IACE,aAAA;IACA,YAAA;IACA,cAAA;IACA,eAAA;IACA,mBAAA;EPodN;EOldM;IACE,iBAAA;EPodR;EOldM;IACE,eAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA,EAAA,SAAA;EPodR;EOldQ;IACE,iBAAA;IACA,gBAAA;IACA,kBAAA;EPodV;EOldQ;IACE,gBAAA;IACA,gBAAA;EPodV;EOldQ;IACE,gBAAA;EPodV;AACF;AQrxBA;EACE,kBAAA;EACA,gBAAA;ARuxBF;AQrxBE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;ARuxBJ;AQpxBE;EACE,WAAA;EACA,kBAAA;EACA,cRRI;EQSJ,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qDAAA;EAEA,gDAAA;ARqxBJ;AQnxBI;EACE,qDAAA;EACA,yBRdG;EQeH,cRbC;AAkyBP;AQnxBI;EACE,cAAA;EACA,WAAA;EACA,iBAAA;ARqxBN;AQnxBI;EACE,qBAAA;EACA,sBAAA,EAAA,aAAA;ARqxBN;AQnxBM;EACE,wBAAA;ARqxBR;;AQ/wBA;EACE;IACE,aAAA;IACA,qBAAA;ERkxBF;EQhxBE;IACE,aAAA;IACA,mBAAA;IACA,sBAAA;ERkxBJ;EQ/wBE;IACE,iBAAA;IACA,gDAAA;ERixBJ;EQhxBI;IACE,iBAAA;ERkxBN;EQhxBI;IACE,gBAAA;IACA,iBAAA,EAAA,aAAA;ERkxBN;EQhxBM;IACE,iBAAA;ERkxBR;AACF;ASn1BE;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,SAAA;ATq1BJ;ASl1BE;EACE,cTLI;ESMJ,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,UAAA;EACA,yBAAA;ATo1BJ;ASj1BE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;ATm1BJ;ASh1BE;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ATk1BJ;;AS/0BA;EACE,kBAAA;ATk1BF;ASh1BE;EAEE,WAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;EAEA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,2BAAA;ATg1BJ;AS70BE;EACE,cAAA;AT+0BJ;AS70BE;EACE,aAAA;AT+0BJ;AS70BE;EACE,mBAAA;AT+0BJ;AS70BE;EACE,mBAAA;AT+0BJ;AS70BE;EACE,mBTrDI;AAo4BR;AS50BE;EACE,oCAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,mCAAA;AT80BJ;AS30BE;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AT60BJ;AS10BE;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;AT40BJ;ASx0BI;EACE,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AT00BN;ASx0BM;EACE,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AT00BR;ASx0BM;EACE,oBAAA;EACA,qBAAA;AT00BR;ASx0BM;EACE,sBAAA;AT00BR;ASv0BI;EACE,cTvGC;ESwGD,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;ATy0BN;ASr0BE;EACE,YAAA;EACA,cTjHG;ESkHH,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;ATu0BJ;ASp0BE;EACE,kBAAA;ATs0BJ;;ASl0BE;EACE,UAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;EACA,4BAAA;ATq0BJ;ASn0BE;EACE,cAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;ATq0BJ;ASn0BE;EACE,aAAA;EACA,YAAA;EACA,6BAAA;EACA,cAAA;EACA,eAAA;ATq0BJ;;ASj0BA;EAGI;IACE,UAAA;ETk0BJ;ES/zBE;IACE,aAAA;IACA,mBAAA;IACA,sBAAA;ETi0BJ;ES7zBE;IAEE,WAAA;IACA,YAAA;ET8zBJ;ES5zBE;IACE,cAAA;ET8zBJ;ES5zBE;IACE,aAAA;ET8zBJ;ES3zBE;IACE,eAAA;IACA,eAAA;IACA,WAAA;IACA,uBAAA;IACA,eAAA;IACA,oCAAA;ET6zBJ;ES1zBE;IACE,eAAA;ET4zBJ;ESzzBE;IACE,sBAAA;IACA,WAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;ET2zBJ;ESvzBI;IACE,eAAA;ETyzBN;ESvzBM;IACE,iBAAA;IACA,cAAA;ETyzBR;ESvzBM;IACE,oBAAA;IACA,gBAAA;ETyzBR;ESvzBM;IACE,sBAAA;ETyzBR;EStzBI;IACE,cTrND;ISsNC,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA,EAAA,SAAA;ETwzBN;ESpzBE;IACE,UAAA;IACA,kBAAA;IACA,iBAAA;IAEA,aAAA;IACA,uBAAA;IACA,qBAAA;ETqzBJ;ESlzBE;IACE,aAAA;ETozBJ;AACF","sourcesContent":["@font-face {\n  font-family: 'DrukCyr';\n  font-weight: 500;\n  src: url('./assets/fonts/DrukCyr-Medium.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: 'EuclidCircularA';\n  font-weight: 400;\n  src: url('./assets/fonts/EuclidCircularA-Regular.woff') format('woff');\n}\n\n@font-face {\n  font-family: 'EuclidCircularA';\n  font-weight: 500;\n  src: url('./assets/fonts/EuclidCircularA-Medium.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: 'EuclidCircularA';\n  font-weight: 600;\n  src: url('./assets/fonts/EuclidCircularA-SemiBold.woff2') format('woff2');\n}\n","// -------------------------------- variables -------------------------------\n\n$font: 'Euclid Circular A';\n\n// colors\n$white: #ffffff;\n$black: #000000;\n$bodyColor: #1f1f22;\n$pink: #ed89fb;\n$violet: #cad2f4;\n$green: #c9fb40;\n$yellow: #fad85d;\n$darkGray: #6a6a6a;\n$main: #282828;\n$red: #ff1212;\n\n// ---------------------------------- fonts ---------------------------------\n\n// local fonts\n@import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// body\nbody {\n  &.lock {\n    overflow: hidden;\n    touch-action: none;\n  }\n}\n\n// main\nmain {\n  padding-top: 6.7rem;\n  @media (max-width: 48em) {\n    main {\n      padding-top: 12.6rem;\n    }\n  }\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './components/_header';\n\n// ui\n@import '../ui/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n","*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: 'EuclidCircularA'; // шрифт по умолчанию по сайту\n  font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n  font-style: normal;\n  font-weight: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-style: normal;\n  font-weight: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  color: $black; // цвет по умолчанию текста по сайту\n  background-color: $white;\n}\n\ninput,\ntextarea {\n  -webkit-animation: bugfix infinite 1s;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  color: inherit;\n}\na {\n  color: unset;\n}\na,\na:hover {\n  text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n  outline: none;\n  cursor: pointer;\n  font: inherit;\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    outline: none;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: inherit;\n  margin: 0;\n  padding: 0;\n}\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\nbutton {\n  border: none;\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n  padding: 0;\n  background-color: transparent;\n}\nul {\n  padding: 0;\n  margin: 0;\n}\n\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.container {\n  width: 141rem;\n  margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n@media (min-width: 1920px) {\n  html {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 48em) {\n  html {\n    font-size: 5px;\n    font-size: 1.5625vw;\n    font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n    -webkit-text-size-adjust: none;\n  }\n\n  body {\n    -webkit-text-size-adjust: none;\n  }\n\n  .container {\n    padding: 0 4rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n    width: 100%;\n  }\n}\n",".tl1,\n.tl2,\n.tl3 {\n  font-family: DrukCyr;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.tl1 {\n  font-size: 20rem;\n  line-height: 117%;\n  @media (max-width: 48em) {\n    font-size: 11rem;\n    line-height: 110%;\n  }\n}\n\n.tl2 {\n  line-height: 110%;\n  font-size: 10rem;\n}\n\n.tl3 {\n  font-size: 6rem;\n  line-height: 110%;\n  @media (max-width: 48em) {\n    font-size: 4rem;\n    letter-spacing: 0.32rem;\n  }\n}\n\n// --------------------------------------------------------------------------\n\n.txt32 {\n  font-size: 3.2rem;\n  @media (max-width: 48em) {\n    font-size: 3rem;\n    line-height: 140%;\n  }\n}\n\n.txt20 {\n  font-family: DrukCyr;\n  font-size: 2.8rem;\n  &_caps {\n    font-size: 4rem;\n    line-height: 110%;\n    letter-spacing: 0.32rem;\n    text-transform: uppercase;\n  }\n  &_md {\n    font-weight: 500;\n  }\n  @media (min-width: 48em) {\n    font-size: 2rem;\n    line-height: 140%;\n    &_caps {\n      font-size: 2.2rem;\n      font-weight: 500;\n      line-height: 109.091%;\n      letter-spacing: 0.176rem;\n    }\n  }\n}\n\n.txt28 {\n  &_md {\n    font-size: 2.8rem;\n    font-weight: 500;\n    @media (max-width: 48em) {\n      font-size: 3.6rem;\n    }\n  }\n}\n\n.txt16 {\n  font-size: 1.6rem;\n  @media (max-width: 48em) {\n    font-size: 2.4rem;\n  }\n}\n",".btn {\n  padding: 1.3rem 1rem 1.3rem 2.8rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 2.2rem;\n  border-radius: 9.5rem;\n  border: 1px solid $green;\n  transition: background-color 0.3s ease;\n  @media (any-hover: hover) {\n    &:hover {\n      background-color: $green;\n      .btn__text {\n        color: $white;\n      }\n      .btn__icon {\n        path {\n          fill: $white;\n        }\n      }\n    }\n  }\n  @media (max-width: 48em) {\n    padding: 3rem 3.6rem 3rem 6rem;\n    column-gap: 3.2rem;\n    border-radius: 19rem;\n  }\n\n  // .btn__text\n  &__text {\n    color: $green;\n    transition: color 0.3s ease;\n  }\n\n  // .btn__icon\n  &__icon {\n    flex: 0 0 2.4rem;\n    width: 2.4rem;\n    height: 2.4rem;\n    path {\n      transition: fill 0.3s ease;\n    }\n    @media (max-width: 48em) {\n      flex: 0 0 5rem;\n      width: 5rem;\n      height: 5rem;\n    }\n  }\n}\n// <button type=\"button\" class=\"btn\">\n//       <span class=\"btn__text txt20 txt20_caps\">ОСТАВИТЬ ЗАЯВКУ</span>\n//       <svg\n//         class=\"btn__icon\"\n//         xmlns=\"http://www.w3.org/2000/svg\"\n//         width=\"24\"\n//         height=\"24\"\n//         viewBox=\"0 0 24 24\"\n//         fill=\"none\">\n//         <path\n//           d=\"M6.75586 19.2442V5.11624L17.1164 12.1802L6.75586 19.2442Z\"\n//           fill=\"#C9FB40\" />\n//       </svg>\n// </button>\n\n// --------------------------------------------------------------------------\n\n.showmore-btn {\n  display: flex;\n  align-items: center;\n  column-gap: 1.6rem;\n  @media (any-hover: hover) {\n    &:hover {\n      .showmore-btn__icon {\n        circle {\n          fill: $white;\n        }\n        path {\n          fill: $pink;\n        }\n      }\n    }\n  }\n  @media (max-width: 48em) {\n    column-gap: 2.4rem;\n  }\n\n  // .showmore-btn__icon\n\n  &__icon {\n    flex: 0 0 5.2rem;\n    width: 5.2rem;\n    height: 5.2rem;\n    border-radius: 50%;\n    circle,\n    path {\n      transition: fill 0.3s ease;\n    }\n    @media (max-width: 48em) {\n      flex: 0 0 8rem;\n      width: 8rem;\n      height: 8rem;\n    }\n  }\n\n  // .showmore-btn__text\n\n  &__text {\n    color: $pink;\n  }\n}\n// <button type=\"button\" class=\"showmore-btn\">\n//       <svg\n//         class=\"showmore-btn__icon\"\n//         width=\"52\"\n//         height=\"52\"\n//         viewBox=\"0 0 52 52\"\n//         fill=\"none\"\n//         xmlns=\"http://www.w3.org/2000/svg\">\n//         <circle cx=\"26\" cy=\"26\" r=\"26\" fill=\"#ED89FB\" />\n//         <path\n//           d=\"M31.6912 24.995C32.1412 25.895 32.3737 26.8625 32.3737 27.875C32.3737 31.3925 29.5162 34.25 25.9987 34.25C22.4812 34.25 19.6237 31.3925 19.6237 27.875C19.6237 24.3575 22.4812 21.5 25.9987 21.5C26.0512 21.5 26.1787 21.5 26.3137 21.545C26.5687 21.6275 26.7562 21.845 26.8087 22.1075C27.1237 23.615 28.4662 24.7175 30.0112 24.7175C30.2962 24.7175 30.5737 24.68 30.8137 24.6125C31.1662 24.515 31.5262 24.68 31.6912 24.995ZM25.9987 17.75C20.8687 17.75 15.6112 22.25 14.7562 27.3725C14.6887 27.7775 14.9662 28.1675 15.3712 28.235C15.7762 28.3025 16.1662 28.025 16.2337 27.62C16.9012 23.6675 21.2137 19.25 25.9987 19.25C30.7837 19.25 35.0962 23.6675 35.7562 27.62C35.8162 27.9875 36.1387 28.25 36.4987 28.25C36.5362 28.25 36.5812 28.25 36.6262 28.2425C37.0312 28.175 37.3087 27.785 37.2412 27.38C36.3862 22.25 31.1287 17.75 25.9987 17.75Z\"\n//           fill=\"white\" />\n//       </svg>\n//       <span class=\"showmore-btn__text txt20 txt20_caps\"\n//         >СМОТРЕТЬ ДЕТАЛЬНЕЕ</span\n//       >\n// </button>\n\n// --------------------------------------------------------------------------\n\n.link {\n  position: relative;\n  &::after {\n    content: '';\n    position: absolute;\n    top: calc(100% + 0.6rem);\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: $black;\n    transform-origin: center;\n    transform: scaleX(1);\n    transition: transform 0.3s ease;\n  }\n  @media (any-hover: hover) {\n    &:hover {\n      &::after {\n        transform: scaleX(0.25);\n      }\n    }\n  }\n  @media (max-width: 48em) {\n    &::after {\n      top: calc(100% + 1.2rem);\n    }\n  }\n\n  // .link__text\n\n  &__text {\n  }\n}\n// <a href=\"#\" class=\"link\"\n// ><span class=\"link__text txt20 txt20_caps\">ЗАГРУЗИТЬ ЕЩЕ</span></a\n// >\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n.input {\n  position: relative;\n\n  &._form-focus {\n  }\n  &._form-error {\n    .input__field {\n      border-bottom: 1px solid $red;\n    }\n  }\n\n  // .input__field\n  &__field {\n    padding-bottom: 1.4rem;\n    display: block;\n    width: 100%;\n    border-radius: 0 !important;\n    border-bottom: 1px solid $black;\n    font-family: EuclidCircularA;\n    line-height: 1;\n    color: $black;\n    transition: border-bottom 0.3s ease;\n    &::placeholder {\n      color: $black;\n    }\n    @media (max-width: 48em) {\n      padding-bottom: 3rem;\n    }\n  }\n}\n\ntextarea.input {\n  padding: 0;\n  resize: none;\n}\n\n.form-error {\n  position: absolute;\n  top: calc(100% + 0.9rem);\n  left: 0;\n  color: $red;\n  @media (max-width: 48em) {\n    top: calc(100% + 1.8rem);\n  }\n}\n\n// <div class=\"input\">\n//           <input\n//             autocomplete=\"off\"\n//             type=\"text\"\n//             name=\"form[]\"\n//             data-error=\"Подсказка\"\n//             placeholder=\"Имя *\"\n//             class=\"input__field txt20 txt20_md\" />\n",".tabs {\n  // .tabs__navigation\n\n  &__navigation {\n    display: flex;\n    column-gap: 2rem;\n  }\n\n  // .tabs__title\n\n  &__title {\n  }\n\n  // .tabs__content\n\n  &__content {\n  }\n\n  // .tabs__body\n\n  &__body {\n  }\n}\n\n.tab {\n  padding: 1.6rem 3.3rem 1.9rem 3.3rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid $black;\n  border-radius: 4rem;\n  text-align: center;\n  transition: background-color 0.3s ease;\n  &._active {\n    background-color: $green;\n  }\n  @media (max-width: 48em) {\n    padding: 1.8rem 5rem;\n  }\n}\n\n// <div data-tabs class=\"tabs\">\n// <nav data-tabs-titles class=\"tabs__navigation\">\n//   <button type=\"button\" class=\"tabs__title txt20 txt20_caps tab _active\">\n//     Таб №1\n//   </button>\n//   <button type=\"button\" class=\"tabs__title txt20 txt20_caps tab\">Таб №2</button>\n//   <button type=\"button\" class=\"tabs__title txt20 txt20_caps tab\">Таб №3</button>\n// </nav>\n// <div data-tabs-body class=\"tabs__content\">\n//   <div class=\"tabs__body\">Содержимое первого таба</div>\n//   <div class=\"tabs__body\">Содержимое второго таба</div>\n//   <div class=\"tabs__body\">Содержимое третьего таба</div>\n// </div>\n// </div>\n",".accordion {\n  // .accordion__item\n\n  &__item {\n    border-radius: 4rem;\n    background-color: $green;\n  }\n\n  // .accordion__title\n\n  &__title {\n    padding: 3.2rem 3.2rem 3.2rem 4rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    &._accordion-active {\n      .accordion__title-icon {\n        transform: rotate(-180deg);\n      }\n    }\n    @media (max-width: 48em) {\n      padding: 4rem;\n    }\n  }\n\n  // .accordion__title-icon\n\n  &__title-icon {\n    flex: 0 0 5rem;\n    width: 5rem;\n    height: 5rem;\n    transition: transform 0.3s ease;\n    @media (max-width: 48em) {\n      flex: 0 0 8rem;\n      width: 8rem;\n      height: 8rem;\n    }\n  }\n\n  // .accordion__title-txt\n\n  &__title-txt {\n  }\n\n  // .accordion__body\n\n  &__body {\n    padding: 4rem 3.2rem;\n    padding-top: 0;\n    @media (max-width: 48em) {\n      padding: 4rem;\n      padding-top: 0;\n    }\n  }\n\n  // .accordion__text\n\n  &__text {\n    font-family: EuclidCircularA;\n    max-width: 72.6rem;\n    @media (max-width: 48em) {\n      max-width: 62.2rem;\n    }\n  }\n}\n\n// <div data-accordion data-accordion-one-active class=\"accordion\">\n//           <div class=\"accordion__item\">\n//             <button type=\"button\" data-accordion-item class=\"accordion__title\">\n//               <svg\n//                 class=\"accordion__title-icon\"\n//                 width=\"52\"\n//                 height=\"52\"\n//                 viewBox=\"0 0 52 52\"\n//                 fill=\"none\"\n//                 xmlns=\"http://www.w3.org/2000/svg\">\n//                 <circle cx=\"26\" cy=\"26\" r=\"26\" fill=\"#1F1F22\" />\n//                 <path\n//                   d=\"M18.872 21L33 21L25.936 31.3605L18.872 21Z\"\n//                   fill=\"white\" />\n//               </svg>\n//               <span class=\"accordion__title-txt tl3\">Качество</span>\n//             </button>\n//             <div class=\"accordion__body\">\n//               <p class=\"accordion__text txt20\">\n//                 Мы придерживаемся высочайших стандартов и регулярно обновляем\n//                 наши навыки и техники, чтобы удовлетворить все потребности и\n//                 ожидания наших клиентов.\n//               </p>\n//             </div>\n//           </div>\n//         </div>\n",".main-collection {\n  background-color: #cad2f4;\n  padding: 16rem 0;\n  // .main-collection__inner\n  &__inner {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8rem;\n  }\n  // .main-collection__cards\n  &__cards.swiper {\n    position: relative;\n    width: 83.6rem;\n    height: 73.3rem;\n    margin: 0;\n  }\n  &__cards-item.swiper-slide {\n    width: 51.5rem;\n    height: 51.5rem;\n    border-radius: 4rem;\n    position: absolute;\n    padding: 1.2rem;\n    overflow: hidden;\n  }\n  // .main-collection__title\n  &__title {\n    color: #1f1f22;\n    font-family: 'DrukCyr';\n    font-size: 10rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 110%; /* 110px */\n    text-transform: uppercase;\n    margin-bottom: 2rem;\n\n    width: 69.5rem;\n  }\n  // .main-collection__description\n  &__description {\n    color: #6a6a6a;\n    font-size: 2rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%; /* 28px */\n    margin-bottom: 5rem;\n    width: 61.8rem;\n  }\n}\n.collection-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  &--rat {\n    top: 0;\n    left: 0;\n    z-index: 2;\n\n    background: linear-gradient(\n      223deg,\n      #8792ed 1.18%,\n      #5f6eda 34.96%,\n      #6778df 68.58%,\n      #8792ed 100%\n    );\n  }\n  &--snail {\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n\n    background: linear-gradient(\n      226deg,\n      #455265 0%,\n      #11161e 40.66%,\n      #11161e 60.6%,\n      #455265 103.07%\n    );\n  }\n\n  // .collection-item__header\n  &__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  // .collection-item__title\n  &__title {\n    display: flex;\n    flex-direction: column;\n    padding-left: 1.2rem;\n\n    strong {\n      color: $white;\n      text-align: left;\n      font-size: 2.8rem;\n      font-style: normal;\n      font-weight: 500;\n      line-height: normal;\n    }\n\n    span {\n      color: $white;\n      text-align: left;\n      font-size: 2rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 140%; /* 28px */\n    }\n  }\n  // .collection-item__icons\n  &__icons {\n    display: flex;\n    align-items: center;\n    gap: 0.7rem;\n    &-item {\n      width: 8rem;\n      height: 8rem;\n      border-radius: 50%;\n      background: rgba(255, 255, 255, 0.3);\n      backdrop-filter: blur(13px);\n\n      color: #fff;\n      text-align: center;\n      font-size: 2rem;\n      line-height: 140%; /* 28px */\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      svg {\n        display: block;\n        width: 4.4rem;\n        height: 4.4rem;\n      }\n    }\n  }\n  // .collection-item__footer\n  &__footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    &-item {\n      display: flex;\n      width: 24.1rem;\n      height: 6.8rem;\n      padding: 1.6rem;\n      justify-content: center;\n      align-items: center;\n      border-radius: 5.2rem;\n\n      &--left {\n        background: rgba(255, 255, 255, 0.3);\n        backdrop-filter: blur(30px);\n\n        color: $white;\n        text-align: center;\n        font-size: 2rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 140%; /* 28px */\n      }\n      &--right {\n        background: $white;\n        backdrop-filter: blur(11.5px);\n        align-self: flex-end;\n\n        color: #1f1f22;\n        font-size: 2rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 140%; /* 28px */\n\n        strong {\n          color: #1f1f22;\n          font-size: 2.8rem;\n          font-style: normal;\n          font-weight: 500;\n          line-height: normal;\n          margin: 0 0.5rem;\n          align-self: center;\n        }\n        span {\n          align-self: flex-end;\n          margin-bottom: 0.2rem;\n        }\n        sup {\n          align-self: flex-start;\n        }\n      }\n    }\n  }\n  // .collection-item__backdrop\n  &__backdrop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    padding: 3.2rem;\n\n    img {\n      width: 100%;\n      height: auto;\n      object-fit: contain;\n    }\n  }\n}\n\n@media (max-width: 48em) {\n  .main-collection {\n    padding: 10rem 0;\n    &__container {\n      padding: 0;\n    }\n    // .main-collection__inner\n    &__inner {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      justify-content: space-between;\n      gap: 6.4rem;\n    }\n    // .main-collection__cards\n    &__cards.swiper {\n      order: 2;\n      position: relative;\n      width: 100%;\n      height: auto;\n      margin: 0;\n      padding: 0 2rem;\n    }\n    &__cards-item.swiper-slide {\n      width: 65.8rem;\n      height: 67rem;\n      border-radius: 4rem;\n      position: static;\n      padding: 2.4rem;\n      overflow: hidden;\n    }\n    // .main-collection__info\n    &__info {\n      order: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: 0 2rem;\n    }\n    // .main-collection__title\n    &__title {\n      width: 90%;\n      text-align: center;\n      margin-bottom: 2.4rem;\n    }\n    // .main-collection__description\n    &__description {\n      font-size: 2.8rem;\n      text-align: center;\n      margin-bottom: 6.4rem;\n      width: 93%;\n    }\n  }\n  .collection-item {\n    // .collection-item__title\n    &__title {\n      padding-left: 0;\n\n      strong {\n        font-size: 3.6rem;\n        margin-bottom: 1rem;\n        line-height: normal;\n      }\n\n      span {\n        font-size: 2.8rem;\n        line-height: normal; /* 28px */\n      }\n    }\n    // .collection-item__icons\n    &__icons {\n      gap: 1rem;\n      &-item {\n        font-size: 3rem;\n        svg {\n          width: 4.6rem;\n          height: 4.6rem;\n        }\n      }\n    }\n    // .collection-item__footer\n    &__footer {\n      &-item {\n        display: flex;\n        width: 30rem;\n        height: 8.8rem;\n        padding: 2.4rem;\n        border-radius: 4rem;\n\n        &--left {\n          font-size: 2.8rem;\n        }\n        &--right {\n          font-size: 3rem;\n          font-style: normal;\n          font-weight: 400;\n          line-height: 140%; /* 28px */\n\n          strong {\n            font-size: 3.6rem;\n            margin: 0 0.5rem;\n            align-self: center;\n          }\n          span {\n            line-height: 1.1;\n            margin-bottom: 0;\n          }\n          sup {\n            line-height: 1.1;\n          }\n        }\n      }\n    }\n  }\n}\n",".main-links {\n  margin-top: 5.2rem;\n  margin-bottom: 0;\n  // .main-links__list\n  &__list {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  // .main-links__item\n  &__item {\n    width: 100%;\n    text-align: center;\n    color: $white;\n    font-family: 'DrukCyr';\n    font-size: 10rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    transition: background 0.3s linear, color 0.3s linear;\n\n    border-top: 0.1rem solid rgba(201, 243, 43, 0.5);\n\n    &:hover {\n      transition: background 0.3s linear, color 0.3s linear;\n      background-color: $yellow;\n      color: $main;\n    }\n    a {\n      display: block;\n      width: 100%;\n      padding: 0.6rem 0;\n    }\n    &--big {\n      font-size: 19.9646rem;\n      line-height: 23.387rem; /* 117.143% */\n\n      a {\n        padding: 1.8rem 0 3.4rem;\n      }\n    }\n  }\n}\n\n@media (max-width: 48em) {\n  .main-links {\n    margin-top: 0;\n    margin-bottom: 7.6rem;\n    // .main-links__list\n    &__list {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n    }\n    // .main-links__item\n    &__item {\n      line-height: 110%;\n      border-top: 0.2rem solid rgba(201, 243, 43, 0.5);\n      a {\n        padding: 2.4rem 0;\n      }\n      &--big {\n        font-size: 11rem;\n        line-height: 110%; /* 117.143% */\n\n        a {\n          padding: 2.4rem 0;\n        }\n      }\n    }\n  }\n}\n",".main-rates {\n  // .main-rates__inner\n  &__inner {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 9rem;\n  }\n  // .main-rates__title\n  &__title {\n    color: $white;\n    font-family: 'DrukCyr';\n    font-size: 10rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 110%; /* 110px */\n    text-transform: uppercase;\n  }\n  // .main-rates__wrapper\n  &__wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    width: 100%;\n  }\n  // .main-rates__item\n  &__item {\n    height: 18rem;\n    display: flex;\n    align-items: center;\n    border-radius: 3rem;\n  }\n}\n.rates-item {\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    width: 5.1rem;\n    height: 5.1rem;\n    border-radius: 50%;\n    background: #1f1f22;\n\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  &::after {\n    right: -2.5rem;\n  }\n  &::before {\n    left: -2.5rem;\n  }\n  &--bg--pink {\n    background: #ff69c2;\n  }\n  &--bg--blue {\n    background: #cad2f4;\n  }\n  &--bg--green {\n    background: $green;\n  }\n  // .rates-item__left\n  &__left {\n    padding: 3.6rem 3.6rem 3.6rem 8.6rem;\n    height: 100%;\n    width: 57.8rem;\n    display: flex;\n    align-items: center;\n    border-right: 0.3rem dashed $main;\n  }\n  // .rates-item__title\n  &__title {\n    color: #1f1f22;\n    font-size: 2.8rem;\n    font-weight: 500;\n    line-height: normal;\n  }\n  // .rates-item__right\n  &__right {\n    display: flex;\n    align-items: center;\n    gap: 20.2rem;\n    height: 100%;\n    padding-left: 9.3rem;\n  }\n  // .rates-item__price\n  &__price {\n    &-top {\n      color: #1f1f22;\n      font-size: 2rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 140%; /* 28px */\n\n      strong {\n        color: #1f1f22;\n        font-size: 2.8rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n        margin: 0 0.5rem;\n        align-self: center;\n      }\n      span {\n        align-self: flex-end;\n        margin-bottom: 0.2rem;\n      }\n      sup {\n        align-self: flex-start;\n      }\n    }\n    &-bottom {\n      color: $main;\n      font-size: 2rem;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 140%; /* 28px */\n    }\n  }\n  // .rates-item__options\n  &__options {\n    width: 16rem;\n    color: $main;\n    font-size: 2rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n  // .rates-item__icon\n  &__icon {\n    position: absolute;\n  }\n}\n.rates-icon {\n  &--sunny {\n    top: -5rem;\n    left: 14.3rem;\n    width: 9.7rem;\n    height: 8rem;\n    transform: rotate(-7.376deg);\n  }\n  &--shapes {\n    right: 35.6rem;\n    top: -4.3rem;\n    width: 9.2rem;\n    height: 9rem;\n    transform: rotate(-15deg);\n  }\n  &--megafon {\n    width: 8.7rem;\n    height: 7rem;\n    transform: rotate(-12.401deg);\n    right: 68.6rem;\n    bottom: -3.5rem;\n  }\n}\n\n@media (max-width: 48em) {\n  .main-rates {\n    // .main-rates__inner\n    &__inner {\n      gap: 10rem;\n    }\n    // .main-rates__item\n    &__item {\n      height: 56rem;\n      border-radius: 4rem;\n      flex-direction: column;\n    }\n  }\n  .rates-item {\n    &::before,\n    &::after {\n      width: 9rem;\n      height: 9rem;\n    }\n    &::after {\n      right: -4.5rem;\n    }\n    &::before {\n      left: -4.5rem;\n    }\n    // .rates-item__left\n    &__left {\n      padding: 4.8rem;\n      height: 13.4rem;\n      width: 100%;\n      justify-content: center;\n      border-right: 0;\n      border-bottom: 0.3rem dashed $main;\n    }\n    // .rates-item__title\n    &__title {\n      font-size: 3rem;\n    }\n    // .rates-item__right\n    &__right {\n      flex-direction: column;\n      width: 100%;\n      gap: 4rem;\n      height: auto;\n      padding-left: 0;\n      padding-top: 2.4rem;\n    }\n    // .rates-item__price\n    &__price {\n      &-top {\n        font-size: 4rem;\n\n        strong {\n          font-size: 5.6rem;\n          margin: 0 1rem;\n        }\n        span {\n          align-self: flex-end;\n          margin-bottom: 0;\n        }\n        sup {\n          align-self: flex-start;\n        }\n      }\n      &-bottom {\n        color: $main;\n        font-size: 2.8rem;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 140%; /* 28px */\n      }\n    }\n    // .rates-item__options\n    &__options {\n      width: 80%;\n      text-align: center;\n      font-size: 2.8rem;\n\n      display: flex;\n      justify-content: center;\n      margin-bottom: 2.8rem;\n    }\n    // .rates-item__icon\n    &__icon {\n      display: none;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _utils_forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/forms.js */ "./src/js/utils/forms.js");
/* harmony import */ var _utils_tabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/tabs.js */ "./src/js/utils/tabs.js");
/* harmony import */ var _utils_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/accordion.js */ "./src/js/utils/accordion.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev/vzmsk1.js */ "./src/js/dev/vzmsk1.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dev/markusDM.js */ "./src/js/dev/markusDM.js");
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dev/ukik0.js */ "./src/js/dev/ukik0.js");
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6__);
// ---------------------------------- styles ---------------------------------



// ---------------------------------- forms ---------------------------------



// form fields
_utils_forms_js__WEBPACK_IMPORTED_MODULE_1__.formFieldsInit({
  viewPass: false
});

// form submit
_utils_forms_js__WEBPACK_IMPORTED_MODULE_1__.formSubmit();

// ---------------------------------- tabs ----------------------------------



// -------------------------------- accordion -------------------------------



// ------------------------------- own scripts ------------------------------




})();

/******/ })()
;
//# sourceMappingURL=homebd5aee33d5cb34d4c2cb.js.map