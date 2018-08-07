import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { prop } from 'styled-tools'

const H6 = styled.h6`
  font-size: 24px;
  font-weight: 400;
  font-family: ${font('primary')};
  color: ${prop('color', palette('grey', 0))};
  line-height: 30px;
`

H6.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
}

export default H6
