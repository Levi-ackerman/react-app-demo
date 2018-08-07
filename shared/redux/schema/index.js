import { schema } from 'normalizr'

export const songSchema = new schema.Entity('songs')
export const songsSchema = new schema.Array(songSchema)

