import React from "react";
import "./css/ClassVideoGrid.css"; 

const VideoGrid = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <div className="video-container" key={index}>
          <video controls>
            <source src={video.url} type="video/mp4" />
          </video>
          <p className="video-title">{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;