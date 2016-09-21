var React=require('react');
var PropTypes=React.PropTypes;

function TableHeader(props){
  return(
    <h4>{props.text}<span dangerouslySetInnerHTML={props.icon}></span></h4>
  )
}

TableHeader.propTypes = {
  icon: PropTypes.object.isRequired
}
module.exports = TableHeader;
