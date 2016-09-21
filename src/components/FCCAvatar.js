var React = require('react');
var PropTypes = React.PropTypes;

function FCCAvatar(props){
  return(
    <img className='img-responsive avatar' src={props.imgSrc}/>
  )
}

FCCAvatar.propTypes = {
  imgSrc: PropTypes.string.isRequired
}
module.exports = FCCAvatar;
