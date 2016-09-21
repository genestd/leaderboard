var React = require('react');
var styles = require('../styles');
var FCCAvatar = require('./FCCAvatar');
var PropTypes = React.PropTypes;

function Camper( props ){
  return(
    <div className={props.styleclass + " row camper"}>
      <div className="col-xs-1 campcell">{props.rownum}
      </div>
      <div className="col-xs-5 campcell wrap"><FCCAvatar imgSrc={props.data.img} />&nbsp;{props.data.username}
      </div>
      <div className="col-xs-3 campcell">{props.data.recent}
      </div>
      <div className="col-xs-3 campcell">{props.data.alltime}
      </div>
    </div>
  )
}

Camper.propTypes = {
  rownum: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired
}

module.exports = Camper;
