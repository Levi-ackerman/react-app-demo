import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RatingBar from '.'

storiesOf('Rating', module)
  .add('default', () => <RatingBar />)
  .add('Size', () => (
    <div>
      <RatingBar variant="small" />
      <br />
      <RatingBar />
      <br />
      <RatingBar variant="large" />
      <br />
      <RatingBar variant="larger" />
      <br />
    </div>
  ))
