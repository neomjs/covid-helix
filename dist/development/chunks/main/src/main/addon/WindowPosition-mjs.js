(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/main/addon/WindowPosition-mjs"],{

/***/ "./node_modules/neo.mjs/src/main/addon/WindowPosition.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/WindowPosition.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 *
 * @class Neo.main.addon.WindowPosition
 * @extends Neo.core.Base
 * @singleton
 */
class WindowPosition extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.WindowPosition'
         * @protected
         */
        className: 'Neo.main.addon.WindowPosition',
        /**
         * @member {String|null} intervalId=null
         */
        intervalId: null,
        /**
         * @member {Number} intervalTime=100
         */
        intervalTime: 20,
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'registerWindow',
                'setDock',
                'unregisterWindow'
            ]
        },
        /**
         * @member {Number|null} screenLeft=null
         */
        screenLeft: null,
        /**
         * @member {Number|null} screenTop=null
         */
        screenTop: null,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Object} windows={}
         * @protected
         */
        windows: {}
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me  = this,
            win = window;

        me.screenLeft = win.screenLeft;
        me.screenTop  = win.screenTop;

        win.addEventListener('mouseout', me.onMouseOut.bind(me));
        win.addEventListener('resize',   me.onResize.bind(me));
    }

    /**
     *
     */
    adjustPositions() {
        let position;

        Object.entries(this.windows).forEach(([key, value]) => {
            position = this.getPosition(value);

            Neo.Main.windowMoveTo({
                windowName: key,
                x         : position.left,
                y         : position.top
            });
        });
    }

    /**
     *
     */
    checkMovement() {
        let me         = this,
            Manager    = Neo.worker.Manager,
            win        = window,
            screenLeft = win.screenLeft,
            screenTop  = win.screenTop,
            winData;

        if (me.screenLeft !== screenLeft || me.screenTop !== screenTop) {
            winData = Neo.Main.getWindowData();

            me.adjustPositions();

            Manager.sendMessage('app', {
                action: 'windowPositionChange',
                data  : {
                    appName: Manager.appName,
                    ...winData
                }
            });

            me.screenLeft = screenLeft;
            me.screenTop  = screenTop;
        }
    }

    /**
     * Returns true in case the dock direction changes from horizontal (left, right)
     * to vertical (bottom, top) or vice versa.
     * @param {String} oldValue
     * @param {String} newValue
     * @returns {Boolean}
     */
    dockDirectionChange(oldValue, newValue) {
        return (oldValue === 'bottom' || oldValue === 'top') && (newValue === 'left' || newValue === 'right')
            || (newValue === 'bottom' || newValue === 'top') && (oldValue === 'left' || oldValue === 'right');
    }

    /**
     *
     * @param {Object} data
     */
    getPosition(data) {
        let win = window,
            left, top;

        switch (data.dock) {
            case 'bottom':
                left = win.screenLeft;
                top  = win.outerHeight + win.screenTop - 50;
                break;
            case 'left':
                left = win.screenLeft - data.size;
                top  = win.screenTop  + 28;
                break;
            case 'right':
                left = win.outerWidth + win.screenLeft;
                top  = win.screenTop  + 28;
                break;
            case 'top':
                left = win.screenLeft;
                top  = win.screenTop - data.size + 78;
                break;
        }

        return {
            left: left,
            top : top
        };
    }

    /**
     *
     * @param {MouseEvent} event
     */
    onMouseOut(event) {
        let me = this;

        if (!event.toElement) {
            if (!me.intervalId) {
                me.intervalId = setInterval(me.checkMovement.bind(me), me.intervalTime);
            }
        } else if (me.intervalId) {
            clearInterval(me.intervalId);
            me.intervalId = null;
        }
    }

    /**
     *
     * @param {Object} event
     */
    onResize(event) {
        let me  = this,
            win = window,
            height, width;

        Object.entries(me.windows).forEach(([key, value]) => {
            switch (value.dock) {
                case 'bottom':
                case 'top':
                    width = win.outerWidth;
                    break;
                case 'left':
                case 'right':
                    height = win.outerHeight - 28;
                    break;
            }

            Neo.Main.windowResizeTo({
                height    : height,
                width     : width,
                windowName: key
            });
        });

        me.adjustPositions();
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.dock
     * @param {String} data.name
     * @param {Number} data.size
     */
    registerWindow(data) {
        this.windows[data.name] = data;
    }

    /**
     * Docks an existing window to a new side
     * @param {Object} data
     * @param {String} data.dock
     * @param {String} data.name
     */
    setDock(data) {
        let me   = this,
            dock = data.dock,
            name = data.name,
            win  = me.windows[name],
            dockDirectionChange, position;

        if (win) {
            dockDirectionChange = me.dockDirectionChange(dock, win.dock);

            win.dock = dock;
            position = me.getPosition(win);

            if (dockDirectionChange) {
                Neo.Main.windowResizeTo({
                    height    : dock === 'bottom' || dock === 'top'   ? win.size : window.outerHeight - 28,
                    width     : dock === 'left'   || dock === 'right' ? win.size : window.outerWidth,
                    windowName: name
                });
            }

            Neo.Main.windowMoveTo({
                windowName: name,
                x         : position.left,
                y         : position.top
            });
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.name
     */
    unregisterWindow(data) {
        delete this.windows[data.name];
    }
}

Neo.applyClassConfig(WindowPosition);

let instance = Neo.create(WindowPosition);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vV2luZG93UG9zaXRpb24ubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbURBQUk7QUFDakMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLFFBQVEsRSIsImZpbGUiOiJjaHVua3MvbWFpbi9zcmMvbWFpbi9hZGRvbi9XaW5kb3dQb3NpdGlvbi1tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKlxuICogQGNsYXNzIE5lby5tYWluLmFkZG9uLldpbmRvd1Bvc2l0aW9uXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFdpbmRvd1Bvc2l0aW9uIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLmFkZG9uLldpbmRvd1Bvc2l0aW9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5hZGRvbi5XaW5kb3dQb3NpdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaW50ZXJ2YWxJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnZhbElkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbnRlcnZhbFRpbWU9MTAwXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnZhbFRpbWU6IDIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAncmVnaXN0ZXJXaW5kb3cnLFxuICAgICAgICAgICAgICAgICdzZXREb2NrJyxcbiAgICAgICAgICAgICAgICAndW5yZWdpc3RlcldpbmRvdydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBzY3JlZW5MZWZ0PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjcmVlbkxlZnQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gc2NyZWVuVG9wPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjcmVlblRvcDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gd2luZG93cz17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3aW5kb3dzOiB7fVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICB3aW4gPSB3aW5kb3c7XG5cbiAgICAgICAgbWUuc2NyZWVuTGVmdCA9IHdpbi5zY3JlZW5MZWZ0O1xuICAgICAgICBtZS5zY3JlZW5Ub3AgID0gd2luLnNjcmVlblRvcDtcblxuICAgICAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtZS5vbk1vdXNlT3V0LmJpbmQobWUpKTtcbiAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICAgbWUub25SZXNpemUuYmluZChtZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYWRqdXN0UG9zaXRpb25zKCkge1xuICAgICAgICBsZXQgcG9zaXRpb247XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy53aW5kb3dzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbih2YWx1ZSk7XG5cbiAgICAgICAgICAgIE5lby5NYWluLndpbmRvd01vdmVUbyh7XG4gICAgICAgICAgICAgICAgd2luZG93TmFtZToga2V5LFxuICAgICAgICAgICAgICAgIHggICAgICAgICA6IHBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICAgICAgeSAgICAgICAgIDogcG9zaXRpb24udG9wXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjaGVja01vdmVtZW50KCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBNYW5hZ2VyICAgID0gTmVvLndvcmtlci5NYW5hZ2VyLFxuICAgICAgICAgICAgd2luICAgICAgICA9IHdpbmRvdyxcbiAgICAgICAgICAgIHNjcmVlbkxlZnQgPSB3aW4uc2NyZWVuTGVmdCxcbiAgICAgICAgICAgIHNjcmVlblRvcCAgPSB3aW4uc2NyZWVuVG9wLFxuICAgICAgICAgICAgd2luRGF0YTtcblxuICAgICAgICBpZiAobWUuc2NyZWVuTGVmdCAhPT0gc2NyZWVuTGVmdCB8fCBtZS5zY3JlZW5Ub3AgIT09IHNjcmVlblRvcCkge1xuICAgICAgICAgICAgd2luRGF0YSA9IE5lby5NYWluLmdldFdpbmRvd0RhdGEoKTtcblxuICAgICAgICAgICAgbWUuYWRqdXN0UG9zaXRpb25zKCk7XG5cbiAgICAgICAgICAgIE1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd3aW5kb3dQb3NpdGlvbkNoYW5nZScsXG4gICAgICAgICAgICAgICAgZGF0YSAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IE1hbmFnZXIuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgLi4ud2luRGF0YVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5zY3JlZW5MZWZ0ID0gc2NyZWVuTGVmdDtcbiAgICAgICAgICAgIG1lLnNjcmVlblRvcCAgPSBzY3JlZW5Ub3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaW4gY2FzZSB0aGUgZG9jayBkaXJlY3Rpb24gY2hhbmdlcyBmcm9tIGhvcml6b250YWwgKGxlZnQsIHJpZ2h0KVxuICAgICAqIHRvIHZlcnRpY2FsIChib3R0b20sIHRvcCkgb3IgdmljZSB2ZXJzYS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3VmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBkb2NrRGlyZWN0aW9uQ2hhbmdlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gKG9sZFZhbHVlID09PSAnYm90dG9tJyB8fCBvbGRWYWx1ZSA9PT0gJ3RvcCcpICYmIChuZXdWYWx1ZSA9PT0gJ2xlZnQnIHx8IG5ld1ZhbHVlID09PSAncmlnaHQnKVxuICAgICAgICAgICAgfHwgKG5ld1ZhbHVlID09PSAnYm90dG9tJyB8fCBuZXdWYWx1ZSA9PT0gJ3RvcCcpICYmIChvbGRWYWx1ZSA9PT0gJ2xlZnQnIHx8IG9sZFZhbHVlID09PSAncmlnaHQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZ2V0UG9zaXRpb24oZGF0YSkge1xuICAgICAgICBsZXQgd2luID0gd2luZG93LFxuICAgICAgICAgICAgbGVmdCwgdG9wO1xuXG4gICAgICAgIHN3aXRjaCAoZGF0YS5kb2NrKSB7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIGxlZnQgPSB3aW4uc2NyZWVuTGVmdDtcbiAgICAgICAgICAgICAgICB0b3AgID0gd2luLm91dGVySGVpZ2h0ICsgd2luLnNjcmVlblRvcCAtIDUwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgbGVmdCA9IHdpbi5zY3JlZW5MZWZ0IC0gZGF0YS5zaXplO1xuICAgICAgICAgICAgICAgIHRvcCAgPSB3aW4uc2NyZWVuVG9wICArIDI4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGxlZnQgPSB3aW4ub3V0ZXJXaWR0aCArIHdpbi5zY3JlZW5MZWZ0O1xuICAgICAgICAgICAgICAgIHRvcCAgPSB3aW4uc2NyZWVuVG9wICArIDI4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICBsZWZ0ID0gd2luLnNjcmVlbkxlZnQ7XG4gICAgICAgICAgICAgICAgdG9wICA9IHdpbi5zY3JlZW5Ub3AgLSBkYXRhLnNpemUgKyA3ODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgICAgdG9wIDogdG9wXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZU91dChldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghZXZlbnQudG9FbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIW1lLmludGVydmFsSWQpIHtcbiAgICAgICAgICAgICAgICBtZS5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwobWUuY2hlY2tNb3ZlbWVudC5iaW5kKG1lKSwgbWUuaW50ZXJ2YWxUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZS5pbnRlcnZhbElkKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG1lLmludGVydmFsSWQpO1xuICAgICAgICAgICAgbWUuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgd2luID0gd2luZG93LFxuICAgICAgICAgICAgaGVpZ2h0LCB3aWR0aDtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhtZS53aW5kb3dzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuZG9jaykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB3aW4ub3V0ZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSB3aW4ub3V0ZXJIZWlnaHQgLSAyODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby5NYWluLndpbmRvd1Jlc2l6ZVRvKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgOiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgIDogd2lkdGgsXG4gICAgICAgICAgICAgICAgd2luZG93TmFtZToga2V5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuYWRqdXN0UG9zaXRpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmRvY2tcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5uYW1lXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuc2l6ZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyV2luZG93KGRhdGEpIHtcbiAgICAgICAgdGhpcy53aW5kb3dzW2RhdGEubmFtZV0gPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvY2tzIGFuIGV4aXN0aW5nIHdpbmRvdyB0byBhIG5ldyBzaWRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5kb2NrXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubmFtZVxuICAgICAqL1xuICAgIHNldERvY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBkb2NrID0gZGF0YS5kb2NrLFxuICAgICAgICAgICAgbmFtZSA9IGRhdGEubmFtZSxcbiAgICAgICAgICAgIHdpbiAgPSBtZS53aW5kb3dzW25hbWVdLFxuICAgICAgICAgICAgZG9ja0RpcmVjdGlvbkNoYW5nZSwgcG9zaXRpb247XG5cbiAgICAgICAgaWYgKHdpbikge1xuICAgICAgICAgICAgZG9ja0RpcmVjdGlvbkNoYW5nZSA9IG1lLmRvY2tEaXJlY3Rpb25DaGFuZ2UoZG9jaywgd2luLmRvY2spO1xuXG4gICAgICAgICAgICB3aW4uZG9jayA9IGRvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG1lLmdldFBvc2l0aW9uKHdpbik7XG5cbiAgICAgICAgICAgIGlmIChkb2NrRGlyZWN0aW9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgTmVvLk1haW4ud2luZG93UmVzaXplVG8oe1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgICAgOiBkb2NrID09PSAnYm90dG9tJyB8fCBkb2NrID09PSAndG9wJyAgID8gd2luLnNpemUgOiB3aW5kb3cub3V0ZXJIZWlnaHQgLSAyOCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgIDogZG9jayA9PT0gJ2xlZnQnICAgfHwgZG9jayA9PT0gJ3JpZ2h0JyA/IHdpbi5zaXplIDogd2luZG93Lm91dGVyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd05hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLk1haW4ud2luZG93TW92ZVRvKHtcbiAgICAgICAgICAgICAgICB3aW5kb3dOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHggICAgICAgICA6IHBvc2l0aW9uLmxlZnQsXG4gICAgICAgICAgICAgICAgeSAgICAgICAgIDogcG9zaXRpb24udG9wXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5uYW1lXG4gICAgICovXG4gICAgdW5yZWdpc3RlcldpbmRvdyhkYXRhKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLndpbmRvd3NbZGF0YS5uYW1lXTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFdpbmRvd1Bvc2l0aW9uKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShXaW5kb3dQb3NpdGlvbik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiXSwic291cmNlUm9vdCI6IiJ9