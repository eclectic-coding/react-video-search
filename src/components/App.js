import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

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
    console.log('From the App!', video)
  }

  render() {
    return (
      <>
        <div className="ui container">
          <h1>Search of Videos</h1>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </>
    )
  }
}
