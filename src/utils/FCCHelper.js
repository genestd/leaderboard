var axios = require('axios');

var FCCHelpers = {

  getAllTimeTop100: function(){
    return axios.get( 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  },

  getRecentTop100: function(){
    console.log('getRecent');  
    return axios.get( 'https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }
}

module.exports = FCCHelpers;

/*
{
  "username":"Takumar"
 ,"img":"https://avatars.githubusercontent.com/u/2951935?v=3"
 ,"alltime":2959
 ,"recent":17
 ,"lastUpdate":"2016-09-12T17:37:45.124Z"
}
*/
