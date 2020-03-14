import Model  from '../../../node_modules/neo.mjs/src/data/Model.mjs';

/**
 * @class CovidHelix.model.Country
 * @extends Neo.data.Model
 */
class Country extends Model {
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

export {Country as default};