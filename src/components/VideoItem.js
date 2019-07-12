import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item item"
      style={{ backgroundColor: `#fff` }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="Video Item."
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem
