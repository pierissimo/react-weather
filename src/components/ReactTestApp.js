'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var ReactTestApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        fai qualcosa
      </div>
    );
  }
});

module.exports = ReactTestApp;
