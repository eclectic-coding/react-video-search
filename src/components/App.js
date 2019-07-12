import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Footer from './Footer'

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onTermSubmit('cats')
  }

  onTermSubmit = async term => {
    const response = await youtube('/search', {
      params: {
        q: term,
      },
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <>
        <div style={{ backgroundColor: `#ececec` }}>
          <div className="ui container" style={{ paddingTop: `1rem` }}>
            <h1>Simple Video Search</h1>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column ">
                  <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                    style={{ backgroundColor: `#fff` }}
                  />
                </div>
                <div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
