import React from 'react'
import { shallow } from 'enzyme'
import Label from '.'
import renderer from 'react-test-renderer'

// const wrap = (props = {}) => shallow(<Label {...props} />)

// it('renders children when passed in', () => {
//   const wrapper = wrap({ children: 'test' })
//   expect(wrapper.contains('test')).toBe(true)
// })

// it('renders props when passed in', () => {
//   const wrapper = wrap({ htmlFor: 'foo' })
//   expect(wrapper.find({ htmlFor: 'foo' })).toHaveLength(1)
// })

describe('Label test', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Label />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
