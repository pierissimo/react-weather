'use strict';

describe('ReactTestApp', function () {
  var React = require('react/addons');
  var ReactTestApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactTestApp = require('components/ReactTestApp.js');
    component = React.createElement(ReactTestApp);
  });

  it('should create a new instance of ReactTestApp', function () {
    expect(component).toBeDefined();
  });
});
