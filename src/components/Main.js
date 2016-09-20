var React = require( 'react');
var Header = require('./Header');
var Footer = require('./Footer');

function Main(props){
  return (
    <div className="main">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

module.exports = Main;
