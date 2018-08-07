import React from 'react'
import { storiesOf } from '@storybook/react'
import H4 from '.'

storiesOf('H4', module)
  .add('default', () => <H4>Total</H4>)
  .add('other color', () => <H4 color="orange">Total</H4>)
