var React=require('react');

function TableHeader(props){
  return(
    <h4>{props.text}<span dangerouslySetInnerHTML={props.icon}></span></h4>
  )
}

module.exports = TableHeader;
