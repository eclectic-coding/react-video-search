import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async term => {
    const response = await youtube('/search', {
      params: {
        q: term,
      },
    })

    this.setState({ videos: response.data.items })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <>
        <div className="ui container">
          <h1>Search of Videos</h1>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </>
    )
  }
}
