import { TOGGLE_PLAY } from './types'

export const togglePlay = (id, isPlay) => ({
  type: TOGGLE_PLAY,
  id,
  isPlay,
})