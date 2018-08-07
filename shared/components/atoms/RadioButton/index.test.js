import React from 'react'
import renderer from 'react-test-renderer'
import RadioButton from '.'

describe('Radio', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RadioButton label="Checked" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
