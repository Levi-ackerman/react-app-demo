import { normalize } from 'normalizr'
import {
  LOAD_SONGS,
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS_FAILURE,
} from './types'
import { getNextPageUrl } from './selectors'
import { SONGS_URL } from '../../utils/constant'
import { songsSchema } from '../schema'

import data from './data.json'

const loadSongs = () => ({
  type: LOAD_SONGS,
})

const loadSongsSuccess = (result, nextPageUrl, entities) => ({
  type: LOAD_SONGS_SUCCESS,
  payload: { collection: result, nextPageUrl },
  entities,
})

const loadSongsFailure = (error) => ({
  type: LOAD_SONGS_FAILURE,
  payload: error,
})

export const loadSongsFromApi = () => (dispatch, getState, { api }) => {
  // return api
  //     .get(SONGS_URL)
  //     .then(data => {
  //       //console.log('[actions.js] data', data)
  //     })
  let url = getNextPageUrl(getState())
  if(!url){
    url = SONGS_URL
  }

  dispatch(loadSongs())
  return api
      .get(SONGS_URL)
      .then(data => {
        const { collection, next_href } = data
        const { entities, result } = normalize(collection, songsSchema)
        dispatch(loadSongsSuccess(result, data.next_href, entities))
      })

  // dispatch(loadSongs())
  // setTimeout(() => {
  //   const { entities, result } = normalize(data.collection, songsSchema)
  //   dispatch(loadSongsSuccess(result, data.next_href, entities))
  // }, 2000)
  
}
