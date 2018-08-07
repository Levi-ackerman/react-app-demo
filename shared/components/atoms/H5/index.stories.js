import React from 'react'
import { storiesOf } from '@storybook/react'
import H5 from '.'

storiesOf('H5', module)
  .add('default', () => <H5>Whitegrass</H5>)
  .add('other color', () => <H5 color="orange">Whitegrass</H5>)
