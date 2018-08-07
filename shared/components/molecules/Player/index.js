import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';

import './style.css'

const URL = 'http://flatfull.com/themes/musik/images/a8.png'

/* Component ==================================================================== */
const MediaPlayer = (props) => {
  const { playing, togglePlay, onClickNext, onClickPrevious } = props
  return (
    <div className="player">
      <img className="player__thumbnail" src={URL} />
      <div className="player_info">
        <div className="player_song">Sing Me To Sleep</div>
        <div className="player_singer">Alan Walker</div>
      </div>
      <div className="player__controls">
        <Button className="player__control__button" shape="circle" icon="step-backward" />
        <Button onClick={togglePlay} className="player__control__button" shape="circle" icon={playing ? 'pause-circle' : 'play-circle'} />
        <Button className="player__control__button" shape="circle" icon="step-forward" />
      </div>
    </div>
  )
}
 
MediaPlayer.propTypes = {
};
MediaPlayer.defaultProps = {
};
MediaPlayer.componentName = 'MediaPlayer';

class Player extends React.Component {
  state = {
    playing: false,
  }

  togglePlay = () => {
    this.setState({ playing: !this.state.playing })
  }

  render(){
    return (<MediaPlayer
      playing={this.state.playing}
      togglePlay={this.togglePlay}
    />)
  }
}
 
/* Export Component ==================================================================== */
export default Player;