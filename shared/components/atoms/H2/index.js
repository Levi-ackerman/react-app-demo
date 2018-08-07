import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { prop } from 'styled-tools'

const H2 = styled.h2`
  font-size: 36px;
  font-weight: 'bold';
  font-family: ${font('primary')};
  color: ${prop('color', palette('grey', 0))};
  line-height: 42px;
`

H2.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
}

export default H2
