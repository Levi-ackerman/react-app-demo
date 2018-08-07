import { combineReducers } from 'redux'
import reducerRegistry from './reducerRegistry'

import home from './home/reducer'
import songs from './songs/reducer'
import playing from './playing'
import entities from './entities/reducer'

const rootReducer = combineReducers({
  home,
  songs,
  playing,
  entities,
})

export default rootReducer
