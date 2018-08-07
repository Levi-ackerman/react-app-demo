import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { prop } from 'styled-tools'

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 'bold';
  font-family: ${font('primary')};
  color: ${prop('color', palette('purple', 0))};
  line-height: 30px;
`

H3.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
}

export default H3
