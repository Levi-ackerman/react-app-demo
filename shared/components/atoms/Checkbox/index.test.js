import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from '.'

describe('Checkbox', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Checkbox label="Checked" checked />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
