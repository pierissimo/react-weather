'use strict';
var constants = require('../constants/constants');
var AppDispatcher = require('../dispatcher/AppDispatcher');


var CityAction = {
  save: function(city) {
    AppDispatcher.dispatch({
      actionType: constants.CITY_SAVE,
      city: city
    });
  },

  remove: function(cityId) {
    AppDispatcher.dispatch({
      actionType: constants.CITY_REMOVE,
      cityId: cityId
    });
  }
}

module.exports = CityAction; 
