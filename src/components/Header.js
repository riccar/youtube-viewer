//component VideoListItem
//Renders one video item within the list of videos
import React from 'react';

//instead of writing (props)  => and then  const video = props.video.
//use the ES6 syntax of ({video}) which means the same. 
const Header = () => {
  
  return (

    <div className="header">
      YouTube Video Player
    </div>

  );
};

export default Header;