import React from 'react'
import { shallow } from 'enzyme'
import H4 from '.'

const wrap = (props = {}) => shallow(<H4 {...props} />)

it('renders h4 tag', () => {
  const wrapper = wrap()
  expect(wrapper.find('h4')).toHaveLength(1)
})

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains('test')).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
