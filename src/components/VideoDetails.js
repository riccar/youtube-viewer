import React from 'react';

//props contains the data passed from the parent component
const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  //ES6 string injection: remove the quotes and use back tick plus ${variable}
  const url = `https://www.youtube.com/embed/${videoId}`;


  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;