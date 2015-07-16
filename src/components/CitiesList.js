'use strict';

var React = require('react/addons');
var CitiesAction = require('../actions/CityAction');
var CitiesStore = require('../stores/CitiesStore');
require('styles/CitiesList.scss');

var CitiesList = React.createClass({
  // Listen for changes
  componentDidMount: function() {
    CitiesStore.addChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      cities: CitiesStore.getAll()
    });
  },

  getInitialState: function() {
      return { cities: CitiesStore.getAll()};
  },

  removeCity: function(cityId, event){
    event.preventDefault();
    
    var r = confirm('Vuoi eliminar la città?');
    if(r){
      CitiesAction.remove(cityId);
    }
  },
  render: function () {
    var that = this;
    var rows = this.state.cities.map(function (item) {
      return (
        <tr>
          <td>{item.name}</td>
          <td><a href="" onClick={that.removeCity.bind(this, item.id)} className="label label-danger">Delete</a></td>
        </tr>
        );
    });
    
    return (
        <section className="citiesList">
            <legend>Manage cities</legend>
            <div className={this.state.cities.length ? 'hide' : '' + ' empty'}>
              <p>No cities saved.</p>
            </div>
            <div className={this.state.cities.length ? '' : 'hide' + ' cities-table'}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
            </div>
            <a href="#/citiesAdd" className="btn btn-primary pull-right">Add One</a>
        </section>
      );
  }
});

module.exports = CitiesList;

