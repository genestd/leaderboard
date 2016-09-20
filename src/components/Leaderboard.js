var React=require('react');
var Footer=require('./Footer');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var Router = require( 'react-router');
var TableHeader = require('./TableHeader');
var Link = Router.Link;

function Leaderboard( props ){

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
        <div className="col-xs-1 campcell"><TableHeader text="#" icon={{__html: ""}} />
        </div>
        <div className="col-xs-5 campcell"><TableHeader text="Camper" icon={{__html: ""}} />
        </div>
        <div className="col-xs-3 campcell clickable" onClick={() => props.onSort("recent")}><TableHeader text="30 days points" icon={props.recentIcon} />
        </div>
        <div className="col-xs-3 campcell clickable" onClick={() => props.onSort("test")}><TableHeader text="All time points" icon={props.allTimeIcon} />
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
  view: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  recentIcon: PropTypes.object,
  allTimeIcon: PropTypes.object
}

module.exports = Leaderboard;
