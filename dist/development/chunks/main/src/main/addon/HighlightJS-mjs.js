(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/main/addon/HighlightJS-mjs"],{

/***/ "./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _Stylesheet_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stylesheet.mjs */ "./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs");




/**
 * Required for the docs app which uses highlight.js for the source views
 * @class Neo.main.addon.HighlightJS
 * @extends Neo.core.Base
 * @singleton
 */
class HighlightJS extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.HighlightJS'
         * @protected
         */
        className: 'Neo.main.addon.HighlightJS',
        /**
         * @member {String} highlightJsPath='./resources/highlight/highlight.pack.js'
         * @protected
         */
        highlightJsPath: './resources/highlight/highlight.pack.js',
        /**
         * @member {String} highlightJsLineNumbersPath=Neo.config.basePath + 'node_modules/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js'
         * @protected
         */
        highlightJsLineNumbersPath: Neo.config.basePath + 'node_modules/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js',
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'scrollIntoView',
                'syntaxHighlight',
                'syntaxHighlightInit',
                'syntaxHighlightLine'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {String} themePath='./resources/highlightjs-custom-github-theme.css'
         * @protected
         */
        themePath: './resources/highlightjs-custom-github-theme.css'
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.loadScript(me.highlightJsPath).then(() => {
            _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.addScript({src: me.highlightJsLineNumbersPath});
        });

        _Stylesheet_mjs__WEBPACK_IMPORTED_MODULE_2__.default.createStyleSheet(null, 'hljs-theme', me.themePath);
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.text
     * @param {String} data.vnodeId
     * @protected
     */
    scrollIntoView(data) {
        let parentEl = _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getElement(data.vnodeId),
            el       = parentEl.querySelector('[data-list-header="' + data.text + '"]');

        if (el) {
            el.previousSibling.scrollIntoView({
                behavior: 'smooth',
                block   : 'start',
                inline  : 'nearest'
            });
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.vnodeId
     */
    syntaxHighlight(data) {
        if (hljs) {
            let node = document.getElementById(data.vnodeId);

            hljs.highlightBlock(node);
            hljs.lineNumbersBlock(node);
        } else {
            console.error('highlight.js is not included inside the main thread.');
        }
    }

    /**
     *
     * @param {Object} data
     */
    syntaxHighlightInit(data) {
        if (hljs) {
            let blocks = document.querySelectorAll('pre code:not(.hljs)');
            Array.prototype.forEach.call(blocks, hljs.highlightBlock);
        } else {
            console.error('highlight.js is not included inside the main thread.');
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Number} data.addLine
     * @param {String} data.vnodeId
     * @param {Number} data.removeLine
     */
    syntaxHighlightLine(data) {
        let parentEl = document.getElementById(data.vnodeId),
            cls      = 'neo-highlighted-line',
            el;

        if (Neo.isNumber(data.addLine)) {
            el = parentEl.querySelector('[data-line-number="' + data.addLine + '"]');

            if (el) {
                el.parentNode.classList.add(cls);

                el.parentNode.scrollIntoView({
                    behavior: 'smooth',
                    block   : 'start',
                    inline  : 'nearest'
                });
            }
        }

        if (Neo.isNumber(data.removeLine)) {
            el = parentEl.querySelector('[data-line-number="' + data.removeLine + '"]');

            if (el) {
                el.parentNode.classList.remove(cls);
            }
        }
    }
}

Neo.applyClassConfig(HighlightJS);

let instance = Neo.create(HighlightJS);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs":
/*!************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Logic to work with stylesheets, e.g. apply & switch Neo based themes
 * main.addon.HighlightJS requires this file
 * @class Neo.main.addon.Stylesheet
 * @extends Neo.core.Base
 * @singleton
 */
class Stylesheet extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.Stylesheet'
         * @protected
         */
        className: 'Neo.main.addon.Stylesheet',
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'createStyleSheet',
                'insertCssRules',
                'swapStyleSheet'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        if (Neo.config.useFontAwesome) {
            this.createStyleSheet(null, null, Neo.config.basePath + 'node_modules/@fortawesome/fontawesome-free/css/all.min.css');
        }

        if (Neo.config.themes.length > 0 && Neo.config.themes[0] !== '') {
            this.insertTheme();
        }
    }

    /**
     * Use either name for a neo theme (e.g. 'neo-theme-dark.css') or pass a href
     * @param {String} [name]
     * @param {String} [id]
     * @param {String} [href]
     */
    createStyleSheet(name, id, href) {
        if (!name && !href) {
            throw new Error('createStyleSheet: you need to either pass a name or a href');
        }

        const link = document.createElement('link'),
              env  = Neo.config.environment,
              path = env.startsWith('dist/') ? env : ('dist/' + env),
              url  = href ? href : Neo.config.cssPath
                  ? Neo.config.cssPath + name
                  : Neo.config.basePath + path + '/' + name;

        Object.assign(link, {
            href: url,
            rel : 'stylesheet',
            type: 'text/css'
        });

        if (id) {
            link.id = id;
        }

        document.head.appendChild(link);
    }

    /**
     *
     * @param {String} token
     * @returns {Boolean}
     */
    hasStyleSheet(token) {
        let i   = 0,
            len = document.styleSheets.length,
            sheet;

        for (; i < len; i++) {
            sheet = document.styleSheets[i];
            if (sheet.href && sheet.href.includes(token)) {
                return true;
            }
        }

        return false;
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    insertCssRules(data) {
        let styleEl = document.getElementById('neoDynamicStyleSheet'),
            i     = 0,
            len   = data.rules.length,
            styleSheet;

        if (!styleEl) {
            styleEl = document.createElement('style');

            styleEl.id = 'neoDynamicStyleSheet';
            document.head.appendChild(styleEl);
        }

        styleSheet = styleEl.sheet;

        for (; i < len; i++) {
            styleSheet.insertRule(data.rules[i], styleSheet.cssRules.length);
        }
    }

    /**
     *
     * @protected
     */
    insertTheme() {
        let me     = this,
            themes = Neo.config.themes;

        if (!Array.isArray(themes)) {
            themes = [themes];
        }

        if (themes[0]) {
            document.body.classList.add(themes[0]);
        }

        if (Neo.config.useCssVars) {
            me.removeStyleSheets({
                included: ['neo-theme-', '-no-css-vars.css']
            });

            if (themes.length > 0 && !me.hasStyleSheet('neo-structure.css')) {
                me.createStyleSheet('neo-structure.css');
            }

            themes.forEach(theme => {
                if (!me.hasStyleSheet(theme + '.css')) {
                    me.createStyleSheet(theme + '.css');
                }
            });
        } else {
            me.removeStyleSheets({
                included: ['neo-structure.css']
            });

            me.removeStyleSheets({
                included: ['neo-theme-'],
                excluded: ['-no-css-vars.css']
            });

            if (themes.length > 0 && !me.hasStyleSheet(themes[0] + '-no-css-vars.css')) {
                me.createStyleSheet(themes[0] + '-no-css-vars.css', 'neo-theme');
            }
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {String[]} opts.included
     * @param {String[]} opts.excluded
     */
    removeStyleSheets(opts) {
        let i        = 0,
            len      = document.styleSheets.length,
            included = opts.included || [],
            excluded = opts.included || [],
            sheet, removeSheet;

        for (; i < len; i++) {
            sheet = document.styleSheets[i];

            removeSheet = true;

            if (sheet.href) {
                excluded.forEach(name => {
                    if (sheet.href.includes(name)) {
                        removeSheet = false;
                    }
                });

                if (removeSheet) {
                    included.forEach(name => {
                        if (!sheet.href.includes(name)) {
                            removeSheet = false;
                        }
                    });

                    if (removeSheet) {
                        console.log('removeSheet', sheet.href);
                        sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
                    }
                }
            }
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.href
     * @param {String} data.id
     */
    swapStyleSheet(data) {
        document.getElementById(data.id).setAttribute('href', data.href);
    }
}

Neo.applyClassConfig(Stylesheet);

let instance = Neo.create(Stylesheet);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vSGlnaGxpZ2h0SlMubWpzIiwid2VicGFjazovL2NvdmlkMTktaGVsaXgvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TdHlsZXNoZWV0Lm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0g7QUFDRDs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFJO0FBQzlCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU8sU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFRLDhEQUFvQjtBQUM1QixZQUFZLDZEQUFtQixFQUFFLG1DQUFtQztBQUNwRSxTQUFTOztBQUVULFFBQVEscUVBQTJCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOERBQW9CO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SmdCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBSTtBQUM3Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU8sU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxRQUFRLEUiLCJmaWxlIjoiY2h1bmtzL21haW4vc3JjL21haW4vYWRkb24vSGlnaGxpZ2h0SlMtbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRG9tQWNjZXNzICBmcm9tICcuLi9Eb21BY2Nlc3MubWpzJztcbmltcG9ydCBTdHlsZXNoZWV0IGZyb20gJy4vU3R5bGVzaGVldC5tanMnXG5cbi8qKlxuICogUmVxdWlyZWQgZm9yIHRoZSBkb2NzIGFwcCB3aGljaCB1c2VzIGhpZ2hsaWdodC5qcyBmb3IgdGhlIHNvdXJjZSB2aWV3c1xuICogQGNsYXNzIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEhpZ2hsaWdodEpTIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGhpZ2hsaWdodEpzUGF0aD0nLi9yZXNvdXJjZXMvaGlnaGxpZ2h0L2hpZ2hsaWdodC5wYWNrLmpzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBoaWdobGlnaHRKc1BhdGg6ICcuL3Jlc291cmNlcy9oaWdobGlnaHQvaGlnaGxpZ2h0LnBhY2suanMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBoaWdobGlnaHRKc0xpbmVOdW1iZXJzUGF0aD1OZW8uY29uZmlnLmJhc2VQYXRoICsgJ25vZGVfbW9kdWxlcy9oaWdobGlnaHRqcy1saW5lLW51bWJlcnMuanMvZGlzdC9oaWdobGlnaHRqcy1saW5lLW51bWJlcnMubWluLmpzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBoaWdobGlnaHRKc0xpbmVOdW1iZXJzUGF0aDogTmVvLmNvbmZpZy5iYXNlUGF0aCArICdub2RlX21vZHVsZXMvaGlnaGxpZ2h0anMtbGluZS1udW1iZXJzLmpzL2Rpc3QvaGlnaGxpZ2h0anMtbGluZS1udW1iZXJzLm1pbi5qcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbLy8uLi5dfVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdzY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgJ3N5bnRheEhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICAgJ3N5bnRheEhpZ2hsaWdodEluaXQnLFxuICAgICAgICAgICAgICAgICdzeW50YXhIaWdobGlnaHRMaW5lJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0aGVtZVBhdGg9Jy4vcmVzb3VyY2VzL2hpZ2hsaWdodGpzLWN1c3RvbS1naXRodWItdGhlbWUuY3NzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGVtZVBhdGg6ICcuL3Jlc291cmNlcy9oaWdobGlnaHRqcy1jdXN0b20tZ2l0aHViLXRoZW1lLmNzcydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgRG9tQWNjZXNzLmxvYWRTY3JpcHQobWUuaGlnaGxpZ2h0SnNQYXRoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIERvbUFjY2Vzcy5hZGRTY3JpcHQoe3NyYzogbWUuaGlnaGxpZ2h0SnNMaW5lTnVtYmVyc1BhdGh9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU3R5bGVzaGVldC5jcmVhdGVTdHlsZVNoZWV0KG51bGwsICdobGpzLXRoZW1lJywgbWUudGhlbWVQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudGV4dFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnZub2RlSWRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2Nyb2xsSW50b1ZpZXcoZGF0YSkge1xuICAgICAgICBsZXQgcGFyZW50RWwgPSBEb21BY2Nlc3MuZ2V0RWxlbWVudChkYXRhLnZub2RlSWQpLFxuICAgICAgICAgICAgZWwgICAgICAgPSBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1saXN0LWhlYWRlcj1cIicgKyBkYXRhLnRleHQgKyAnXCJdJyk7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5wcmV2aW91c1NpYmxpbmcuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICBibG9jayAgIDogJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICBpbmxpbmUgIDogJ25lYXJlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52bm9kZUlkXG4gICAgICovXG4gICAgc3ludGF4SGlnaGxpZ2h0KGRhdGEpIHtcbiAgICAgICAgaWYgKGhsanMpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS52bm9kZUlkKTtcblxuICAgICAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayhub2RlKTtcbiAgICAgICAgICAgIGhsanMubGluZU51bWJlcnNCbG9jayhub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2hpZ2hsaWdodC5qcyBpcyBub3QgaW5jbHVkZWQgaW5zaWRlIHRoZSBtYWluIHRocmVhZC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBzeW50YXhIaWdobGlnaHRJbml0KGRhdGEpIHtcbiAgICAgICAgaWYgKGhsanMpIHtcbiAgICAgICAgICAgIGxldCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZTpub3QoLmhsanMpJyk7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJsb2NrcywgaGxqcy5oaWdobGlnaHRCbG9jayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdoaWdobGlnaHQuanMgaXMgbm90IGluY2x1ZGVkIGluc2lkZSB0aGUgbWFpbiB0aHJlYWQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuYWRkTGluZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnZub2RlSWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5yZW1vdmVMaW5lXG4gICAgICovXG4gICAgc3ludGF4SGlnaGxpZ2h0TGluZShkYXRhKSB7XG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEudm5vZGVJZCksXG4gICAgICAgICAgICBjbHMgICAgICA9ICduZW8taGlnaGxpZ2h0ZWQtbGluZScsXG4gICAgICAgICAgICBlbDtcblxuICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKGRhdGEuYWRkTGluZSkpIHtcbiAgICAgICAgICAgIGVsID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcignW2RhdGEtbGluZS1udW1iZXI9XCInICsgZGF0YS5hZGRMaW5lICsgJ1wiXScpO1xuXG4gICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcblxuICAgICAgICAgICAgICAgIGVsLnBhcmVudE5vZGUuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrICAgOiAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICBpbmxpbmUgIDogJ25lYXJlc3QnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKGRhdGEucmVtb3ZlTGluZSkpIHtcbiAgICAgICAgICAgIGVsID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcignW2RhdGEtbGluZS1udW1iZXI9XCInICsgZGF0YS5yZW1vdmVMaW5lICsgJ1wiXScpO1xuXG4gICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGlnaGxpZ2h0SlMpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEhpZ2hsaWdodEpTKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIExvZ2ljIHRvIHdvcmsgd2l0aCBzdHlsZXNoZWV0cywgZS5nLiBhcHBseSAmIHN3aXRjaCBOZW8gYmFzZWQgdGhlbWVzXG4gKiBtYWluLmFkZG9uLkhpZ2hsaWdodEpTIHJlcXVpcmVzIHRoaXMgZmlsZVxuICogQGNsYXNzIE5lby5tYWluLmFkZG9uLlN0eWxlc2hlZXRcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgU3R5bGVzaGVldCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6IFsvLy4uLl19XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ2NyZWF0ZVN0eWxlU2hlZXQnLFxuICAgICAgICAgICAgICAgICdpbnNlcnRDc3NSdWxlcycsXG4gICAgICAgICAgICAgICAgJ3N3YXBTdHlsZVNoZWV0J1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VGb250QXdlc29tZSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdHlsZVNoZWV0KG51bGwsIG51bGwsIE5lby5jb25maWcuYmFzZVBhdGggKyAnbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudGhlbWVzLmxlbmd0aCA+IDAgJiYgTmVvLmNvbmZpZy50aGVtZXNbMF0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydFRoZW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgZWl0aGVyIG5hbWUgZm9yIGEgbmVvIHRoZW1lIChlLmcuICduZW8tdGhlbWUtZGFyay5jc3MnKSBvciBwYXNzIGEgaHJlZlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbmFtZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2lkXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbaHJlZl1cbiAgICAgKi9cbiAgICBjcmVhdGVTdHlsZVNoZWV0KG5hbWUsIGlkLCBocmVmKSB7XG4gICAgICAgIGlmICghbmFtZSAmJiAhaHJlZikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHlsZVNoZWV0OiB5b3UgbmVlZCB0byBlaXRoZXIgcGFzcyBhIG5hbWUgb3IgYSBocmVmJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpLFxuICAgICAgICAgICAgICBlbnYgID0gTmVvLmNvbmZpZy5lbnZpcm9ubWVudCxcbiAgICAgICAgICAgICAgcGF0aCA9IGVudi5zdGFydHNXaXRoKCdkaXN0LycpID8gZW52IDogKCdkaXN0LycgKyBlbnYpLFxuICAgICAgICAgICAgICB1cmwgID0gaHJlZiA/IGhyZWYgOiBOZW8uY29uZmlnLmNzc1BhdGhcbiAgICAgICAgICAgICAgICAgID8gTmVvLmNvbmZpZy5jc3NQYXRoICsgbmFtZVxuICAgICAgICAgICAgICAgICAgOiBOZW8uY29uZmlnLmJhc2VQYXRoICsgcGF0aCArICcvJyArIG5hbWU7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihsaW5rLCB7XG4gICAgICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgICAgICByZWwgOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICB0eXBlOiAndGV4dC9jc3MnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0b2tlblxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc1N0eWxlU2hlZXQodG9rZW4pIHtcbiAgICAgICAgbGV0IGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGgsXG4gICAgICAgICAgICBzaGVldDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgICAgICAgICAgaWYgKHNoZWV0LmhyZWYgJiYgc2hlZXQuaHJlZi5pbmNsdWRlcyh0b2tlbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGluc2VydENzc1J1bGVzKGRhdGEpIHtcbiAgICAgICAgbGV0IHN0eWxlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmVvRHluYW1pY1N0eWxlU2hlZXQnKSxcbiAgICAgICAgICAgIGkgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgID0gZGF0YS5ydWxlcy5sZW5ndGgsXG4gICAgICAgICAgICBzdHlsZVNoZWV0O1xuXG4gICAgICAgIGlmICghc3R5bGVFbCkge1xuICAgICAgICAgICAgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgIHN0eWxlRWwuaWQgPSAnbmVvRHluYW1pY1N0eWxlU2hlZXQnO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlU2hlZXQgPSBzdHlsZUVsLnNoZWV0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShkYXRhLnJ1bGVzW2ldLCBzdHlsZVNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpbnNlcnRUaGVtZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0aGVtZXMgPSBOZW8uY29uZmlnLnRoZW1lcztcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhlbWVzKSkge1xuICAgICAgICAgICAgdGhlbWVzID0gW3RoZW1lc107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhlbWVzWzBdKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhlbWVzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnVzZUNzc1ZhcnMpIHtcbiAgICAgICAgICAgIG1lLnJlbW92ZVN0eWxlU2hlZXRzKHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlZDogWyduZW8tdGhlbWUtJywgJy1uby1jc3MtdmFycy5jc3MnXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVtZXMubGVuZ3RoID4gMCAmJiAhbWUuaGFzU3R5bGVTaGVldCgnbmVvLXN0cnVjdHVyZS5jc3MnKSkge1xuICAgICAgICAgICAgICAgIG1lLmNyZWF0ZVN0eWxlU2hlZXQoJ25lby1zdHJ1Y3R1cmUuY3NzJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoZW1lcy5mb3JFYWNoKHRoZW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmhhc1N0eWxlU2hlZXQodGhlbWUgKyAnLmNzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNyZWF0ZVN0eWxlU2hlZXQodGhlbWUgKyAnLmNzcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucmVtb3ZlU3R5bGVTaGVldHMoe1xuICAgICAgICAgICAgICAgIGluY2x1ZGVkOiBbJ25lby1zdHJ1Y3R1cmUuY3NzJ11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5yZW1vdmVTdHlsZVNoZWV0cyh7XG4gICAgICAgICAgICAgICAgaW5jbHVkZWQ6IFsnbmVvLXRoZW1lLSddLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVkOiBbJy1uby1jc3MtdmFycy5jc3MnXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVtZXMubGVuZ3RoID4gMCAmJiAhbWUuaGFzU3R5bGVTaGVldCh0aGVtZXNbMF0gKyAnLW5vLWNzcy12YXJzLmNzcycpKSB7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlU3R5bGVTaGVldCh0aGVtZXNbMF0gKyAnLW5vLWNzcy12YXJzLmNzcycsICduZW8tdGhlbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBvcHRzLmluY2x1ZGVkXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gb3B0cy5leGNsdWRlZFxuICAgICAqL1xuICAgIHJlbW92ZVN0eWxlU2hlZXRzKG9wdHMpIHtcbiAgICAgICAgbGV0IGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgID0gZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoLFxuICAgICAgICAgICAgaW5jbHVkZWQgPSBvcHRzLmluY2x1ZGVkIHx8IFtdLFxuICAgICAgICAgICAgZXhjbHVkZWQgPSBvcHRzLmluY2x1ZGVkIHx8IFtdLFxuICAgICAgICAgICAgc2hlZXQsIHJlbW92ZVNoZWV0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG5cbiAgICAgICAgICAgIHJlbW92ZVNoZWV0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHNoZWV0LmhyZWYpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hlZXQuaHJlZi5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2hlZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZVNoZWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoZWV0LmhyZWYuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTaGVldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlU2hlZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVTaGVldCcsIHNoZWV0LmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hlZXQub3duZXJOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2hlZXQub3duZXJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5ocmVmXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKi9cbiAgICBzd2FwU3R5bGVTaGVldChkYXRhKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuaWQpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGRhdGEuaHJlZik7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTdHlsZXNoZWV0KTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShTdHlsZXNoZWV0KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyJdLCJzb3VyY2VSb290IjoiIn0=