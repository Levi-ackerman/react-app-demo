import React from 'react'
import { shallow } from 'enzyme'
import Text from '.'

const wrap = (props = {}) => shallow(<Text {...props} />)

it('renders p tag', () => {
  const wrapper = wrap()
  expect(wrapper.find('p')).toHaveLength(1)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
