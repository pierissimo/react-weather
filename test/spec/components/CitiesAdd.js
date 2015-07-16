'use strict';

describe('CitiesAdd', function () {
  var React = require('react/addons');
  var CitiesAdd, component;

  beforeEach(function () {
    CitiesAdd = require('components/CitiesAdd.js');
    component = React.createElement(CitiesAdd);
  });

  it('should create a new instance of CitiesAdd', function () {
    expect(component).toBeDefined();
  });
});
