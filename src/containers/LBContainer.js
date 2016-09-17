var React = require('react');
var Leaderboard = require('../components/Leaderboard');
var FCCHelpers = require( '../utils/FCCHelper');
var Camper = require('../components/Camper');
var axios = require('axios');
var DefaultView = require('../components/DefaultView');
var CamperView = require('../components/CamperView');
var Loading = require('../components/Loading');

var LBContainer = React.createClass({

  getInitialState: function(){
    return{
      isLoading: false,
      allTimeCampers: [],
      recentCampers: [],
      view: <DefaultView />
    }
  },

  render: function(){
    return(
      <Leaderboard isLoading={this.state.isLoading}
                   view={this.state.view}
                   on30DayBtn={this.handle30DayBtn}
                   onAllTimeBtn={this.handleAllTimeBtn}>

        {this.state.view}
      </Leaderboard>
    )
  },

  handleAllTimeBtn: function(){
    this.setState( {
      isLoading: true,
      view: <Loading />
    });

    FCCHelpers.getAllTimeTop100()
      .then( function(data){
         this.setState({
           isLoading: false,
           view: <CamperView campers={data} />
         })
      }.bind(this))
  },

  handle30DayBtn: function(){
    this.setState( {
      isLoading: true,
      view: <Loading />
    });

    FCCHelpers.getRecentTop100()
      .then( function(data){
         this.setState({
           isLoading: false,
           view: <CamperView campers={data} />
         })
      }.bind(this))
  }
});

module.exports = LBContainer;
