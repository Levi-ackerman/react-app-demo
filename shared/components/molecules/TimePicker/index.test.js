import React from 'react'
import renderer from 'react-test-renderer'
import TimePicker from '.'
import moment from 'moment'

describe('TimePicker', () => {
  it('renders correctly', () => {
    const date = moment('2018-05-01 00:00:00')
    const tree = renderer.create(<TimePicker selected={date} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
