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

/***/ "./src/js/libs/simplebar.js":
/*!**********************************!*\
  !*** ./src/js/libs/simplebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_libs_simplebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/libs/simplebar.css */ "./src/scss/libs/simplebar.css");
/**
 * simplebar - v6.0.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */


var SimpleBar = function (t) {
  'use strict';

  var e = function (t, i) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }, e(t, i);
  };
  var i = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : 'undefined' != typeof __webpack_require__.g ? __webpack_require__.g : 'undefined' != typeof self ? self : {},
    s = !('undefined' == typeof window || !window.document || !window.document.createElement);
  var r = function (t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    },
    l = 'object' == typeof i && i && i.Object === Object && i,
    o = 'object' == typeof self && self && self.Object === Object && self,
    n = l || o || Function('return this')(),
    a = n,
    c = function () {
      return a.Date.now();
    },
    h = /\s/;
  var d = function (t) {
      for (var e = t.length; e-- && h.test(t.charAt(e)););
      return e;
    },
    u = /^\s+/;
  var p = function (t) {
      return t ? t.slice(0, d(t) + 1).replace(u, '') : t;
    },
    v = n.Symbol,
    f = v,
    m = Object.prototype,
    b = m.hasOwnProperty,
    g = m.toString,
    x = f ? f.toStringTag : void 0;
  var y = function (t) {
      var e = b.call(t, x),
        i = t[x];
      try {
        t[x] = void 0;
        var s = !0;
      } catch (t) {}
      var r = g.call(t);
      return s && (e ? t[x] = i : delete t[x]), r;
    },
    E = Object.prototype.toString;
  var w = y,
    O = function (t) {
      return E.call(t);
    },
    S = v ? v.toStringTag : void 0;
  var A = function (t) {
      return null == t ? void 0 === t ? '[object Undefined]' : '[object Null]' : S && S in Object(t) ? w(t) : O(t);
    },
    k = function (t) {
      return null != t && 'object' == typeof t;
    };
  var L = p,
    W = r,
    M = function (t) {
      return 'symbol' == typeof t || k(t) && '[object Symbol]' == A(t);
    },
    N = /^[-+]0x[0-9a-f]+$/i,
    z = /^0b[01]+$/i,
    C = /^0o[0-7]+$/i,
    T = parseInt;
  var R = r,
    D = c,
    V = function (t) {
      if ('number' == typeof t) return t;
      if (M(t)) return NaN;
      if (W(t)) {
        var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
        t = W(e) ? e + '' : e;
      }
      if ('string' != typeof t) return 0 === t ? t : +t;
      t = L(t);
      var i = z.test(t);
      return i || C.test(t) ? T(t.slice(2), i ? 2 : 8) : N.test(t) ? NaN : +t;
    },
    H = Math.max,
    j = Math.min;
  var B = function (t, e, i) {
      var s,
        r,
        l,
        o,
        n,
        a,
        c = 0,
        h = !1,
        d = !1,
        u = !0;
      if ('function' != typeof t) throw new TypeError('Expected a function');
      function p(e) {
        var i = s,
          l = r;
        return s = r = void 0, c = e, o = t.apply(l, i);
      }
      function v(t) {
        return c = t, n = setTimeout(m, e), h ? p(t) : o;
      }
      function f(t) {
        var i = t - a;
        return void 0 === a || i >= e || i < 0 || d && t - c >= l;
      }
      function m() {
        var t = D();
        if (f(t)) return b(t);
        n = setTimeout(m, function (t) {
          var i = e - (t - a);
          return d ? j(i, l - (t - c)) : i;
        }(t));
      }
      function b(t) {
        return n = void 0, u && s ? p(t) : (s = r = void 0, o);
      }
      function g() {
        var t = D(),
          i = f(t);
        if (s = arguments, r = this, a = t, i) {
          if (void 0 === n) return v(a);
          if (d) return clearTimeout(n), n = setTimeout(m, e), p(a);
        }
        return void 0 === n && (n = setTimeout(m, e)), o;
      }
      return e = V(e) || 0, R(i) && (h = !!i.leading, l = (d = 'maxWait' in i) ? H(V(i.maxWait) || 0, e) : l, u = 'trailing' in i ? !!i.trailing : u), g.cancel = function () {
        void 0 !== n && clearTimeout(n), c = 0, s = a = r = n = void 0;
      }, g.flush = function () {
        return void 0 === n ? o : b(D());
      }, g;
    },
    P = B,
    q = r;
  var X = function (t, e, i) {
      var s = !0,
        r = !0;
      if ('function' != typeof t) throw new TypeError('Expected a function');
      return q(i) && (s = 'leading' in i ? !!i.leading : s, r = 'trailing' in i ? !!i.trailing : r), P(t, e, {
        leading: s,
        maxWait: e,
        trailing: r
      });
    },
    Y = function () {
      return Y = Object.assign || function (t) {
        for (var e, i = 1, s = arguments.length; i < s; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t;
      }, Y.apply(this, arguments);
    },
    _ = null,
    F = null;
  function I() {
    if (null === _) {
      if ('undefined' == typeof document) return _ = 0;
      var t = document.body,
        e = document.createElement('div');
      e.classList.add('simplebar-hide-scrollbar'), t.appendChild(e);
      var i = e.getBoundingClientRect().right;
      t.removeChild(e), _ = i;
    }
    return _;
  }
  function $(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window;
  }
  function U(t) {
    return t && t.ownerDocument ? t.ownerDocument : document;
  }
  s && window.addEventListener('resize', function () {
    F !== window.devicePixelRatio && (F = window.devicePixelRatio, _ = null);
  });
  var Z = function (t) {
      return Array.prototype.reduce.call(t, function (t, e) {
        var i = e.name.match(/data-simplebar-(.+)/);
        if (i) {
          var s = i[1].replace(/\W+(.)/g, function (t, e) {
            return e.toUpperCase();
          });
          switch (e.value) {
            case 'true':
              t[s] = !0;
              break;
            case 'false':
              t[s] = !1;
              break;
            case void 0:
              t[s] = !0;
              break;
            default:
              t[s] = e.value;
          }
        }
        return t;
      }, {});
    },
    G = function () {
      function t(e, i) {
        void 0 === i && (i = {});
        var s = this;
        if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function () {}, this.onWindowResize = function () {}, this.onStopScrolling = function () {}, this.onMouseEntered = function () {}, this.onScroll = function () {
          var t = $(s.el);
          s.scrollXTicking || (t.requestAnimationFrame(s.scrollX), s.scrollXTicking = !0), s.scrollYTicking || (t.requestAnimationFrame(s.scrollY), s.scrollYTicking = !0), s.isScrolling || (s.isScrolling = !0, s.el.classList.add(s.classNames.scrolling), s.showScrollbar('x'), s.showScrollbar('y')), s.onStopScrolling();
        }, this.scrollX = function () {
          s.axis.x.isOverflowing && s.positionScrollbar('x'), s.scrollXTicking = !1;
        }, this.scrollY = function () {
          s.axis.y.isOverflowing && s.positionScrollbar('y'), s.scrollYTicking = !1;
        }, this._onStopScrolling = function () {
          s.el.classList.remove(s.classNames.scrolling), s.options.autoHide && (s.hideScrollbar('x'), s.hideScrollbar('y')), s.isScrolling = !1;
        }, this.onMouseEnter = function () {
          s.isMouseEntering || (s.el.classList.add(s.classNames.mouseEntered), s.showScrollbar('x'), s.showScrollbar('y'), s.isMouseEntering = !0), s.onMouseEntered();
        }, this._onMouseEntered = function () {
          s.el.classList.remove(s.classNames.mouseEntered), s.options.autoHide && (s.hideScrollbar('x'), s.hideScrollbar('y')), s.isMouseEntering = !1;
        }, this._onMouseMove = function (t) {
          s.mouseX = t.clientX, s.mouseY = t.clientY, (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseMoveForAxis('x'), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseMoveForAxis('y');
        }, this.onMouseLeave = function () {
          s.onMouseMove.cancel(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseLeaveForAxis('x'), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseLeaveForAxis('y'), s.mouseX = -1, s.mouseY = -1;
        }, this._onWindowResize = function () {
          s.scrollbarWidth = s.getScrollbarWidth(), s.hideNativeScrollbar();
        }, this.onPointerEvent = function (t) {
          var e, i;
          s.axis.x.track.el && s.axis.y.track.el && s.axis.x.scrollbar.el && s.axis.y.scrollbar.el && (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(), s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && (e = s.isWithinBounds(s.axis.x.track.rect)), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && (i = s.isWithinBounds(s.axis.y.track.rect)), (e || i) && (t.stopPropagation(), 'pointerdown' === t.type && 'touch' !== t.pointerType && (e && (s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.x.scrollbar.rect) ? s.onDragStart(t, 'x') : s.onTrackClick(t, 'x')), i && (s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.y.scrollbar.rect) ? s.onDragStart(t, 'y') : s.onTrackClick(t, 'y')))));
        }, this.drag = function (e) {
          var i, r, l, o, n, a, c, h, d, u, p;
          if (s.draggedAxis && s.contentWrapperEl) {
            var v = s.axis[s.draggedAxis].track,
              f = null !== (r = null === (i = v.rect) || void 0 === i ? void 0 : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r ? r : 0,
              m = s.axis[s.draggedAxis].scrollbar,
              b = null !== (o = null === (l = s.contentWrapperEl) || void 0 === l ? void 0 : l[s.axis[s.draggedAxis].scrollSizeAttr]) && void 0 !== o ? o : 0,
              g = parseInt(null !== (a = null === (n = s.elStyles) || void 0 === n ? void 0 : n[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a ? a : '0px', 10);
            e.preventDefault(), e.stopPropagation();
            var x = ('y' === s.draggedAxis ? e.pageY : e.pageX) - (null !== (h = null === (c = v.rect) || void 0 === c ? void 0 : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== h ? h : 0) - s.axis[s.draggedAxis].dragOffset,
              y = (x = s.isRtl ? (null !== (u = null === (d = v.rect) || void 0 === d ? void 0 : d[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== u ? u : 0) - m.size - x : x) / (f - m.size) * (b - g);
            'x' === s.draggedAxis && s.isRtl && (y = (null === (p = t.getRtlHelpers()) || void 0 === p ? void 0 : p.isScrollingToNegative) ? -y : y), s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = y;
          }
        }, this.onEndDrag = function (t) {
          var e = U(s.el),
            i = $(s.el);
          t.preventDefault(), t.stopPropagation(), s.el.classList.remove(s.classNames.dragging), e.removeEventListener('mousemove', s.drag, !0), e.removeEventListener('mouseup', s.onEndDrag, !0), s.removePreventClickId = i.setTimeout(function () {
            e.removeEventListener('click', s.preventClick, !0), e.removeEventListener('dblclick', s.preventClick, !0), s.removePreventClickId = null;
          });
        }, this.preventClick = function (t) {
          t.preventDefault(), t.stopPropagation();
        }, this.el = e, this.options = Y(Y({}, t.defaultOptions), i), this.classNames = Y(Y({}, t.defaultOptions.classNames), i.classNames), this.axis = {
          x: {
            scrollOffsetAttr: 'scrollLeft',
            sizeAttr: 'width',
            scrollSizeAttr: 'scrollWidth',
            offsetSizeAttr: 'offsetWidth',
            offsetAttr: 'left',
            overflowAttr: 'overflowX',
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: {
              size: null,
              el: null,
              rect: null,
              isVisible: !1
            },
            scrollbar: {
              size: null,
              el: null,
              rect: null,
              isVisible: !1
            }
          },
          y: {
            scrollOffsetAttr: 'scrollTop',
            sizeAttr: 'height',
            scrollSizeAttr: 'scrollHeight',
            offsetSizeAttr: 'offsetHeight',
            offsetAttr: 'top',
            overflowAttr: 'overflowY',
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: {
              size: null,
              el: null,
              rect: null,
              isVisible: !1
            },
            scrollbar: {
              size: null,
              el: null,
              rect: null,
              isVisible: !1
            }
          }
        }, 'object' != typeof this.el || !this.el.nodeName) throw new Error('Argument passed to SimpleBar must be an HTML element instead of '.concat(this.el));
        this.onMouseMove = X(this._onMouseMove, 64), this.onWindowResize = B(this._onWindowResize, 64, {
          leading: !0
        }), this.onStopScrolling = B(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = B(this._onMouseEntered, this.stopScrollDelay), this.init();
      }
      return t.getRtlHelpers = function () {
        if (t.rtlHelpers) return t.rtlHelpers;
        var e = document.createElement('div');
        e.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var i = e.firstElementChild,
          s = null == i ? void 0 : i.firstElementChild;
        if (!s) return null;
        document.body.appendChild(i), i.scrollLeft = 0;
        var r = t.getOffset(i),
          l = t.getOffset(s);
        i.scrollLeft = -999;
        var o = t.getOffset(s);
        return document.body.removeChild(i), t.rtlHelpers = {
          isScrollOriginAtZero: r.left !== l.left,
          isScrollingToNegative: l.left !== o.left
        }, t.rtlHelpers;
      }, t.prototype.getScrollbarWidth = function () {
        try {
          return this.contentWrapperEl && 'none' === getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display || 'scrollbarWidth' in document.documentElement.style || '-ms-overflow-style' in document.documentElement.style ? 0 : I();
        } catch (t) {
          return I();
        }
      }, t.getOffset = function (t) {
        var e = t.getBoundingClientRect(),
          i = U(t),
          s = $(t);
        return {
          top: e.top + (s.pageYOffset || i.documentElement.scrollTop),
          left: e.left + (s.pageXOffset || i.documentElement.scrollLeft)
        };
      }, t.prototype.init = function () {
        s && (this.initDOM(), this.setAccessibilityAttributes(), this.rtlHelpers = t.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
      }, t.prototype.initDOM = function () {
        var t = this;
        if (Array.prototype.filter.call(this.el.children, function (e) {
          return e.classList.contains(t.classNames.wrapper);
        }).length) this.wrapperEl = this.el.querySelector('.'.concat(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector('.'.concat(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector('.'.concat(this.classNames.contentEl)), this.offsetEl = this.el.querySelector('.'.concat(this.classNames.offset)), this.maskEl = this.el.querySelector('.'.concat(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, '.'.concat(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector('.'.concat(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector('.'.concat(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, '.'.concat(this.classNames.track, '.').concat(this.classNames.horizontal)), this.axis.y.track.el = this.findChild(this.el, '.'.concat(this.classNames.track, '.').concat(this.classNames.vertical));else {
          for (this.wrapperEl = document.createElement('div'), this.contentWrapperEl = document.createElement('div'), this.offsetEl = document.createElement('div'), this.maskEl = document.createElement('div'), this.contentEl = document.createElement('div'), this.placeholderEl = document.createElement('div'), this.heightAutoObserverWrapperEl = document.createElement('div'), this.heightAutoObserverEl = document.createElement('div'), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
          this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl);
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var e = document.createElement('div'),
            i = document.createElement('div');
          e.classList.add(this.classNames.track), i.classList.add(this.classNames.scrollbar), this.options.autoHide || i.classList.add(this.classNames.visible), e.appendChild(i), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el);
        }
        this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector('.'.concat(this.classNames.scrollbar)), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector('.'.concat(this.classNames.scrollbar)), this.el.setAttribute('data-simplebar', 'init');
      }, t.prototype.setAccessibilityAttributes = function () {
        var t,
          e,
          i,
          s = this.options.ariaLabel;
        null === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute('tabindex', '0'), null === (e = this.contentWrapperEl) || void 0 === e || e.setAttribute('role', 'region'), null === (i = this.contentWrapperEl) || void 0 === i || i.setAttribute('aria-label', s);
      }, t.prototype.initListeners = function () {
        var t,
          e = this,
          i = $(this.el);
        if (this.el.addEventListener('mouseenter', this.onMouseEnter), this.el.addEventListener('pointerdown', this.onPointerEvent, !0), this.el.addEventListener('mousemove', this.onMouseMove), this.el.addEventListener('mouseleave', this.onMouseLeave), null === (t = this.contentWrapperEl) || void 0 === t || t.addEventListener('scroll', this.onScroll), i.addEventListener('resize', this.onWindowResize), this.contentEl) {
          if (window.ResizeObserver) {
            var s = !1,
              r = i.ResizeObserver || ResizeObserver;
            this.resizeObserver = new r(function () {
              s && i.requestAnimationFrame(function () {
                e.recalculate();
              });
            }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), i.requestAnimationFrame(function () {
              s = !0;
            });
          }
          this.mutationObserver = new i.MutationObserver(function () {
            i.requestAnimationFrame(function () {
              e.recalculate();
            });
          }), this.mutationObserver.observe(this.contentEl, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
        }
      }, t.prototype.recalculate = function () {
        if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) {
          var t = $(this.el);
          this.elStyles = t.getComputedStyle(this.el), this.isRtl = 'rtl' === this.elStyles.direction;
          var e = this.contentEl.offsetWidth,
            i = this.heightAutoObserverEl.offsetHeight <= 1,
            s = this.heightAutoObserverEl.offsetWidth <= 1 || e > 0,
            r = this.contentWrapperEl.offsetWidth,
            l = this.elStyles.overflowX,
            o = this.elStyles.overflowY;
          this.contentEl.style.padding = ''.concat(this.elStyles.paddingTop, ' ').concat(this.elStyles.paddingRight, ' ').concat(this.elStyles.paddingBottom, ' ').concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = '-'.concat(this.elStyles.paddingTop, ' -').concat(this.elStyles.paddingRight, ' -').concat(this.elStyles.paddingBottom, ' -').concat(this.elStyles.paddingLeft);
          var n = this.contentEl.scrollHeight,
            a = this.contentEl.scrollWidth;
          this.contentWrapperEl.style.height = i ? 'auto' : '100%', this.placeholderEl.style.width = s ? ''.concat(e || a, 'px') : 'auto', this.placeholderEl.style.height = ''.concat(n, 'px');
          var c = this.contentWrapperEl.offsetHeight;
          this.axis.x.isOverflowing = 0 !== e && a > e, this.axis.y.isOverflowing = n > c, this.axis.x.isOverflowing = 'hidden' !== l && this.axis.x.isOverflowing, this.axis.y.isOverflowing = 'hidden' !== o && this.axis.y.isOverflowing, this.axis.x.forceVisible = 'x' === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = 'y' === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
          var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
            d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
          this.axis.x.isOverflowing = this.axis.x.isOverflowing && a > r - d, this.axis.y.isOverflowing = this.axis.y.isOverflowing && n > c - h, this.axis.x.scrollbar.size = this.getScrollbarSize('x'), this.axis.y.scrollbar.size = this.getScrollbarSize('y'), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = ''.concat(this.axis.x.scrollbar.size, 'px')), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = ''.concat(this.axis.y.scrollbar.size, 'px')), this.positionScrollbar('x'), this.positionScrollbar('y'), this.toggleTrackVisibility('x'), this.toggleTrackVisibility('y');
        }
      }, t.prototype.getScrollbarSize = function (t) {
        var e, i;
        if (void 0 === t && (t = 'y'), !this.axis[t].isOverflowing || !this.contentEl) return 0;
        var s,
          r = this.contentEl[this.axis[t].scrollSizeAttr],
          l = null !== (i = null === (e = this.axis[t].track.el) || void 0 === e ? void 0 : e[this.axis[t].offsetSizeAttr]) && void 0 !== i ? i : 0,
          o = l / r;
        return s = Math.max(~~(o * l), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (s = Math.min(s, this.options.scrollbarMaxSize)), s;
      }, t.prototype.positionScrollbar = function (e) {
        var i, s, r;
        void 0 === e && (e = 'y');
        var l = this.axis[e].scrollbar;
        if (this.axis[e].isOverflowing && this.contentWrapperEl && l.el && this.elStyles) {
          var o = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
            n = (null === (i = this.axis[e].track.el) || void 0 === i ? void 0 : i[this.axis[e].offsetSizeAttr]) || 0,
            a = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            c = this.contentWrapperEl[this.axis[e].scrollOffsetAttr];
          c = 'x' === e && this.isRtl && (null === (s = t.getRtlHelpers()) || void 0 === s ? void 0 : s.isScrollOriginAtZero) ? -c : c, 'x' === e && this.isRtl && (c = (null === (r = t.getRtlHelpers()) || void 0 === r ? void 0 : r.isScrollingToNegative) ? c : -c);
          var h = c / (o - a),
            d = ~~((n - l.size) * h);
          d = 'x' === e && this.isRtl ? -d + (n - l.size) : d, l.el.style.transform = 'x' === e ? 'translate3d('.concat(d, 'px, 0, 0)') : 'translate3d(0, '.concat(d, 'px, 0)');
        }
      }, t.prototype.toggleTrackVisibility = function (t) {
        void 0 === t && (t = 'y');
        var e = this.axis[t].track.el,
          i = this.axis[t].scrollbar.el;
        e && i && this.contentWrapperEl && (this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = 'visible', this.contentWrapperEl.style[this.axis[t].overflowAttr] = 'scroll', this.el.classList.add(''.concat(this.classNames.scrollable, '-').concat(t))) : (e.style.visibility = 'hidden', this.contentWrapperEl.style[this.axis[t].overflowAttr] = 'hidden', this.el.classList.remove(''.concat(this.classNames.scrollable, '-').concat(t))), this.axis[t].isOverflowing ? i.style.display = 'block' : i.style.display = 'none');
      }, t.prototype.showScrollbar = function (t) {
        var e;
        void 0 === t && (t = 'y'), this.axis[t].isOverflowing && !this.axis[t].scrollbar.isVisible && (null === (e = this.axis[t].scrollbar.el) || void 0 === e || e.classList.add(this.classNames.visible), this.axis[t].scrollbar.isVisible = !0);
      }, t.prototype.hideScrollbar = function (t) {
        var e;
        void 0 === t && (t = 'y'), this.axis[t].isOverflowing && this.axis[t].scrollbar.isVisible && (null === (e = this.axis[t].scrollbar.el) || void 0 === e || e.classList.remove(this.classNames.visible), this.axis[t].scrollbar.isVisible = !1);
      }, t.prototype.hideNativeScrollbar = function () {
        this.offsetEl && (this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? '-'.concat(this.scrollbarWidth, 'px') : '0px', this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? '-'.concat(this.scrollbarWidth, 'px') : '0px');
      }, t.prototype.onMouseMoveForAxis = function (t) {
        void 0 === t && (t = 'y');
        var e = this.axis[t];
        e.track.el && e.scrollbar.el && (e.track.rect = e.track.el.getBoundingClientRect(), e.scrollbar.rect = e.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(e.track.rect) ? (this.showScrollbar(t), e.track.el.classList.add(this.classNames.hover), this.isWithinBounds(e.scrollbar.rect) ? e.scrollbar.el.classList.add(this.classNames.hover) : e.scrollbar.el.classList.remove(this.classNames.hover)) : (e.track.el.classList.remove(this.classNames.hover), this.options.autoHide && this.hideScrollbar(t)));
      }, t.prototype.onMouseLeaveForAxis = function (t) {
        var e, i;
        void 0 === t && (t = 'y'), null === (e = this.axis[t].track.el) || void 0 === e || e.classList.remove(this.classNames.hover), null === (i = this.axis[t].scrollbar.el) || void 0 === i || i.classList.remove(this.classNames.hover), this.options.autoHide && this.hideScrollbar(t);
      }, t.prototype.onDragStart = function (t, e) {
        var i;
        void 0 === e && (e = 'y');
        var s = U(this.el),
          r = $(this.el),
          l = this.axis[e].scrollbar,
          o = 'y' === e ? t.pageY : t.pageX;
        this.axis[e].dragOffset = o - ((null === (i = l.rect) || void 0 === i ? void 0 : i[this.axis[e].offsetAttr]) || 0), this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), s.addEventListener('mousemove', this.drag, !0), s.addEventListener('mouseup', this.onEndDrag, !0), null === this.removePreventClickId ? (s.addEventListener('click', this.preventClick, !0), s.addEventListener('dblclick', this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
      }, t.prototype.onTrackClick = function (t, e) {
        var i,
          s,
          r,
          l,
          o = this;
        void 0 === e && (e = 'y');
        var n = this.axis[e];
        if (this.options.clickOnTrack && n.scrollbar.el && this.contentWrapperEl) {
          t.preventDefault();
          var a = $(this.el);
          this.axis[e].scrollbar.rect = n.scrollbar.el.getBoundingClientRect();
          var c = null !== (s = null === (i = this.axis[e].scrollbar.rect) || void 0 === i ? void 0 : i[this.axis[e].offsetAttr]) && void 0 !== s ? s : 0,
            h = parseInt(null !== (l = null === (r = this.elStyles) || void 0 === r ? void 0 : r[this.axis[e].sizeAttr]) && void 0 !== l ? l : '0px', 10),
            d = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            u = ('y' === e ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
            p = -1 === u ? d - h : d + h,
            v = function () {
              o.contentWrapperEl && (-1 === u ? d > p && (d -= 40, o.contentWrapperEl[o.axis[e].scrollOffsetAttr] = d, a.requestAnimationFrame(v)) : d < p && (d += 40, o.contentWrapperEl[o.axis[e].scrollOffsetAttr] = d, a.requestAnimationFrame(v)));
            };
          v();
        }
      }, t.prototype.getContentElement = function () {
        return this.contentEl;
      }, t.prototype.getScrollElement = function () {
        return this.contentWrapperEl;
      }, t.prototype.removeListeners = function () {
        var t = $(this.el);
        this.el.removeEventListener('mouseenter', this.onMouseEnter), this.el.removeEventListener('pointerdown', this.onPointerEvent, !0), this.el.removeEventListener('mousemove', this.onMouseMove), this.el.removeEventListener('mouseleave', this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener('scroll', this.onScroll), t.removeEventListener('resize', this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel();
      }, t.prototype.unMount = function () {
        this.removeListeners();
      }, t.prototype.isWithinBounds = function (t) {
        return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height;
      }, t.prototype.findChild = function (t, e) {
        var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
        return Array.prototype.filter.call(t.children, function (t) {
          return i.call(t, e);
        })[0];
      }, t.rtlHelpers = null, t.defaultOptions = {
        forceVisible: !1,
        clickOnTrack: !0,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: 'scrollable content',
        classNames: {
          contentEl: 'simplebar-content',
          contentWrapper: 'simplebar-content-wrapper',
          offset: 'simplebar-offset',
          mask: 'simplebar-mask',
          wrapper: 'simplebar-wrapper',
          placeholder: 'simplebar-placeholder',
          scrollbar: 'simplebar-scrollbar',
          track: 'simplebar-track',
          heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
          heightAutoObserverEl: 'simplebar-height-auto-observer',
          visible: 'simplebar-visible',
          horizontal: 'simplebar-horizontal',
          vertical: 'simplebar-vertical',
          hover: 'simplebar-hover',
          dragging: 'simplebar-dragging',
          scrolling: 'simplebar-scrolling',
          scrollable: 'simplebar-scrollable',
          mouseEntered: 'simplebar-mouse-entered'
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: !0
      }, t.getOptions = Z, t;
    }(),
    J = G.getOptions,
    K = function (t) {
      function i() {
        for (var e = [], s = 0; s < arguments.length; s++) e[s] = arguments[s];
        var r = t.apply(this, e) || this;
        return i.instances.set(e[0], r), r;
      }
      return function (t, i) {
        if ('function' != typeof i && null !== i) throw new TypeError('Class extends value ' + String(i) + ' is not a constructor or null');
        function s() {
          this.constructor = t;
        }
        e(t, i), t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s());
      }(i, t), i.initDOMLoadedElements = function () {
        document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements), window.removeEventListener('load', this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (t) {
          'init' === t.getAttribute('data-simplebar') || i.instances.has(t) || new i(t, J(t.attributes));
        });
      }, i.removeObserver = function () {
        var t;
        null === (t = i.globalObserver) || void 0 === t || t.disconnect();
      }, i.prototype.unMount = function () {
        G.prototype.unMount.call(this), i.instances.delete(this.el);
      }, i.initHtmlApi = function () {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), 'undefined' != typeof MutationObserver && (this.globalObserver = new MutationObserver(i.handleMutations), this.globalObserver.observe(document, {
          childList: !0,
          subtree: !0
        })), 'complete' === document.readyState || 'loading' !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements), window.addEventListener('load', this.initDOMLoadedElements));
      }, i.handleMutations = function (t) {
        t.forEach(function (t) {
          t.addedNodes.forEach(function (t) {
            1 === t.nodeType && (t.hasAttribute('data-simplebar') ? !i.instances.has(t) && document.documentElement.contains(t) && new i(t, J(t.attributes)) : t.querySelectorAll('[data-simplebar]').forEach(function (t) {
              'init' !== t.getAttribute('data-simplebar') && !i.instances.has(t) && document.documentElement.contains(t) && new i(t, J(t.attributes));
            }));
          }), t.removedNodes.forEach(function (t) {
            1 === t.nodeType && ('init' === t.getAttribute('data-simplebar') ? i.instances.has(t) && !document.documentElement.contains(t) && i.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), function (t) {
              i.instances.has(t) && !document.documentElement.contains(t) && i.instances.get(t).unMount();
            }));
          });
        });
      }, i.instances = new WeakMap(), i;
    }(G);
  return s && K.initHtmlApi(), t.default = K, Object.defineProperty(t, '__esModule', {
    value: !0
  }), t;
}({});

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

/***/ "./src/js/utils/select.js":
/*!********************************!*\
  !*** ./src/js/utils/select.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils/utils.js");

class Select {
  // setup ------------------------------------------------------------------

  constructor() {
    this._this = this;

    // custom select classes
    this.classes = {
      // html build classes
      sel: 'select',
      body: 'select__body',
      label: 'select__label',
      title: 'select__title',
      val: 'select__value',
      content: 'select__content',
      options: 'select__options',
      option: 'select__option',
      scroll: 'select__scroll',
      group: 'select__group',
      inp: 'select__input',
      asset: 'select__asset',
      txt: 'select__text',
      hint: 'select__hint',
      // state classes
      active: '_select-active',
      focused: '_select-focused',
      opened: '_select-opened',
      filled: '_select-filled',
      selected: '_select-selected',
      disabled: '_select-disabled',
      // additional classes
      list: '_select-list',
      error: '_select-error',
      multiple: '_select-multiple',
      checkbox: '_select-checkbox',
      label: '_select-label'
    };

    // all select items
    const selectList = document.querySelectorAll('select');
    if (selectList.length) {
      this.init(selectList);
    }
  }

  // select initialization & build ------------------------------------------

  // initialization
  init(selectList) {
    // init
    selectList.forEach((select, index) => {
      this.initSelItem(select, index + 1);
    });

    // events
    document.addEventListener('click', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('keydown', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('focusin', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('focusout', function (e) {
      this.setActions(e);
    }.bind(this));
  }
  // single select item initialization
  initSelItem(relativeSel, index) {
    const _this = this;
    const select = document.createElement('div');
    select.classList.add(this.classes.sel);
    relativeSel.parentNode.insertBefore(select, relativeSel);
    select.appendChild(relativeSel);
    relativeSel.hidden = true;
    index ? relativeSel.dataset.selId = index : null;
    if (this.getPlaceholder(relativeSel)) {
      relativeSel.dataset.optPlaceholder = this.getPlaceholder(relativeSel).value;
      if (this.getPlaceholder(relativeSel).label.show) {
        const selTitle = this.getSelect(select, this.classes.title).twinSel;
        selTitle.insertAdjacentHTML('afterbegin', `<span class="${this.classes.label}">${this.getPlaceholder(relativeSel).label.text ? this.getPlaceholder(relativeSel).label.text : this.getPlaceholder(relativeSel).value}</span>`);
      }
    }
    select.insertAdjacentHTML('beforeend', `<div class="${this.classes.body}"><div ${!relativeSel.hasAttribute('data-no-slide') ? 'hidden' : ''}  class="${this.classes.options}"></div></div>`);
    this.build(relativeSel);
    relativeSel.dataset.speed = relativeSel.dataset.speed ? relativeSel.dataset.speed : '150';
    relativeSel.addEventListener('change', function (e) {
      _this.initSelections(e);
    });
  }
  // select build
  build(relativeSel) {
    const select = relativeSel.parentElement;

    // set id
    select.dataset.selId = relativeSel.dataset.selId;
    // set value
    this.setValue(select, relativeSel);
    // set options
    this.setOptions(select, relativeSel);
    // set css modificator
    relativeSel.dataset.selAddonClass ? select.classList.add(`select_${relativeSel.dataset.selAddonClass}`) : null;
    // set class if select is multiple
    relativeSel.multiple ? select.classList.add(this.classes.multiple) : select.classList.remove(this.classes.multiple);
    // set class if select checkboxes are set
    relativeSel.hasAttribute('data-sel-checkboxes') && relativeSel.multiple ? select.classList.add(this.classes.checkbox) : select.classList.remove(this.classes.checkbox);
    // disable select
    this.disableSelect(select, relativeSel);
    // set search actions if data-sel-search is set
    relativeSel.hasAttribute('data-sel-search') ? this.setSearchActions(select) : null;
    // set select actions if it's initially opened
    relativeSel.hasAttribute('data-sel-opened') ? this.setAction(select) : null;

    // set select hint
    if (relativeSel.dataset.selHint) {
      relativeSel.parentElement.insertAdjacentHTML('beforeend', `<div class="select__hint">${relativeSel.dataset.selHint}</div>`);
    }

    // show / hide selection from select title
    if (relativeSel.hasAttribute('data-show-val')) {
      select.classList.add('_select-show-val');
    } else {
      select.classList.remove('_select-show-val');
    }
  }
  // set twin select title value
  setValue(select, relativeSel) {
    const selBody = this.getSelect(select, this.classes.body).twinSel;
    const selTitle = this.getSelect(select, this.classes.title).twinSel;
    if (selTitle) selTitle.remove();
    selBody.insertAdjacentHTML('afterbegin', this.getValue(select, relativeSel));
  }
  // set twin select options
  setOptions(select, relativeSel) {
    const options = this.getSelect(select, this.classes.options).twinSel;
    options.innerHTML = this.getOptions(relativeSel);
  }
  // disable select
  disableSelect(select, relativeSel) {
    if (relativeSel.disabled) {
      select.classList.add(this.classes.disabled);
      this.getSelect(select, this.classes.title).twinSel.disabled = true;
    } else {
      select.classList.remove(this.classes.disabled);
      this.getSelect(select, this.classes.title).twinSel.disabled = false;
    }
  }

  // main actions -----------------------------------------------------------

  // set main actions
  setActions(e) {
    const target = e.target;
    const type = e.type;
    if (target.closest(this.getClass(this.classes.sel)) || target.closest(this.getClass(this.classes.list))) {
      const select = target.closest('.select') ? target.closest('.select') : document.querySelector(`.${this.classes.sel}[data-sel-id="${target.closest(this.getClass(this.classes.list)).dataset.selectId}"]`);
      const relativeSel = this.getSelect(select).relativeSel;
      if (type === 'click') {
        if (!relativeSel.disabled) {
          if (target.closest(this.getClass(this.classes.list))) {
            const selList = target.closest(this.getClass(this.classes.list));
            const selOption = document.querySelector(`.${this.classes.sel}[data-sel-id="${selList.dataset.selId}"] .select__option[data-opt-val="${selList.dataset.optVal}"]`);
            this.setOptionAction(select, relativeSel, selOption);
          } else if (target.closest(this.getClass(this.classes.title))) {
            this.setAction(select);
          } else if (target.closest(this.getClass(this.classes.option))) {
            const selOption = target.closest(this.getClass(this.classes.option));
            this.setOptionAction(select, relativeSel, selOption);
          }
        }
      } else if (type === 'focusin' || type === 'focusout') {
        if (target.closest(this.getClass(this.classes.sel))) {
          if (type === 'focusin') {
            select.classList.add(this.classes.focused);
          } else {
            select.classList.remove(this.classes.focused);
            if (relativeSel.hasAttribute('data-validate')) {
              if (!select.classList.contains(this.classes.filled)) {
                this.addErr(relativeSel, select);
              } else {
                this.removeErr(relativeSel, select);
              }
            }
          }
        }
      } else if (type === 'keydown' && e.code === 'Escape') {
        this.closeGroup();
      }
    } else {
      this.closeGroup();
    }
  }
  // set single select action
  setAction(select) {
    const relativeSel = this.getSelect(select).relativeSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel;
    if (relativeSel.closest('[data-one-select]')) {
      const selectOneGroup = relativeSel.closest('[data-one-select]');
      this.closeGroup(selectOneGroup);
    }
    if (!selOptions.classList.contains('_slide')) {
      select.classList.toggle(this.classes.opened);
      if (!relativeSel.hasAttribute('data-no-slide')) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(selOptions, relativeSel.dataset.speed);
      if (select.classList.contains(this.classes.opened) && relativeSel.hasAttribute('data-validate') && select.classList.contains(this.classes.error)) {
        this.removeErr(relativeSel, select);
      }
    }
  }
  // close single select group
  closeGroup(group) {
    const selGroup = group ? group : document;
    const selections = selGroup.querySelectorAll(`${this.getClass(this.classes.sel)}${this.getClass(this.classes.opened)}`);
    if (selections.length) {
      selections.forEach(selection => {
        this.closeItem(selection);
      });
    }
  }
  // close single select item
  closeItem(select) {
    const relativeSel = this.getSelect(select).relativeSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel;
    if (!selOptions.classList.contains('_slide')) {
      select.classList.remove(this.classes.opened);
      if (!relativeSel.hasAttribute('data-no-slide')) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(selOptions, relativeSel.dataset.speed);
    }
  }
  // set single option actions
  setOptionAction(select, relativeSel, option) {
    if (relativeSel.multiple) {
      option.classList.toggle(this.classes.selected);
      const relativeSelections = this.getData(relativeSel).elements;
      relativeSelections.forEach(relativeSelection => {
        relativeSelection.removeAttribute('selected');
      });
      const twinSelections = select.querySelectorAll(this.getClass(this.classes.selected));
      twinSelections.forEach(twinSelection => {
        relativeSel.querySelector(`option[value="${twinSelection.dataset.optVal}"]`).setAttribute('selected', 'selected');
      });
      if (!option.classList.contains(this.classes.selected)) {
        console.log(relativeSel.querySelector(`option[value="${option.dataset.optVal}"]`));
        relativeSel.querySelector(`option[value="${option.dataset.optVal}"]`).removeAttribute('selected');
      }
    } else {
      select.querySelectorAll('.select__option').forEach(opt => opt.classList.remove(this.classes.selected));
      option.classList.add(this.classes.selected);
      if (!relativeSel.hasAttribute('data-show-selection')) {
        if (select.querySelector(`${this.getClass(this.classes.option)}[hidden]`)) {
          select.querySelector(`${this.getClass(this.classes.option)}[hidden]`).hidden = false;
        }
        option.hidden = true;
      }
      relativeSel.value = option.hasAttribute('data-opt-val') ? option.dataset.optVal : option.textContent;
      this.setAction(select);
    }
    this.setValue(select, relativeSel);
    this.setSelections(relativeSel);
  }
  // set search actions
  setSearchActions(select) {
    const _this = this;
    const selInput = this.getSelect(select, this.classes.inp).twinSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel.querySelectorAll(`.${this.classes.option}`);
    selInput.addEventListener('input', function () {
      selOptions.forEach(selOption => {
        if (selOption.textContent.toUpperCase().indexOf(selInput.value.toUpperCase()) >= 0) {
          selOption.hidden = false;
        } else {
          selOption.hidden = true;
        }
      });
      selOptions.hidden === true ? _this.setAction(select) : null;
    });
  }
  // set select subtitle
  setSubtitle(relativeSel) {}

  // validation -------------------------------------------------------------

  // add an error to a select
  addErr(relativeSel, select) {
    select.classList.add(this.classes.error);
    if (relativeSel.dataset.selError && !relativeSel.dataset.selHint) {
      relativeSel.parentElement.insertAdjacentHTML('beforeend', `<div class="select__hint">${relativeSel.dataset.selError}</div>`);
    }
  }
  // remove an error from a select
  removeErr(relativeSel, select) {
    if (select.classList.contains(this.classes.error)) {
      select.classList.remove(this.classes.error);
    }
    if (relativeSel.parentElement.querySelector('.select__hint') && !relativeSel.dataset.selHint) {
      relativeSel.parentElement.removeChild(relativeSel.parentElement.querySelector('.select__hint'));
    }
  }

  // utils ------------------------------------------------------------------

  // get custom class
  getClass(cssClass) {
    return `.${cssClass}`;
  }
  // get single select item
  getSelect(select, cssClass) {
    return {
      relativeSel: select.querySelector('select'),
      twinSel: select.querySelector(this.getClass(cssClass))
    };
  }
  // get selected item value
  getValue(select, relativeSel) {
    let attr,
      attrClass,
      titleVal = this.getData(relativeSel, 2).html;

    // set title value
    titleVal = titleVal.length ? titleVal : relativeSel.dataset.selLabel ? relativeSel.dataset.selLabel : '';

    // set active class to select if it contains any values
    if (this.getData(relativeSel).values.length) {
      select.classList.add(this.classes.active);
    } else {
      select.classList.remove(this.classes.active);
    }

    // set select label
    if (relativeSel.hasAttribute('data-sel-label')) {
      attr = relativeSel.dataset.selLabel ? ` data-sel-label="${relativeSel.dataset.selLabel}"` : ` data-sel-label="Выбор"`;
      attrClass = ` ${this.classes.label}`;
    }

    // push selections to the list inside of select title
    if (relativeSel.multiple && relativeSel.hasAttribute('data-sel-list')) {
      titleVal = this.getData(relativeSel).elements.map(option => `<span data-opt-id="${select.dataset.selId}" data-opt-val="${option.value}" class="_list-item">${this.getContent(option)}</span>`).join('');
      if (relativeSel.dataset.list && document.querySelector(relativeSel.dataset.list)) {
        document.querySelector(relativeSel.dataset.list).innerHTML = titleVal;
        if (relativeSel.hasAttribute('data-sel-search')) titleVal = false;
      }
    }

    // init select search
    if (relativeSel.hasAttribute('data-sel-search')) {
      return `<div class="${this.classes.title}"><span ${attr} class="${this.classes.val}"><input autocomplete="off" type="search" placeholder="${titleVal}" data-placeholder="${titleVal}" class="${this.classes.inp}"></span></div>`;
    } else {
      const customClass = this.getData(relativeSel).elements.length && this.getData(relativeSel).elements[0].dataset.optClass ? ` ${this.getData(relativeSel).elements[0].dataset.optClass}` : '';
      return `<button type="button" class="${this.classes.title}"><span ${attr ? attr : ''} class="${this.classes.val} ${attrClass ? attrClass : ''}"><span class="${this.classes.content}${customClass}">${titleVal}</span></span></button>`;
    }
  }
  // get options
  getOptions(relativeSel) {
    const selScroll = relativeSel.hasAttribute('data-sel-scroll') ? `data-simplebar` : '';
    let selScrollHeight = relativeSel.dataset.selScroll ? `style="max-height:${window.innerWidth > 768 ? relativeSel.dataset.selScroll : 150}px"` : '';
    let selOptions = Array.from(relativeSel.options);
    if (selOptions.length) {
      let selOptionsHTML = ``;
      if (this.getPlaceholder(relativeSel) && !this.getPlaceholder(relativeSel).show || relativeSel.multiple) {
        selOptions = selOptions.filter(option => option.value);
      }
      selOptionsHTML += selScroll ? `<div ${selScroll} ${selScrollHeight} class="${this.classes.scroll}">` : '';
      selOptions.forEach(option => {
        selOptionsHTML += this.getOption(option, relativeSel);
      });
      selOptionsHTML += selScroll ? `</div>` : '';
      return selOptionsHTML;
    }
  }
  // get option
  getOption(option, relativeSel) {
    const selections = option.selected && relativeSel.multiple ? ` ${this.classes.selected}` : '';
    const showSelection = option.selected && !relativeSel.hasAttribute('data-show-selection') && !relativeSel.multiple ? `hidden` : ``;
    const optionClass = option.dataset.optClass ? ` ${option.dataset.optClass}` : '';
    const optionLink = option.dataset.optionLink ? option.dataset.optionLink : false;
    const optionLinkTarget = option.hasAttribute('data-option-link-target') ? `target="_blank"` : '';
    let optionHTML = ``;
    optionHTML += optionLink ? `<a ${optionLinkTarget} ${showSelection} href="${optionLink}" data-opt-val="${option.value}" class="${this.classes.option}${optionClass}${selections}">` : `<button ${showSelection} class="${this.classes.option}${optionClass}${selections}" data-opt-val="${option.value}" type="button">`;
    optionHTML += this.getContent(option);
    optionHTML += optionLink ? `</a>` : `</button>`;
    return optionHTML;
  }
  // get select content
  getContent(option) {
    const optionData = option.dataset.optAsset ? `${option.dataset.optAsset}` : '';
    const optionDataHTML = optionData.indexOf('img') >= 0 ? `<img src="${optionData}" alt="">` : optionData;
    let optionContentHTML = ``;
    optionContentHTML += optionData ? `<span class="${this.classes.group}">` : '';
    optionContentHTML += optionData ? `<span class="${this.classes.asset}">` : '';
    optionContentHTML += optionData ? optionDataHTML : '';
    optionContentHTML += optionData ? `</span>` : '';
    optionContentHTML += optionData ? `<span class="${this.classes.txt}">` : '';
    optionContentHTML += option.textContent;
    optionContentHTML += optionData ? `</span>` : '';
    optionContentHTML += optionData ? `</span>` : '';
    return optionContentHTML;
  }
  // get select placeholder
  getPlaceholder(relativeSel) {
    const placeholder = Array.from(relativeSel.options).find(option => !option.value);
    if (placeholder) {
      placeholder.classList.add(this.classes.subtitle);
      return {
        value: placeholder.textContent,
        show: placeholder.hasAttribute('data-sel-ph-show'),
        label: {
          show: placeholder.hasAttribute('data-sel-ph'),
          text: placeholder.dataset.optPlaceholder
        }
      };
    }
  }
  // get selected options data
  getData(relativeSel) {
    let selections = [];
    if (relativeSel.multiple) {
      selections = Array.from(relativeSel.options).filter(option => option.value).filter(option => option.selected);
    } else {
      selections.push(relativeSel.options[relativeSel.selectedIndex]);
    }
    return {
      elements: selections.map(option => option),
      values: selections.filter(option => option.value).map(option => option.value),
      html: selections.map(option => this.getContent(option))
    };
  }

  // selections -------------------------------------------------------------

  // init selections
  initSelections(e) {
    const relativeSel = e.target;
    this.build(relativeSel);
    this.setSelections(relativeSel);
  }
  // set selections
  setSelections(relativeSel) {
    const select = relativeSel.parentElement;
    if (relativeSel.hasAttribute('data-submit') && relativeSel.value) {
      let tempButton = document.createElement('button');
      tempButton.type = 'submit';
      relativeSel.closest('form').append(tempButton);
      tempButton.click();
      tempButton.remove();
    }
    relativeSel.parentElement.classList.add(this.classes.filled);
    this.selection(select, relativeSel);
  }
  // custom select event (listen to any selections / mutations)
  selection(select, relativeSel) {
    document.dispatchEvent(new CustomEvent('selection', {
      detail: {
        select: relativeSel
      }
    }));
  }
}
new Select({});

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/libs/simplebar.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/libs/simplebar.css ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-simplebar] {
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
}

.simplebar-wrapper {
  overflow: hidden;
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
}

.simplebar-mask {
  direction: inherit;
  position: absolute;
  overflow: hidden;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: auto !important;
  height: auto !important;
  z-index: 0;
}

.simplebar-offset {
  direction: inherit !important;
  box-sizing: inherit !important;
  resize: none !important;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}

.simplebar-content-wrapper {
  direction: inherit;
  box-sizing: border-box !important;
  position: relative;
  display: block;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.simplebar-content-wrapper::-webkit-scrollbar,
.simplebar-hide-scrollbar::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.simplebar-content:after,
.simplebar-content:before {
  content: " ";
  display: table;
}

.simplebar-placeholder {
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  pointer-events: none;
}

.simplebar-height-auto-observer-wrapper {
  box-sizing: inherit !important;
  height: 100%;
  width: 100%;
  max-width: 1px;
  position: relative;
  float: left;
  max-height: 1px;
  overflow: hidden;
  z-index: -1;
  padding: 0;
  margin: 0;
  pointer-events: none;
  flex-grow: inherit;
  flex-shrink: 0;
  flex-basis: 0;
}

.simplebar-height-auto-observer {
  box-sizing: inherit;
  display: block;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 1000%;
  width: 1000%;
  min-height: 1px;
  min-width: 1px;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.simplebar-track {
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

[data-simplebar].simplebar-dragging {
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

[data-simplebar].simplebar-dragging .simplebar-content {
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

[data-simplebar].simplebar-dragging .simplebar-track {
  pointer-events: all;
}

.simplebar-scrollbar {
  position: absolute;
  left: 0;
  right: 0;
  min-height: 10px;
}

.simplebar-scrollbar:before {
  position: absolute;
  content: "";
  background: #000;
  border-radius: 7px;
  left: 2px;
  right: 2px;
  opacity: 0;
  transition: opacity 0.2s 0.5s linear;
}

.simplebar-scrollbar.simplebar-visible:before {
  opacity: 0.5;
  transition-delay: 0s;
  transition-duration: 0s;
}

.simplebar-track.simplebar-vertical {
  top: 0;
  width: 11px;
}

.simplebar-scrollbar:before {
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
}

.simplebar-track.simplebar-horizontal {
  left: 0;
  height: 11px;
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  right: auto;
  left: 0;
  top: 0;
  bottom: 0;
  min-height: 0;
  min-width: 10px;
  width: auto;
}

[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical {
  right: auto;
  left: 0;
}

.simplebar-dummy-scrollbar-size {
  direction: rtl;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  height: 500px;
  width: 500px;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: scrollbar !important;
}

.simplebar-dummy-scrollbar-size > div {
  width: 200%;
  height: 200%;
  margin: 10px 0;
}

.simplebar-hide-scrollbar {
  position: fixed;
  left: 0;
  visibility: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}`, "",{"version":3,"sources":["webpack://./src/scss/libs/simplebar.css"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,2BAAA;EACA,yBAAA;EACA,uBAAA;AACJ;;AACA;EACI,gBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;AAEJ;;AAAA;EACI,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,sBAAA;EACA,uBAAA;EACA,UAAA;AAGJ;;AADA;EACI,6BAAA;EACA,8BAAA;EACA,uBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;EACA,iCAAA;AAIJ;;AAFA;EACI,kBAAA;EACA,iCAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,wBAAA;AAKJ;;AAHA;;EAEI,aAAA;EACA,QAAA;EACA,SAAA;AAMJ;;AAJA;;EAEI,YAAA;EACA,cAAA;AAOJ;;AALA;EACI,gBAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AAQJ;;AANA;EACI,8BAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,UAAA;EACA,SAAA;EACA,oBAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;AASJ;;AAPA;EACI,mBAAA;EACA,cAAA;EACA,UAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,oBAAA;EACA,WAAA;AAUJ;;AARA;EACI,UAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,oBAAA;EACA,gBAAA;AAWJ;;AATA;EACI,oBAAA;EACA,2BAAA;EACA,yBAAA;EACA,wBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;AAYJ;;AAVA;EACI,oBAAA;EACA,2BAAA;EACA,yBAAA;EACA,wBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;AAaJ;;AAXA;EACI,mBAAA;AAcJ;;AAZA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,gBAAA;AAeJ;;AAbA;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;EACA,oCAAA;AAgBJ;;AAdA;EACI,YAAA;EACA,oBAAA;EACA,uBAAA;AAiBJ;;AAfA;EACI,MAAA;EACA,WAAA;AAkBJ;;AAhBA;EACI,QAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;AAmBJ;;AAjBA;EACI,OAAA;EACA,YAAA;AAoBJ;;AAlBA;EACI,WAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,aAAA;EACA,eAAA;EACA,WAAA;AAqBJ;;AAnBA;EACI,WAAA;EACA,OAAA;AAsBJ;;AApBA;EACI,cAAA;EACA,eAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,wCAAA;AAuBJ;;AArBA;EACI,WAAA;EACA,YAAA;EACA,cAAA;AAwBJ;;AAtBA;EACI,eAAA;EACA,OAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,wBAAA;AAyBJ","sourcesContent":["[data-simplebar] {\n    position: relative;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    align-items: flex-start;\n}\n.simplebar-wrapper {\n    overflow: hidden;\n    width: inherit;\n    height: inherit;\n    max-width: inherit;\n    max-height: inherit;\n}\n.simplebar-mask {\n    direction: inherit;\n    position: absolute;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: auto !important;\n    height: auto !important;\n    z-index: 0;\n}\n.simplebar-offset {\n    direction: inherit !important;\n    box-sizing: inherit !important;\n    resize: none !important;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 0;\n    margin: 0;\n    -webkit-overflow-scrolling: touch;\n}\n.simplebar-content-wrapper {\n    direction: inherit;\n    box-sizing: border-box !important;\n    position: relative;\n    display: block;\n    height: 100%;\n    width: auto;\n    max-width: 100%;\n    max-height: 100%;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n}\n.simplebar-content-wrapper::-webkit-scrollbar,\n.simplebar-hide-scrollbar::-webkit-scrollbar {\n    display: none;\n    width: 0;\n    height: 0;\n}\n.simplebar-content:after,\n.simplebar-content:before {\n    content: ' ';\n    display: table;\n}\n.simplebar-placeholder {\n    max-height: 100%;\n    max-width: 100%;\n    width: 100%;\n    pointer-events: none;\n}\n.simplebar-height-auto-observer-wrapper {\n    box-sizing: inherit !important;\n    height: 100%;\n    width: 100%;\n    max-width: 1px;\n    position: relative;\n    float: left;\n    max-height: 1px;\n    overflow: hidden;\n    z-index: -1;\n    padding: 0;\n    margin: 0;\n    pointer-events: none;\n    flex-grow: inherit;\n    flex-shrink: 0;\n    flex-basis: 0;\n}\n.simplebar-height-auto-observer {\n    box-sizing: inherit;\n    display: block;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1000%;\n    width: 1000%;\n    min-height: 1px;\n    min-width: 1px;\n    overflow: hidden;\n    pointer-events: none;\n    z-index: -1;\n}\n.simplebar-track {\n    z-index: 1;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    overflow: hidden;\n}\n[data-simplebar].simplebar-dragging {\n    pointer-events: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n[data-simplebar].simplebar-dragging .simplebar-content {\n    pointer-events: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n[data-simplebar].simplebar-dragging .simplebar-track {\n    pointer-events: all;\n}\n.simplebar-scrollbar {\n    position: absolute;\n    left: 0;\n    right: 0;\n    min-height: 10px;\n}\n.simplebar-scrollbar:before {\n    position: absolute;\n    content: '';\n    background: #000;\n    border-radius: 7px;\n    left: 2px;\n    right: 2px;\n    opacity: 0;\n    transition: opacity 0.2s 0.5s linear;\n}\n.simplebar-scrollbar.simplebar-visible:before {\n    opacity: 0.5;\n    transition-delay: 0s;\n    transition-duration: 0s;\n}\n.simplebar-track.simplebar-vertical {\n    top: 0;\n    width: 11px;\n}\n.simplebar-scrollbar:before {\n    top: 2px;\n    bottom: 2px;\n    left: 2px;\n    right: 2px;\n}\n.simplebar-track.simplebar-horizontal {\n    left: 0;\n    height: 11px;\n}\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar {\n    right: auto;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    min-height: 0;\n    min-width: 10px;\n    width: auto;\n}\n[data-simplebar-direction='rtl'] .simplebar-track.simplebar-vertical {\n    right: auto;\n    left: 0;\n}\n.simplebar-dummy-scrollbar-size {\n    direction: rtl;\n    position: fixed;\n    opacity: 0;\n    visibility: hidden;\n    height: 500px;\n    width: 500px;\n    overflow-y: hidden;\n    overflow-x: scroll;\n    -ms-overflow-style: scrollbar !important;\n}\n.simplebar-dummy-scrollbar-size > div {\n    width: 200%;\n    height: 200%;\n    margin: 10px 0;\n}\n.simplebar-hide-scrollbar {\n    position: fixed;\n    left: 0;\n    visibility: hidden;\n    overflow-y: scroll;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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
.txt20_caps, .select__option, .select__value {
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
  .txt20_caps, .select__option, .select__value {
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

.select {
  position: relative;
}
@media (min-width: 48em) {
  .select {
    min-width: 20.4rem;
  }
}
.select__body {
  position: relative;
}
.select__title {
  border-radius: 4rem;
  width: 100%;
  background-color: #cad2f4;
  cursor: pointer;
  text-align: left;
  color: inherit;
}
.select__value {
  padding: 1.4rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 5.2rem;
  width: 100%;
  font-family: DrukCyr;
}
.select__value > * {
  flex: 1 1 auto;
}
.select__value::after {
  content: "";
  flex: 0 0 2.4rem;
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(./assets/images/icons/arr.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}
._select-opened .select__value::after {
  transform: rotate(-180deg);
}
.select__value .select__content {
  max-width: 31.4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media (max-width: 48em) {
  .select__value {
    padding: 1.8rem 4rem;
    height: 8rem;
  }
  .select__value::after {
    flex: 0 0 5rem;
    width: 5rem;
    height: 5rem;
  }
}
.select__text {
  flex: 1 1 auto;
}
.select__input {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.select__options {
  position: absolute;
  z-index: 2;
  top: calc(100% + 0.4rem);
  left: 0;
  padding: 1.2rem 2.8rem 2rem 1.2rem;
  min-width: 100%;
  box-shadow: 0 0.8rem 2.5rem 0 rgba(99, 119, 156, 0.2);
  border-radius: 4rem;
  background-color: #cad2f4;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.dropdown_sort .select__options {
  background-color: #ffffff;
}
._select-opened .select__options {
  opacity: 1;
  visibility: visible;
}
.select__scroll {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 23.4rem;
}
.select__scroll.simplebar-scrollable-y .simplebar-track.simplebar-vertical {
  top: 5rem;
  right: 0;
  width: 0.4rem;
  border-radius: 0.8rem;
  background-color: rgba(255, 255, 255, 0.4);
}
.select__scroll.simplebar-scrollable-y .simplebar-scrollbar {
  min-height: 3.2rem;
  border-radius: 0.8rem;
  background-color: #ffffff;
}
@media (max-width: 48em) {
  .select__scroll {
    max-height: 40rem;
  }
}
.select__option {
  width: 95%;
  padding: 1.2rem 3rem;
  border-radius: 4rem;
  font-family: DrukCyr;
  text-align: left;
  color: inherit;
  transition: background-color 0.3s ease;
}
.select__option._select-selected {
  background-color: #ffffff;
}
.dropdown_sort .select__option._select-selected {
  background-color: #cad2f4;
}
.select__option:not(:last-child) {
  position: relative;
  margin-bottom: 1rem;
}
.select__option:not(:last-child)::after {
  content: "";
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgb(204, 213, 251);
}
@media (any-hover: hover) {
  .select__option:hover:not(.select__option:hover.select__subtitle) {
    cursor: pointer;
    background-color: #ffffff;
  }
  .dropdown_sort .select__option:hover:not(.select__option:hover.select__subtitle) {
    background-color: #cad2f4;
  }
}

._select-list {
  cursor: pointer;
}

.option {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  cursor: pointer;
}
.option__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}
.option__input:checked + .option__label .option__text::before {
  border: 2px solid #c9fb40;
}
.option__input:checked + .option__label .option__text::after {
  transform: scale(0.6);
}
.option__text {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}
.option__text::before {
  content: "";
  align-self: flex-start;
  flex: 0 0 3rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid rgb(233, 233, 233);
  transition: border 0.3s ease;
}
.option__text::after {
  content: "";
  position: absolute;
  left: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #c9fb40;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}
@media (max-width: 48em) {
  .option__text::before, .option__text::after {
    width: 4rem;
    height: 4rem;
  }
  .option__text::before {
    flex: 0 0 4rem;
  }
  .option__text::after {
    top: 4rem;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/fonts.scss","webpack://./src/scss/style.scss","webpack://./src/scss/set.scss","webpack://./src/ui/typo.scss","webpack://./src/ui/buttons.scss","webpack://./src/ui/inputs.scss","webpack://./src/ui/tabs.scss","webpack://./src/ui/accordion.scss","webpack://./src/ui/select.scss","webpack://./src/ui/radio-btns.scss","webpack://./src/scss/components/_main-collections.scss","webpack://./src/scss/components/_main-links.scss","webpack://./src/scss/components/_main-rates.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'DrukCyr';\n  font-weight: 500;\n  src: url('./assets/fonts/DrukCyr-Medium.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: 'EuclidCircularA';\n  font-weight: 400;\n  src: url('./assets/fonts/EuclidCircularA-Regular.woff') format('woff');\n}\n\n@font-face {\n  font-family: 'EuclidCircularA';\n  font-weight: 500;\n  src: url('./assets/fonts/EuclidCircularA-Medium.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: 'EuclidCircularA';\n  font-weight: 600;\n  src: url('./assets/fonts/EuclidCircularA-SemiBold.woff2') format('woff2');\n}\n","// --------------------------------- mixins ---------------------------------\n\n@import './mixins';\n\n// -------------------------------- variables -------------------------------\n\n$font: 'EuclidCircularA';\n\n// colors\n$white: #ffffff;\n$black: #000000;\n$bodyColor: #1f1f22;\n$pink: #ed89fb;\n$violet: #cad2f4;\n$green: #c9fb40;\n$yellow: #fad85d;\n$darkGray: #6a6a6a;\n$main: #282828;\n$red: #ff1212;\n\n// ---------------------------------- fonts ---------------------------------\n\n// local fonts\n@import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// body\nbody {\n    &.lock {\n        overflow: hidden;\n        touch-action: none;\n    }\n}\n\n// main\nmain {\n    padding-top: 6.7rem;\n    @media (max-width: 48em) {\n        main {\n            padding-top: 12.6rem;\n        }\n    }\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './components/_header';\n\n// ui\n@import '../ui/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n","*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: 'EuclidCircularA'; // шрифт по умолчанию по сайту\n  font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n  font-style: normal;\n  font-weight: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-style: normal;\n  font-weight: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  color: $black; // цвет по умолчанию текста по сайту\n  background-color: $white;\n}\n\ninput,\ntextarea {\n  -webkit-animation: bugfix infinite 1s;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  color: inherit;\n}\na {\n  color: unset;\n}\na,\na:hover {\n  text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n  outline: none;\n  cursor: pointer;\n  font: inherit;\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    outline: none;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: inherit;\n  margin: 0;\n  padding: 0;\n}\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\nbutton {\n  border: none;\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n  padding: 0;\n  background-color: transparent;\n}\nul {\n  padding: 0;\n  margin: 0;\n}\n\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.container {\n  width: 141rem;\n  margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n@media (min-width: 1920px) {\n  html {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 48em) {\n  html {\n    font-size: 5px;\n    font-size: 1.5625vw;\n    font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n    -webkit-text-size-adjust: none;\n  }\n\n  body {\n    -webkit-text-size-adjust: none;\n  }\n\n  .container {\n    padding: 0 4rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n    width: 100%;\n  }\n}\n",".tl1,\n.tl2,\n.tl3 {\n  font-family: DrukCyr;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.tl1 {\n  font-size: 20rem;\n  line-height: 117%;\n  @media (max-width: 48em) {\n    font-size: 11rem;\n    line-height: 110%;\n  }\n}\n\n.tl2 {\n  line-height: 110%;\n  font-size: 10rem;\n}\n\n.tl3 {\n  font-size: 6rem;\n  line-height: 110%;\n  @media (max-width: 48em) {\n    font-size: 4rem;\n    letter-spacing: 0.32rem;\n  }\n}\n\n// --------------------------------------------------------------------------\n\n.txt32 {\n  font-size: 3.2rem;\n  @media (max-width: 48em) {\n    font-size: 3rem;\n    line-height: 140%;\n  }\n}\n\n.txt20 {\n  font-family: DrukCyr;\n  font-size: 2.8rem;\n  &_caps {\n    font-size: 4rem;\n    line-height: 110%;\n    letter-spacing: 0.32rem;\n    text-transform: uppercase;\n  }\n  &_md {\n    font-weight: 500;\n  }\n  @media (min-width: 48em) {\n    font-size: 2rem;\n    line-height: 140%;\n    &_caps {\n      font-size: 2.2rem;\n      font-weight: 500;\n      line-height: 109.091%;\n      letter-spacing: 0.176rem;\n    }\n  }\n}\n\n.txt28 {\n  &_md {\n    font-size: 2.8rem;\n    font-weight: 500;\n    @media (max-width: 48em) {\n      font-size: 3.6rem;\n    }\n  }\n}\n\n.txt16 {\n  font-size: 1.6rem;\n  @media (max-width: 48em) {\n    font-size: 2.4rem;\n  }\n}\n",".btn {\n  padding: 1.3rem 1rem 1.3rem 2.8rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 2.2rem;\n  border-radius: 9.5rem;\n  border: 1px solid $green;\n  transition: background-color 0.3s ease;\n  @media (any-hover: hover) {\n    &:hover {\n      background-color: $green;\n      .btn__text {\n        color: $white;\n      }\n      .btn__icon {\n        path {\n          fill: $white;\n        }\n      }\n    }\n  }\n  @media (max-width: 48em) {\n    padding: 3rem 3.6rem 3rem 6rem;\n    column-gap: 3.2rem;\n    border-radius: 19rem;\n  }\n\n  // .btn__text\n  &__text {\n    color: $green;\n    transition: color 0.3s ease;\n  }\n\n  // .btn__icon\n  &__icon {\n    flex: 0 0 2.4rem;\n    width: 2.4rem;\n    height: 2.4rem;\n    path {\n      transition: fill 0.3s ease;\n    }\n    @media (max-width: 48em) {\n      flex: 0 0 5rem;\n      width: 5rem;\n      height: 5rem;\n    }\n  }\n}\n// <button type=\"button\" class=\"btn\">\n//       <span class=\"btn__text txt20 txt20_caps\">ОСТАВИТЬ ЗАЯВКУ</span>\n//       <svg\n//         class=\"btn__icon\"\n//         xmlns=\"http://www.w3.org/2000/svg\"\n//         width=\"24\"\n//         height=\"24\"\n//         viewBox=\"0 0 24 24\"\n//         fill=\"none\">\n//         <path\n//           d=\"M6.75586 19.2442V5.11624L17.1164 12.1802L6.75586 19.2442Z\"\n//           fill=\"#C9FB40\" />\n//       </svg>\n// </button>\n\n// --------------------------------------------------------------------------\n\n.showmore-btn {\n  display: flex;\n  align-items: center;\n  column-gap: 1.6rem;\n  @media (any-hover: hover) {\n    &:hover {\n      .showmore-btn__icon {\n        circle {\n          fill: $white;\n        }\n        path {\n          fill: $pink;\n        }\n      }\n    }\n  }\n  @media (max-width: 48em) {\n    column-gap: 2.4rem;\n  }\n\n  // .showmore-btn__icon\n\n  &__icon {\n    flex: 0 0 5.2rem;\n    width: 5.2rem;\n    height: 5.2rem;\n    border-radius: 50%;\n    circle,\n    path {\n      transition: fill 0.3s ease;\n    }\n    @media (max-width: 48em) {\n      flex: 0 0 8rem;\n      width: 8rem;\n      height: 8rem;\n    }\n  }\n\n  // .showmore-btn__text\n\n  &__text {\n    color: $pink;\n  }\n}\n// <button type=\"button\" class=\"showmore-btn\">\n//       <svg\n//         class=\"showmore-btn__icon\"\n//         width=\"52\"\n//         height=\"52\"\n//         viewBox=\"0 0 52 52\"\n//         fill=\"none\"\n//         xmlns=\"http://www.w3.org/2000/svg\">\n//         <circle cx=\"26\" cy=\"26\" r=\"26\" fill=\"#ED89FB\" />\n//         <path\n//           d=\"M31.6912 24.995C32.1412 25.895 32.3737 26.8625 32.3737 27.875C32.3737 31.3925 29.5162 34.25 25.9987 34.25C22.4812 34.25 19.6237 31.3925 19.6237 27.875C19.6237 24.3575 22.4812 21.5 25.9987 21.5C26.0512 21.5 26.1787 21.5 26.3137 21.545C26.5687 21.6275 26.7562 21.845 26.8087 22.1075C27.1237 23.615 28.4662 24.7175 30.0112 24.7175C30.2962 24.7175 30.5737 24.68 30.8137 24.6125C31.1662 24.515 31.5262 24.68 31.6912 24.995ZM25.9987 17.75C20.8687 17.75 15.6112 22.25 14.7562 27.3725C14.6887 27.7775 14.9662 28.1675 15.3712 28.235C15.7762 28.3025 16.1662 28.025 16.2337 27.62C16.9012 23.6675 21.2137 19.25 25.9987 19.25C30.7837 19.25 35.0962 23.6675 35.7562 27.62C35.8162 27.9875 36.1387 28.25 36.4987 28.25C36.5362 28.25 36.5812 28.25 36.6262 28.2425C37.0312 28.175 37.3087 27.785 37.2412 27.38C36.3862 22.25 31.1287 17.75 25.9987 17.75Z\"\n//           fill=\"white\" />\n//       </svg>\n//       <span class=\"showmore-btn__text txt20 txt20_caps\"\n//         >СМОТРЕТЬ ДЕТАЛЬНЕЕ</span\n//       >\n// </button>\n\n// --------------------------------------------------------------------------\n\n.link {\n  position: relative;\n  &::after {\n    content: '';\n    position: absolute;\n    top: calc(100% + 0.6rem);\n    left: 0;\n    width: 100%;\n    height: 2px;\n    background-color: $black;\n    transform-origin: center;\n    transform: scaleX(1);\n    transition: transform 0.3s ease;\n  }\n  @media (any-hover: hover) {\n    &:hover {\n      &::after {\n        transform: scaleX(0.25);\n      }\n    }\n  }\n  @media (max-width: 48em) {\n    &::after {\n      top: calc(100% + 1.2rem);\n    }\n  }\n\n  // .link__text\n\n  &__text {\n  }\n}\n// <a href=\"#\" class=\"link\"\n// ><span class=\"link__text txt20 txt20_caps\">ЗАГРУЗИТЬ ЕЩЕ</span></a\n// >\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\ntextarea:focus,\ninput:focus {\n  outline: none;\n}\n\n.input {\n  position: relative;\n\n  &._form-focus {\n  }\n  &._form-error {\n    .input__field {\n      border-bottom: 1px solid $red;\n    }\n  }\n\n  // .input__field\n  &__field {\n    padding-bottom: 1.4rem;\n    display: block;\n    width: 100%;\n    border-radius: 0 !important;\n    border-bottom: 1px solid $black;\n    font-family: EuclidCircularA;\n    line-height: 1;\n    color: $black;\n    transition: border-bottom 0.3s ease;\n    &::placeholder {\n      color: $black;\n    }\n    @media (max-width: 48em) {\n      padding-bottom: 3rem;\n    }\n  }\n}\n\ntextarea.input {\n  padding: 0;\n  resize: none;\n}\n\n.form-error {\n  position: absolute;\n  top: calc(100% + 0.9rem);\n  left: 0;\n  color: $red;\n  @media (max-width: 48em) {\n    top: calc(100% + 1.8rem);\n  }\n}\n\n// <div class=\"input\">\n//           <input\n//             autocomplete=\"off\"\n//             type=\"text\"\n//             name=\"form[]\"\n//             data-error=\"Подсказка\"\n//             placeholder=\"Имя *\"\n//             class=\"input__field txt20 txt20_md\" />\n",".tabs {\n  // .tabs__navigation\n\n  &__navigation {\n    display: flex;\n    column-gap: 2rem;\n  }\n\n  // .tabs__title\n\n  &__title {\n  }\n\n  // .tabs__content\n\n  &__content {\n  }\n\n  // .tabs__body\n\n  &__body {\n  }\n}\n\n.tab {\n  padding: 1.6rem 3.3rem 1.9rem 3.3rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid $black;\n  border-radius: 4rem;\n  text-align: center;\n  transition: background-color 0.3s ease;\n  &._active {\n    background-color: $green;\n  }\n  @media (max-width: 48em) {\n    padding: 1.8rem 5rem;\n  }\n}\n\n// <div data-tabs class=\"tabs\">\n// <nav data-tabs-titles class=\"tabs__navigation\">\n//   <button type=\"button\" class=\"tabs__title txt20 txt20_caps tab _active\">\n//     Таб №1\n//   </button>\n//   <button type=\"button\" class=\"tabs__title txt20 txt20_caps tab\">Таб №2</button>\n//   <button type=\"button\" class=\"tabs__title txt20 txt20_caps tab\">Таб №3</button>\n// </nav>\n// <div data-tabs-body class=\"tabs__content\">\n//   <div class=\"tabs__body\">Содержимое первого таба</div>\n//   <div class=\"tabs__body\">Содержимое второго таба</div>\n//   <div class=\"tabs__body\">Содержимое третьего таба</div>\n// </div>\n// </div>\n",".accordion {\n  // .accordion__item\n\n  &__item {\n    border-radius: 4rem;\n    background-color: $green;\n  }\n\n  // .accordion__title\n\n  &__title {\n    padding: 3.2rem 3.2rem 3.2rem 4rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    &._accordion-active {\n      .accordion__title-icon {\n        transform: rotate(-180deg);\n      }\n    }\n    @media (max-width: 48em) {\n      padding: 4rem;\n    }\n  }\n\n  // .accordion__title-icon\n\n  &__title-icon {\n    flex: 0 0 5rem;\n    width: 5rem;\n    height: 5rem;\n    transition: transform 0.3s ease;\n    @media (max-width: 48em) {\n      flex: 0 0 8rem;\n      width: 8rem;\n      height: 8rem;\n    }\n  }\n\n  // .accordion__title-txt\n\n  &__title-txt {\n  }\n\n  // .accordion__body\n\n  &__body {\n    padding: 4rem 3.2rem;\n    padding-top: 0;\n    @media (max-width: 48em) {\n      padding: 4rem;\n      padding-top: 0;\n    }\n  }\n\n  // .accordion__text\n\n  &__text {\n    font-family: EuclidCircularA;\n    max-width: 72.6rem;\n    @media (max-width: 48em) {\n      max-width: 62.2rem;\n    }\n  }\n}\n\n// <div data-accordion data-accordion-one-active class=\"accordion\">\n//           <div class=\"accordion__item\">\n//             <button type=\"button\" data-accordion-item class=\"accordion__title\">\n//               <svg\n//                 class=\"accordion__title-icon\"\n//                 width=\"52\"\n//                 height=\"52\"\n//                 viewBox=\"0 0 52 52\"\n//                 fill=\"none\"\n//                 xmlns=\"http://www.w3.org/2000/svg\">\n//                 <circle cx=\"26\" cy=\"26\" r=\"26\" fill=\"#1F1F22\" />\n//                 <path\n//                   d=\"M18.872 21L33 21L25.936 31.3605L18.872 21Z\"\n//                   fill=\"white\" />\n//               </svg>\n//               <span class=\"accordion__title-txt tl3\">Качество</span>\n//             </button>\n//             <div class=\"accordion__body\">\n//               <p class=\"accordion__text txt20\">\n//                 Мы придерживаемся высочайших стандартов и регулярно обновляем\n//                 наши навыки и техники, чтобы удовлетворить все потребности и\n//                 ожидания наших клиентов.\n//               </p>\n//             </div>\n//           </div>\n//         </div>\n",".select {\n    position: relative;\n    @media (min-width: 48em) {\n        min-width: 20.4rem;\n    }\n\n    // .select__body\n\n    &__body {\n        position: relative;\n    }\n\n    // .select__title\n\n    &__title {\n        border-radius: 4rem;\n        width: 100%;\n        background-color: $violet;\n        cursor: pointer;\n        text-align: left;\n        color: inherit;\n    }\n\n    // .select__value\n\n    &__value {\n        @extend .txt20_caps;\n        padding: 1.4rem 2.4rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 1rem;\n        height: 5.2rem;\n        width: 100%;\n        font-family: DrukCyr;\n\n        > * {\n            flex: 1 1 auto;\n        }\n\n        &::after {\n            content: '';\n            flex: 0 0 2.4rem;\n            width: 2.4rem;\n            height: 2.4rem;\n            background-image: url(./assets/images/icons/arr.svg);\n            background-size: contain;\n            background-position: center;\n            background-repeat: no-repeat;\n            transition: transform 0.3s ease;\n            ._select-opened & {\n                transform: rotate(-180deg);\n            }\n        }\n        .select__content {\n            max-width: 31.4rem;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n        @media (max-width: 48em) {\n            padding: 1.8rem 4rem;\n            height: 8rem;\n            &::after {\n                flex: 0 0 5rem;\n                width: 5rem;\n                height: 5rem;\n            }\n        }\n    }\n\n    // .select__content\n\n    &__content {\n        // hide / show selected value\n        // display: none;\n    }\n\n    // .select__text\n\n    &__text {\n        flex: 1 1 auto;\n    }\n\n    // .select__input\n\n    &__input {\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n    }\n\n    // .select__options\n\n    &__options {\n        position: absolute;\n        z-index: 2;\n        top: calc(100% + 0.4rem);\n        left: 0;\n        padding: 1.2rem 2.8rem 2rem 1.2rem;\n        min-width: 100%;\n        box-shadow: 0 0.8rem 2.5rem 0 rgba(99, 119, 156, 0.2);\n        border-radius: 4rem;\n        background-color: $violet;\n        opacity: 0;\n        visibility: hidden;\n        transition: opacity 0.3s ease, visibility 0.3s ease;\n        .dropdown_sort & {\n            background-color: $white;\n        }\n        ._select-opened & {\n            opacity: 1;\n            visibility: visible;\n        }\n    }\n\n    // .select__scroll\n\n    &__scroll {\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        // maximum height\n        max-height: 23.4rem;\n\n        // scrollbar styles\n        &.simplebar-scrollable-y {\n            .simplebar-track.simplebar-vertical {\n                top: 5rem;\n                right: 0;\n                width: 0.4rem;\n                border-radius: 0.8rem;\n                background-color: rgba(255, 255, 255, 0.4);\n            }\n            .simplebar-scrollbar {\n                min-height: 3.2rem;\n                border-radius: 0.8rem;\n                background-color: $white;\n            }\n        }\n        @media (max-width: 48em) {\n            max-height: 40rem;\n        }\n    }\n    // .select__option\n    &__option {\n        @extend .txt20_caps;\n        width: 95%;\n        padding: 1.2rem 3rem;\n        border-radius: 4rem;\n        font-family: DrukCyr;\n        text-align: left;\n        color: inherit;\n        transition: background-color 0.3s ease;\n        &._select-selected {\n            background-color: $white;\n            .dropdown_sort & {\n                background-color: $violet;\n            }\n        }\n        &:not(:last-child) {\n            position: relative;\n            margin-bottom: 1rem;\n            &::after {\n                content: '';\n                position: absolute;\n                top: calc(100% + 0.5rem);\n                left: 0;\n                width: 100%;\n                height: 1px;\n                background-color: rgba(204, 213, 251, 1);\n            }\n        }\n        @media (any-hover: hover) {\n            &:hover {\n                &:not(&.select__subtitle) {\n                    cursor: pointer;\n                    background-color: $white;\n                    .dropdown_sort & {\n                        background-color: $violet;\n                    }\n                }\n            }\n        }\n    }\n}\n// list\n._select-list {\n    cursor: pointer;\n}\n\n// <div class=\"dropdown dropdown_filters\">\n// <select data-no-slide data-show-selection data-sel-scroll=\"234\">\n//     <option value=\"1\" selected>Пункт №1</option>\n//     <option value=\"2\">Пункт №2</option>\n//     <option value=\"3\">Пункт №3</option>\n//     <option value=\"4\">Пункт №4</option>\n//     <option value=\"5\">Пункт №5</option>\n//     <option value=\"6\">Пункт №6</option>\n//     <option value=\"7\">Пункт №7</option>\n// </select>\n// </div>\n\n// <div class=\"dropdown dropdown_sort\">\n//      <select data-show-selection>\n//           <option value=\"1\" selected>Пункт №1</option>\n//           <option value=\"2\">Пункт №2</option>\n//           <option value=\"3\">Пункт №3</option>\n//           <option value=\"4\">Пункт №4</option>\n//      </select>\n// </div>\n",".option {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    row-gap: 0.4rem;\n    cursor: pointer;\n\n    // .option__input\n    &__input {\n        position: absolute;\n        width: 0;\n        height: 0;\n        opacity: 0;\n        &:checked + .option__label .option__text::before {\n            border: 2px solid $green;\n        }\n        &:checked + .option__label .option__text::after {\n            transform: scale(0.6);\n        }\n    }\n\n    // .option__text\n    &__text {\n        display: inline-flex;\n        align-items: center;\n        gap: 1rem;\n        cursor: pointer;\n        &::before {\n            content: '';\n            align-self: flex-start;\n            flex: 0 0 3rem;\n            width: 3rem;\n            height: 3rem;\n            border-radius: 50%;\n            border: 2px solid rgba(233, 233, 233);\n            transition: border 0.3s ease;\n        }\n        &::after {\n            content: '';\n            position: absolute;\n            left: 0;\n            width: 3rem;\n            height: 3rem;\n            border-radius: 50%;\n            background-color: $green;\n            transform: scale(0);\n            transform-origin: center;\n            transition: transform 0.3s ease;\n        }\n        @media (max-width: 48em) {\n            &::before,\n            &::after {\n                width: 4rem;\n                height: 4rem;\n            }\n            &::before {\n                flex: 0 0 4rem;\n            }\n            &::after {\n                top: 4rem;\n            }\n        }\n    }\n}\n\n// <div class=\"option\">\n//    <input hidden id=\"o_1\" class=\"option__input\" checked type=\"radio\" value=\"1\" name=\"option\"/>\n//    <label for=\"o_1\" class=\"option__label\"><span class=\"option__text\"></span></label>\n//  </div>\n",".main-collection {\n  background-color: #cad2f4;\n  padding: 16rem 0;\n  // .main-collection__inner\n  &__inner {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8rem;\n  }\n  // .main-collection__cards\n  &__cards.swiper {\n    position: relative;\n    width: 83.6rem;\n    height: 73.3rem;\n    margin: 0;\n  }\n  &__cards-item.swiper-slide {\n    width: 51.5rem;\n    height: 51.5rem;\n    border-radius: 4rem;\n    position: absolute;\n    padding: 1.2rem;\n    overflow: hidden;\n  }\n  // .main-collection__title\n  &__title {\n    color: #1f1f22;\n    font-family: 'DrukCyr';\n    font-size: 10rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 110%; /* 110px */\n    text-transform: uppercase;\n    margin-bottom: 2rem;\n\n    width: 69.5rem;\n  }\n  // .main-collection__description\n  &__description {\n    color: #6a6a6a;\n    font-size: 2rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%; /* 28px */\n    margin-bottom: 5rem;\n    width: 61.8rem;\n  }\n}\n.collection-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  &--rat {\n    top: 0;\n    left: 0;\n    z-index: 2;\n\n    background: linear-gradient(\n      223deg,\n      #8792ed 1.18%,\n      #5f6eda 34.96%,\n      #6778df 68.58%,\n      #8792ed 100%\n    );\n  }\n  &--snail {\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n\n    background: linear-gradient(\n      226deg,\n      #455265 0%,\n      #11161e 40.66%,\n      #11161e 60.6%,\n      #455265 103.07%\n    );\n  }\n\n  // .collection-item__header\n  &__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  // .collection-item__title\n  &__title {\n    display: flex;\n    flex-direction: column;\n    padding-left: 1.2rem;\n\n    strong {\n      color: $white;\n      text-align: left;\n      font-size: 2.8rem;\n      font-style: normal;\n      font-weight: 500;\n      line-height: normal;\n    }\n\n    span {\n      color: $white;\n      text-align: left;\n      font-size: 2rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 140%; /* 28px */\n    }\n  }\n  // .collection-item__icons\n  &__icons {\n    display: flex;\n    align-items: center;\n    gap: 0.7rem;\n    &-item {\n      width: 8rem;\n      height: 8rem;\n      border-radius: 50%;\n      background: rgba(255, 255, 255, 0.3);\n      backdrop-filter: blur(13px);\n\n      color: #fff;\n      text-align: center;\n      font-size: 2rem;\n      line-height: 140%; /* 28px */\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      svg {\n        display: block;\n        width: 4.4rem;\n        height: 4.4rem;\n      }\n    }\n  }\n  // .collection-item__footer\n  &__footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    &-item {\n      display: flex;\n      width: 24.1rem;\n      height: 6.8rem;\n      padding: 1.6rem;\n      justify-content: center;\n      align-items: center;\n      border-radius: 5.2rem;\n\n      &--left {\n        background: rgba(255, 255, 255, 0.3);\n        backdrop-filter: blur(30px);\n\n        color: $white;\n        text-align: center;\n        font-size: 2rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 140%; /* 28px */\n      }\n      &--right {\n        background: $white;\n        backdrop-filter: blur(11.5px);\n        align-self: flex-end;\n\n        color: #1f1f22;\n        font-size: 2rem;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 140%; /* 28px */\n\n        strong {\n          color: #1f1f22;\n          font-size: 2.8rem;\n          font-style: normal;\n          font-weight: 500;\n          line-height: normal;\n          margin: 0 0.5rem;\n          align-self: center;\n        }\n        span {\n          align-self: flex-end;\n          margin-bottom: 0.2rem;\n        }\n        sup {\n          align-self: flex-start;\n        }\n      }\n    }\n  }\n  // .collection-item__backdrop\n  &__backdrop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    padding: 3.2rem;\n\n    img {\n      width: 100%;\n      height: auto;\n      object-fit: contain;\n    }\n  }\n}\n\n@media (max-width: 48em) {\n  .main-collection {\n    padding: 10rem 0;\n    &__container {\n      padding: 0;\n    }\n    // .main-collection__inner\n    &__inner {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      justify-content: space-between;\n      gap: 6.4rem;\n    }\n    // .main-collection__cards\n    &__cards.swiper {\n      order: 2;\n      position: relative;\n      width: 100%;\n      height: auto;\n      margin: 0;\n      padding: 0 2rem;\n    }\n    &__cards-item.swiper-slide {\n      width: 65.8rem;\n      height: 67rem;\n      border-radius: 4rem;\n      position: static;\n      padding: 2.4rem;\n      overflow: hidden;\n    }\n    // .main-collection__info\n    &__info {\n      order: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: 0 2rem;\n    }\n    // .main-collection__title\n    &__title {\n      width: 90%;\n      text-align: center;\n      margin-bottom: 2.4rem;\n    }\n    // .main-collection__description\n    &__description {\n      font-size: 2.8rem;\n      text-align: center;\n      margin-bottom: 6.4rem;\n      width: 93%;\n    }\n  }\n  .collection-item {\n    // .collection-item__title\n    &__title {\n      padding-left: 0;\n\n      strong {\n        font-size: 3.6rem;\n        margin-bottom: 1rem;\n        line-height: normal;\n      }\n\n      span {\n        font-size: 2.8rem;\n        line-height: normal; /* 28px */\n      }\n    }\n    // .collection-item__icons\n    &__icons {\n      gap: 1rem;\n      &-item {\n        font-size: 3rem;\n        svg {\n          width: 4.6rem;\n          height: 4.6rem;\n        }\n      }\n    }\n    // .collection-item__footer\n    &__footer {\n      &-item {\n        display: flex;\n        width: 30rem;\n        height: 8.8rem;\n        padding: 2.4rem;\n        border-radius: 4rem;\n\n        &--left {\n          font-size: 2.8rem;\n        }\n        &--right {\n          font-size: 3rem;\n          font-style: normal;\n          font-weight: 400;\n          line-height: 140%; /* 28px */\n\n          strong {\n            font-size: 3.6rem;\n            margin: 0 0.5rem;\n            align-self: center;\n          }\n          span {\n            line-height: 1.1;\n            margin-bottom: 0;\n          }\n          sup {\n            line-height: 1.1;\n          }\n        }\n      }\n    }\n  }\n}\n",".main-links {\n  margin-top: 5.2rem;\n  margin-bottom: 0;\n  // .main-links__list\n  &__list {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  // .main-links__item\n  &__item {\n    width: 100%;\n    text-align: center;\n    color: $white;\n    font-family: 'DrukCyr';\n    font-size: 10rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    transition: background 0.3s linear, color 0.3s linear;\n\n    border-top: 0.1rem solid rgba(201, 243, 43, 0.5);\n\n    &:hover {\n      transition: background 0.3s linear, color 0.3s linear;\n      background-color: $yellow;\n      color: $main;\n    }\n    a {\n      display: block;\n      width: 100%;\n      padding: 0.6rem 0;\n    }\n    &--big {\n      font-size: 19.9646rem;\n      line-height: 23.387rem; /* 117.143% */\n\n      a {\n        padding: 1.8rem 0 3.4rem;\n      }\n    }\n  }\n}\n\n@media (max-width: 48em) {\n  .main-links {\n    margin-top: 0;\n    margin-bottom: 7.6rem;\n    // .main-links__list\n    &__list {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n    }\n    // .main-links__item\n    &__item {\n      line-height: 110%;\n      border-top: 0.2rem solid rgba(201, 243, 43, 0.5);\n      a {\n        padding: 2.4rem 0;\n      }\n      &--big {\n        font-size: 11rem;\n        line-height: 110%; /* 117.143% */\n\n        a {\n          padding: 2.4rem 0;\n        }\n      }\n    }\n  }\n}\n",".main-rates {\n  // .main-rates__inner\n  &__inner {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 9rem;\n  }\n  // .main-rates__title\n  &__title {\n    color: $white;\n    font-family: 'DrukCyr';\n    font-size: 10rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 110%; /* 110px */\n    text-transform: uppercase;\n  }\n  // .main-rates__wrapper\n  &__wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n    width: 100%;\n  }\n  // .main-rates__item\n  &__item {\n    height: 18rem;\n    display: flex;\n    align-items: center;\n    border-radius: 3rem;\n  }\n}\n.rates-item {\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    width: 5.1rem;\n    height: 5.1rem;\n    border-radius: 50%;\n    background: #1f1f22;\n\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  &::after {\n    right: -2.5rem;\n  }\n  &::before {\n    left: -2.5rem;\n  }\n  &--bg--pink {\n    background: #ff69c2;\n  }\n  &--bg--blue {\n    background: #cad2f4;\n  }\n  &--bg--green {\n    background: $green;\n  }\n  // .rates-item__left\n  &__left {\n    padding: 3.6rem 3.6rem 3.6rem 8.6rem;\n    height: 100%;\n    width: 57.8rem;\n    display: flex;\n    align-items: center;\n    border-right: 0.3rem dashed $main;\n  }\n  // .rates-item__title\n  &__title {\n    color: #1f1f22;\n    font-size: 2.8rem;\n    font-weight: 500;\n    line-height: normal;\n  }\n  // .rates-item__right\n  &__right {\n    display: flex;\n    align-items: center;\n    gap: 20.2rem;\n    height: 100%;\n    padding-left: 9.3rem;\n  }\n  // .rates-item__price\n  &__price {\n    &-top {\n      color: #1f1f22;\n      font-size: 2rem;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 140%; /* 28px */\n\n      strong {\n        color: #1f1f22;\n        font-size: 2.8rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n        margin: 0 0.5rem;\n        align-self: center;\n      }\n      span {\n        align-self: flex-end;\n        margin-bottom: 0.2rem;\n      }\n      sup {\n        align-self: flex-start;\n      }\n    }\n    &-bottom {\n      color: $main;\n      font-size: 2rem;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 140%; /* 28px */\n    }\n  }\n  // .rates-item__options\n  &__options {\n    width: 16rem;\n    color: $main;\n    font-size: 2rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n  // .rates-item__icon\n  &__icon {\n    position: absolute;\n  }\n}\n.rates-icon {\n  &--sunny {\n    top: -5rem;\n    left: 14.3rem;\n    width: 9.7rem;\n    height: 8rem;\n    transform: rotate(-7.376deg);\n  }\n  &--shapes {\n    right: 35.6rem;\n    top: -4.3rem;\n    width: 9.2rem;\n    height: 9rem;\n    transform: rotate(-15deg);\n  }\n  &--megafon {\n    width: 8.7rem;\n    height: 7rem;\n    transform: rotate(-12.401deg);\n    right: 68.6rem;\n    bottom: -3.5rem;\n  }\n}\n\n@media (max-width: 48em) {\n  .main-rates {\n    // .main-rates__inner\n    &__inner {\n      gap: 10rem;\n    }\n    // .main-rates__item\n    &__item {\n      height: 56rem;\n      border-radius: 4rem;\n      flex-direction: column;\n    }\n  }\n  .rates-item {\n    &::before,\n    &::after {\n      width: 9rem;\n      height: 9rem;\n    }\n    &::after {\n      right: -4.5rem;\n    }\n    &::before {\n      left: -4.5rem;\n    }\n    // .rates-item__left\n    &__left {\n      padding: 4.8rem;\n      height: 13.4rem;\n      width: 100%;\n      justify-content: center;\n      border-right: 0;\n      border-bottom: 0.3rem dashed $main;\n    }\n    // .rates-item__title\n    &__title {\n      font-size: 3rem;\n    }\n    // .rates-item__right\n    &__right {\n      flex-direction: column;\n      width: 100%;\n      gap: 4rem;\n      height: auto;\n      padding-left: 0;\n      padding-top: 2.4rem;\n    }\n    // .rates-item__price\n    &__price {\n      &-top {\n        font-size: 4rem;\n\n        strong {\n          font-size: 5.6rem;\n          margin: 0 1rem;\n        }\n        span {\n          align-self: flex-end;\n          margin-bottom: 0;\n        }\n        sup {\n          align-self: flex-start;\n        }\n      }\n      &-bottom {\n        color: $main;\n        font-size: 2.8rem;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 140%; /* 28px */\n      }\n    }\n    // .rates-item__options\n    &__options {\n      width: 80%;\n      text-align: center;\n      font-size: 2.8rem;\n\n      display: flex;\n      justify-content: center;\n      margin-bottom: 2.8rem;\n    }\n    // .rates-item__icon\n    &__icon {\n      display: none;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/scss/libs/simplebar.css":
/*!*************************************!*\
  !*** ./src/scss/libs/simplebar.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./simplebar.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/scss/libs/simplebar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_simplebar_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/* harmony import */ var _libs_simplebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/simplebar.js */ "./src/js/libs/simplebar.js");
/* harmony import */ var _utils_select_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/select.js */ "./src/js/utils/select.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dev/vzmsk1.js */ "./src/js/dev/vzmsk1.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev/markusDM.js */ "./src/js/dev/markusDM.js");
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dev_markusDM_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dev/ukik0.js */ "./src/js/dev/ukik0.js");
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dev_ukik0_js__WEBPACK_IMPORTED_MODULE_8__);
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



// -------------------------------- simplebar -------------------------------



// --------------------------------- select ---------------------------------



// ------------------------------- own scripts ------------------------------




})();

/******/ })()
;
//# sourceMappingURL=index82b7e76b5871e62abd8b.js.map