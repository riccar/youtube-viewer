
//component VideoListItem
//Renders one video item within the list of videos
import React from 'react';

//instead of writing (props)  => and then  const video = props.video.
//use the ES6 syntax of ({video}) which means the same. 
const VideoListItem = ({video, onVideoSelect}) => {
  
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} >
      <div className="video-list-item group">
        <div className="video-list-item__image">
          <img className="media-object" src={imageUrl} />
        </div>
      
        <div className="video-list-item__title">
          {video.snippet.title}
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;