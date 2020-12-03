(self["webpackChunkcovid19_helix"] = self["webpackChunkcovid19_helix"] || []).push([["apps_covidhelix_app_mjs"],{

/***/ "./apps/covidhelix/app.mjs":
/*!*********************************!*\
  !*** ./apps/covidhelix/app.mjs ***!
  \*********************************/
/*! namespace exports */
/*! export onStart [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => /* binding */ onStart
/* harmony export */ });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/covidhelix/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/covidhelix/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
    name    : 'CovidHelix'
});



/***/ }),

/***/ "./apps/covidhelix/model/Country.mjs":
/*!*******************************************!*\
  !*** ./apps/covidhelix/model/Country.mjs ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Country
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class CovidHelix.model.Country
 * @extends Neo.data.Model
 */
class Country extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        className: 'CovidHelix.model.Country',

        fields: [{
            name: 'cases',
            type: 'int'
        }, {
            name: 'country',
            type: 'string'
        }, {
            name: 'critical',
            type: 'int'
        }, {
            name: 'deaths',
            type: 'int'
        }, {
            name: 'recovered',
            type: 'int'
        }, {
            name: 'todayCases',
            type: 'int'
        }, {
            name: 'todayDeaths',
            type: 'int'
        }]
    }}
}

Neo.applyClassConfig(Country);



/***/ }),

/***/ "./apps/covidhelix/store/Countries.mjs":
/*!*********************************************!*\
  !*** ./apps/covidhelix/store/Countries.mjs ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Countries
/* harmony export */ });
/* harmony import */ var _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Country.mjs */ "./apps/covidhelix/model/Country.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class CovidHelix.store.Countries
 * @extends Neo.data.Store
 */
class Countries extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getConfig() {return {
        className: 'CovidHelix.store.Countries',

        keyProperty: 'country',
        model      : _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__.default
    }}
}

Neo.applyClassConfig(Countries);



/***/ }),

/***/ "./apps/covidhelix/view/CountryHelix.mjs":
/*!***********************************************!*\
  !*** ./apps/covidhelix/view/CountryHelix.mjs ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CountryHelix
/* harmony export */ });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Countries.mjs */ "./apps/covidhelix/store/Countries.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");



/**
 * @class CovidHelix.view.CountryHelix
 * @extends Neo.component.Helix
 */
class CountryHelix extends _node_modules_neo_mjs_src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getStaticConfig() {return {
        /**
         * A regex to replace blank chars
         * @member {RegExp} flagRegEx=/ /gi
         * @private
         * @static
         */
        flagRegEx: / /gi
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.country.Helix'
         * @private
         */
        className: 'Covid.view.country.Helix',
        /**
         * @member {String[]} cls=['covid-country-helix', 'neo-helix']
         */
        cls: ['covid-country-helix', 'neo-helix'],
        /**
         * The vertical delta between each helix item (increasing this value will create a spiral)
         * @member {Number} deltaY=1.2
         */
        deltaY: 1.2,
        /**
         * @member {Object} itemTpl_
         */
        itemTpl: {
            cls     : ['surface', 'neo-helix-item'],
            style   : {},
            tabIndex: '-1',
            cn: [{
                cls  : ['neo-item-wrapper'],
                style: {},
                cn: [{
                    tag  : 'div',
                    cls  : ['neo-country-helix-item'],
                    style: {},

                    cn: [{
                        cls: ['neo-item-header'],
                        cn: [{
                            tag: 'img',
                            cls: ['neo-flag']
                        }, {

                        }]
                    }, {
                        tag: 'table',
                        cls: ['neo-content-table'],
                        cn : [{
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Cases'},
                                {tag: 'td', cls: ['neo-align-right']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Cases today'},
                                {tag: 'td', cls: ['neo-align-right']}
                            ]
                        }, {
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Deaths'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-deaths']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Deaths today'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-deaths']}
                            ]
                        }, {
                            tag: 'tr',
                            cn : [
                                {tag: 'td', html: 'Recovered'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-recovered']},
                                {tag: 'td', style: {width: '100%'}},
                                {tag: 'td', html: 'Critical'},
                                {tag: 'td', cls: ['neo-align-right', 'neo-content-critical']}
                            ]
                        }]
                    }]
                }]
            }]
        },
        /**
         * The unique record field containing the id.
         * @member {String} keyProperty='id'
         */
        keyProperty: 'country',
        /**
         * The radius of the Helix in px
         * @member {Number} radius=2500
         */
        radius: 2500,
        /**
         * The rotationAngle of the Helix in degrees
         * @member {Number} rotationAngle=720
         */
        rotationAngle: 720,
        /**
         * True displays the first & last name record fields below an expanded item
         * @member {Boolean} showCloneInfo=false
         */
        showCloneInfo: false,
        /**
         * @member {Neo.data.Store} store=CountryStore
         */
        store: _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
        /**
         * The translateX value gets included into each helix item
         * @member {Number} translateY=500
         */
        translateY: 500,
        /**
         * The translateX value gets included into each helix item
         * @member {Number} translateZ_=-2300
         */
        translateZ: -2300
    }}

    /**
     *
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me         = this,
            firstChild = vdomItem.cn[0].cn[0],
            table      = firstChild.cn[1];

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        firstChild.cn[0].cn[0].src  = me.getCountryFlagUrl(record.country);
        firstChild.cn[0].cn[1].html = record.country;

        table.cn[0].cn[1].html = record.cases;
        table.cn[1].cn[1].html = record.deaths;
        table.cn[2].cn[1].html = record.recovered;

        table.cn[0].cn[4].html = record.todayCases;
        table.cn[1].cn[4].html = record.todayDeaths;
        table.cn[2].cn[4].html = record.critical;

        return vdomItem;
    }

    /**
     *
     * @param {String} name
     * @return {String} url
     */
    getCountryFlagUrl(name) {
        const map = {
            'bosnia'                               : 'bosnia-and-herzegovina',
            'cabo-verde'                           : 'cape-verde',
            'car'                                  : 'central-african-republic',
            'caribbean-netherlands'                : 'netherlands',
            'channel-islands'                      : 'jersey',
            'côte-d\'ivoire'                       : 'ivory-coast',
            'congo'                                : 'republic-of-the-congo',
            'congo,-the-democratic-republic-of-the': 'democratic-republic-of-congo',
            'curaçao'                              : 'curacao',
            'czechia'                              : 'czech-republic',
            'diamond-princess'                     : 'japan', // cruise ship
            'drc'                                  : 'democratic-republic-of-congo',
            'el-salvador'                          : 'salvador',
            'eswatini'                             : 'swaziland',
            'faeroe-islands'                       : 'faroe-islands',
            'falkland-islands-(malvinas)'          : 'falkland-islands',
            'french-guiana'                        : 'france', // ?
            'guadeloupe'                           : 'france', // ?
            'holy-see-(vatican-city-state)'        : 'vatican-city',
            'iran,-islamic-republic-of'            : 'iran',
            'lao-people\'s-democratic-republic'    : 'laos',
            'libyan-arab-jamahiriya'               : 'libya',
            'macedonia'                            : 'republic-of-macedonia',
            'marshall-islands'                     : 'marshall-island',
            'mayotte'                              : 'france', // ?
            'moldova,-republic-of'                 : 'moldova',
            'ms-zaandam'                           : 'netherlands', // cruise ship
            'new-caledonia'                        : 'france',
            'palestinian-territory,-occupied'      : 'palestine',
            'poland'                               : 'republic-of-poland',
            'réunion'                              : 'france',
            's.-korea'                             : 'south-korea',
            'st.-barth'                            : 'st-barts',
            'saint-lucia'                          : 'st-lucia',
            'saint-martin'                         : 'sint-maarten',
            'saint-pierre-miquelon'                : 'france',
            'saint-vincent-and-the-grenadines'     : 'st-vincent-and-the-grenadines',
            'syrian-arab-republic'                 : 'syria',
            'tanzania,-united-republic-of'         : 'tanzania',
            'timor-leste'                          : 'east-timor',
            'turks-and-caicos-islands'             : 'turks-and-caicos',
            'u.s.-virgin-islands'                  : 'virgin-islands',
            'uae'                                  : 'united-arab-emirates',
            'uk'                                   : 'united-kingdom',
            'usa'                                  : 'united-states-of-america',
            'uzbekistan'                           : 'uzbekistn',
            'venezuela,-bolivarian-republic-of'    : 'venezuela',
            'viet-nam'                             : 'vietnam',
            'wallis-and-futuna'                    : 'france'
        };

        let imageName = name.toLowerCase().replace(CountryHelix.flagRegEx, '-');

        imageName = map[imageName] || imageName;

        if (Neo.config.isGitHubPages) {
            let path = '../../../../resources/images/flaticon/country_flags/png/' + imageName + '.png';

            if (!Neo.config.isExperimental) {
                path = '../../' + path;
            }

            return path;
        }

        return 'https://raw.githubusercontent.com/neomjs/pages/master/resources/images/flaticon/country_flags/png/' + imageName + '.png';
    }

    /**
     *
     * @returns {String}
     */
    getCloneTransform() {
        let me         = this,
            translateX = (me.offsetWidth  - 2800) / 6,
            translateY = (me.offsetHeight - 2700) / 6,
            translateZ = 100400 + me.perspective / 1.5;

        return 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'+translateX+','+translateY+','+translateZ+',1)';
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {String}
     */
    getItemId(vnodeId) {
        return vnodeId.split('__')[1];
    }
}

Neo.applyClassConfig(CountryHelix);



/***/ }),

/***/ "./apps/covidhelix/view/MainContainer.mjs":
/*!************************************************!*\
  !*** ./apps/covidhelix/view/MainContainer.mjs ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MainContainer
/* harmony export */ });
/* harmony import */ var _CountryHelix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryHelix.mjs */ "./apps/covidhelix/view/CountryHelix.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");





/**
 * @class CovidHelix.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__.default {
    static getConfig() {return {
        className: 'CovidHelix.view.MainContainer',
        ntype    : 'main-container',

        autoMount: true,
        /**
         * @member {String[]} cls=['neo-helix-maincontainer', 'neo-viewport']
         */
        cls: ['neo-helix-maincontainer', 'neo-viewport'],
        /**
         * @member {Neo.component.Helix|null} helix=null
         */
        helix: null,
        /**
         * @member {Object|null} helixConfig=null
         */
        helixConfig: null,
        layout: {ntype: 'hbox', align: 'stretch'},

        items: [{
            ntype : 'container',
            flex  : 1,
            layout: 'fit',
            items : []
        }, {
            ntype : 'panel',
            cls   : ['neo-controls-panel', 'neo-panel', 'neo-container'],
            layout: {ntype: 'vbox',align: 'stretch'},
            style : {backgroundColor: '#2b2b2b'},
            width : 250,

            containerConfig: {
                style: {overflowY: 'scroll'}
            },

            itemDefaults: {
                ntype        : 'rangefield',
                flex         : '0 1 auto',
                labelWidth   : '100px',
                style        : {padding: '10px'},
                useInputEvent: true,

                listeners: {
                    change: function(data) {
                        if (['deltaY', 'maxOpacity', 'minOpacity'].includes(this.name)) {
                            data.value /= 100;
                        }
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    }
                }
            },

            headers: [{
                dock: 'top',
                items: [{
                    ntype: 'button',
                    text : 'X',
                    handler: function() {
                        const panel  = this.up('panel'),
                              expand = panel.width === 40;

                        panel.width = expand ? 250 : 40;
                        this.text   = expand ? 'X' : '+';
                    }
                }, {
                    ntype: 'label',
                    text : 'Helix Controls'
                }]
            }],

            items: [{
                labelText: 'Translate X',
                maxValue : 2000,
                minValue : -2000,
                name     : 'translateX',
                value    : 400
            }, {
                labelText: 'Translate Y',
                maxValue : 2500,
                minValue : -2500,
                name     : 'translateY',
                value    : -350
            }, {
                labelText: 'Translate Z',
                maxValue : 4500,
                minValue : -4500,
                name     : 'translateZ',
                value    : -1500,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-helix-1').on('changeTranslateZ', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText : 'Delta Y',
                labelAlign: 'top',
                maxValue  : 600,
                minValue  : -600,
                name      : 'deltaY',
                value     : 70
            }, {
                labelText: 'Rotate',
                minValue : -720,
                maxValue : 720,
                name     : 'rotationAngle',
                value    : 0,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-helix-1').on('changeRotation', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText: 'Radius',
                maxValue : 3500,
                minValue : 900,
                name     : 'radius',
                value    : 1500
            }, {
                labelText: 'Perspective',
                minValue : 50,
                maxValue : 3000,
                name     : 'perspective',
                value    : 800
            }, {
                labelText: 'Item Angle',
                minValue : 1,
                maxValue : 36,
                name     : 'itemAngle',
                value    : 8
            }, {
                labelText: 'Max Opacity',
                name     : 'maxOpacity',
                minValue : 0,
                maxValue : 100,
                value    : 80 // todo [30, 80]
            }, {
                labelText: 'Min Opacity',
                name     : 'minOpacity',
                minValue : 0,
                maxValue : 100,
                value    : 30
            }, {
                ntype     : 'button',
                text      : 'Flip Items',
                listeners: {},
                style    : {margin: '20px'},
                domListeners: {
                    click: data => {
                        const helix = Neo.get('neo-helix-1');
                        helix.flipped = !helix.flipped;
                    }
                }
            }, {
                ntype: 'label',
                text : 'Sort By:'
            }, {
                ntype : 'container',
                layout: {ntype: 'hbox', align: 'stretch'},
                style : {padding: '0'},
                items : [{
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},
                    items : [{
                        ntype    : 'button',
                        text     : 'Cases',
                        listeners: {},
                        style    : {margin: '10px', marginTop: '0'},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'cases',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Deaths',
                        listeners: {},
                        style    : {margin: '10px', marginBottom: '10px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'deaths',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Country',
                        listeners: {},
                        style    : {margin: '10px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'country',
                                    direction: 'ASC'
                                }];
                            }
                        }
                    }]
                }, {
                    ntype : 'container',
                    layout: {ntype: 'vbox', align: 'stretch'},
                    items : [{
                        ntype    : 'button',
                        text     : 'Cases today',
                        listeners: {},
                        style    : {margin: '10px', marginTop: '0'},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'todayCases',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Deaths today',
                        listeners: {},
                        style    : {margin: '10px', marginBottom: '10px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'todayDeaths',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }, {
                        ntype    : 'button',
                        text     : 'Critical',
                        listeners: {},
                        style    : {margin: '10px', marginTop: 0},

                        domListeners: {
                            click: function() {
                                Neo.get('neo-helix-1').store.sorters = [{
                                    property : 'critical',
                                    direction: 'DESC'
                                }];
                            }
                        }
                    }]
                }]
            }, {
                ntype    : 'button',
                iconCls  : 'fa fa-square',
                text     : 'Follow Selection',
                listeners: {},
                domListeners: {
                    click: function(data) {
                        let me   = this,
                            helix = Neo.get('neo-helix-1');

                        if (me.iconCls === 'fa fa-square') {
                            helix.followSelection = true;
                            me.iconCls = 'fa fa-check-square';
                        } else {
                            helix.followSelection = false;
                            me.iconCls = 'fa fa-square';
                        }
                    }
                },
                style: {
                    margin      : '20px',
                    marginBottom: '10px'
                }
            }, {
                ntype: 'label',
                text : [
                    '<b>Navigation Concept</b>',
                    '<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>',
                    '<p>Hit the Space Key to rotate the currently selected item to the front.</p>',
                    '<p>Hit the Enter Key to expand the currently selected item.</p>'
                ].join(''),

                style: {
                    backgroundColor: '#323232',
                    color          : '#ddd',
                    fontSize       : '13px',
                    margin         : '10px',
                    padding        : '10px',
                    whiteSpace     : 'normal'
                }
            }, {
                ntype: 'label',
                cls  : ['neo-link-color'],
                text : [
                    '<b>Attribution</b>',
                    '<p>App created with <a href="https://github.com/neomjs/neo">neo.mjs</a>.</p>',
                    '<p>Data provided by <a href="https://github.com/disease-sh/API">disease-sh/API</a>.</p>',
                    '<p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.</p>'
                ].join(''),

                style: {
                    backgroundColor: '#323232',
                    color          : '#ddd',
                    fontSize       : '13px',
                    margin         : '10px',
                    padding        : '10px',
                    whiteSpace     : 'normal'
                }
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        const me  = this,
              url = 'https://corona.lmao.ninja/v2/countries';

        me.helix = Neo.create({
            module: _CountryHelix_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
            id    : 'neo-helix-1',
            ...me.helixConfig || {}
        });

        me.items[0].items.push(me.helix);

        fetch(url)
            .then(response => response.json())
            .then(data => me.addStoreItems(data))
            .catch(err => console.log('Can’t access ' + url, err));
    }

    addStoreItems(data) {
        this.getStore().data = data;
    }

    /**
     *
     * @returns {Neo.data.Store}
     */
    getStore() {
        return this.items[0].items[0].store;
    }
}

Neo.applyClassConfig(MainContainer);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vYXBwcy9jb3ZpZGhlbGl4L2FwcC5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1oZWxpeC8uL2FwcHMvY292aWRoZWxpeC9tb2RlbC9Db3VudHJ5Lm1qcyIsIndlYnBhY2s6Ly9jb3ZpZDE5LWhlbGl4Ly4vYXBwcy9jb3ZpZGhlbGl4L3N0b3JlL0NvdW50cmllcy5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1oZWxpeC8uL2FwcHMvY292aWRoZWxpeC92aWV3L0NvdW50cnlIZWxpeC5tanMiLCJ3ZWJwYWNrOi8vY292aWQxOS1oZWxpeC8uL2FwcHMvY292aWRoZWxpeC92aWV3L01haW5Db250YWluZXIubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFckQ7QUFDQTtBQUNBLGNBQWMsNERBQWE7QUFDM0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2RUFBSztBQUMzQix3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkMyQztBQUM0Qjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkVBQUs7QUFDN0Isd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0EscUJBQXFCLHVEQUFPO0FBQzVCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJrRDtBQUMrQjs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0ZBQUs7QUFDaEMsOEJBQThCO0FB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akU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzREFBWTtBQUNoQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiY2h1bmtzL2FwcHNfY292aWRoZWxpeF9hcHBfbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnYXBwcy9jb3ZpZGhlbGl4LycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdDb3ZpZEhlbGl4J1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkSGVsaXgubW9kZWwuQ291bnRyeVxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgQ291bnRyeSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkSGVsaXgubW9kZWwuQ291bnRyeScsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2Nhc2VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjcml0aWNhbCcsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWNvdmVyZWQnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RvZGF5Q2FzZXMnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3RvZGF5RGVhdGhzJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ291bnRyeSk7XG5cbmV4cG9ydCB7Q291bnRyeSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ291bnRyeSBmcm9tICcuLi9tb2RlbC9Db3VudHJ5Lm1qcyc7XG5pbXBvcnQgU3RvcmUgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZEhlbGl4LnN0b3JlLkNvdW50cmllc1xuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgQ291bnRyaWVzIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWRIZWxpeC5zdG9yZS5Db3VudHJpZXMnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIG1vZGVsICAgICAgOiBDb3VudHJ5XG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ291bnRyaWVzKTtcblxuZXhwb3J0IHtDb3VudHJpZXMgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvdW50cnlTdG9yZSBmcm9tICcuLi9zdG9yZS9Db3VudHJpZXMubWpzJztcbmltcG9ydCBIZWxpeCAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9IZWxpeC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBDb3ZpZEhlbGl4LnZpZXcuQ291bnRyeUhlbGl4XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkhlbGl4XG4gKi9cbmNsYXNzIENvdW50cnlIZWxpeCBleHRlbmRzIEhlbGl4IHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZ2V4IHRvIHJlcGxhY2UgYmxhbmsgY2hhcnNcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBmbGFnUmVnRXg9LyAvZ2lcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZmxhZ1JlZ0V4OiAvIC9naVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nQ292aWQudmlldy5jb3VudHJ5LkhlbGl4J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWQudmlldy5jb3VudHJ5LkhlbGl4JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydjb3ZpZC1jb3VudHJ5LWhlbGl4JywgJ25lby1oZWxpeCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY292aWQtY291bnRyeS1oZWxpeCcsICduZW8taGVsaXgnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2ZXJ0aWNhbCBkZWx0YSBiZXR3ZWVuIGVhY2ggaGVsaXggaXRlbSAoaW5jcmVhc2luZyB0aGlzIHZhbHVlIHdpbGwgY3JlYXRlIGEgc3BpcmFsKVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRlbHRhWT0xLjJcbiAgICAgICAgICovXG4gICAgICAgIGRlbHRhWTogMS4yLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbDoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnc3VyZmFjZScsICduZW8taGVsaXgtaXRlbSddLFxuICAgICAgICAgICAgc3R5bGUgICA6IHt9LFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8taXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1jb3VudHJ5LWhlbGl4LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWZsYWcnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNvbnRlbnQtdGFibGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDYXNlcyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBzdHlsZToge3dpZHRoOiAnMTAwJSd9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0RlYXRocyB0b2RheSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWRlYXRocyddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdSZWNvdmVyZWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1yZWNvdmVyZWQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ3JpdGljYWwnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1jcml0aWNhbCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpZC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2NvdW50cnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhZGl1cyBvZiB0aGUgSGVsaXggaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByYWRpdXM9MjUwMFxuICAgICAgICAgKi9cbiAgICAgICAgcmFkaXVzOiAyNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJvdGF0aW9uQW5nbGUgb2YgdGhlIEhlbGl4IGluIGRlZ3JlZXNcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByb3RhdGlvbkFuZ2xlPTcyMFxuICAgICAgICAgKi9cbiAgICAgICAgcm90YXRpb25BbmdsZTogNzIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBkaXNwbGF5cyB0aGUgZmlyc3QgJiBsYXN0IG5hbWUgcmVjb3JkIGZpZWxkcyBiZWxvdyBhbiBleHBhbmRlZCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dDbG9uZUluZm89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDbG9uZUluZm86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV9IHN0b3JlPUNvdW50cnlTdG9yZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IENvdW50cnlTdG9yZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVZPTUwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWTogNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVpfPS0yMzAwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVaOiAtMjMwMFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlyc3RDaGlsZCA9IHZkb21JdGVtLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgdGFibGUgICAgICA9IGZpcnN0Q2hpbGQuY25bMV07XG5cbiAgICAgICAgdmRvbUl0ZW0uaWQgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKTtcblxuICAgICAgICBmaXJzdENoaWxkLmNuWzBdLmNuWzBdLnNyYyAgPSBtZS5nZXRDb3VudHJ5RmxhZ1VybChyZWNvcmQuY291bnRyeSk7XG4gICAgICAgIGZpcnN0Q2hpbGQuY25bMF0uY25bMV0uaHRtbCA9IHJlY29yZC5jb3VudHJ5O1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzFdLmh0bWwgPSByZWNvcmQuY2FzZXM7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzFdLmh0bWwgPSByZWNvcmQuZGVhdGhzO1xuICAgICAgICB0YWJsZS5jblsyXS5jblsxXS5odG1sID0gcmVjb3JkLnJlY292ZXJlZDtcblxuICAgICAgICB0YWJsZS5jblswXS5jbls0XS5odG1sID0gcmVjb3JkLnRvZGF5Q2FzZXM7XG4gICAgICAgIHRhYmxlLmNuWzFdLmNuWzRdLmh0bWwgPSByZWNvcmQudG9kYXlEZWF0aHM7XG4gICAgICAgIHRhYmxlLmNuWzJdLmNuWzRdLmh0bWwgPSByZWNvcmQuY3JpdGljYWw7XG5cbiAgICAgICAgcmV0dXJuIHZkb21JdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHVybFxuICAgICAqL1xuICAgIGdldENvdW50cnlGbGFnVXJsKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgJ2Jvc25pYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9zbmlhLWFuZC1oZXJ6ZWdvdmluYScsXG4gICAgICAgICAgICAnY2Fiby12ZXJkZScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjYXBlLXZlcmRlJyxcbiAgICAgICAgICAgICdjYXInICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2NlbnRyYWwtYWZyaWNhbi1yZXB1YmxpYycsXG4gICAgICAgICAgICAnY2FyaWJiZWFuLW5ldGhlcmxhbmRzJyAgICAgICAgICAgICAgICA6ICduZXRoZXJsYW5kcycsXG4gICAgICAgICAgICAnY2hhbm5lbC1pc2xhbmRzJyAgICAgICAgICAgICAgICAgICAgICA6ICdqZXJzZXknLFxuICAgICAgICAgICAgJ2PDtHRlLWRcXCdpdm9pcmUnICAgICAgICAgICAgICAgICAgICAgICA6ICdpdm9yeS1jb2FzdCcsXG4gICAgICAgICAgICAnY29uZ28nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi10aGUtY29uZ28nLFxuICAgICAgICAgICAgJ2NvbmdvLC10aGUtZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi10aGUnOiAnZGVtb2NyYXRpYy1yZXB1YmxpYy1vZi1jb25nbycsXG4gICAgICAgICAgICAnY3VyYcOnYW8nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY3VyYWNhbycsXG4gICAgICAgICAgICAnY3plY2hpYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjemVjaC1yZXB1YmxpYycsXG4gICAgICAgICAgICAnZGlhbW9uZC1wcmluY2VzcycgICAgICAgICAgICAgICAgICAgICA6ICdqYXBhbicsIC8vIGNydWlzZSBzaGlwXG4gICAgICAgICAgICAnZHJjJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdkZW1vY3JhdGljLXJlcHVibGljLW9mLWNvbmdvJyxcbiAgICAgICAgICAgICdlbC1zYWx2YWRvcicgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NhbHZhZG9yJyxcbiAgICAgICAgICAgICdlc3dhdGluaScgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3N3YXppbGFuZCcsXG4gICAgICAgICAgICAnZmFlcm9lLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgICAgICA6ICdmYXJvZS1pc2xhbmRzJyxcbiAgICAgICAgICAgICdmYWxrbGFuZC1pc2xhbmRzLShtYWx2aW5hcyknICAgICAgICAgIDogJ2ZhbGtsYW5kLWlzbGFuZHMnLFxuICAgICAgICAgICAgJ2ZyZW5jaC1ndWlhbmEnICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ2d1YWRlbG91cGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJywgLy8gP1xuICAgICAgICAgICAgJ2hvbHktc2VlLSh2YXRpY2FuLWNpdHktc3RhdGUpJyAgICAgICAgOiAndmF0aWNhbi1jaXR5JyxcbiAgICAgICAgICAgICdpcmFuLC1pc2xhbWljLXJlcHVibGljLW9mJyAgICAgICAgICAgIDogJ2lyYW4nLFxuICAgICAgICAgICAgJ2xhby1wZW9wbGVcXCdzLWRlbW9jcmF0aWMtcmVwdWJsaWMnICAgIDogJ2xhb3MnLFxuICAgICAgICAgICAgJ2xpYnlhbi1hcmFiLWphbWFoaXJpeWEnICAgICAgICAgICAgICAgOiAnbGlieWEnLFxuICAgICAgICAgICAgJ21hY2Vkb25pYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAncmVwdWJsaWMtb2YtbWFjZWRvbmlhJyxcbiAgICAgICAgICAgICdtYXJzaGFsbC1pc2xhbmRzJyAgICAgICAgICAgICAgICAgICAgIDogJ21hcnNoYWxsLWlzbGFuZCcsXG4gICAgICAgICAgICAnbWF5b3R0ZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLCAvLyA/XG4gICAgICAgICAgICAnbW9sZG92YSwtcmVwdWJsaWMtb2YnICAgICAgICAgICAgICAgICA6ICdtb2xkb3ZhJyxcbiAgICAgICAgICAgICdtcy16YWFuZGFtJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ25ldGhlcmxhbmRzJywgLy8gY3J1aXNlIHNoaXBcbiAgICAgICAgICAgICduZXctY2FsZWRvbmlhJyAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsXG4gICAgICAgICAgICAncGFsZXN0aW5pYW4tdGVycml0b3J5LC1vY2N1cGllZCcgICAgICA6ICdwYWxlc3RpbmUnLFxuICAgICAgICAgICAgJ3BvbGFuZCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAncmVwdWJsaWMtb2YtcG9sYW5kJyxcbiAgICAgICAgICAgICdyw6l1bmlvbicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLFxuICAgICAgICAgICAgJ3MuLWtvcmVhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc291dGgta29yZWEnLFxuICAgICAgICAgICAgJ3N0Li1iYXJ0aCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc3QtYmFydHMnLFxuICAgICAgICAgICAgJ3NhaW50LWx1Y2lhJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc3QtbHVjaWEnLFxuICAgICAgICAgICAgJ3NhaW50LW1hcnRpbicgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2ludC1tYWFydGVuJyxcbiAgICAgICAgICAgICdzYWludC1waWVycmUtbWlxdWVsb24nICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsXG4gICAgICAgICAgICAnc2FpbnQtdmluY2VudC1hbmQtdGhlLWdyZW5hZGluZXMnICAgICA6ICdzdC12aW5jZW50LWFuZC10aGUtZ3JlbmFkaW5lcycsXG4gICAgICAgICAgICAnc3lyaWFuLWFyYWItcmVwdWJsaWMnICAgICAgICAgICAgICAgICA6ICdzeXJpYScsXG4gICAgICAgICAgICAndGFuemFuaWEsLXVuaXRlZC1yZXB1YmxpYy1vZicgICAgICAgICA6ICd0YW56YW5pYScsXG4gICAgICAgICAgICAndGltb3ItbGVzdGUnICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdlYXN0LXRpbW9yJyxcbiAgICAgICAgICAgICd0dXJrcy1hbmQtY2FpY29zLWlzbGFuZHMnICAgICAgICAgICAgIDogJ3R1cmtzLWFuZC1jYWljb3MnLFxuICAgICAgICAgICAgJ3Uucy4tdmlyZ2luLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgOiAndmlyZ2luLWlzbGFuZHMnLFxuICAgICAgICAgICAgJ3VhZScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndW5pdGVkLWFyYWItZW1pcmF0ZXMnLFxuICAgICAgICAgICAgJ3VrJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndW5pdGVkLWtpbmdkb20nLFxuICAgICAgICAgICAgJ3VzYScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndW5pdGVkLXN0YXRlcy1vZi1hbWVyaWNhJyxcbiAgICAgICAgICAgICd1emJla2lzdGFuJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3V6YmVraXN0bicsXG4gICAgICAgICAgICAndmVuZXp1ZWxhLC1ib2xpdmFyaWFuLXJlcHVibGljLW9mJyAgICA6ICd2ZW5lenVlbGEnLFxuICAgICAgICAgICAgJ3ZpZXQtbmFtJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndmlldG5hbScsXG4gICAgICAgICAgICAnd2FsbGlzLWFuZC1mdXR1bmEnICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGltYWdlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKENvdW50cnlIZWxpeC5mbGFnUmVnRXgsICctJyk7XG5cbiAgICAgICAgaW1hZ2VOYW1lID0gbWFwW2ltYWdlTmFtZV0gfHwgaW1hZ2VOYW1lO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmlzR2l0SHViUGFnZXMpIHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gJy4uLy4uLy4uLy4uL3Jlc291cmNlcy9pbWFnZXMvZmxhdGljb24vY291bnRyeV9mbGFncy9wbmcvJyArIGltYWdlTmFtZSArICcucG5nJztcblxuICAgICAgICAgICAgaWYgKCFOZW8uY29uZmlnLmlzRXhwZXJpbWVudGFsKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9ICcuLi8uLi8nICsgcGF0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9uZW9tanMvcGFnZXMvbWFzdGVyL3Jlc291cmNlcy9pbWFnZXMvZmxhdGljb24vY291bnRyeV9mbGFncy9wbmcvJyArIGltYWdlTmFtZSArICcucG5nJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xvbmVUcmFuc2Zvcm0oKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAobWUub2Zmc2V0V2lkdGggIC0gMjgwMCkgLyA2LFxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IChtZS5vZmZzZXRIZWlnaHQgLSAyNzAwKSAvIDYsXG4gICAgICAgICAgICB0cmFuc2xhdGVaID0gMTAwNDAwICsgbWUucGVyc3BlY3RpdmUgLyAxLjU7XG5cbiAgICAgICAgcmV0dXJuICdtYXRyaXgzZCgxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCwnK3RyYW5zbGF0ZVgrJywnK3RyYW5zbGF0ZVkrJywnK3RyYW5zbGF0ZVorJywxKSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlSWQuc3BsaXQoJ19fJylbMV07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5SGVsaXgpO1xuXG5leHBvcnQge0NvdW50cnlIZWxpeCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ291bnRyeUhlbGl4ICAgICAgICAgICAgZnJvbSAnLi9Db3VudHJ5SGVsaXgubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBQYW5lbH0gICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgUmFuZ2VGaWVsZH0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkSGVsaXgudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZEhlbGl4LnZpZXcuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWhlbGl4LW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8taGVsaXgtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuSGVsaXh8bnVsbH0gaGVsaXg9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVsaXg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gaGVsaXhDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVsaXhDb25maWc6IG51bGwsXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGxheW91dDogJ2ZpdCcsXG4gICAgICAgICAgICBpdGVtcyA6IFtdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlIDogJ3BhbmVsJyxcbiAgICAgICAgICAgIGNscyAgIDogWyduZW8tY29udHJvbHMtcGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICBzdHlsZSA6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ30sXG4gICAgICAgICAgICB3aWR0aCA6IDI1MCxcblxuICAgICAgICAgICAgY29udGFpbmVyQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1k6ICdzY3JvbGwnfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgIDogJ3JhbmdlZmllbGQnLFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgICA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICAgICAgbGFiZWxXaWR0aCAgIDogJzEwMHB4JyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICB1c2VJbnB1dEV2ZW50OiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFsnZGVsdGFZJywgJ21heE9wYWNpdHknLCAnbWluT3BhY2l0eSddLmluY2x1ZGVzKHRoaXMubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnZhbHVlIC89IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJylbdGhpcy5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2s6ICd0b3AnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgOiAnWCcsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFuZWwgID0gdGhpcy51cCgncGFuZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZCA9IHBhbmVsLndpZHRoID09PSA0MDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWwud2lkdGggPSBleHBhbmQgPyAyNTAgOiA0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dCAgID0gZXhwYW5kID8gJ1gnIDogJysnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdIZWxpeCBDb250cm9scydcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBYJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDIwMDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMjAwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVYJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDQwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBZJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDI1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtMjUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0zNTBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWicsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA0NTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTQ1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAtMTUwMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbihmaWVsZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBOZW8uZ2V0KGZpZWxkSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLm9uKCdjaGFuZ2VUcmFuc2xhdGVaJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pblZhbHVlKSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdEZWx0YSBZJyxcbiAgICAgICAgICAgICAgICBsYWJlbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgOiA2MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgIDogLTYwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgOiAnZGVsdGFZJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiA3MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1JvdGF0ZScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNzIwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogNzIwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3JvdGF0aW9uQW5nbGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbihmaWVsZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBOZW8uZ2V0KGZpZWxkSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLm9uKCdjaGFuZ2VSb3RhdGlvbicsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgdGhpcy5taW5WYWx1ZSksIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdSYWRpdXMnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDkwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdyYWRpdXMnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMTUwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1BlcnNwZWN0aXZlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDUwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMzAwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdwZXJzcGVjdGl2ZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4MDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdJdGVtIEFuZ2xlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzNixcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdpdGVtQW5nbGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogOFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ01heCBPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdtYXhPcGFjaXR5JyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxMDAsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4MCAvLyB0b2RvIFszMCwgODBdXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWluIE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21pbk9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDMwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgIDogJ0ZsaXAgSXRlbXMnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMjBweCd9LFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWxpeCA9IE5lby5nZXQoJ25lby1oZWxpeC0xJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxpeC5mbGlwcGVkID0gIWhlbGl4LmZsaXBwZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTb3J0IEJ5OidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge3BhZGRpbmc6ICcwJ30sXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAnMCd9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdjYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdEZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiAnZGVhdGhzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDYXNlcyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogJzAnfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdEZWF0aHMgdG9kYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgbWFyZ2luVG9wOiAwfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiAndG9kYXlEZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ3JpdGljYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdjcml0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnRm9sbG93IFNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxpeCA9IE5lby5nZXQoJ25lby1oZWxpeC0xJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZS5pY29uQ2xzID09PSAnZmEgZmEtc3F1YXJlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGl4LmZvbGxvd1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuaWNvbkNscyA9ICdmYSBmYS1jaGVjay1zcXVhcmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxpeC5mb2xsb3dTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5pY29uQ2xzID0gJ2ZhIGZhLXNxdWFyZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgIDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0IDogW1xuICAgICAgICAgICAgICAgICAgICAnPGI+TmF2aWdhdGlvbiBDb25jZXB0PC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5DbGljayBvbiBhbiBpdGVtIHRvIHNlbGVjdCBpdC4gQWZ0ZXJ3YXJkcyB5b3UgY2FuIHVzZSB0aGUgQXJyb3cgS2V5cyB0byB3YWxrIHRocm91Z2ggdGhlIGl0ZW1zLjwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+SGl0IHRoZSBTcGFjZSBLZXkgdG8gcm90YXRlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSB0byB0aGUgZnJvbnQuPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5IaXQgdGhlIEVudGVyIEtleSB0byBleHBhbmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLjwvcD4nXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKSxcblxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMjMyMzInLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgICA6ICcjZGRkJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemUgICAgICAgOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZSAgICAgOiAnbm9ybWFsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tbGluay1jb2xvciddLFxuICAgICAgICAgICAgICAgIHRleHQgOiBbXG4gICAgICAgICAgICAgICAgICAgICc8Yj5BdHRyaWJ1dGlvbjwvYj4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+QXBwIGNyZWF0ZWQgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW9cIj5uZW8ubWpzPC9hPi48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkRhdGEgcHJvdmlkZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kaXNlYXNlLXNoL0FQSVwiPmRpc2Vhc2Utc2gvQVBJPC9hPi48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkljb25zIG1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9hdXRob3JzL2ZyZWVwaWtcIiB0aXRsZT1cIkZyZWVwaWtcIj5GcmVlcGlrPC9hPiBmcm9tIDxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vXCIgdGl0bGU9XCJGbGF0aWNvblwiPiB3d3cuZmxhdGljb24uY29tPC9hPi48L3A+J1xuICAgICAgICAgICAgICAgIF0uam9pbignJyksXG5cbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzIzMjMyJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiAnI2RkZCcsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplICAgICAgIDogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAgICAgICAgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2UgICAgIDogJ25vcm1hbCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgICB1cmwgPSAnaHR0cHM6Ly9jb3JvbmEubG1hby5uaW5qYS92Mi9jb3VudHJpZXMnO1xuXG4gICAgICAgIG1lLmhlbGl4ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGU6IENvdW50cnlIZWxpeCxcbiAgICAgICAgICAgIGlkICAgIDogJ25lby1oZWxpeC0xJyxcbiAgICAgICAgICAgIC4uLm1lLmhlbGl4Q29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUuaGVsaXgpO1xuXG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gbWUuYWRkU3RvcmVJdGVtcyhkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ0NhbuKAmXQgYWNjZXNzICcgKyB1cmwsIGVycikpO1xuICAgIH1cblxuICAgIGFkZFN0b3JlSXRlbXMoZGF0YSkge1xuICAgICAgICB0aGlzLmdldFN0b3JlKCkuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmRhdGEuU3RvcmV9XG4gICAgICovXG4gICAgZ2V0U3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zWzBdLml0ZW1zWzBdLnN0b3JlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9