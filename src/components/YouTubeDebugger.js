// Code YouTubeDebugger Component Here
import React from 'react'

 export default class YouTubeDebugger extends React.Component{
    state= {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }
    render(){
        return(<div><button onClick={this.setBitrate} className="bitrate">Set Bitrate</button>
        <button onClick= {this.setResolution} className="resolution">Set Resolution</button></div>)
    }
    setResolution= () => {
        this.setState({settings:{ video: {resolution : '720p'}}})
        console.log(this.state.settings.video.resolution)
    }

    setBitrate=()=>{
        this.setState({settings: {...this.state.settings, bitrate: 12}})
        console.log(this.state.settings.bitrate)

    }
}