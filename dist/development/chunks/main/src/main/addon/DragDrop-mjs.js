(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/main/addon/DragDrop-mjs"],{

/***/ "./node_modules/neo.mjs/src/main/addon/DragDrop.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/DragDrop.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");




/**
 * @class Neo.main.addon.DragDrop
 * @extends Neo.core.Base
 * @singleton
 */
class DragDrop extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.DragDrop'
         * @protected
         */
        className: 'Neo.main.addon.DragDrop',
        /**
         * @member {Boolean} alwaysFireDragMove=false
         */
        alwaysFireDragMove: false,
        /**
         * Optionally set a fixed cursor style to the document.body during drag operations
         * @member {String|null} bodyCursorStyle=null
         */
        bodyCursorStyle: null,
        /**
         * @member {DOMRect|null} scrollContainerRect=null
         */
        boundaryContainerRect: null,
        /**
         * @member {Number} clientX=0
         */
        clientX: 0,
        /**
         * @member {Number} clientY=0
         */
        clientY: 0,
        /**
         * @member {String|null} dragElementRootId=null
         */
        dragElementRootId: null,
        /**
         * @member {String} dragProxyCls='neo-dragproxy'
         */
        dragProxyCls: 'neo-dragproxy',
        /**
         * @member {HTMLElement|null} dragProxyElement=null
         * @protected
         */
        dragProxyElement: null,
        /**
         * @member {DOMRect|null} dragProxyRect=null
         */
        dragProxyRect: null,
        /**
         * @member {String|null} dragZoneId=null
         */
        dragZoneId: null,
        /**
         * You can either pass an array of (dom) ids or cls rules or both
         * @example
         * dropZoneIdentifier: {
         *     ids: ['foo','bar']
         * }
         * @example
         * dropZoneIdentifier: {
         *     cls: ['my-class-1','my-class-2']
         * }
         * @example
         * dropZoneIdentifier: {
         *     cls: ['my-class-1','my-class-2'],
         *     ids: ['foo','bar']
         * }
         * @member {Object|null} dropZoneIdentifier=null
         */
        dropZoneIdentifier: null,
        /**
         * @member {Number} initialScrollLeft=0
         */
        initialScrollLeft: 0,
        /**
         * @member {Number} initialScrollTop=0
         */
        initialScrollTop: 0,
        /**
         * @member {Boolean} moveHorizontal=true
         */
        moveHorizontal: true,
        /**
         * @member {Boolean} moveVertical=true
         */
        moveVertical: true,
        /**
         * @member {Number} offsetX=0
         */
        offsetX: 0,
        /**
         * @member {Number} offsetY=0
         */
        offsetY: 0,
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'setConfigs',
                'setDragProxyElement'
            ]
        },
        /**
         * @member {HTMLElement|null} scrollContainerElement=null
         */
        scrollContainerElement: null,
        /**
         * @member {DOMRect|null} scrollContainerRect=null
         */
        scrollContainerRect: null,
        /**
         * @member {Number} scrollFactorLeft=1
         */
        scrollFactorLeft: 1,
        /**
         * @member {Number} scrollFactorTop=1
         */
        scrollFactorTop: 1,
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

        let me      = this,
            imports = [];

        _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.on({
            mouseEnter: me.onMouseEnter,
            mouseLeave: me.onMouseLeave,
            scope     : me
        });

        me.addGlobalEventListeners();

        if (Neo.config.hasTouchEvents) {
            imports.push(__webpack_require__.e(/*! import() | src/main/draggable/sensor/Touch.mjs */ "src/main/draggable/sensor/Touch.mjs").then(__webpack_require__.bind(__webpack_require__, /*! ../draggable/sensor/Touch.mjs */ "./node_modules/neo.mjs/src/main/draggable/sensor/Touch.mjs")));
        } else {
            imports.push(__webpack_require__.e(/*! import() | src/main/draggable/sensor/Mouse.mjs */ "src/main/draggable/sensor/Mouse.mjs").then(__webpack_require__.bind(__webpack_require__, /*! ../draggable/sensor/Mouse.mjs */ "./node_modules/neo.mjs/src/main/draggable/sensor/Mouse.mjs")));
        }

        Promise.all(imports).then(modules => {
            // create the Touch or MouseSensor
            Neo.create({
                module: modules[0].default
            });
        });
    }

    /**
     *
     */
    addGlobalEventListeners() {
        let me = this;

        document.addEventListener('drag:end',   me.onDragEnd  .bind(me), true);
        document.addEventListener('drag:move',  me.onDragMove .bind(me), true);
        document.addEventListener('drag:start', me.onDragStart.bind(me), true);
    }

    /**
     *
     * @param {Event} event
     * @returns {Object}
     */
    getEventData(event) {
        const path = event.path || event.composedPath();

        const e = {
            ..._DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getEventData(event.detail.originalEvent),
            clientX: event.detail.clientX,
            clientY: event.detail.clientY
        };

        if (event.detail.eventPath) {
            e.targetPath = event.detail.eventPath.map(e => _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getTargetData(e));
        } else {
            e.targetPath = e.path || e.composedPath();
        }

        e.path = path.map(e => _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getTargetData(e));

        return e;
    }

    /**
     *
     * @param {Object} event
     */
    onDragEnd(event) {
        let me          = this,
            parsedEvent = me.getEventData(event),
            isDrop      = me.pathIncludesDropZone(parsedEvent.targetPath);

        _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.setBodyCls({
            remove: ['neo-unselectable']
        });

        if (me.bodyCursorStyle) {
            _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.setStyle({
                id   : 'document.body',
                style: {
                    cursor: null
                }
            });
        }

        _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
            ...parsedEvent,
            isDrop : isDrop,
            offsetX: me.offsetX,
            offsetY: me.offsetY,
            type   : 'drag:end'
        });

        if (isDrop) {
            _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
                ..._DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.getMouseEventData(event.detail.originalEvent),
                dragZoneId: me.dragZoneId,
                type      : 'drop'
            });
        }

        Object.assign(me, {
            alwaysFireDragMove    : false,
            bodyCursorStyle       : null,
            boundaryContainerRect : null,
            dragElementRootId     : null,
            dragElementRootRect   : null,
            dragProxyCls          : 'neo-dragproxy',
            dragProxyElement      : null,
            dragZoneId            : null,
            dropZoneIdentifier    : null,
            initialScrollLeft     : 0,
            initialScrollTop      : 0,
            moveHorizontal        : true,
            moveVertical          : true,
            scrollContainerElement: null,
            scrollContainerRect   : null,
            setScrollFactorLeft   : 1,
            scrollFactorTop       : 1
        });
    }

    /**
     *
     * @param {Object} event
     */
    onDragMove(event) {
        let me        = this,
            proxyRect = me.dragProxyRect,
            rect      = me.boundaryContainerRect,
            data, left, top;

        if (me.scrollContainerElement) {
            data = me.scrollContainer({
                clientX: event.detail.clientX,
                clientY: event.detail.clientY
            });

            event.detail.clientX = data.clientX;
            event.detail.clientY = data.clientY;
        }

        if (me.dragProxyElement) {
            left = event.detail.clientX - me.offsetX;
            top  = event.detail.clientY - me.offsetY;

            if (rect) {
                if (left < rect.left) {
                    left = rect.left;
                } else if (left > rect.right - proxyRect.width) {
                    left = rect.right - proxyRect.width;
                }

                if (top < rect.top) {
                    top = rect.top;
                } else if (top > rect.bottom - proxyRect.height) {
                    top = rect.bottom - proxyRect.height
                }
            }

            if (!me.moveHorizontal) {
                left = me.dragProxyRect.x;
            }

            me.dragProxyElement.style.left = `${left}px`;

            if (!me.moveVertical) {
                top = me.dragProxyRect.y;
            }

            me.dragProxyElement.style.top = `${top}px`;
        }

        if (!me.dragProxyElement || me.alwaysFireDragMove) {
            _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
                ...me.getEventData(event),
                offsetX: me.offsetX,
                offsetY: me.offsetY,
                type   : 'drag:move'
            });
        }
    }

    /**
     *
     * @param {Object} event
     */
    onDragStart(event) {
        let me   = this,
            rect = event.target.getBoundingClientRect();

        _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.setBodyCls({
            add: ['neo-unselectable']
        });

        Object.assign(me, {
            dragProxyRect: rect,
            offsetX      : event.detail.clientX - rect.left,
            offsetY      : event.detail.clientY - rect.top
        });

        _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
            ...this.getEventData(event),
            type: 'drag:start'
        });
    }

    /**
     *
     * @param {Object} event
     */
    onMouseEnter(event) {
        let me = this;

        if (me.pathIncludesDropZone(event.path)) {
            _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
                ...event,
                dragZoneId: me.dragZoneId,
                type      : 'drop:enter'
            });
        }
    }

    /**
     *
     * @param {Object} event
     */
    onMouseLeave(event) {
        let me = this;

        if (me.pathIncludesDropZone(event.path)) {
            _DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__.default.sendMessageToApp({
                ...event,
                dragZoneId: me.dragZoneId,
                type      : 'drop:leave'
            });
        }
    }

    /**
     *
     * @param {Array} path
     * @returns {Boolean}
     */
    pathIncludesDropZone(path) {
        let me         = this,
            hasMatch   = true,
            identifier = me.dropZoneIdentifier,
            cls, ids;

        if (identifier) {
            cls = identifier.cls;
            ids = identifier.ids;

            for (const item of path) {
                if (cls) {
                    hasMatch = false;

                    for (const targetCls of item.cls) {
                        if (cls.includes(targetCls)) {
                            hasMatch = true;
                            break;
                        }
                    }
                }

                if (hasMatch && ids && !ids.includes(item.id)) {
                    hasMatch = false;
                }

                if (hasMatch) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     *
     * @param {Object} data
     * @param {Number} data.clientX
     * @param {Number} data.clientY
     * @returns {Object}
     */
    scrollContainer(data) {
        let me     = this,
            deltaX = data.clientX - me.clientX,
            deltaY = data.clientY - me.clientY,
            el     = me.scrollContainerElement,
            gap    = 250,
            rect   = me.scrollContainerRect;

        me.clientX =  data.clientX;
        me.clientY =  data.clientY;

        if (
            (deltaX < 0 && data.clientX < rect.left  + gap) ||
            (deltaX > 0 && data.clientX > rect.right - gap)
        ) {
            el.scrollLeft += (deltaX * me.scrollFactorLeft);
        }

        if (
            (deltaY < 0 && data.clientY < rect.top    + gap) ||
            (deltaY > 0 && data.clientY > rect.bottom - gap)
        ) {
            el.scrollTop += (deltaY * me.scrollFactorTop);
        }

        return {
            clientX: me.clientX + el.scrollLeft - me.initialScrollLeft,
            clientY: me.clientY + el.scrollTop  - me.initialScrollTop
        };
    }

    /**
     * DragZones will set these configs inside their dragStart() method.
     * They only persist until the end of a drag OP.
     * @param {Object}  data
     * @param {Boolean} data.alwaysFireDragMove
     * @param {String}  data.boundaryContainerId
     * @param {String}  data.scrollContainerId
     * @param {Number}  data.scrollFactorLeft
     * @param {Number}  data.scrollFactorTop
     */
    setConfigs(data) {
        let me = this,
            node;

        delete data.appName;

        if (data.boundaryContainerId) {
            node = _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getElementOrBody(data.boundaryContainerId);
            me.boundaryContainerRect = node.getBoundingClientRect();
        }

        delete data.boundaryContainerId;

        if (data.scrollContainerId) {
            node = _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.getElementOrBody(data.scrollContainerId);

            Object.assign(me, {
                scrollContainerElement: node,
                scrollContainerRect   : node.getBoundingClientRect(),
                initialScrollLeft     : node.scrollLeft,
                initialScrollTop      : node.scrollTop
            });
        }

        delete data.scrollContainerId;

        Object.entries(data).forEach(([key, value]) => {
            if (me.hasOwnProperty(key)) {
                me[key] = value;
            } else {
                console.error('unknown key passed inside setConfigs()', key);
            }
        });

        // we need to apply the custom style here, since onDragStart() triggers before we get the configs
        if (me.bodyCursorStyle) {
            _DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__.default.setStyle({
                id   : 'document.body',
                style: {
                    cursor: me.bodyCursorStyle
                }
            });
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     */
    setDragProxyElement(data) {
        this.dragProxyElement = document.getElementById(data.id);
    }
}

Neo.applyClassConfig(DragDrop);

let instance = Neo.create(DragDrop);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vRHJhZ0Ryb3AubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSDtBQUNBOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFJO0FBQzNCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFD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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQixvRUFBMEI7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQixvRUFBMEI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxZQUFZLDREQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSxFIiwiZmlsZSI6ImNodW5rcy9tYWluL3NyYy9tYWluL2FkZG9uL0RyYWdEcm9wLW1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlICAgICAgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRG9tQWNjZXNzIGZyb20gJy4uL0RvbUFjY2Vzcy5tanMnO1xuaW1wb3J0IERvbUV2ZW50cyBmcm9tICcuLi9Eb21FdmVudHMubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1haW4uYWRkb24uRHJhZ0Ryb3BcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRHJhZ0Ryb3AgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uYWRkb24uRHJhZ0Ryb3AnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLmFkZG9uLkRyYWdEcm9wJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGFsd2F5c0ZpcmVEcmFnTW92ZT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgYWx3YXlzRmlyZURyYWdNb3ZlOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9wdGlvbmFsbHkgc2V0IGEgZml4ZWQgY3Vyc29yIHN0eWxlIHRvIHRoZSBkb2N1bWVudC5ib2R5IGR1cmluZyBkcmFnIG9wZXJhdGlvbnNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJvZHlDdXJzb3JTdHlsZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBib2R5Q3Vyc29yU3R5bGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtET01SZWN0fG51bGx9IHNjcm9sbENvbnRhaW5lclJlY3Q9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYm91bmRhcnlDb250YWluZXJSZWN0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjbGllbnRYPTBcbiAgICAgICAgICovXG4gICAgICAgIGNsaWVudFg6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNsaWVudFk9MFxuICAgICAgICAgKi9cbiAgICAgICAgY2xpZW50WTogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBkcmFnRWxlbWVudFJvb3RJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnRWxlbWVudFJvb3RJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZHJhZ1Byb3h5Q2xzPSduZW8tZHJhZ3Byb3h5J1xuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ1Byb3h5Q2xzOiAnbmVvLWRyYWdwcm94eScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtIVE1MRWxlbWVudHxudWxsfSBkcmFnUHJveHlFbGVtZW50PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ1Byb3h5RWxlbWVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0RPTVJlY3R8bnVsbH0gZHJhZ1Byb3h5UmVjdD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnUHJveHlSZWN0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRyYWdab25lSWQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ1pvbmVJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFlvdSBjYW4gZWl0aGVyIHBhc3MgYW4gYXJyYXkgb2YgKGRvbSkgaWRzIG9yIGNscyBydWxlcyBvciBib3RoXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGRyb3Bab25lSWRlbnRpZmllcjoge1xuICAgICAgICAgKiAgICAgaWRzOiBbJ2ZvbycsJ2JhciddXG4gICAgICAgICAqIH1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogZHJvcFpvbmVJZGVudGlmaWVyOiB7XG4gICAgICAgICAqICAgICBjbHM6IFsnbXktY2xhc3MtMScsJ215LWNsYXNzLTInXVxuICAgICAgICAgKiB9XG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGRyb3Bab25lSWRlbnRpZmllcjoge1xuICAgICAgICAgKiAgICAgY2xzOiBbJ215LWNsYXNzLTEnLCdteS1jbGFzcy0yJ10sXG4gICAgICAgICAqICAgICBpZHM6IFsnZm9vJywnYmFyJ11cbiAgICAgICAgICogfVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZHJvcFpvbmVJZGVudGlmaWVyPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRyb3Bab25lSWRlbnRpZmllcjogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaW5pdGlhbFNjcm9sbExlZnQ9MFxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbFNjcm9sbExlZnQ6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGluaXRpYWxTY3JvbGxUb3A9MFxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbFNjcm9sbFRvcDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdmVIb3Jpem9udGFsPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG1vdmVIb3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW92ZVZlcnRpY2FsPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG1vdmVWZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gb2Zmc2V0WD0wXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBvZmZzZXRZPTBcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldFk6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdzZXRDb25maWdzJyxcbiAgICAgICAgICAgICAgICAnc2V0RHJhZ1Byb3h5RWxlbWVudCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0hUTUxFbGVtZW50fG51bGx9IHNjcm9sbENvbnRhaW5lckVsZW1lbnQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyRWxlbWVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0RPTVJlY3R8bnVsbH0gc2Nyb2xsQ29udGFpbmVyUmVjdD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxDb250YWluZXJSZWN0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBzY3JvbGxGYWN0b3JMZWZ0PTFcbiAgICAgICAgICovXG4gICAgICAgIHNjcm9sbEZhY3RvckxlZnQ6IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHNjcm9sbEZhY3RvclRvcD0xXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxGYWN0b3JUb3A6IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGltcG9ydHMgPSBbXTtcblxuICAgICAgICBEb21FdmVudHMub24oe1xuICAgICAgICAgICAgbW91c2VFbnRlcjogbWUub25Nb3VzZUVudGVyLFxuICAgICAgICAgICAgbW91c2VMZWF2ZTogbWUub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgc2NvcGUgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5oYXNUb3VjaEV2ZW50cykge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3JjL21haW4vZHJhZ2dhYmxlL3NlbnNvci9Ub3VjaC5tanMnICovICcuLi9kcmFnZ2FibGUvc2Vuc29yL1RvdWNoLm1qcycpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcG9ydHMucHVzaChpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3NyYy9tYWluL2RyYWdnYWJsZS9zZW5zb3IvTW91c2UubWpzJyAqLyAnLi4vZHJhZ2dhYmxlL3NlbnNvci9Nb3VzZS5tanMnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmFsbChpbXBvcnRzKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBUb3VjaCBvciBNb3VzZVNlbnNvclxuICAgICAgICAgICAgTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBtb2R1bGVzWzBdLmRlZmF1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZEdsb2JhbEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6ZW5kJywgICBtZS5vbkRyYWdFbmQgIC5iaW5kKG1lKSwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6bW92ZScsICBtZS5vbkRyYWdNb3ZlIC5iaW5kKG1lKSwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6c3RhcnQnLCBtZS5vbkRyYWdTdGFydC5iaW5kKG1lKSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0RXZlbnREYXRhKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBldmVudC5wYXRoIHx8IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuXG4gICAgICAgIGNvbnN0IGUgPSB7XG4gICAgICAgICAgICAuLi5Eb21FdmVudHMuZ2V0RXZlbnREYXRhKGV2ZW50LmRldGFpbC5vcmlnaW5hbEV2ZW50KSxcbiAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmRldGFpbC5jbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuZGV0YWlsLmNsaWVudFlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmV2ZW50UGF0aCkge1xuICAgICAgICAgICAgZS50YXJnZXRQYXRoID0gZXZlbnQuZGV0YWlsLmV2ZW50UGF0aC5tYXAoZSA9PiBEb21FdmVudHMuZ2V0VGFyZ2V0RGF0YShlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldFBhdGggPSBlLnBhdGggfHwgZS5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucGF0aCA9IHBhdGgubWFwKGUgPT4gRG9tRXZlbnRzLmdldFRhcmdldERhdGEoZSkpO1xuXG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25EcmFnRW5kKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBwYXJzZWRFdmVudCA9IG1lLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICBpc0Ryb3AgICAgICA9IG1lLnBhdGhJbmNsdWRlc0Ryb3Bab25lKHBhcnNlZEV2ZW50LnRhcmdldFBhdGgpO1xuXG4gICAgICAgIERvbUFjY2Vzcy5zZXRCb2R5Q2xzKHtcbiAgICAgICAgICAgIHJlbW92ZTogWyduZW8tdW5zZWxlY3RhYmxlJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLmJvZHlDdXJzb3JTdHlsZSkge1xuICAgICAgICAgICAgRG9tQWNjZXNzLnNldFN0eWxlKHtcbiAgICAgICAgICAgICAgICBpZCAgIDogJ2RvY3VtZW50LmJvZHknLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgRG9tRXZlbnRzLnNlbmRNZXNzYWdlVG9BcHAoe1xuICAgICAgICAgICAgLi4ucGFyc2VkRXZlbnQsXG4gICAgICAgICAgICBpc0Ryb3AgOiBpc0Ryb3AsXG4gICAgICAgICAgICBvZmZzZXRYOiBtZS5vZmZzZXRYLFxuICAgICAgICAgICAgb2Zmc2V0WTogbWUub2Zmc2V0WSxcbiAgICAgICAgICAgIHR5cGUgICA6ICdkcmFnOmVuZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzRHJvcCkge1xuICAgICAgICAgICAgRG9tRXZlbnRzLnNlbmRNZXNzYWdlVG9BcHAoe1xuICAgICAgICAgICAgICAgIC4uLkRvbUV2ZW50cy5nZXRNb3VzZUV2ZW50RGF0YShldmVudC5kZXRhaWwub3JpZ2luYWxFdmVudCksXG4gICAgICAgICAgICAgICAgZHJhZ1pvbmVJZDogbWUuZHJhZ1pvbmVJZCxcbiAgICAgICAgICAgICAgICB0eXBlICAgICAgOiAnZHJvcCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgYWx3YXlzRmlyZURyYWdNb3ZlICAgIDogZmFsc2UsXG4gICAgICAgICAgICBib2R5Q3Vyc29yU3R5bGUgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgYm91bmRhcnlDb250YWluZXJSZWN0IDogbnVsbCxcbiAgICAgICAgICAgIGRyYWdFbGVtZW50Um9vdElkICAgICA6IG51bGwsXG4gICAgICAgICAgICBkcmFnRWxlbWVudFJvb3RSZWN0ICAgOiBudWxsLFxuICAgICAgICAgICAgZHJhZ1Byb3h5Q2xzICAgICAgICAgIDogJ25lby1kcmFncHJveHknLFxuICAgICAgICAgICAgZHJhZ1Byb3h5RWxlbWVudCAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIGRyYWdab25lSWQgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICBkcm9wWm9uZUlkZW50aWZpZXIgICAgOiBudWxsLFxuICAgICAgICAgICAgaW5pdGlhbFNjcm9sbExlZnQgICAgIDogMCxcbiAgICAgICAgICAgIGluaXRpYWxTY3JvbGxUb3AgICAgICA6IDAsXG4gICAgICAgICAgICBtb3ZlSG9yaXpvbnRhbCAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgbW92ZVZlcnRpY2FsICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXJSZWN0ICAgOiBudWxsLFxuICAgICAgICAgICAgc2V0U2Nyb2xsRmFjdG9yTGVmdCAgIDogMSxcbiAgICAgICAgICAgIHNjcm9sbEZhY3RvclRvcCAgICAgICA6IDFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcHJveHlSZWN0ID0gbWUuZHJhZ1Byb3h5UmVjdCxcbiAgICAgICAgICAgIHJlY3QgICAgICA9IG1lLmJvdW5kYXJ5Q29udGFpbmVyUmVjdCxcbiAgICAgICAgICAgIGRhdGEsIGxlZnQsIHRvcDtcblxuICAgICAgICBpZiAobWUuc2Nyb2xsQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgZGF0YSA9IG1lLnNjcm9sbENvbnRhaW5lcih7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuZGV0YWlsLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuZGV0YWlsLmNsaWVudFlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBldmVudC5kZXRhaWwuY2xpZW50WCA9IGRhdGEuY2xpZW50WDtcbiAgICAgICAgICAgIGV2ZW50LmRldGFpbC5jbGllbnRZID0gZGF0YS5jbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmRyYWdQcm94eUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxlZnQgPSBldmVudC5kZXRhaWwuY2xpZW50WCAtIG1lLm9mZnNldFg7XG4gICAgICAgICAgICB0b3AgID0gZXZlbnQuZGV0YWlsLmNsaWVudFkgLSBtZS5vZmZzZXRZO1xuXG4gICAgICAgICAgICBpZiAocmVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChsZWZ0IDwgcmVjdC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSByZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gcmVjdC5yaWdodCAtIHByb3h5UmVjdC53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmVjdC5yaWdodCAtIHByb3h5UmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodG9wIDwgcmVjdC50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3AgPiByZWN0LmJvdHRvbSAtIHByb3h5UmVjdC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gcmVjdC5ib3R0b20gLSBwcm94eVJlY3QuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1lLm1vdmVIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IG1lLmRyYWdQcm94eVJlY3QueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZHJhZ1Byb3h5RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG5cbiAgICAgICAgICAgIGlmICghbWUubW92ZVZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gbWUuZHJhZ1Byb3h5UmVjdC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5kcmFnUHJveHlFbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLmRyYWdQcm94eUVsZW1lbnQgfHwgbWUuYWx3YXlzRmlyZURyYWdNb3ZlKSB7XG4gICAgICAgICAgICBEb21FdmVudHMuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICAgICAgLi4ubWUuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgICAgICBvZmZzZXRYOiBtZS5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIG9mZnNldFk6IG1lLm9mZnNldFksXG4gICAgICAgICAgICAgICAgdHlwZSAgIDogJ2RyYWc6bW92ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRyYWdTdGFydChldmVudCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICByZWN0ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIERvbUFjY2Vzcy5zZXRCb2R5Q2xzKHtcbiAgICAgICAgICAgIGFkZDogWyduZW8tdW5zZWxlY3RhYmxlJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgZHJhZ1Byb3h5UmVjdDogcmVjdCxcbiAgICAgICAgICAgIG9mZnNldFggICAgICA6IGV2ZW50LmRldGFpbC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgICAgb2Zmc2V0WSAgICAgIDogZXZlbnQuZGV0YWlsLmNsaWVudFkgLSByZWN0LnRvcFxuICAgICAgICB9KTtcblxuICAgICAgICBEb21FdmVudHMuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICB0eXBlOiAnZHJhZzpzdGFydCdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vdXNlRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGF0aEluY2x1ZGVzRHJvcFpvbmUoZXZlbnQucGF0aCkpIHtcbiAgICAgICAgICAgIERvbUV2ZW50cy5zZW5kTWVzc2FnZVRvQXBwKHtcbiAgICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgICAgICBkcmFnWm9uZUlkOiBtZS5kcmFnWm9uZUlkLFxuICAgICAgICAgICAgICAgIHR5cGUgICAgICA6ICdkcm9wOmVudGVyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5wYXRoSW5jbHVkZXNEcm9wWm9uZShldmVudC5wYXRoKSkge1xuICAgICAgICAgICAgRG9tRXZlbnRzLnNlbmRNZXNzYWdlVG9BcHAoe1xuICAgICAgICAgICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAgICAgICAgIGRyYWdab25lSWQ6IG1lLmRyYWdab25lSWQsXG4gICAgICAgICAgICAgICAgdHlwZSAgICAgIDogJ2Ryb3A6bGVhdmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHBhdGhJbmNsdWRlc0Ryb3Bab25lKHBhdGgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWF0Y2ggICA9IHRydWUsXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gbWUuZHJvcFpvbmVJZGVudGlmaWVyLFxuICAgICAgICAgICAgY2xzLCBpZHM7XG5cbiAgICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGNscyA9IGlkZW50aWZpZXIuY2xzO1xuICAgICAgICAgICAgaWRzID0gaWRlbnRpZmllci5pZHM7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBwYXRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNscykge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFyZ2V0Q2xzIG9mIGl0ZW0uY2xzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xzLmluY2x1ZGVzKHRhcmdldENscykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTWF0Y2ggJiYgaWRzICYmICFpZHMuaW5jbHVkZXMoaXRlbS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5jbGllbnRYXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuY2xpZW50WVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc2Nyb2xsQ29udGFpbmVyKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWx0YVggPSBkYXRhLmNsaWVudFggLSBtZS5jbGllbnRYLFxuICAgICAgICAgICAgZGVsdGFZID0gZGF0YS5jbGllbnRZIC0gbWUuY2xpZW50WSxcbiAgICAgICAgICAgIGVsICAgICA9IG1lLnNjcm9sbENvbnRhaW5lckVsZW1lbnQsXG4gICAgICAgICAgICBnYXAgICAgPSAyNTAsXG4gICAgICAgICAgICByZWN0ICAgPSBtZS5zY3JvbGxDb250YWluZXJSZWN0O1xuXG4gICAgICAgIG1lLmNsaWVudFggPSAgZGF0YS5jbGllbnRYO1xuICAgICAgICBtZS5jbGllbnRZID0gIGRhdGEuY2xpZW50WTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoZGVsdGFYIDwgMCAmJiBkYXRhLmNsaWVudFggPCByZWN0LmxlZnQgICsgZ2FwKSB8fFxuICAgICAgICAgICAgKGRlbHRhWCA+IDAgJiYgZGF0YS5jbGllbnRYID4gcmVjdC5yaWdodCAtIGdhcClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ICs9IChkZWx0YVggKiBtZS5zY3JvbGxGYWN0b3JMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChkZWx0YVkgPCAwICYmIGRhdGEuY2xpZW50WSA8IHJlY3QudG9wICAgICsgZ2FwKSB8fFxuICAgICAgICAgICAgKGRlbHRhWSA+IDAgJiYgZGF0YS5jbGllbnRZID4gcmVjdC5ib3R0b20gLSBnYXApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZWwuc2Nyb2xsVG9wICs9IChkZWx0YVkgKiBtZS5zY3JvbGxGYWN0b3JUb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsaWVudFg6IG1lLmNsaWVudFggKyBlbC5zY3JvbGxMZWZ0IC0gbWUuaW5pdGlhbFNjcm9sbExlZnQsXG4gICAgICAgICAgICBjbGllbnRZOiBtZS5jbGllbnRZICsgZWwuc2Nyb2xsVG9wICAtIG1lLmluaXRpYWxTY3JvbGxUb3BcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFnWm9uZXMgd2lsbCBzZXQgdGhlc2UgY29uZmlncyBpbnNpZGUgdGhlaXIgZHJhZ1N0YXJ0KCkgbWV0aG9kLlxuICAgICAqIFRoZXkgb25seSBwZXJzaXN0IHVudGlsIHRoZSBlbmQgb2YgYSBkcmFnIE9QLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgZGF0YVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGF0YS5hbHdheXNGaXJlRHJhZ01vdmVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gIGRhdGEuYm91bmRhcnlDb250YWluZXJJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgZGF0YS5zY3JvbGxDb250YWluZXJJZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSAgZGF0YS5zY3JvbGxGYWN0b3JMZWZ0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9ICBkYXRhLnNjcm9sbEZhY3RvclRvcFxuICAgICAqL1xuICAgIHNldENvbmZpZ3MoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZTtcblxuICAgICAgICBkZWxldGUgZGF0YS5hcHBOYW1lO1xuXG4gICAgICAgIGlmIChkYXRhLmJvdW5kYXJ5Q29udGFpbmVySWQpIHtcbiAgICAgICAgICAgIG5vZGUgPSBEb21BY2Nlc3MuZ2V0RWxlbWVudE9yQm9keShkYXRhLmJvdW5kYXJ5Q29udGFpbmVySWQpO1xuICAgICAgICAgICAgbWUuYm91bmRhcnlDb250YWluZXJSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBkYXRhLmJvdW5kYXJ5Q29udGFpbmVySWQ7XG5cbiAgICAgICAgaWYgKGRhdGEuc2Nyb2xsQ29udGFpbmVySWQpIHtcbiAgICAgICAgICAgIG5vZGUgPSBEb21BY2Nlc3MuZ2V0RWxlbWVudE9yQm9keShkYXRhLnNjcm9sbENvbnRhaW5lcklkKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lckVsZW1lbnQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyUmVjdCAgIDogbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2Nyb2xsTGVmdCAgICAgOiBub2RlLnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNjcm9sbFRvcCAgICAgIDogbm9kZS5zY3JvbGxUb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGRhdGEuc2Nyb2xsQ29udGFpbmVySWQ7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAobWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5rbm93biBrZXkgcGFzc2VkIGluc2lkZSBzZXRDb25maWdzKCknLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGFwcGx5IHRoZSBjdXN0b20gc3R5bGUgaGVyZSwgc2luY2Ugb25EcmFnU3RhcnQoKSB0cmlnZ2VycyBiZWZvcmUgd2UgZ2V0IHRoZSBjb25maWdzXG4gICAgICAgIGlmIChtZS5ib2R5Q3Vyc29yU3R5bGUpIHtcbiAgICAgICAgICAgIERvbUFjY2Vzcy5zZXRTdHlsZSh7XG4gICAgICAgICAgICAgICAgaWQgICA6ICdkb2N1bWVudC5ib2R5JyxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG1lLmJvZHlDdXJzb3JTdHlsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICovXG4gICAgc2V0RHJhZ1Byb3h5RWxlbWVudChkYXRhKSB7XG4gICAgICAgIHRoaXMuZHJhZ1Byb3h5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuaWQpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRHJhZ0Ryb3ApO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKERyYWdEcm9wKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyJdLCJzb3VyY2VSb290IjoiIn0=