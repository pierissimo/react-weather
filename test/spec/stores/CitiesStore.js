'use strict';

describe('CitiesStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/CitiesStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
