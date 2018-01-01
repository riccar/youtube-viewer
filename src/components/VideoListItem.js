
//component VideoListItem
//Renders one video item within the list of videos
import React from 'react';

//instead of writing (props)  => and then  const video = props.video.
//use the ES6 syntax of ({video}) which means the same. 
const VideoListItem = ({video}) => {
  
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
      
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;