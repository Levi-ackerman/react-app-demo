import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import Link from '../../atoms/Link'

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`

const List = styled.ul`
  flex: 1;
  margin: 0.75rem 0;
  padding: 0 2rem;
  text-align: left;

  li {
    display: inline-flex;
    margin: 0;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    a {
      position: relative;
      padding: 0.75rem 0;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: transparent;
        transition: all 0.1s ease;
      }

      &:focus,
      &:hover {
        &:before {
          background-color: ${palette('grayscale', 0)};
        }
      }
    }
  }
`

const MenuLink = props => <Link palette="grayscale" {...props} />

function Menu() {
  return (
    <MenuWrapper>
      <List>
        <li>
          <MenuLink to="/">Home</MenuLink>
        </li>
        <li>
          <MenuLink to="/counter">Counter</MenuLink>
        </li>
        <li>
          <MenuLink to="/posts">Posts</MenuLink>
        </li>
        <li>
          <MenuLink to="/about">About</MenuLink>
        </li>
      </List>
    </MenuWrapper>
  )
}

export default Menu
