import reducerRegistry from '../reducerRegistry'
import { TOGGLE_PLAY } from './types'

const initialState = {
  id: null,
  isPlay: 'stoped',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        id: action.id,
        isPlay: action.isPlay,
      }
    default:
      return state
  }
}

reducerRegistry.register('playing', reducer)

export default reducer
