(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["src/draggable/DropZone-mjs.js"],{

/***/ "./node_modules/neo.mjs/src/draggable/DropZone.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/draggable/DropZone.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropZone)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.draggable.DropZone
 * @extends Neo.core.Base
 */
class DropZone extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.draggable.DropZone'
         * @protected
         */
        className: 'Neo.draggable.DropZone',
        /**
         * @member {String} ntype='dropzone'
         * @protected
         */
        ntype: 'dropzone',
        /**
         * @member {Neo.component.Base} owner=null
         */
        owner: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            owner        = me.owner,
            domListeners = owner.domListeners;

        domListeners.push(
            {'drop'      : me.onDrop,      scope: me},
            {'drop:enter': me.onDropEnter, scope: me},
            {'drop:leave': me.onDropLeave, scope: me}
        );

        owner.domListeners = domListeners;
    }

    /**
     *
     * @param {String} name
     * @param {Object} data
     */
    fireOwnerEvent(name, data) {
        this.owner.fire(name, this.getDragData(data.dragZoneId));
    }

    /**
     *
     * @param {String} dragZoneId
     * @returns {Object|null}
     */
    getDragData(dragZoneId) {
        let dragZone = Neo.get(dragZoneId);

        if (dragZone) {
            return dragZone.data;
        }

        return null;
    }

    /**
     *
     * @param {Object} data
     */
    onDrop(data) {
        this.fireOwnerEvent('drop', data);
    }

    /**
     *
     * @param {Object} data
     */
    onDropEnter(data) {
        this.fireOwnerEvent('drop:enter', data);
    }

    /**
     *
     * @param {Object} data
     */
    onDropLeave(data) {
        this.fireOwnerEvent('drop:leave', data);
    }
}

Neo.applyClassConfig(DropZone);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RyYWdnYWJsZS9Ecm9wWm9uZS5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFJO0FBQzNCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHdDQUF3QztBQUNyRCxhQUFhLHdDQUF3QztBQUNyRCxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJjaHVua3MvYXBwL3NyYy9kcmFnZ2FibGUvRHJvcFpvbmUtbWpzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5kcmFnZ2FibGUuRHJvcFpvbmVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgRHJvcFpvbmUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmRyYWdnYWJsZS5Ecm9wWm9uZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmRyYWdnYWJsZS5Ecm9wWm9uZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkcm9wem9uZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdkcm9wem9uZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkJhc2V9IG93bmVyPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG93bmVyOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb3duZXIgICAgICAgID0gbWUub3duZXIsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBvd25lci5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICB7J2Ryb3AnICAgICAgOiBtZS5vbkRyb3AsICAgICAgc2NvcGU6IG1lfSxcbiAgICAgICAgICAgIHsnZHJvcDplbnRlcic6IG1lLm9uRHJvcEVudGVyLCBzY29wZTogbWV9LFxuICAgICAgICAgICAgeydkcm9wOmxlYXZlJzogbWUub25Ecm9wTGVhdmUsIHNjb3BlOiBtZX1cbiAgICAgICAgKTtcblxuICAgICAgICBvd25lci5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZmlyZU93bmVyRXZlbnQobmFtZSwgZGF0YSkge1xuICAgICAgICB0aGlzLm93bmVyLmZpcmUobmFtZSwgdGhpcy5nZXREcmFnRGF0YShkYXRhLmRyYWdab25lSWQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkcmFnWm9uZUlkXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIGdldERyYWdEYXRhKGRyYWdab25lSWQpIHtcbiAgICAgICAgbGV0IGRyYWdab25lID0gTmVvLmdldChkcmFnWm9uZUlkKTtcblxuICAgICAgICBpZiAoZHJhZ1pvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBkcmFnWm9uZS5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRHJvcChkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZU93bmVyRXZlbnQoJ2Ryb3AnLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Ecm9wRW50ZXIoZGF0YSkge1xuICAgICAgICB0aGlzLmZpcmVPd25lckV2ZW50KCdkcm9wOmVudGVyJywgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRHJvcExlYXZlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maXJlT3duZXJFdmVudCgnZHJvcDpsZWF2ZScsIGRhdGEpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRHJvcFpvbmUpO1xuXG5leHBvcnQge0Ryb3Bab25lIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=