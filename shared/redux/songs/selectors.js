import { createSelector } from 'reselect'
import { denormalize } from 'normalizr'
import { getSongEntities } from '../entities/selectors'
import { songsSchema } from '../schema'

const getState = state => state.songs

export const getSongsList = createSelector(
  getSongEntities,
  getState,
  (songEntities, state) => denormalize(state.collection, songsSchema, { songs: songEntities })
)

export const getNextPageUrl = createSelector(
  getState, state => state.nextPageUrl,
)

export const isLoading = createSelector(
  getState, state => state.loading,
)