import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { prop } from 'styled-tools'

const H4 = styled.h4`
  font-size: 24px;
  font-weight: 400;
  font-family: ${font('primary')};
  color: ${prop('color', palette('purple', 0))};
  line-height: 30px;
`

H4.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
}

export default H4
