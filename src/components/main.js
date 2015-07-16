'use strict';

var ReactTestApp = require('./ReactTestApp');
var CitiesAdd = require('./CitiesAdd');
var CitiesList = require('./CitiesList');
var WeatherInfo = require('./WeatherInfo');

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var CitiesStore = require('../stores/CitiesStore');

var content = document.getElementById('content');

var Routes = (
  <Route>
    <Route name="/" handler={ReactTestApp}/>
    <Route name="citiesAdd" handler={CitiesAdd}/>
    <Route name="citiesList" handler={CitiesList}/>
    /*<Route name="weatherInfo" path="weatherInfo/:cityId?" handler={WeatherInfo}/>*/
    <Route name="weatherInfoEmpty" path="weatherInfo" handler={WeatherInfo}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
