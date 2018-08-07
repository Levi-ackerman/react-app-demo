import React from 'react'
import { shallow } from 'enzyme'
import H2 from '.'

const wrap = (props = {}) => shallow(<H2 {...props} />)

it('renders h2 tag', () => {
  const wrapper = wrap()
  expect(wrapper.find('h2')).toHaveLength(1)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
