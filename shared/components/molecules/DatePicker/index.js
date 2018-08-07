import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RDatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import Icon from '../../atoms/Icon'

const Wrap = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`

const Input = styled.input`
  color: #2d2d2d;
  font-size: 16px;
  margin-right: 16px;
  border: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #939393;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #939393;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #939393;
  }
`

class CustomInput extends React.PureComponent {
  render() {
    const { placeholder, value, onClick, onChange } = this.props
    return (
      <Wrap onClick={onClick}>
        <Input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled
        />
        <Icon icon="down-arrow" />
      </Wrap>
    )
  }
}

class DatePicker extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.selected ? props.selected : moment(),
    }
  }

  handleChange = date => {
    this.setState(
      {
        selected: date,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(date)
        }
      },
    )
  }

  render() {
    return (
      <RDatePicker
        customInput={<CustomInput />}
        {...this.props}
        placeholderText="Select Date"
        dateFormat="DD MMM YYYY"
        selected={this.state.selected}
        onChange={this.handleChange}
      />
    )
  }
}

DatePicker.propTypes = {
  selected: PropTypes.object,
  onChange: PropTypes.func,
}

DatePicker.defaultProps = {
  selected: moment(),
}

export default DatePicker
