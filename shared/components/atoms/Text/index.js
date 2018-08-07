import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { prop, switchProp } from 'styled-tools'

const Text = styled.p`
  font-family: ${font('primary')};
  color: ${switchProp('variant', {
    body: prop('color', palette('grey', 0)),
    important1: prop('color', palette('grey', 0)),
    important2: prop('color', palette('grey', 0)),
    important3: prop('color', palette('grey', 0)),
    subtitle1: prop('color', palette('purple', 0)),
    subtitle2: prop('color', palette('grey', 1)),
    subtitle3: prop('color', palette('grey', 0)),
  })};
  font-size: ${switchProp('variant', {
    body: '16px',
    important1: '16px',
    important2: '20px',
    important3: '20px',
    subtitle1: '16px',
    subtitle2: '16px',
    subtitle3: '16px',
  })};
  font-weight: ${switchProp('variant', {
    body: 400,
    important1: 'bold',
    important2: 400,
    important3: 'bold',
    subtitle1: 'bold',
    subtitle2: 400,
    subtitle3: 'bold',
  })};
  line-height: ${switchProp('variant', {
    body: '24px',
    important1: '24px',
    important2: '28px',
    important3: '28px',
    subtitle1: '24px',
    subtitle2: '24px',
    subtitle3: '24px',
  })};
  text-transform: ${switchProp('variant', {
    body: 'none',
    important1: 'none',
    important2: 'none',
    important3: 'none',
    subtitle1: 'uppercase',
    subtitle2: 'none',
    subtitle3: 'none',
  })};
`

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string,
}

Text.defaultProps = {
  variant: 'body',
}

export default Text
