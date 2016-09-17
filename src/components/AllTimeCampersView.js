var React = require('react');
var PropTypes = React.PropTypes;
var Camper = require('./Camper');

function AllTimeCampersView(props){
  var counter=1;
  var oddeven="odd";
  return(
    <div>
      {props.campers.data.map(function(result) {
        if (counter>1){
          (counter%2 > 0) ? oddeven="odd" : oddeven="even";
        }
         return <Camper key={result.username} data={result} rownum={counter++} styleclass={oddeven}/>
      })}
    </div>
  )
}

AllTimeCampersView.propTypes = {
  campers: PropTypes.object.isRequired
}
module.exports = AllTimeCampersView;
