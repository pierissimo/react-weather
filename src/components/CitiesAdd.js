'use strict';

var React = require('react/addons');
var CitySearchForm = require('./CitySearchForm');
var CityActions = require('../actions/CityAction');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Router = require('react-router');

require('styles/CitiesAdd.scss');

var CitiesAdd = React.createClass({
  saveCity: function(city){
    CityActions.save(city);
    //console.log(Router);
    window.location.hash = '#/citiesList'; //ci sarà un modo più pulito con react router
  },
  render: function () {
    return (
        <section className="CitiesAdd">
          <CitySearchForm saveCity={this.saveCity} />
        </section>
      );
  }
});

module.exports = CitiesAdd;

