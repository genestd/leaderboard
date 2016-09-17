var React=require('react');
var Footer=require('./Footer');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var Router = require( 'react-router');
var Link = Router.Link;

function Leaderboard( props ){

/*  if ( props.isLoading === true ){
    return (
      <div className="container-fluid">
        <Loading />
        {props.children}
      </div>
    )
  }*/

  return(
    <div className="container lbboard">
      <div className="row text-center lbtitle">
        <div className="col-xs-4">
          <button className="btn btn-lg lbbutton" onClick={props.on30DayBtn}>Last 30 Days</button>
        </div>
        <div className="col-xs-4"><h2>Camper Leaderboard</h2></div>
        <div className="col-xs-4">
          <button className="btn btn-lg lbbutton" onClick={props.onAllTimeBtn}>All-Time</button>
        </div>
      </div>
      <div className="row lbheaders">
        <div className="col-xs-1 campcell"><h4>#</h4>
        </div>
        <div className="col-xs-4 campcell"><h4>Camper</h4>
        </div>
        <div className="col-xs-4 campcell"><h4>Points in past 30 days</h4>
        </div>
        <div className="col-xs-3 campcell"><h4>All time points</h4>
        </div>
      </div>
      {props.children}
    </div>
  )
}

var propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onAllTimeBtn: PropTypes.func.isRequired,
  on30DayBtn: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired
}

module.exports = Leaderboard;
