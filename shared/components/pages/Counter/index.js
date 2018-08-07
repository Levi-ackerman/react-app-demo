/* eslint-disable react/no-unescaped-entities */
import React, { Component, Fragment } from 'react'

import Button from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import P from '../../atoms/P'

class CounterRoute extends Component {
  constructor(props) {
    super(props)
    this.incrementCounter = this.incrementCounter.bind(this)
    this.state = { counter: 0 }
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <Fragment>
        <Heading level={3}>Counter</Heading>

        <P>Current value: {this.state.counter}</P>

        <Button onClick={this.incrementCounter}>Increment</Button>
      </Fragment>
    )
  }
}

export default CounterRoute
