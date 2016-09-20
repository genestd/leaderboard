var React = require('react');
var PropTypes = React.PropTypes;
var Camper = require('./Camper');

function CamperView(props){
  var counter=1;
  var oddeven="odd";
  return(
    <div>
      {props.campers.map(function(result) {
        if (counter>1){
          (counter%2 > 0) ? oddeven="odd" : oddeven="even";
        }
         return <Camper key={result.username} data={result} rownum={counter++} styleclass={oddeven}/>
      })}
    </div>
  )
}

CamperView.propTypes = {
  campers: PropTypes.array.isRequired
}
module.exports = CamperView;
