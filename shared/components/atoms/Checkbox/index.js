import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'
import { switchProp, ifProp, prop } from 'styled-tools'
import uniqueId from 'lodash/uniqueId'

const checkboxSpacing = 16
const checkedcolor = '#4E117A'
const checkedcolorDisabled = '#AFAFAF'
const borderColor = '#939393'
const borderColorDisabled = '#B0B0B0'
const checkboxSizeNormal = 24
const checkboxSizeSmall = 18
const checkboxPadding = 4
const checkmarkWidth = 2
const checkmarkSizeSmall = checkboxSizeSmall - 2 * checkboxPadding
const checkmarkSizeNormal = checkboxSizeNormal - 2 * checkboxPadding
const checkmarkColor = '#FFFFFF'

const StyledCheckbox = styled.div`
  position: relative;
  text-align: left;
  label {
    cursor: pointer;
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
    }
    &:before {
      width: ${props =>
        props.variant === 'small'
          ? size('checkboxSmall')
          : size('checkboxNormal')};
      height: ${props =>
        props.variant === 'small'
          ? size('checkboxSmall')
          : size('checkboxNormal')};
      background: #ffffff;
      border: 2px solid ${borderColor};
      cursor: pointer;
      transition: background 0.3s;
    }
  }
  input[type='checkbox'] {
    outline: 0;
    margin-right: 20px;
    visibility: hidden;
    &:checked {
      + label:before {
        background: ${palette({ primary: 0 }, 0)};
        border: none;
      }
      + label:after {
        transform: rotate(-45deg);
        top: 4px;
        left: 4px;
        width: ${switchProp(prop('variant'), {
          small: `${checkmarkSizeSmall}px`,
          normal: `${checkmarkSizeNormal}px`,
        })};
        height: ${switchProp(prop('variant'), {
          small: `${checkmarkSizeSmall / 2}px`,
          normal: `${checkmarkSizeNormal / 2}px`,
        })};
        border: ${checkmarkWidth}px solid ${checkmarkColor};
        border-top-style: none;
        border-right-style: none;
      }
    }

    &:disabled {
      + label:before {
        border-color: ${borderColorDisabled};
      }
      & checked {
        + label:before {
          background: ${borderColorDisabled};
        }
      }
    }
  }
`

class Checkbox extends React.PureComponent {
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
    const {
      label,
      checked: checkedProp,
      variant,
      palette,
      ...others
    } = this.props
    const checked = this.isControlled ? checkedProp : this.state.checked
    const id = uniqueId('checkbox_id_')

    return (
      <StyledCheckbox palette={palette} variant={variant}>
        <input
          checked={checked}
          onChange={this.handleInputChange}
          type="checkbox"
          id={id}
          {...others}
        />
        <label htmlFor={id}>{label}</label>
      </StyledCheckbox>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string.isRequired,
  palette: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  palette: 'primary',
  variant: 'normal',
}

export default Checkbox
