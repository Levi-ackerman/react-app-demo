import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const styles = css`
  display: block;
  font-size: 1rem;
  width: 100%;
  height: ${ifProp({ type: 'textarea' }, 'auto', '3.5rem')};
  ${ifProp(
    { type: 'textarea' },
    css`
      min-height: 6rem;
    `,
  )};
  padding: ${ifProp({ type: 'textarea' }, '0.9375rem', '0 0.9375rem')};
  box-sizing: border-box;
  color: ${palette('primary', 0)};
  background-color: ${palette('white', 0)};
  border: 0.0625rem solid
    ${ifProp('invalid', palette('danger', 3), palette('grey', 2))};
  border-radius: 2px;
  outline: none;
  border-radius: 0.375rem;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${palette('primary', 0)};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${palette('primary', 0)};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${palette('primary', 0)};
  }

  &[type='checkbox'],
  &[type='radio'] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.5rem 0 0;
  }
`

const StyledTextarea = styled.textarea`
  ${styles};
`
const StyledInput = styled.input`
  ${styles};
`

const Input = ({ ...props }) => {
  if (props.type === 'textarea') return <StyledTextarea {...props} />
  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  invalid: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
