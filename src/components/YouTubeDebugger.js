// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = () => {
    this.setState
  }

  render() {
    return(
      <button class ClassName {
        constructor() {

        }
      }="bitrate" onClick={this.changeBitrate()}>{this.state.settings.bitrate}</button>
      <button class="resolution" onClick={this.changeResolution()}>{this.state.settings.video.resolution}</button>
    )
  }
}

export default YouTubeDebugger;
