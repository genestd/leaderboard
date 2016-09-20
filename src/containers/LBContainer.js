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
      campers: [],
      view: <DefaultView />,
      recentSort: false,
      allTimeSort: false,
      recentIcon: {__html: ""},
      allTimeIcon: {__html: ""}
    }
  },

  render: function(){
    return(
      <Leaderboard isLoading={this.state.isLoading}
                   view={this.state.view}
                   on30DayBtn={this.handle30DayBtn}
                   onAllTimeBtn={this.handleAllTimeBtn}
                   onSort={this.handleSort}
                   recentIcon={this.state.recentIcon}
                   allTimeIcon={this.state.allTimeIcon}>

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
        var cmprs =  data.data;
         this.setState({
           isLoading: false,
           campers: cmprs,
           view: <CamperView campers={cmprs} />,
           allTimeSort: true,
           recentSort: false,
           allTimeIcon: {__html: "<i class='fa fa-chevron-down'></i>"},
           recentIcon: {__html: ""}
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
        var cmprs = data.data;
         this.setState({
           isLoading: false,
           campers: cmprs,
           view: <CamperView campers={cmprs} />,
           recentSort: true,
           allTimeSort: false,
           allTimeIcon: {__html: ""},
           recentIcon: {__html: "<i class='fa fa-chevron-down'></i>"}
         })
      }.bind(this))
  },

  handleSort: function(type) {
    var cmprs = this.state.campers;
    if (cmprs.length === 0){
      return;
    }
    var reverse = 1;
    var iconText = "<i class='fa fa-chevron-up'   ></i>";

    if (type == "recent"){
      if (this.state.recentSort === false){
        reverse = -1;
        iconText = "<i class='fa fa-chevron-down'></i>";
      }
      cmprs.sort( function(a,b){
        if (a.recent >= b.recent){
           return 1 * reverse;
        } else {
           return -1 * reverse;
        }
      });
      this.setState({
        campers: cmprs,
        view: <CamperView campers={cmprs} />,
        recentSort: reverse > 0 ? false : true,
        allTimeSort: false,
        recentIcon: {__html: iconText},
        allTimeIcon: {__html:""}
      })
    } else {
      if (this.state.allTimeSort === false){
        reverse = -1;
        iconText = "<i class='fa fa-chevron-down'></i>";
      }
      cmprs.sort( function(a,b,type){
       if (a.alltime >= b.alltime){
          return 1 * reverse;
       } else {
          return -1 * reverse;
       }
     });
     this.setState({
       campers: cmprs,
       view: <CamperView campers={cmprs} />,
       recentSort: false,
       allTimeSort: reverse > 0 ? false : true,
       recentIcon: {__html: ""},
       allTimeIcon: {__html: iconText}
     })
    }
  }
});

module.exports = LBContainer;
