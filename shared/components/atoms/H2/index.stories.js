import React from 'react'
import { storiesOf } from '@storybook/react'
import H2 from '.'

storiesOf('H2', module)
  .add('default', () => <H2>Whitegrass</H2>)
  .add('other color', () => <H2 color="orange">Whitegrass</H2>)
