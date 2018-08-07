import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const P = styled.p`
  color: ${palette('grayscale', 0)};
  margin-top: 0rem;
  margin-bottom: 1.5rem;
`

P.propTypes = {
  reverse: PropTypes.bool,
}

export default P
