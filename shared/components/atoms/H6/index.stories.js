import React from 'react'
import { storiesOf } from '@storybook/react'
import H6 from '.'

storiesOf('H6', module)
  .add('default', () => <H6>Whitegrass</H6>)
  .add('other color', () => <H6 color="orange">Whitegrass</H6>)
