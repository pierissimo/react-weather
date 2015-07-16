'use strict';

describe('WeatherInfo', function () {
  var React = require('react/addons');
  var WeatherInfo, component;

  beforeEach(function () {
    WeatherInfo = require('components/WeatherInfo.js');
    component = React.createElement(WeatherInfo);
  });

  it('should create a new instance of WeatherInfo', function () {
    expect(component).toBeDefined();
  });
});
