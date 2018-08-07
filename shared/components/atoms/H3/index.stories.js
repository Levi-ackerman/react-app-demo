import React from 'react'
import { storiesOf } from '@storybook/react'
import H3 from '.'

storiesOf('H3', module)
  .add('default', () => <H3>Experiences available</H3>)
  .add('other color', () => <H3 color="orange">Experiences available</H3>)
