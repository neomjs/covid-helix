(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/main/draggable/sensor/Mouse.mjs"],{

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

/***/ "./node_modules/neo.mjs/src/main/draggable/sensor/Mouse.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/draggable/sensor/Mouse.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mouse)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/main/draggable/sensor/Base.mjs");
/* harmony import */ var _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");



/**
 * @class Neo.main.draggable.sensor.Mouse
 * @extends Neo.main.draggable.sensor.Base
 */
class Mouse extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.draggable.sensor.Mouse'
         * @protected
         */
        className: 'Neo.main.draggable.sensor.Mouse',
        /**
         * @member {Number} delay=0
         */
        delay: 0,
        /**
         * @member {Number} minDistance=1
         */
        minDistance: 1,
        /**
         * @member {Number} mouseDownTime=0
         */
        mouseDownTime: 0,
        /**
         * @member {Number|null} mouseDownTimeout=null
         */
        mouseDownTimeout: null,
        /**
         * @member {Number|null} pageX=null
         * @protected
         */
        pageX: null,
        /**
         * @member {Number|null} pageY=null
         * @protected
         */
        pageY: null
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);
        Neo.bindMethods(this, ['onDistanceChange', 'onMouseDown', 'onMouseMove', 'onMouseUp']);
    }

    /**
     * Attaches sensors event listeners to the DOM
     */
    attach() {
        document.addEventListener('mousedown', this.onMouseDown, true);
    }

    /**
     * Detaches sensors event listeners from the DOM
     */
    detach() {
        document.removeEventListener('mousedown', this.onMouseDown, true);
    }

    /**
     * Detect change in distance, starting drag when both delay and distance requirements are met
     * @param {MouseEvent|Object} event - Object in case it does get trigger via the mouseDownTimeout
     */
    onDistanceChange(event) {
        let me = this;

        if (me.currentElement) {
            const {pageX, pageY}    = event,
                  timeElapsed       = Date.now() - me.mouseDownTime,
                  distanceTravelled = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getDistance(me.startEvent.pageX, me.startEvent.pageY, pageX, pageY) || 0;

            Object.assign(me, {pageX, pageY});

            if (timeElapsed >= me.delay && distanceTravelled >= me.minDistance) {
                clearTimeout(me.mouseDownTimeout);
                document.removeEventListener('mousemove', me.onDistanceChange);
                me.startDrag();
            }
        }
    }

    /**
     *
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        if (event.button === 0 && !event.ctrlKey && !event.metaKey) {
            let me     = this,
                target = _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_1__.default.testPathInclusion(event, me.dragTargetClasses);

            if (target) {
                Object.assign(me, {
                    currentElement: target.node,
                    mouseDownTime : Date.now(),
                    pageX         : event.pageX,
                    pageY         : event.pageY,
                    startEvent    : event
                });

                document.addEventListener('dragstart', preventDefault);
                document.addEventListener('mousemove', me.onDistanceChange);
                document.addEventListener('mouseup',   me.onMouseUp);

                me.mouseDownTimeout = setTimeout(() => {
                    me.onDistanceChange({pageX: me.pageX, pageY: me.pageY});
                }, me.delay);
            }
        }
    }

    /**
     *
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        let me = this;

        if (me.dragging) {
            let element = me.currentElement,
                target  = document.elementFromPoint(event.clientX, event.clientY);

            me.trigger(element, {
                clientX      : event.clientX,
                clientY      : event.clientY,
                element,
                originalEvent: event,
                path         : me.startEvent.path || me.startEvent.composedPath(),
                target,
                type         : 'drag:move'
            });
        }
    }

    /**
     *
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        if (event.button === 0) {
            let me = this;

            clearTimeout(me.mouseDownTimeout);

            document.removeEventListener('dragstart', preventDefault);
            document.removeEventListener('mousemove', me.onDistanceChange);
            document.removeEventListener('mouseup',   me.onMouseUp);

            if (me.dragging) {
                let element = me.currentElement,
                    target  = document.elementFromPoint(event.clientX, event.clientY);

                me.trigger(element, {
                    clientX      : event.clientX,
                    clientY      : event.clientY,
                    element,
                    originalEvent: event,
                    path         : me.startEvent.path || me.startEvent.composedPath(),
                    target,
                    type         : 'drag:end'
                });

                document.removeEventListener('contextmenu', preventDefault, true);
                document.removeEventListener('mousemove',   me.onMouseMove);

                Object.assign(me, {
                    currentElement: null,
                    dragging      : false,
                    startEvent    : null
                });
            }

            me.dragging = false;
        }
    }

    /**
     *
     */
    startDrag() {
        let me         = this,
            element    = me.currentElement,
            startEvent = me.startEvent;

        me.trigger(element, {
            clientX      : startEvent.clientX,
            clientY      : startEvent.clientY,
            element,
            originalEvent: startEvent,
            path         : startEvent.path || startEvent.composedPath(),
            target       : startEvent.target,
            type         : 'drag:start'
        });

        me.dragging = true;

        if (me.dragging) {
            document.addEventListener('contextmenu', preventDefault, true);
            document.addEventListener('mousemove',   me.onMouseMove);
        }
    }
}

function preventDefault(event) {
    event.preventDefault();
}

Neo.applyClassConfig(Mouse);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vZHJhZ2dhYmxlL3NlbnNvci9CYXNlLm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vZHJhZ2dhYmxlL3NlbnNvci9Nb3VzZS5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQVE7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRW1DO0FBQ1M7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFJO0FBQ3hCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0Esc0NBQXNDLCtEQUFxQjs7QUFFM0QsK0JBQStCLGFBQWE7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUVBQTJCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGlDQUFpQztBQUMxRSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiY2h1bmtzL21haW4vc3JjL21haW4vZHJhZ2dhYmxlL3NlbnNvci9Nb3VzZS5tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29yZUJhc2UgZnJvbSAnLi4vLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3Igb3RoZXIgc2Vuc29yc1xuICogQGNsYXNzIE5lby5tYWluLmRyYWdnYWJsZS5zZW5zb3IuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFpbi5kcmFnZ2FibGUuc2Vuc29yLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLmRyYWdnYWJsZS5zZW5zb3IuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtIVE1MRWxlbWVudHxudWxsfSBjdXJyZW50RWxlbWVudD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGN1cnJlbnRFbGVtZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGRyYWdUYXJnZXRDbGFzc2VzPVsnbmVvLWRyYWdnYWJsZScsJ25lby1yZXNpemFibGUnXVxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ1RhcmdldENsYXNzZXM6IFsnbmVvLWRyYWdnYWJsZScsICduZW8tcmVzaXphYmxlJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0RyYWdnaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7RXZlbnR8bnVsbH0gbGFzdEV2ZW50PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdEV2ZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7RXZlbnR8bnVsbH0gc3RhcnRFdmVudD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0YXJ0RXZlbnQ6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgICAqL1xuICAgIGF0dGFjaCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBEZXRhY2hlcyBzZW5zb3JzIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBET01cbiAgICAgKi9cbiAgICBkZXRhY2goKSB7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICB0aGlzLmF0dGFjaCgpO1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgYSBjdXN0b20gZXZlbnQgb24gdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gdHJpZ2dlciBldmVudCBvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZW5zb3JFdmVudCAtIFNlbnNvciBldmVudCB0byB0cmlnZ2VyXG4gICAgICogQHJldHVybnMge0V2ZW50fVxuICAgICAqL1xuICAgIHRyaWdnZXIoZWxlbWVudCwgc2Vuc29yRXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuZGV0YWlsID0gc2Vuc29yRXZlbnQ7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudChzZW5zb3JFdmVudC50eXBlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5sYXN0RXZlbnQgPSBzZW5zb3JFdmVudDtcblxuICAgICAgICByZXR1cm4gc2Vuc29yRXZlbnQ7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRzIGZyb20gJy4uLy4uL0RvbUV2ZW50cy5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFpbi5kcmFnZ2FibGUuc2Vuc29yLk1vdXNlXG4gKiBAZXh0ZW5kcyBOZW8ubWFpbi5kcmFnZ2FibGUuc2Vuc29yLkJhc2VcbiAqL1xuY2xhc3MgTW91c2UgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uZHJhZ2dhYmxlLnNlbnNvci5Nb3VzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4uZHJhZ2dhYmxlLnNlbnNvci5Nb3VzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRlbGF5PTBcbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtaW5EaXN0YW5jZT0xXG4gICAgICAgICAqL1xuICAgICAgICBtaW5EaXN0YW5jZTogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbW91c2VEb3duVGltZT0wXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZURvd25UaW1lOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IG1vdXNlRG93blRpbWVvdXQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbW91c2VEb3duVGltZW91dDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBwYWdlWD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHBhZ2VYOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBhZ2VZPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcGFnZVk6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIE5lby5iaW5kTWV0aG9kcyh0aGlzLCBbJ29uRGlzdGFuY2VDaGFuZ2UnLCAnb25Nb3VzZURvd24nLCAnb25Nb3VzZU1vdmUnLCAnb25Nb3VzZVVwJ10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICAgKi9cbiAgICBhdHRhY2goKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIERPTVxuICAgICAqL1xuICAgIGRldGFjaCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93biwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IGNoYW5nZSBpbiBkaXN0YW5jZSwgc3RhcnRpbmcgZHJhZyB3aGVuIGJvdGggZGVsYXkgYW5kIGRpc3RhbmNlIHJlcXVpcmVtZW50cyBhcmUgbWV0XG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fE9iamVjdH0gZXZlbnQgLSBPYmplY3QgaW4gY2FzZSBpdCBkb2VzIGdldCB0cmlnZ2VyIHZpYSB0aGUgbW91c2VEb3duVGltZW91dFxuICAgICAqL1xuICAgIG9uRGlzdGFuY2VDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHtwYWdlWCwgcGFnZVl9ICAgID0gZXZlbnQsXG4gICAgICAgICAgICAgICAgICB0aW1lRWxhcHNlZCAgICAgICA9IERhdGUubm93KCkgLSBtZS5tb3VzZURvd25UaW1lLFxuICAgICAgICAgICAgICAgICAgZGlzdGFuY2VUcmF2ZWxsZWQgPSBEb21FdmVudHMuZ2V0RGlzdGFuY2UobWUuc3RhcnRFdmVudC5wYWdlWCwgbWUuc3RhcnRFdmVudC5wYWdlWSwgcGFnZVgsIHBhZ2VZKSB8fCAwO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7cGFnZVgsIHBhZ2VZfSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lRWxhcHNlZCA+PSBtZS5kZWxheSAmJiBkaXN0YW5jZVRyYXZlbGxlZCA+PSBtZS5taW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChtZS5tb3VzZURvd25UaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtZS5vbkRpc3RhbmNlQ2hhbmdlKTtcbiAgICAgICAgICAgICAgICBtZS5zdGFydERyYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDAgJiYgIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHRhcmdldCA9IERvbUV2ZW50cy50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgbWUuZHJhZ1RhcmdldENsYXNzZXMpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudDogdGFyZ2V0Lm5vZGUsXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlRG93blRpbWUgOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICBwYWdlWCAgICAgICAgIDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VZICAgICAgICAgOiBldmVudC5wYWdlWSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRFdmVudCAgICA6IGV2ZW50XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbWUub25EaXN0YW5jZUNoYW5nZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICAgbWUub25Nb3VzZVVwKTtcblxuICAgICAgICAgICAgICAgIG1lLm1vdXNlRG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUub25EaXN0YW5jZUNoYW5nZSh7cGFnZVg6IG1lLnBhZ2VYLCBwYWdlWTogbWUucGFnZVl9KTtcbiAgICAgICAgICAgICAgICB9LCBtZS5kZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5kcmFnZ2luZykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBtZS5jdXJyZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgICB0YXJnZXQgID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgICAgICAgICAgbWUudHJpZ2dlcihlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgY2xpZW50WCAgICAgIDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZICAgICAgOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgcGF0aCAgICAgICAgIDogbWUuc3RhcnRFdmVudC5wYXRoIHx8IG1lLnN0YXJ0RXZlbnQuY29tcG9zZWRQYXRoKCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgICA6ICdkcmFnOm1vdmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VVcChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobWUubW91c2VEb3duVGltZW91dCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHByZXZlbnREZWZhdWx0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1lLm9uRGlzdGFuY2VDaGFuZ2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICAgbWUub25Nb3VzZVVwKTtcblxuICAgICAgICAgICAgaWYgKG1lLmRyYWdnaW5nKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBtZS5jdXJyZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ICA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgICAgICAgICAgICBtZS50cmlnZ2VyKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50WCAgICAgIDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50WSAgICAgIDogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGggICAgICAgICA6IG1lLnN0YXJ0RXZlbnQucGF0aCB8fCBtZS5zdGFydEV2ZW50LmNvbXBvc2VkUGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICAgICAgICA6ICdkcmFnOmVuZCdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgcHJldmVudERlZmF1bHQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICAgbWUub25Nb3VzZU1vdmUpO1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmcgICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdGFydEV2ZW50ICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGFydERyYWcoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGVsZW1lbnQgICAgPSBtZS5jdXJyZW50RWxlbWVudCxcbiAgICAgICAgICAgIHN0YXJ0RXZlbnQgPSBtZS5zdGFydEV2ZW50O1xuXG4gICAgICAgIG1lLnRyaWdnZXIoZWxlbWVudCwge1xuICAgICAgICAgICAgY2xpZW50WCAgICAgIDogc3RhcnRFdmVudC5jbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WSAgICAgIDogc3RhcnRFdmVudC5jbGllbnRZLFxuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IHN0YXJ0RXZlbnQsXG4gICAgICAgICAgICBwYXRoICAgICAgICAgOiBzdGFydEV2ZW50LnBhdGggfHwgc3RhcnRFdmVudC5jb21wb3NlZFBhdGgoKSxcbiAgICAgICAgICAgIHRhcmdldCAgICAgICA6IHN0YXJ0RXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgdHlwZSAgICAgICAgIDogJ2RyYWc6c3RhcnQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAobWUuZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgcHJldmVudERlZmF1bHQsIHRydWUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgICBtZS5vbk1vdXNlTW92ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTW91c2UpO1xuXG5leHBvcnQge01vdXNlIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=