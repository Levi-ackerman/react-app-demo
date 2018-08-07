import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from 'moment'
import TimePicker from '.'

storiesOf('TimePicker', module).add('default', () => (
  <TimePicker selected={moment()} />
))
