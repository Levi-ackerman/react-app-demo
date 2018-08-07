import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { prop } from 'styled-tools'

const H1 = styled.h1`
  font-size: 60px;
  font-weight: 'bold';
  font-family: ${font('primary')};
  color: ${prop('color', palette('purple', 0))};
  line-height: 72px;
`

H1.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
}

export default H1
