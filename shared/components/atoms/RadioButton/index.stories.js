import React from 'react'
import { storiesOf } from '@storybook/react'
import Radio from '.'

storiesOf('Radio', module).add('normal', () => (
  <div>
    <Radio name="normal" label="Normal 1" />
    <br />
    <Radio name="normal" label="Normal 2" />
    <br />
    <Radio onChange={() => {}} label="Checked" checked />
  </div>
))
