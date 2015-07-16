'use strict';

describe('CitiesList', function () {
  var React = require('react/addons');
  var CitiesList, component;

  beforeEach(function () {
    CitiesList = require('components/CitiesList.js');
    component = React.createElement(CitiesList);
  });

  it('should create a new instance of CitiesList', function () {
    expect(component).toBeDefined();
  });
});
