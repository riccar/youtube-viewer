//This component can be build as a plain functional component because
//It doesn't need to record any user interaction, hence it doesn't need any state
//and it doesn't need to render itself.
import React from 'react';
import VideoListItem from './VideoListItem';

//The list of videos from the parent component is received as a parameter called prop. But, for class based components
//props is a global property available anywhere in the component
const VideoList = (props) => {

  //Use built-in map iterator instead of for loops as much as possible
  //for each video within props.videos.map execute a function for each single video to create a VideoListItem and pass the video 
  //VideoListItem renders every video details. 
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });
  
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );

};

export default VideoList;