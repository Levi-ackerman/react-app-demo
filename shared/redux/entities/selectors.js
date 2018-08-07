import { createSelector } from 'reselect'
import { denormalize, schema } from 'normalizr'

export const entitiesSelectors = state => state.entities

export const getSongEntities = createSelector(
  entitiesSelectors, entities => entities.songs,
)