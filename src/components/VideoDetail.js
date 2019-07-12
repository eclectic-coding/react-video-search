import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ... </div>
  }
  return (
    <div>
      <h3>{video.snippet.title}</h3>
    </div>
  )
}

export default VideoDetail
