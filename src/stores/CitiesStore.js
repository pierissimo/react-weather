'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var constants = require('../constants/constants');

var _cities = [];

function add(_city) {
  _cities.push({
    id: _city.id,
    name: _city.name
  });
}

function remove(_cityId) {
  var _index = -1;
  _cities.forEach(function(c, index){
    if(c.id == _cityId){
      _index = index;
    }
  });

  if(_index > -1){
     _cities.splice(_index, 1);
  }
  
}


var CitiesStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
     return _cities || {};
   },

   addChangeListener: function(callback) {
     this.on('change', callback);
   },

   emitChange: function() {
     this.emit('change');
   }
});

CitiesStore.dispatchToken = AppDispatcher.register(function(action) {
  
  switch(action.actionType) {
    case constants.CITY_SAVE:
      add(action.city);
      CitiesStore.emitChange();
    break;

    case constants.CITY_REMOVE:
      remove(action.cityId);
      CitiesStore.emitChange();
    break;
  }

});

module.exports = CitiesStore; 
