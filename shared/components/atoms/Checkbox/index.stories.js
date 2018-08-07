import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from '.'

storiesOf('Checkbox', module)
  .add('normal', () => (
    <div>
      <Checkbox label="Normal" />
      <br />
      <Checkbox label="Checked" checked />
    </div>
  ))
  .add('small', () => (
    <div>
      <Checkbox variant="small" label="Small" />
      <br />
      <Checkbox label="Checked" checked variant="small" />
    </div>
  ))
