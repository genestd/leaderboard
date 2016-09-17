var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require( '../components/Main');
var Header = require( '../components/Header');
var Footer = require( '../components/Footer');
var Home = require('../components/Home');

/*var routes = (
  <Router history = {hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} header="Home"/>

    </Route>
  </Router>
);*/

var routes = (
  <Router history = {hashHistory}>
    <Route path='/' component={Main}>
     <IndexRoute component={Home}/>
    </Route>
  </Router>
);

module.exports = routes;
