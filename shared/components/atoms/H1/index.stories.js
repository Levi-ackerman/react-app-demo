import React from 'react'
import { storiesOf } from '@storybook/react'
import H1 from '.'

storiesOf('H1', module)
  .add('default', () => <H1>Singapore</H1>)
  .add('custom color', () => <H1 color="orange">Singapore</H1>)
