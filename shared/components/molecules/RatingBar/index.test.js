import React from 'react'
import renderer from 'react-test-renderer'
import RatingBar from '.'
import moment from 'moment'

describe('RatingBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RatingBar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
