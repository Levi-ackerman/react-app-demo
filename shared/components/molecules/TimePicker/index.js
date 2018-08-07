import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Icon from '../../atoms/Icon'
import moment from 'moment'

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
const FixDatePickerTimer = styled.span`
  &
    .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    display: inline-block;
    margin-right: 0;
    color: #939393;
    font-size: 16px;
  }
  .react-datepicker__time-container {
    min-width: 100px;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    padding-right: 0;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: auto;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    background-color: #f7f7f7;
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

class TimePicker extends React.PureComponent {
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
      <FixDatePickerTimer>
        <RDatePicker
          {...this.props}
          customInput={<CustomInput />}
          placeholderText="Select Time"
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          dateFormat="LT"
          timeCaption="Time"
          selected={this.state.selected}
          onChange={this.handleChange}
        />
      </FixDatePickerTimer>
    )
  }
}

TimePicker.propTypes = {
  selected: PropTypes.object,
  onChange: PropTypes.func,
}

export default TimePicker
