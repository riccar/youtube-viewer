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
    <div className="video-detail">
      <div className="video-detail__viewer">
        <iframe src={url} className="video-detail__video"></iframe>
      </div>
      <div className="video-detail__desc">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;