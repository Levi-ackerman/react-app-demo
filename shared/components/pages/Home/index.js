import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Helmet from 'react-helmet'
import { Col, Row } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import Album from '../../molecules/Album'

import { loadSongsFromApi } from '../../../redux/songs/actions'
import { togglePlay } from '../../../redux/playing/actions'
import { getSongsList, isLoading } from '../../../redux/songs/selectors'

import './style.css'

function HomeRoute(props) {
  console.log('[HomeRoute]', props)
  const { collection, loading, onTogglePlay, loadSongsFromApi } = props
  return (
    <Row gutter={16} className="list-album">
      <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            console.log('load more', props)
            if(collection.length > 0 && !loading){
              loadSongsFromApi()
            }
          }}
          hasMore={true}
          loader={<div className="loader" key={0}>Loading ...</div>}
      >
        {collection.map(item => (
          <Col className="list-album__item" key={item.id} xs={12} sm={12} md={8} lg={6}>
            <Album onTogglePlay={onTogglePlay} {...item} />
          </Col>
        ))}
      </InfiniteScroll>
    </Row>
  )
}

const mapState = (state) => ({
  collection: getSongsList(state),
  loading: isLoading(state),
})

const mapProps = {
  loadSongsFromApi,
  onTogglePlay: togglePlay,
}

export default compose(
  connect(mapState, mapProps),
  lifecycle({
    componentDidMount() {
      this.props.loadSongsFromApi()
    },
  }),
)(HomeRoute)

// export default connect()(HomeRoute)
