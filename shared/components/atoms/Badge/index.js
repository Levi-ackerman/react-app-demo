import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Badge = styled.div`
  display: inline-flex;
  font-size: 0.8125rem;
  line-height: 1.5rem;
  padding: 0 0.5rem;
  color: ${palette('grayscale', 0, true)};
  background-color: ${palette(3)};
  border-radius: 0.25rem;
`

Badge.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Badge.defaultProps = {
  palette: 'primary',
}

export default Badge
