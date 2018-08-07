import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Button, Icon } from 'antd'
import './style.css'

const URL = 'https://semantic-ui.com/images/avatar2/large/kristy.png'

/* Component ==================================================================== */
class Album extends React.PureComponent {
  
  state = {
    isHover: false,
    isPlaying: false,
  }

  formatImage = () => {
    const { artwork_url = URL } = this.props
    if(!artwork_url){
      return URL
    } else
    if(artwork_url.indexOf('large') > 0){
      return artwork_url.replace('large', 't500x500')
    }
    return artwork_url
  }

  onMouseEnter = () => {
    this.setState({ isHover: true })
  }

  onMouseLeave = () => {
    this.setState({ isHover: false })
  }

  togglePlay = () => {
    const { id, onTogglePlay } = this.props
    const isPlaying = this.state.isPlaying
    this.setState({ isPlaying: !isPlaying })
    onTogglePlay(id, !isPlaying)
  }

  render() {
    const { duration, title, genre, artwork_url = URL, uri, waveform_url } = this.props

    return (
      <div className="album">
        <div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className="album__image__wrapper">
          <div className="album__duration_wrapper">
            <Badge className="album__duration" count={duration} />
          </div>
          <a href={uri}>
            <img className="album_image" src={this.formatImage()} alt={title} />
          </a>
          {
            this.state.isHover && (
              <div className="album__mask">
                <div className="album__mask__control">
                  <Button ghost onClick={this.togglePlay} className="player__control__button" shape="circle" icon={this.state.isPlaying ? 'pause-circle' : 'play-circle'} />
                </div>
              </div>
            )
          }
        </div>
        <div className="album__info">
          <a href="" className="album__info_title text-ellipsis">{title}</a>
          <a href="" className="album__info_genre text-ellipsis">{genre}</a>
        </div>
      </div>
    )
  }
  
}

Album.propTypes = {}
Album.defaultProps = {
}
Album.componentName = 'Album'

/* Export Component ==================================================================== */
export default Album
