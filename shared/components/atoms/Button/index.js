import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import styled, { css } from 'styled-components'
import { palette, font } from 'styled-theme'
import { ifProp, switchProp } from 'styled-tools'

const styles = css`
  display: ${ifProp('fullWidth', 'flex', 'inline-flex')};
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  color: ${ifProp('transparent', palette(0), palette('white', 0))};
  font-family: ${font('primary')};
  font-weight: bold;
  font-size: ${switchProp('size', {
    small: '16px',
    medium: '16px',
    large: '20px',
    extra: '24px',
  })};
  height: ${switchProp('size', {
    small: '48px',
    medium: '56px',
    large: '72px',
    extra: '80px',
  })};
  width: ${ifProp('fullWidth', '100%', 'auto')};
  min-width: ${switchProp('size', {
    small: '80px',
    medium: '80px',
    large: '360px',
    extra: '600px',
  })};
  max-width: 100%;
  padding: ${switchProp('size', {
    small: '0 8px',
    medium: '0 16px',
    large: '0 24px',
    extra: '0 32px',
  })};
  border: 1px solid ${palette(0)};
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: ${ifProp(
    'transparent',
    'none',
    '0 4px 6px rgba(25, 25, 25, 0.25)',
  )};
  appearance: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: all 0.2s ease;
  background-color: ${ifProp('transparent', 'transparent', palette(0))};
  opacity: ${ifProp('disabled', 0.25, 1.0)};

  &:hover,
  &:focus,
  &:active {
    background-color: ${ifProp('transparent', palette(0), palette(1))};
    color: ${palette('white', 0)};
  }

  &:focus {
    outline: none;
  }
`

const StyledLink = styled(
  ({ disabled, transparent, reverse, palette, theme, ...props }) => (
    <Link {...props} />
  ),
)`
  ${styles};
`

const StyledAnchor = styled.a`
  ${styles};
`

const StyledButton = styled.button`
  ${styles};
`

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <StyledAnchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
  transparent: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  size: 'small',
  palette: 'primary',
  fullWidth: false,
  transparent: false,
}

export default Button
