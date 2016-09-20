var React = require('react');

function FCCAvatar(props){
  return(
    <img className='img-responsive avatar' src={props.imgSrc}/>
  )
}

module.exports = FCCAvatar;
