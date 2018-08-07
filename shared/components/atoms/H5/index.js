import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { prop } from 'styled-tools'

const H5 = styled.h5`
  font-size: 24px;
  font-weight: 'bold';
  font-family: ${font('primary')};
  color: ${prop('color', palette('grey', 0))};
  line-height: 30px;
`

H5.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
}

export default H5
