'use strict';

var React = require('react/addons');
var constants = require('../constants/constants');

require('styles/CitySearchForm.scss');

var CitySearchForm = React.createClass({
  getInitialState: function() {
      return { query: '', city: {} };
  },
  liveSearch: function(event){
    this.setState({ query: event.target.value });
    var that = this;
    $.get(constants.API_ROUTES.weather, { q: this.state.query },
      function(result) {
         that.setState({ city: result });
      });
  },
  save: function(event){
    event.preventDefault();
    if(this.state.city){
      this.props.saveCity(this.state.city);  
    }
  },
  render: function () {
    var showHide = this.state.query.length > 0 ? '' : 'hide';
    return (
        <form role="form" onSubmit={this.save}>
          <div className="form-group">
            <div className="col-sm-12">
              <input name="q" onChange={this.liveSearch} value={this.state.query} type="text" className="form-control" placeholder="Start to type to search city" />
            </div>
          </div>
          <br/>
          <div className="clearfix"></div>
          <div className={showHide + ' panel panel-warning'}>
            <div className="panel-heading">
              <h3 className="panel-title">Result</h3>
            </div>
            <div className="panel-body">
              <label>City Name</label>
              <p>{this.state.city.name}</p>
              <label>Current Weather</label>
              <p>{this.state.city.weather && this.state.city.weather[0].description}</p>
              <label>Coordinatess</label>
              <p>{this.state.city.coords && this.state.city.coord.lat} {this.state.city.coords && this.state.city.coord.lon}</p>
            </div>
          </div>
          <div className="clearfix"></div>
          <br/>
          <div  className={showHide + ' form-group'}>
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      );
  }
});

module.exports = CitySearchForm;

