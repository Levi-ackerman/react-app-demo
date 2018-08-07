import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp, prop } from 'styled-tools'

const Wrapper = styled.span`
  display: inline-block;
  color: ${prop(
    'color',
    ifProp('palette', palette({ grayscale: 0 }, 3), 'currentcolor'),
  )};
  width: ${prop('size', '1.25rem')};
  height: ${prop('size', '1.25rem')};

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`

const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  color: PropTypes.string,
}

export default Icon
