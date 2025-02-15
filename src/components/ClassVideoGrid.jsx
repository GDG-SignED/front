import React from "react";
import "./css/ClassVideoGrid.css"; 

const VideoGrid = ({ videos }) => {
  return (
    // <div className="video-grid">
    //   {videos.length > 0 ? (
    //     videos.map((video, index) => (
    //       <video key={index} controls className="video-container">
    //         <source src={video} type="video/mp4" />
    //         Your browser does not support the video tag.
    //       </video>
    //     ))
    //   ) : (
    //     <div className="no-videos">
    //       <p>현재 이 카테고리에 등록된 영상이 없습니다.</p>
    //     </div>
    //   )}
    // </div>

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