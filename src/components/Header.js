var React = require('react');
var mystyles = require('../styles');

function Header( props ){
  return(
    <div className="nav nav-bar lbheader">
      <h2>FreeCodeCamp (&nbsp;<i className="fa fa-fire"></i>&nbsp;)</h2>
    </div>
  )
}

module.exports = Header;
