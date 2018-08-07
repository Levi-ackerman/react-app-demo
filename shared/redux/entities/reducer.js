import merge from 'lodash.merge'

import reducerRegistry from '../reducerRegistry'

const initialState = {
  songs: {},
}

function entities(state = initialState, { type, entities }) {
  if (entities) {
    const result = merge({}, state, entities)
    return result
  }

  switch (type) {
    default:
      return state
  }
}

reducerRegistry.register('entities', entities)
export default entities
