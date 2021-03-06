import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from '.'

storiesOf('Input', module)
  .add('default', () => <Input placeholder="Type something..." />)
  .add('invalid', () => <Input invalid />)
  .add('type textarea', () => <Input type="textarea" />)
