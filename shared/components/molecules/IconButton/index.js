import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { switchProp, ifProp } from 'styled-tools'
import { palette } from 'styled-theme'

import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

const StyledButton = styled(Button)`
  max-width: 100%;
  width: ${ifProp(
    'clear',
    switchProp('size', {
      small: '24px',
      medium: '32px',
      large: '48px',
      extra: '56px',
    }),
    ifProp(
      'fullWidth',
      '100%',
      ifProp(
        'hasText',
        'auto',
        switchProp('size', {
          small: '48px',
          medium: '56px',
          large: '72px',
          extra: '80px',
        }),
      ),
    ),
  )};
  min-width: ${ifProp(
    'hasText',
    switchProp('size', {
      small: '80px',
      medium: '80px',
      large: '360px',
      extra: '600px',
    }),
    0,
  )};
  height: ${ifProp(
    'clear',
    switchProp('size', {
      small: '24px',
      medium: '32px',
      large: '48px',
      extra: '56px',
    }),
    ifProp(
      'hasText',
      switchProp('size', {
        small: '48px',
        medium: '56px',
        large: '72px',
        extra: '80px',
      }),
      switchProp('size', {
        small: '48px',
        medium: '56px',
        large: '72px',
        extra: '80px',
      }),
    ),
  )};
  background-color: ${ifProp(
    'clear',
    'transparent',
    ifProp('transparent', 'transparent', palette(0)),
  )};
  border: ${ifProp('clear', 'none', `1px solid ${palette(0)};`)};
  box-shadow: ${ifProp(
    'clear',
    'none',
    ifProp('transparent', 'none', '0 4px 6px rgba(25, 25, 25, 0.25)'),
  )};

  &:hover,
  &:focus,
  &:active {
    background-color: ${ifProp(
      'clear',
      'transparent !important',
      ifProp('transparent', palette(0), palette(1)),
    )};
  }
`

const Text = styled.span`
  padding: 0.3125rem;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledIcon = styled(Icon)`
  flex: none;
`

const IconButton = ({ icon, children, ...props }) => {
  const { right, size, iconColor } = props
  const iconSizeMap = {
    small: '24px',
    medium: '32px',
    large: '48px',
    extra: '56px',
  }
  const iconElement = (
    <StyledIcon icon={icon} size={iconSizeMap[size]} color={iconColor} />
  )

  return (
    <StyledButton hasText={!!children} {...props}>
      <Wrapper>
        {right || iconElement}
        {children && <Text className="text">{children}</Text>}
        {right && iconElement}
      </Wrapper>
    </StyledButton>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  right: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string,
  palette: PropTypes.string,
  fullWidth: PropTypes.bool,
  transparent: PropTypes.bool,
  clear: PropTypes.bool,
  iconColor: PropTypes.string,
}

IconButton.defaultProps = {
  size: 'small',
  palette: 'primary',
  fullWidth: false,
  transparent: false,
  clear: false,
  iconColor: null,
}

export default IconButton
