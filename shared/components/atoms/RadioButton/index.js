import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { palette, size } from 'styled-theme'
import { switchProp, ifProp, prop } from 'styled-tools'
import uniqueId from 'lodash/uniqueId'

const spacing = 16
const checkedcolor = '#4E117A'
const checkedcolorDisabled = '#4E117A'
const borderColor = '#939393'
const borderColorDisabled = '#939393'
const radioSize = 24
const innerSize = 16

const ripple = keyframes`
  0% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0);
  }
  50% { 
    box-shadow: 0px 0px 0px ${size('radioButton')} rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0px 0px 0px ${size('radioButtonInner')} rgba(0, 0, 0, 0);
  }
`

const StyledRadioButton = styled.div`
  label {
    cursor: pointer;
  }
  input[type='radio'] {
    display: none;
    &:checked + label:before {
      border-color: ${borderColor};
      animation: ripple 0.2s linear forwards;
    }
    &:checked + label:after {
      transform: scale(1);
    }
  }

  label {
    display: inline-block;
    height: ${size('radioButton')};
    position: relative;
    padding: 0 ${radioSize + 10}px;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;
    &:before,
    &:after {
      position: absolute;
      content: '';
      border-radius: 50%;
      transition: all 0.3s ease;
      transition-property: transform, border-color;
    }
    &:before {
      left: 0;
      top: 0;
      width: ${size('radioButton')};
      height: ${size('radioButton')};
      border: 2px solid ${borderColor};
    }
    &:after {
      top: ${radioSize / 2 - innerSize / 2}px;
      left: ${radioSize / 2 - innerSize / 2}px;
      width: ${size('radioButtonInner')};
      height: ${size('radioButtonInner')};
      transform: scale(0);
      background: ${palette({ primary: 0 }, 0)};
    }
  }
`

// const RadioButton = ({ label, palette, ...others }) => {
//   return (
//     <StyledRadioButton palette={palette}>
//       <input type="radio" {...others} />
//       <label>{label}</label>
//     </StyledRadioButton>
//   )
// }

class RadioButton extends React.PureComponent {
  constructor(props) {
    super(props)
    this.isControlled = !!props.checked
    if (!this.isControlled) {
      // not controlled, use internal state
      this.state = {
        checked:
          props.defaultChecked !== undefined ? props.defaultChecked : false,
      }
    }
  }

  isControlled = null

  handleInputChange = event => {
    const checked = event.target.checked
    if (!this.isControlled) {
      this.setState({ checked })
    }

    if (this.props.onChange) {
      this.props.onChange(event, checked)
    }
  }

  render() {
    const { label, checked: checkedProp, palette, ...others } = this.props
    const checked = this.isControlled ? checkedProp : this.state.checked
    const id = uniqueId('radio_id_')

    return (
      <StyledRadioButton palette={palette}>
        <input
          id={id}
          checked={checked}
          onChange={this.handleInputChange}
          type="radio"
          {...others}
        />
        <label htmlFor={id}>{label}</label>
      </StyledRadioButton>
    )
  }
}

RadioButton.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string.isRequired,
  palette: PropTypes.string,
  onChange: PropTypes.func,
}

RadioButton.defaultProps = {
  checked: false,
  palette: 'primary',
}

export default RadioButton
