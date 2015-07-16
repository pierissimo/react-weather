'use strict';

var React = require('react/addons');
var CitiesStore = require('../stores/CitiesStore');
var constants = require('../constants/constants');
var Router = require('react-router');
//var Link = Router.Link;

require('styles/WeatherInfo.scss');

var WeatherInfo = React.createClass({
  componentDidMount: function() {
    this.getData(this.props.params.cityId);
  },
  getInitialState: function() {
      return { days: [], 
                cities: CitiesStore.getAll(),
                currentCity: null
              };
  },

  getData: function(cityId){
    var that = this;
    if(cityId){
      $.get(constants.API_ROUTES.forecast, { id: cityId, cnt: 16 })
      .then(function(data){
          if(data.cod != '404'){
            that.setState({
              days: data.list
            });
          }
        });
    }
  },
  setCurrent: function(cityId, event){
    event.preventDefault();
    this.state.currentCity = cityId;
    this.getData(cityId);

  },
  render: function () {
    var currentCity = this.props.params.cityId;
    var that = this;
    var currentCity = this.state.currentCity;
    var menu = this.state.cities.map(function (item) {
      return (
        <li role="presentation">
          <a onClick={that.setCurrent.bind(this, item.id)} className={item.id === currentCity ? 'active' : ''} href="" aria-controls="home" role="tab" data-toggle="tab">{item.name}</a>
        </li>
        );
    });
    
    var rows = this.state.days.map(function (day) {
      return (
        <tr>
          <td>{day.dt_txt}</td>
          <td>{day.clouds.all}</td>
          <td>{day.main.humidity}</td>
          <td>{day.main.pressure}</td>
          <td><b>min:</b> {day.main.temp_min} <b>max:</b> {day.main.temp_max} <b>day:</b> {day.main.temp}</td>
          <td>{day.precipitation}</td>
          <td>{day.wind.deg}</td>
          <td>{day.wind.speed}</td>
        </tr>
        );
    });
    

    return (
        <section className="weather-info">
          <legend>Weather</legend> 
          <div className={this.state.cities.length ? '' : 'hide' + ' empty'}>
            <ul className="nav nav-tabs" role="tablist">{menu}</ul>
            <div className={ !this.state.days.length ? 'hide' : '' }>
              <div role="tabpanel">
                <table className="table table-condensed">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Cloud</th>
                      <th>Humidity</th>
                      <th>Pressure</th>
                      <th>Temperature</th>
                      <th>Precipitation</th>
                      <th>Wind direzione</th>
                      <th>Wind direction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={this.state.cities.length ? 'hide' : '' + ' empty'}>
            <p>No cities saved</p>
            <a href="#/citiesAdd" className="btn btn-primary pull-right">Add One</a>
          </div>
        </section>
      );
  }
});

module.exports = WeatherInfo;

