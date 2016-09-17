var React = require('react');
var styles = require('../styles');

function Camper( props ){
  console.log( 'Camper', props);
  return(
    <div className={props.styleclass + " row camper"}>
      <div className="col-xs-1 campcell">{props.rownum}
      </div>
      <div className="col-xs-4 campcell">{props.data.username}
      </div>
      <div className="col-xs-4 campcell">{props.data.recent}
      </div>
      <div className="col-xs-3 campcell">{props.data.alltime}
      </div>
    </div>
  )
}

module.exports = Camper;
