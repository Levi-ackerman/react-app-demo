import {
  LOAD_SONGS,
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS_FAILURE,
} from './types'
import reducerRegistry from '../reducerRegistry'

const initialState = {
  loading: false,
  collection: [],
  nextPageUrl: null,
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_SONGS:
      return {
        ...state,
        loading: true,
      } 
    case LOAD_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        collection: [...state.collection, ...payload.collection],
        nextPageUrl: payload.nextPageUrl,
      }   
    default:
      return state
  }
}

reducerRegistry.register('songs', reducer)

export default reducer
