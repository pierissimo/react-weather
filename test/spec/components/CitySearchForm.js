'use strict';

describe('CitySearchForm', function () {
  var React = require('react/addons');
  var CitySearchForm, component;

  beforeEach(function () {
    CitySearchForm = require('components/CitySearchForm.js');
    component = React.createElement(CitySearchForm);
  });

  it('should create a new instance of CitySearchForm', function () {
    expect(component).toBeDefined();
  });
});
