import React from 'react'
import PropTypes from 'prop-types'
import Rater from 'react-rater'
import styled from 'styled-components'
import { switchProp, prop } from 'styled-tools'
import 'react-rater/lib/react-rater.css'

const Wrap = styled.span`
  & .react-rater-star {
    color: #e0e0e0;
    font-size: ${switchProp(prop('variant'), {
      small: '0.8em',
      normal: '1.2em',
      large: '2em',
      larger: '2.4em',
    })};
  }
  .react-rater-star.is-active,
  .react-rater-star.will-be-active {
    color: #ffce00;
  }
`

const RatingBar = ({ variant, ...others }) => (
  <Wrap variant={variant}>
    <Rater {...others} />
  </Wrap>
)

RatingBar.propTypes = {
  variant: PropTypes.string,
}

RatingBar.defaultProps = {
  variant: 'normal',
}

export default RatingBar
