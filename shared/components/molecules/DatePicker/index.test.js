import React from 'react'
import renderer from 'react-test-renderer'
import DatePicker from '.'
import moment from 'moment'

describe('DatePicker', () => {
  it('renders correctly', () => {
    const date = moment('2018-05-01 00:00:00')
    const tree = renderer.create(<DatePicker selected={date} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
