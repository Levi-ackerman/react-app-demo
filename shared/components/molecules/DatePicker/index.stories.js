import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from 'moment'
import DatePicker from '.'

storiesOf('DatePicker', module).add('default', () => (
  <DatePicker selected={moment()} />
))
