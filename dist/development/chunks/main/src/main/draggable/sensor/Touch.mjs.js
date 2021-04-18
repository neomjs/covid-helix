(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/main/draggable/sensor/Touch.mjs"],{

/***/ "./node_modules/neo.mjs/src/main/draggable/sensor/Base.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/draggable/sensor/Base.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Abstract base class for other sensors
 * @class Neo.main.draggable.sensor.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.draggable.sensor.Base'
         * @protected
         */
        className: 'Neo.main.draggable.sensor.Base',
        /**
         * @member {HTMLElement|null} currentElement=null
         * @protected
         */
        currentElement: null,
        /**
         * @member {String[]} dragTargetClasses=['neo-draggable','neo-resizable']
         */
        dragTargetClasses: ['neo-draggable', 'neo-resizable'],
        /**
         * @member {Boolean} isDragging=false
         * @protected
         */
        isDragging: false,
        /**
         * @member {Event|null} lastEvent=null
         * @protected
         */
        lastEvent: null,
        /**
         * @member {Event|null} startEvent=null
         * @protected
         */
        startEvent: null
    }}

    /**
     * Attaches sensors event listeners to the DOM
     */
    attach() {}

    /**
     * Detaches sensors event listeners from the DOM
     */
    detach() {}

    /**
     *
     */
    onConstructed() {
        this.attach();
        super.onConstructed();
    }

    /**
     * Triggers a custom event on the target element
     * @param {HTMLElement} element - Element to trigger event on
     * @param {Object} sensorEvent - Sensor event to trigger
     * @returns {Event}
     */
    trigger(element, sensorEvent) {
        const event = document.createEvent('Event');
        event.detail = sensorEvent;
        event.initEvent(sensorEvent.type, true, true);
        element.dispatchEvent(event);
        this.lastEvent = sensorEvent;

        return sensorEvent;
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/main/draggable/sensor/Touch.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/draggable/sensor/Touch.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Touch)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/main/draggable/sensor/Base.mjs");
/* harmony import */ var _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");



let preventScrolling = false;

// WebKit requires cancelable touchmove events to be added as early as possible
window.addEventListener('touchmove', event => {
    if (!preventScrolling) {
        return;
    }

    // Prevent scrolling
    if (event.cancelable) {
        event.preventDefault();
    }
}, {cancelable: true, passive: false});

/**
 * @class Neo.main.draggable.sensor.Touch
 * @extends Neo.main.draggable.sensor.Base
 */
class Touch extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.draggable.sensor.Touch'
         * @protected
         */
        className: 'Neo.main.draggable.sensor.Touch',
        /**
         * @member {Number} delay=200
         */
        delay: 200,
        /**
         * @member {Number} minDistance=0
         */
        minDistance: 0,
        /**
         * @member {Number|null} pageX=null
         * @protected
         */
        pageX: null,
        /**
         * @member {Number|null} pageY=null
         * @protected
         */
        pageY: null,
        /**
         * @member {Number|null} tapTimeout=null
         */
        tapTimeout: null,
        /**
         * @member {Number} touchStartTime=0
         */
        touchStartTime: 0
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);
        Neo.bindMethods(this, ['onDistanceChange', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'startDrag']);
    }

    /**
     * Attaches sensors event listeners to the DOM
     */
    attach() {
        document.addEventListener('touchstart', this.onTouchStart);
    }

    /**
     * Detaches sensors event listeners from the DOM
     */
    detach() {
        document.removeEventListener('touchstart', this.onTouchStart);
    }

    /**
     * Detect change in distance, starting drag when both delay and distance requirements are met
     * @param {TouchEvent|Object} event - Object in case it does get trigger via the tapTimeout
     */
    onDistanceChange(event) {
        let me = this;

        if (me.currentElement) {
            const {pageX, pageY}    = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getTouchCoords(event),
                  start             = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getTouchCoords(me.startEvent),
                  timeElapsed       = Date.now() - me.touchStartTime,
                  distanceTravelled = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getDistance(start.pageX, start.pageY, pageX, pageY) || 0;

            Object.assign(me, {pageX, pageY});

            if (timeElapsed >= me.delay && distanceTravelled >= me.minDistance) {
                clearTimeout(me.tapTimeout);
                document.removeEventListener('touchmove', me.onDistanceChange);
                me.startDrag();
            }
        }
    }

    /**
     *
     * @param {TouchEvent} event
     */
    onTouchEnd(event) {
        preventScrolling = false;

        let me = this;

        clearTimeout(me.tapTimeout);

        document.removeEventListener('dragstart',   preventDefault);
        document.removeEventListener('touchcancel', me.onTouchEnd);
        document.removeEventListener('touchend',    me.onTouchEnd);
        document.removeEventListener('touchmove',   me.onDistanceChange);

        if (me.dragging) {
            const {pageX, pageY} = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getTouchCoords(event);

            let element = me.currentElement,
                target  = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);

            event.preventDefault();

            me.trigger(element, {
                clientX      : pageX,
                clientY      : pageY,
                element,
                eventPath    : _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getPathFromElement(target),
                originalEvent: event,
                path         : me.startEvent.path || me.startEvent.composedPath(),
                target,
                type         : 'drag:end'
            });

            document.removeEventListener('contextmenu', preventDefault, true);
            document.removeEventListener('touchmove',   me.onTouchMove);

            Object.assign(me, {
                currentElement: null,
                dragging      : false,
                startEvent    : null
            });
        }

        me.dragging = false;
    }

    /**
     *
     * @param {TouchEvent} event
     */
    onTouchMove(event) {
        let me = this;

        if (me.dragging) {
            const {pageX, pageY} = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getTouchCoords(event);

            let element = me.currentElement,
                target  = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);

            me.trigger(element, {
                clientX      : pageX,
                clientY      : pageY,
                element,
                eventPath    : _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getPathFromElement(target),
                originalEvent: event,
                path         : me.startEvent.path || me.startEvent.composedPath(),
                target,
                type         : 'drag:move'
            });
        }
    }

    /**
     *
     * @param {TouchEvent} event
     */
    onTouchStart(event) {
        let me     = this,
            target = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.testPathInclusion(event, me.dragTargetClasses);

        if (target) {
            const {pageX, pageY} = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getTouchCoords(event);

            Object.assign(me, {
                currentElement: target.node,
                pageX         : pageX,
                pageY         : pageY,
                startEvent    : event,
                touchStartTime: Date.now()
            });

            document.addEventListener('dragstart',   preventDefault);
            document.addEventListener('touchcancel', me.onTouchEnd);
            document.addEventListener('touchend',    me.onTouchEnd);
            document.addEventListener('touchmove',   me.onDistanceChange, {cancelable: true});

            me.tapTimeout = setTimeout(() => {
                me.onDistanceChange({touches: [{pageX: me.pageX, pageY: me.pageY}]});
            }, me.delay);
        }
    }

    /**
     *
     */
    startDrag() {
        let me         = this,
            element    = me.currentElement,
            startEvent = me.startEvent,
            touch      = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getTouchCoords(me.startEvent);

        me.trigger(element, {
            clientX      : touch.pageX,
            clientY      : touch.pageY,
            element,
            originalEvent: startEvent,
            path         : startEvent.path || startEvent.composedPath(),
            target       : startEvent.target,
            type         : 'drag:start'
        });

        me.dragging = true; // todo

        if (me.dragging) {
            document.addEventListener('contextmenu', preventDefault, true);
            document.addEventListener('touchmove',   me.onTouchMove);
        }

        preventScrolling = me.dragging;
    }
}

function preventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
}

Neo.applyClassConfig(Touch);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vZHJhZ2dhYmxlL3NlbnNvci9CYXNlLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vZHJhZ2dhYmxlL3NlbnNvci9Ub3VjaC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQVE7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRW1DO0FBQ1M7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsaUNBQWlDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBSTtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsYUFBYSxNQUFNLGtFQUF3QjtBQUM5RCxzQ0FBc0Msa0VBQXdCO0FBQzlEO0FBQ0Esc0NBQXNDLCtEQUFxQjs7QUFFM0QsK0JBQStCLGFBQWE7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGFBQWEsR0FBRyxrRUFBd0I7O0FBRTNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0VBQTRCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsYUFBYSxHQUFHLGtFQUF3Qjs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzRUFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxRUFBMkI7O0FBRWhEO0FBQ0EsbUJBQW1CLGFBQWEsR0FBRyxrRUFBd0I7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGlCQUFpQjs7QUFFNUY7QUFDQSxxQ0FBcUMsV0FBVyxpQ0FBaUMsRUFBRTtBQUNuRixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrRUFBd0I7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNodW5rcy9tYWluL3NyYy9tYWluL2RyYWdnYWJsZS9zZW5zb3IvVG91Y2gubWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcmVCYXNlIGZyb20gJy4uLy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIG90aGVyIHNlbnNvcnNcbiAqIEBjbGFzcyBOZW8ubWFpbi5kcmFnZ2FibGUuc2Vuc29yLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uZHJhZ2dhYmxlLnNlbnNvci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5kcmFnZ2FibGUuc2Vuc29yLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7SFRNTEVsZW1lbnR8bnVsbH0gY3VycmVudEVsZW1lbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50RWxlbWVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBkcmFnVGFyZ2V0Q2xhc3Nlcz1bJ25lby1kcmFnZ2FibGUnLCduZW8tcmVzaXphYmxlJ11cbiAgICAgICAgICovXG4gICAgICAgIGRyYWdUYXJnZXRDbGFzc2VzOiBbJ25lby1kcmFnZ2FibGUnLCAnbmVvLXJlc2l6YWJsZSddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNEcmFnZ2luZz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc0RyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0V2ZW50fG51bGx9IGxhc3RFdmVudD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxhc3RFdmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0V2ZW50fG51bGx9IHN0YXJ0RXZlbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdGFydEV2ZW50OiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICAgKi9cbiAgICBhdHRhY2goKSB7fVxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgRE9NXG4gICAgICovXG4gICAgZGV0YWNoKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgdGhpcy5hdHRhY2goKTtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGEgY3VzdG9tIGV2ZW50IG9uIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIHRyaWdnZXIgZXZlbnQgb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2Vuc29yRXZlbnQgLSBTZW5zb3IgZXZlbnQgdG8gdHJpZ2dlclxuICAgICAqIEByZXR1cm5zIHtFdmVudH1cbiAgICAgKi9cbiAgICB0cmlnZ2VyKGVsZW1lbnQsIHNlbnNvckV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmRldGFpbCA9IHNlbnNvckV2ZW50O1xuICAgICAgICBldmVudC5pbml0RXZlbnQoc2Vuc29yRXZlbnQudHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMubGFzdEV2ZW50ID0gc2Vuc29yRXZlbnQ7XG5cbiAgICAgICAgcmV0dXJuIHNlbnNvckV2ZW50O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IERvbUV2ZW50cyBmcm9tICcuLi8uLi9Eb21FdmVudHMubWpzJztcblxubGV0IHByZXZlbnRTY3JvbGxpbmcgPSBmYWxzZTtcblxuLy8gV2ViS2l0IHJlcXVpcmVzIGNhbmNlbGFibGUgdG91Y2htb3ZlIGV2ZW50cyB0byBiZSBhZGRlZCBhcyBlYXJseSBhcyBwb3NzaWJsZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGV2ZW50ID0+IHtcbiAgICBpZiAoIXByZXZlbnRTY3JvbGxpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nXG4gICAgaWYgKGV2ZW50LmNhbmNlbGFibGUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59LCB7Y2FuY2VsYWJsZTogdHJ1ZSwgcGFzc2l2ZTogZmFsc2V9KTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1haW4uZHJhZ2dhYmxlLnNlbnNvci5Ub3VjaFxuICogQGV4dGVuZHMgTmVvLm1haW4uZHJhZ2dhYmxlLnNlbnNvci5CYXNlXG4gKi9cbmNsYXNzIFRvdWNoIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLmRyYWdnYWJsZS5zZW5zb3IuVG91Y2gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLmRyYWdnYWJsZS5zZW5zb3IuVG91Y2gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkZWxheT0yMDBcbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5OiAyMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1pbkRpc3RhbmNlPTBcbiAgICAgICAgICovXG4gICAgICAgIG1pbkRpc3RhbmNlOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBhZ2VYPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcGFnZVg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcGFnZVk9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBwYWdlWTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSB0YXBUaW1lb3V0PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhcFRpbWVvdXQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRvdWNoU3RhcnRUaW1lPTBcbiAgICAgICAgICovXG4gICAgICAgIHRvdWNoU3RhcnRUaW1lOiAwXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICBOZW8uYmluZE1ldGhvZHModGhpcywgWydvbkRpc3RhbmNlQ2hhbmdlJywgJ29uVG91Y2hFbmQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaFN0YXJ0JywgJ3N0YXJ0RHJhZyddKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBzZW5zb3JzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRE9NXG4gICAgICovXG4gICAgYXR0YWNoKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIERPTVxuICAgICAqL1xuICAgIGRldGFjaCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgY2hhbmdlIGluIGRpc3RhbmNlLCBzdGFydGluZyBkcmFnIHdoZW4gYm90aCBkZWxheSBhbmQgZGlzdGFuY2UgcmVxdWlyZW1lbnRzIGFyZSBtZXRcbiAgICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR8T2JqZWN0fSBldmVudCAtIE9iamVjdCBpbiBjYXNlIGl0IGRvZXMgZ2V0IHRyaWdnZXIgdmlhIHRoZSB0YXBUaW1lb3V0XG4gICAgICovXG4gICAgb25EaXN0YW5jZUNoYW5nZShldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5jdXJyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qge3BhZ2VYLCBwYWdlWX0gICAgPSBEb21FdmVudHMuZ2V0VG91Y2hDb29yZHMoZXZlbnQpLFxuICAgICAgICAgICAgICAgICAgc3RhcnQgICAgICAgICAgICAgPSBEb21FdmVudHMuZ2V0VG91Y2hDb29yZHMobWUuc3RhcnRFdmVudCksXG4gICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZCAgICAgICA9IERhdGUubm93KCkgLSBtZS50b3VjaFN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICAgIGRpc3RhbmNlVHJhdmVsbGVkID0gRG9tRXZlbnRzLmdldERpc3RhbmNlKHN0YXJ0LnBhZ2VYLCBzdGFydC5wYWdlWSwgcGFnZVgsIHBhZ2VZKSB8fCAwO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7cGFnZVgsIHBhZ2VZfSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lRWxhcHNlZCA+PSBtZS5kZWxheSAmJiBkaXN0YW5jZVRyYXZlbGxlZCA+PSBtZS5taW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChtZS50YXBUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtZS5vbkRpc3RhbmNlQ2hhbmdlKTtcbiAgICAgICAgICAgICAgICBtZS5zdGFydERyYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgcHJldmVudFNjcm9sbGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KG1lLnRhcFRpbWVvdXQpO1xuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICAgcHJldmVudERlZmF1bHQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIG1lLm9uVG91Y2hFbmQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICAgIG1lLm9uVG91Y2hFbmQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAgIG1lLm9uRGlzdGFuY2VDaGFuZ2UpO1xuXG4gICAgICAgIGlmIChtZS5kcmFnZ2luZykge1xuICAgICAgICAgICAgY29uc3Qge3BhZ2VYLCBwYWdlWX0gPSBEb21FdmVudHMuZ2V0VG91Y2hDb29yZHMoZXZlbnQpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IG1lLmN1cnJlbnRFbGVtZW50LFxuICAgICAgICAgICAgICAgIHRhcmdldCAgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYIC0gd2luZG93LnNjcm9sbFgsIHBhZ2VZIC0gd2luZG93LnNjcm9sbFkpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtZS50cmlnZ2VyKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRYICAgICAgOiBwYWdlWCxcbiAgICAgICAgICAgICAgICBjbGllbnRZICAgICAgOiBwYWdlWSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGV2ZW50UGF0aCAgICA6IERvbUV2ZW50cy5nZXRQYXRoRnJvbUVsZW1lbnQodGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBwYXRoICAgICAgICAgOiBtZS5zdGFydEV2ZW50LnBhdGggfHwgbWUuc3RhcnRFdmVudC5jb21wb3NlZFBhdGgoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICAgIDogJ2RyYWc6ZW5kJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgcHJldmVudERlZmF1bHQsIHRydWUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgICBtZS5vblRvdWNoTW92ZSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obWUsIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudDogbnVsbCxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZyAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhcnRFdmVudCAgICA6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5kcmFnZ2luZykge1xuICAgICAgICAgICAgY29uc3Qge3BhZ2VYLCBwYWdlWX0gPSBEb21FdmVudHMuZ2V0VG91Y2hDb29yZHMoZXZlbnQpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IG1lLmN1cnJlbnRFbGVtZW50LFxuICAgICAgICAgICAgICAgIHRhcmdldCAgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBhZ2VYIC0gd2luZG93LnNjcm9sbFgsIHBhZ2VZIC0gd2luZG93LnNjcm9sbFkpO1xuXG4gICAgICAgICAgICBtZS50cmlnZ2VyKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRYICAgICAgOiBwYWdlWCxcbiAgICAgICAgICAgICAgICBjbGllbnRZICAgICAgOiBwYWdlWSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGV2ZW50UGF0aCAgICA6IERvbUV2ZW50cy5nZXRQYXRoRnJvbUVsZW1lbnQodGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBwYXRoICAgICAgICAgOiBtZS5zdGFydEV2ZW50LnBhdGggfHwgbWUuc3RhcnRFdmVudC5jb21wb3NlZFBhdGgoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICAgIDogJ2RyYWc6bW92ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0ID0gRG9tRXZlbnRzLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBtZS5kcmFnVGFyZ2V0Q2xhc3Nlcyk7XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgY29uc3Qge3BhZ2VYLCBwYWdlWX0gPSBEb21FdmVudHMuZ2V0VG91Y2hDb29yZHMoZXZlbnQpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQ6IHRhcmdldC5ub2RlLFxuICAgICAgICAgICAgICAgIHBhZ2VYICAgICAgICAgOiBwYWdlWCxcbiAgICAgICAgICAgICAgICBwYWdlWSAgICAgICAgIDogcGFnZVksXG4gICAgICAgICAgICAgICAgc3RhcnRFdmVudCAgICA6IGV2ZW50LFxuICAgICAgICAgICAgICAgIHRvdWNoU3RhcnRUaW1lOiBEYXRlLm5vdygpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgICBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIG1lLm9uVG91Y2hFbmQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAgICBtZS5vblRvdWNoRW5kKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsICAgbWUub25EaXN0YW5jZUNoYW5nZSwge2NhbmNlbGFibGU6IHRydWV9KTtcblxuICAgICAgICAgICAgbWUudGFwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLm9uRGlzdGFuY2VDaGFuZ2Uoe3RvdWNoZXM6IFt7cGFnZVg6IG1lLnBhZ2VYLCBwYWdlWTogbWUucGFnZVl9XX0pO1xuICAgICAgICAgICAgfSwgbWUuZGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGFydERyYWcoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGVsZW1lbnQgICAgPSBtZS5jdXJyZW50RWxlbWVudCxcbiAgICAgICAgICAgIHN0YXJ0RXZlbnQgPSBtZS5zdGFydEV2ZW50LFxuICAgICAgICAgICAgdG91Y2ggICAgICA9IERvbUV2ZW50cy5nZXRUb3VjaENvb3JkcyhtZS5zdGFydEV2ZW50KTtcblxuICAgICAgICBtZS50cmlnZ2VyKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNsaWVudFggICAgICA6IHRvdWNoLnBhZ2VYLFxuICAgICAgICAgICAgY2xpZW50WSAgICAgIDogdG91Y2gucGFnZVksXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogc3RhcnRFdmVudCxcbiAgICAgICAgICAgIHBhdGggICAgICAgICA6IHN0YXJ0RXZlbnQucGF0aCB8fCBzdGFydEV2ZW50LmNvbXBvc2VkUGF0aCgpLFxuICAgICAgICAgICAgdGFyZ2V0ICAgICAgIDogc3RhcnRFdmVudC50YXJnZXQsXG4gICAgICAgICAgICB0eXBlICAgICAgICAgOiAnZHJhZzpzdGFydCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZHJhZ2dpbmcgPSB0cnVlOyAvLyB0b2RvXG5cbiAgICAgICAgaWYgKG1lLmRyYWdnaW5nKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHByZXZlbnREZWZhdWx0LCB0cnVlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsICAgbWUub25Ub3VjaE1vdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldmVudFNjcm9sbGluZyA9IG1lLmRyYWdnaW5nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUb3VjaCk7XG5cbmV4cG9ydCB7VG91Y2ggYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==