self["webpackChunk"](["chunks/apps-covidhelix-app-mjs"],{

/***/ "./apps/covidhelix/app.mjs":
/*!*********************************!*\
  !*** ./apps/covidhelix/app.mjs ***!
  \*********************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/covidhelix/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/covidhelix/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'CovidHelix'
});



/***/ }),

/***/ "./apps/covidhelix/model/Country.mjs":
/*!*******************************************!*\
  !*** ./apps/covidhelix/model/Country.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Country; });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class CovidHelix.model.Country
 * @extends Neo.data.Model
 */
class Country extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Countries; });
/* harmony import */ var _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Country.mjs */ "./apps/covidhelix/model/Country.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class CovidHelix.store.Countries
 * @extends Neo.data.Store
 */
class Countries extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'CovidHelix.store.Countries',

        keyProperty: 'country',
        model      : _model_Country_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}
}

Neo.applyClassConfig(Countries);



/***/ }),

/***/ "./apps/covidhelix/view/CountryHelix.mjs":
/*!***********************************************!*\
  !*** ./apps/covidhelix/view/CountryHelix.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryHelix; });
/* harmony import */ var _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Countries.mjs */ "./apps/covidhelix/store/Countries.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");



/**
 * @class CovidHelix.view.CountryHelix
 * @extends Neo.component.Helix
 */
class CountryHelix extends _node_modules_neo_mjs_src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
        store: _store_Countries_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _CountryHelix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryHelix.mjs */ "./apps/covidhelix/view/CountryHelix.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");





/**
 * @class CovidHelix.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
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
            module: _CountryHelix_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkaGVsaXgvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkaGVsaXgvbW9kZWwvQ291bnRyeS5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZGhlbGl4L3N0b3JlL0NvdW50cmllcy5tanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jb3ZpZGhlbGl4L3ZpZXcvQ291bnRyeUhlbGl4Lm1qcyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NvdmlkaGVsaXgvdmlldy9NYWluQ29udGFpbmVyLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQXFEOztBQUVyRDtBQUNBO0FBQ0EsY0FBYywrREFBYTtBQUMzQjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFBO0FBQXNFOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnRkFBSztBQUMzQix3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQzRCOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRkFBSztBQUM3Qix3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQSxxQkFBcUIsMERBQU87QUFDNUI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDK0I7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFGQUFLO0FBQ2hDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFD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Q0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHlEQUFZO0FBQ2hDO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJjaHVua3MvYXBwcy1jb3ZpZGhlbGl4LWFwcC1tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdhcHBzL2NvdmlkaGVsaXgvJyxcbiAgICBtYWluVmlldzogTWFpbkNvbnRhaW5lcixcbiAgICBuYW1lICAgIDogJ0NvdmlkSGVsaXgnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBNb2RlbCAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWRIZWxpeC5tb2RlbC5Db3VudHJ5XG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBDb3VudHJ5IGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnQ292aWRIZWxpeC5tb2RlbC5Db3VudHJ5JyxcblxuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY2FzZXMnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvdW50cnknLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbnQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZWF0aHMnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3JlY292ZXJlZCcsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndG9kYXlDYXNlcycsXG4gICAgICAgICAgICB0eXBlOiAnaW50J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndG9kYXlEZWF0aHMnLFxuICAgICAgICAgICAgdHlwZTogJ2ludCdcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJ5KTtcblxuZXhwb3J0IHtDb3VudHJ5IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3VudHJ5IGZyb20gJy4uL21vZGVsL0NvdW50cnkubWpzJztcbmltcG9ydCBTdG9yZSAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL1N0b3JlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkSGVsaXguc3RvcmUuQ291bnRyaWVzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBDb3VudHJpZXMgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZEhlbGl4LnN0b3JlLkNvdW50cmllcycsXG5cbiAgICAgICAga2V5UHJvcGVydHk6ICdjb3VudHJ5JyxcbiAgICAgICAgbW9kZWwgICAgICA6IENvdW50cnlcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb3VudHJpZXMpO1xuXG5leHBvcnQge0NvdW50cmllcyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ291bnRyeVN0b3JlIGZyb20gJy4uL3N0b3JlL0NvdW50cmllcy5tanMnO1xuaW1wb3J0IEhlbGl4ICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0hlbGl4Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIENvdmlkSGVsaXgudmlldy5Db3VudHJ5SGVsaXhcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuSGVsaXhcbiAqL1xuY2xhc3MgQ291bnRyeUhlbGl4IGV4dGVuZHMgSGVsaXgge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVwbGFjZSBibGFuayBjaGFyc1xuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGZsYWdSZWdFeD0vIC9naVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBmbGFnUmVnRXg6IC8gL2dpXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdDb3ZpZC52aWV3LmNvdW50cnkuSGVsaXgnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3LmNvdW50cnkuSGVsaXgnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvdmlkLWNvdW50cnktaGVsaXgnLCAnbmVvLWhlbGl4J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb3ZpZC1jb3VudHJ5LWhlbGl4JywgJ25lby1oZWxpeCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZlcnRpY2FsIGRlbHRhIGJldHdlZW4gZWFjaCBoZWxpeCBpdGVtIChpbmNyZWFzaW5nIHRoaXMgdmFsdWUgd2lsbCBjcmVhdGUgYSBzcGlyYWwpXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGVsdGFZPTEuMlxuICAgICAgICAgKi9cbiAgICAgICAgZGVsdGFZOiAxLjIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1UcGxfXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtVHBsOiB7XG4gICAgICAgICAgICBjbHMgICAgIDogWydzdXJmYWNlJywgJ25lby1oZWxpeC1pdGVtJ10sXG4gICAgICAgICAgICBzdHlsZSAgIDoge30sXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1pdGVtLXdyYXBwZXInXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWNvdW50cnktaGVsaXgtaXRlbSddLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG5cbiAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWl0ZW0taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tZmxhZyddXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tY29udGVudC10YWJsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ0Nhc2VzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnQ2FzZXMgdG9kYXknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdEZWF0aHMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgY2xzOiBbJ25lby1hbGlnbi1yaWdodCcsICduZW8tY29udGVudC1kZWF0aHMnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ319LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBodG1sOiAnRGVhdGhzIHRvZGF5J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGNsczogWyduZW8tYWxpZ24tcmlnaHQnLCAnbmVvLWNvbnRlbnQtZGVhdGhzJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgaHRtbDogJ1JlY292ZXJlZCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LXJlY292ZXJlZCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3RkJywgc3R5bGU6IHt3aWR0aDogJzEwMCUnfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZCcsIGh0bWw6ICdDcml0aWNhbCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndGQnLCBjbHM6IFsnbmVvLWFsaWduLXJpZ2h0JywgJ25lby1jb250ZW50LWNyaXRpY2FsJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgcmVjb3JkIGZpZWxkIGNvbnRhaW5pbmcgdGhlIGlkLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnY291bnRyeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmFkaXVzIG9mIHRoZSBIZWxpeCBpbiBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJhZGl1cz0yNTAwXG4gICAgICAgICAqL1xuICAgICAgICByYWRpdXM6IDI1MDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcm90YXRpb25BbmdsZSBvZiB0aGUgSGVsaXggaW4gZGVncmVlc1xuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJvdGF0aW9uQW5nbGU9NzIwXG4gICAgICAgICAqL1xuICAgICAgICByb3RhdGlvbkFuZ2xlOiA3MjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGRpc3BsYXlzIHRoZSBmaXJzdCAmIGxhc3QgbmFtZSByZWNvcmQgZmllbGRzIGJlbG93IGFuIGV4cGFuZGVkIGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0Nsb25lSW5mbz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0Nsb25lSW5mbzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmU9Q291bnRyeVN0b3JlXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQ291bnRyeVN0b3JlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVk9NTAwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVZOiA1MDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBnZXRzIGluY2x1ZGVkIGludG8gZWFjaCBoZWxpeCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWl89LTIzMDBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVo6IC0yMzAwXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICovXG4gICAgY3JlYXRlSXRlbSh2ZG9tSXRlbSwgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaXJzdENoaWxkID0gdmRvbUl0ZW0uY25bMF0uY25bMF0sXG4gICAgICAgICAgICB0YWJsZSAgICAgID0gZmlyc3RDaGlsZC5jblsxXTtcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIGZpcnN0Q2hpbGQuY25bMF0uY25bMF0uc3JjICA9IG1lLmdldENvdW50cnlGbGFnVXJsKHJlY29yZC5jb3VudHJ5KTtcbiAgICAgICAgZmlyc3RDaGlsZC5jblswXS5jblsxXS5odG1sID0gcmVjb3JkLmNvdW50cnk7XG5cbiAgICAgICAgdGFibGUuY25bMF0uY25bMV0uaHRtbCA9IHJlY29yZC5jYXNlcztcbiAgICAgICAgdGFibGUuY25bMV0uY25bMV0uaHRtbCA9IHJlY29yZC5kZWF0aHM7XG4gICAgICAgIHRhYmxlLmNuWzJdLmNuWzFdLmh0bWwgPSByZWNvcmQucmVjb3ZlcmVkO1xuXG4gICAgICAgIHRhYmxlLmNuWzBdLmNuWzRdLmh0bWwgPSByZWNvcmQudG9kYXlDYXNlcztcbiAgICAgICAgdGFibGUuY25bMV0uY25bNF0uaHRtbCA9IHJlY29yZC50b2RheURlYXRocztcbiAgICAgICAgdGFibGUuY25bMl0uY25bNF0uaHRtbCA9IHJlY29yZC5jcml0aWNhbDtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgZ2V0Q291bnRyeUZsYWdVcmwobmFtZSkge1xuICAgICAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgICAgICAnYm9zbmlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdib3NuaWEtYW5kLWhlcnplZ292aW5hJyxcbiAgICAgICAgICAgICdjYWJvLXZlcmRlJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2NhcGUtdmVyZGUnLFxuICAgICAgICAgICAgJ2NhcicgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnY2VudHJhbC1hZnJpY2FuLXJlcHVibGljJyxcbiAgICAgICAgICAgICdjYXJpYmJlYW4tbmV0aGVybGFuZHMnICAgICAgICAgICAgICAgIDogJ25ldGhlcmxhbmRzJyxcbiAgICAgICAgICAgICdjaGFubmVsLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgICAgIDogJ2plcnNleScsXG4gICAgICAgICAgICAnY8O0dGUtZFxcJ2l2b2lyZScgICAgICAgICAgICAgICAgICAgICAgIDogJ2l2b3J5LWNvYXN0JyxcbiAgICAgICAgICAgICdjb25nbycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JlcHVibGljLW9mLXRoZS1jb25nbycsXG4gICAgICAgICAgICAnY29uZ28sLXRoZS1kZW1vY3JhdGljLXJlcHVibGljLW9mLXRoZSc6ICdkZW1vY3JhdGljLXJlcHVibGljLW9mLWNvbmdvJyxcbiAgICAgICAgICAgICdjdXJhw6dhbycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdjdXJhY2FvJyxcbiAgICAgICAgICAgICdjemVjaGlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2N6ZWNoLXJlcHVibGljJyxcbiAgICAgICAgICAgICdkaWFtb25kLXByaW5jZXNzJyAgICAgICAgICAgICAgICAgICAgIDogJ2phcGFuJywgLy8gY3J1aXNlIHNoaXBcbiAgICAgICAgICAgICdkcmMnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2RlbW9jcmF0aWMtcmVwdWJsaWMtb2YtY29uZ28nLFxuICAgICAgICAgICAgJ2VsLXNhbHZhZG9yJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2FsdmFkb3InLFxuICAgICAgICAgICAgJ2Vzd2F0aW5pJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc3dhemlsYW5kJyxcbiAgICAgICAgICAgICdmYWVyb2UtaXNsYW5kcycgICAgICAgICAgICAgICAgICAgICAgIDogJ2Zhcm9lLWlzbGFuZHMnLFxuICAgICAgICAgICAgJ2ZhbGtsYW5kLWlzbGFuZHMtKG1hbHZpbmFzKScgICAgICAgICAgOiAnZmFsa2xhbmQtaXNsYW5kcycsXG4gICAgICAgICAgICAnZnJlbmNoLWd1aWFuYScgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLCAvLyA/XG4gICAgICAgICAgICAnZ3VhZGVsb3VwZScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdmcmFuY2UnLCAvLyA/XG4gICAgICAgICAgICAnaG9seS1zZWUtKHZhdGljYW4tY2l0eS1zdGF0ZSknICAgICAgICA6ICd2YXRpY2FuLWNpdHknLFxuICAgICAgICAgICAgJ2lyYW4sLWlzbGFtaWMtcmVwdWJsaWMtb2YnICAgICAgICAgICAgOiAnaXJhbicsXG4gICAgICAgICAgICAnbGFvLXBlb3BsZVxcJ3MtZGVtb2NyYXRpYy1yZXB1YmxpYycgICAgOiAnbGFvcycsXG4gICAgICAgICAgICAnbGlieWFuLWFyYWItamFtYWhpcml5YScgICAgICAgICAgICAgICA6ICdsaWJ5YScsXG4gICAgICAgICAgICAnbWFjZWRvbmlhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi1tYWNlZG9uaWEnLFxuICAgICAgICAgICAgJ21hcnNoYWxsLWlzbGFuZHMnICAgICAgICAgICAgICAgICAgICAgOiAnbWFyc2hhbGwtaXNsYW5kJyxcbiAgICAgICAgICAgICdtYXlvdHRlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsIC8vID9cbiAgICAgICAgICAgICdtb2xkb3ZhLC1yZXB1YmxpYy1vZicgICAgICAgICAgICAgICAgIDogJ21vbGRvdmEnLFxuICAgICAgICAgICAgJ21zLXphYW5kYW0nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbmV0aGVybGFuZHMnLCAvLyBjcnVpc2Ugc2hpcFxuICAgICAgICAgICAgJ25ldy1jYWxlZG9uaWEnICAgICAgICAgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdwYWxlc3Rpbmlhbi10ZXJyaXRvcnksLW9jY3VwaWVkJyAgICAgIDogJ3BhbGVzdGluZScsXG4gICAgICAgICAgICAncG9sYW5kJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdyZXB1YmxpYy1vZi1wb2xhbmQnLFxuICAgICAgICAgICAgJ3LDqXVuaW9uJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZScsXG4gICAgICAgICAgICAncy4ta29yZWEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzb3V0aC1rb3JlYScsXG4gICAgICAgICAgICAnc3QuLWJhcnRoJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdC1iYXJ0cycsXG4gICAgICAgICAgICAnc2FpbnQtbHVjaWEnICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzdC1sdWNpYScsXG4gICAgICAgICAgICAnc2FpbnQtbWFydGluJyAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzaW50LW1hYXJ0ZW4nLFxuICAgICAgICAgICAgJ3NhaW50LXBpZXJyZS1taXF1ZWxvbicgICAgICAgICAgICAgICAgOiAnZnJhbmNlJyxcbiAgICAgICAgICAgICdzYWludC12aW5jZW50LWFuZC10aGUtZ3JlbmFkaW5lcycgICAgIDogJ3N0LXZpbmNlbnQtYW5kLXRoZS1ncmVuYWRpbmVzJyxcbiAgICAgICAgICAgICdzeXJpYW4tYXJhYi1yZXB1YmxpYycgICAgICAgICAgICAgICAgIDogJ3N5cmlhJyxcbiAgICAgICAgICAgICd0YW56YW5pYSwtdW5pdGVkLXJlcHVibGljLW9mJyAgICAgICAgIDogJ3RhbnphbmlhJyxcbiAgICAgICAgICAgICd0aW1vci1sZXN0ZScgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2Vhc3QtdGltb3InLFxuICAgICAgICAgICAgJ3R1cmtzLWFuZC1jYWljb3MtaXNsYW5kcycgICAgICAgICAgICAgOiAndHVya3MtYW5kLWNhaWNvcycsXG4gICAgICAgICAgICAndS5zLi12aXJnaW4taXNsYW5kcycgICAgICAgICAgICAgICAgICA6ICd2aXJnaW4taXNsYW5kcycsXG4gICAgICAgICAgICAndWFlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQtYXJhYi1lbWlyYXRlcycsXG4gICAgICAgICAgICAndWsnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQta2luZ2RvbScsXG4gICAgICAgICAgICAndXNhJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd1bml0ZWQtc3RhdGVzLW9mLWFtZXJpY2EnLFxuICAgICAgICAgICAgJ3V6YmVraXN0YW4nICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndXpiZWtpc3RuJyxcbiAgICAgICAgICAgICd2ZW5lenVlbGEsLWJvbGl2YXJpYW4tcmVwdWJsaWMtb2YnICAgIDogJ3ZlbmV6dWVsYScsXG4gICAgICAgICAgICAndmlldC1uYW0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd2aWV0bmFtJyxcbiAgICAgICAgICAgICd3YWxsaXMtYW5kLWZ1dHVuYScgICAgICAgICAgICAgICAgICAgIDogJ2ZyYW5jZSdcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaW1hZ2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoQ291bnRyeUhlbGl4LmZsYWdSZWdFeCwgJy0nKTtcblxuICAgICAgICBpbWFnZU5hbWUgPSBtYXBbaW1hZ2VOYW1lXSB8fCBpbWFnZU5hbWU7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcuaXNHaXRIdWJQYWdlcykge1xuICAgICAgICAgICAgbGV0IHBhdGggPSAnLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2ltYWdlcy9mbGF0aWNvbi9jb3VudHJ5X2ZsYWdzL3BuZy8nICsgaW1hZ2VOYW1lICsgJy5wbmcnO1xuXG4gICAgICAgICAgICBpZiAoIU5lby5jb25maWcuaXNFeHBlcmltZW50YWwpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gJy4uLy4uLycgKyBwYXRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL25lb21qcy9wYWdlcy9tYXN0ZXIvcmVzb3VyY2VzL2ltYWdlcy9mbGF0aWNvbi9jb3VudHJ5X2ZsYWdzL3BuZy8nICsgaW1hZ2VOYW1lICsgJy5wbmcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbG9uZVRyYW5zZm9ybSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IChtZS5vZmZzZXRXaWR0aCAgLSAyODAwKSAvIDYsXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gKG1lLm9mZnNldEhlaWdodCAtIDI3MDApIC8gNixcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogPSAxMDA0MDAgKyBtZS5wZXJzcGVjdGl2ZSAvIDEuNTtcblxuICAgICAgICByZXR1cm4gJ21hdHJpeDNkKDEsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLCcrdHJhbnNsYXRlWCsnLCcrdHJhbnNsYXRlWSsnLCcrdHJhbnNsYXRlWisnLDEpJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJdGVtSWQodm5vZGVJZCkge1xuICAgICAgICByZXR1cm4gdm5vZGVJZC5zcGxpdCgnX18nKVsxXTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvdW50cnlIZWxpeCk7XG5cbmV4cG9ydCB7Q291bnRyeUhlbGl4IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3VudHJ5SGVsaXggICAgICAgICAgICBmcm9tICcuL0NvdW50cnlIZWxpeC5tanMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFBhbmVsfSAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBSYW5nZUZpZWxkfSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWRIZWxpeC52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ0NvdmlkSGVsaXgudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1jb250YWluZXInLFxuXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8taGVsaXgtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1oZWxpeC1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5IZWxpeHxudWxsfSBoZWxpeD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWxpeDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBoZWxpeENvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWxpeENvbmZpZzogbnVsbCxcbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiAnZml0JyxcbiAgICAgICAgICAgIGl0ZW1zIDogW11cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgOiAncGFuZWwnLFxuICAgICAgICAgICAgY2xzICAgOiBbJ25lby1jb250cm9scy1wYW5lbCcsICduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JyxhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgIHN0eWxlIDoge2JhY2tncm91bmRDb2xvcjogJyMyYjJiMmInfSxcbiAgICAgICAgICAgIHdpZHRoIDogMjUwLFxuXG4gICAgICAgICAgICBjb250YWluZXJDb25maWc6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93WTogJ3Njcm9sbCd9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgOiAncmFuZ2VmaWVsZCcsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoICAgOiAnMTAwcHgnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgICAgIHVzZUlucHV0RXZlbnQ6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoWydkZWx0YVknLCAnbWF4T3BhY2l0eScsICdtaW5PcGFjaXR5J10uaW5jbHVkZXModGhpcy5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgLz0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKVt0aGlzLm5hbWVdID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgZG9jazogJ3RvcCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdYJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYW5lbCAgPSB0aGlzLnVwKCdwYW5lbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kID0gcGFuZWwud2lkdGggPT09IDQwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5lbC53aWR0aCA9IGV4cGFuZCA/IDI1MCA6IDQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0ICAgPSBleHBhbmQgPyAnWCcgOiAnKyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0hlbGl4IENvbnRyb2xzJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFgnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjAwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yMDAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogNDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFknLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yNTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogLTM1MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDQ1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVaJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0xNTAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJylbdGhpcy5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGZpZWxkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IE5lby5nZXQoZmllbGRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykub24oJ2NoYW5nZVRyYW5zbGF0ZVonLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIHRoaXMubWluVmFsdWUpLCB0aGlzLm1heFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0RlbHRhIFknLFxuICAgICAgICAgICAgICAgIGxhYmVsQWxpZ246ICd0b3AnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlICA6IDYwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgOiAtNjAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICA6ICdkZWx0YVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IDcwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUm90YXRlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC03MjAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA3MjAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncm90YXRpb25BbmdsZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJylbdGhpcy5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGZpZWxkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IE5lby5nZXQoZmllbGRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykub24oJ2NoYW5nZVJvdGF0aW9uJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pblZhbHVlKSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1JhZGl1cycsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzNTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogOTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3JhZGl1cycsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAxNTAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUGVyc3BlY3RpdmUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogNTAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzMDAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3BlcnNwZWN0aXZlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDgwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0l0ZW0gQW5nbGUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMSxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDM2LFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ2l0ZW1BbmdsZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWF4IE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21heE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDgwIC8vIHRvZG8gWzMwLCA4MF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdNaW4gT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnbWluT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMzBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgOiAnRmxpcCBJdGVtcycsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlbGl4ID0gTmVvLmdldCgnbmVvLWhlbGl4LTEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbGl4LmZsaXBwZWQgPSAhaGVsaXguZmxpcHBlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0IDogJ1NvcnQgQnk6J1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7cGFkZGluZzogJzAnfSxcbiAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ2FzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpbjogJzEwcHgnLCBtYXJnaW5Ub3A6ICcwJ30sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2Nhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0RlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdkZWF0aHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnREVTQydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ291bnRyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0Nhc2VzIHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcxMHB4JywgbWFyZ2luVG9wOiAnMCd9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICd0b2RheUNhc2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0RlYXRocyB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBtYXJnaW5Ub3A6IDB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykuc3RvcmUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICd0b2RheURlYXRocycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdERVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDcml0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMTBweCcsIG1hcmdpblRvcDogMH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWhlbGl4LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2NyaXRpY2FsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ0RFU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtc3F1YXJlJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdGb2xsb3cgU2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGl4ID0gTmVvLmdldCgnbmVvLWhlbGl4LTEnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lLmljb25DbHMgPT09ICdmYSBmYS1zcXVhcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsaXguZm9sbG93U2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5pY29uQ2xzID0gJ2ZhIGZhLWNoZWNrLXNxdWFyZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGl4LmZvbGxvd1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmljb25DbHMgPSAnZmEgZmEtc3F1YXJlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgICAgOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHRleHQgOiBbXG4gICAgICAgICAgICAgICAgICAgICc8Yj5OYXZpZ2F0aW9uIENvbmNlcHQ8L2I+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkNsaWNrIG9uIGFuIGl0ZW0gdG8gc2VsZWN0IGl0LiBBZnRlcndhcmRzIHlvdSBjYW4gdXNlIHRoZSBBcnJvdyBLZXlzIHRvIHdhbGsgdGhyb3VnaCB0aGUgaXRlbXMuPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5IaXQgdGhlIFNwYWNlIEtleSB0byByb3RhdGUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIHRvIHRoZSBmcm9udC48L3A+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxwPkhpdCB0aGUgRW50ZXIgS2V5IHRvIGV4cGFuZCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uPC9wPidcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpLFxuXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMyMzIzMicsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yICAgICAgICAgIDogJyNkZGQnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZSAgICAgICA6ICcxM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgICAgICAgOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlICAgICA6ICdub3JtYWwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1saW5rLWNvbG9yJ10sXG4gICAgICAgICAgICAgICAgdGV4dCA6IFtcbiAgICAgICAgICAgICAgICAgICAgJzxiPkF0dHJpYnV0aW9uPC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5BcHAgY3JlYXRlZCB3aXRoIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lb1wiPm5lby5tanM8L2E+LjwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+RGF0YSBwcm92aWRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Rpc2Vhc2Utc2gvQVBJXCI+ZGlzZWFzZS1zaC9BUEk8L2E+LjwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+SWNvbnMgbWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvZnJlZXBpa1wiIHRpdGxlPVwiRnJlZXBpa1wiPkZyZWVwaWs8L2E+IGZyb20gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9cIiB0aXRsZT1cIkZsYXRpY29uXCI+IHd3dy5mbGF0aWNvbi5jb208L2E+LjwvcD4nXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKSxcblxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMjMyMzInLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgICA6ICcjZGRkJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemUgICAgICAgOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZSAgICAgOiAnbm9ybWFsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICAgIHVybCA9ICdodHRwczovL2Nvcm9uYS5sbWFvLm5pbmphL3YyL2NvdW50cmllcyc7XG5cbiAgICAgICAgbWUuaGVsaXggPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZTogQ291bnRyeUhlbGl4LFxuICAgICAgICAgICAgaWQgICAgOiAnbmVvLWhlbGl4LTEnLFxuICAgICAgICAgICAgLi4ubWUuaGVsaXhDb25maWcgfHwge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMF0uaXRlbXMucHVzaChtZS5oZWxpeCk7XG5cbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBtZS5hZGRTdG9yZUl0ZW1zKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fu4oCZdCBhY2Nlc3MgJyArIHVybCwgZXJyKSk7XG4gICAgfVxuXG4gICAgYWRkU3RvcmVJdGVtcyhkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0U3RvcmUoKS5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOZW8uZGF0YS5TdG9yZX1cbiAgICAgKi9cbiAgICBnZXRTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbMF0uaXRlbXNbMF0uc3RvcmU7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=