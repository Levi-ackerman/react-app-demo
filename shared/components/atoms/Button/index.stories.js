import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

storiesOf('Button', module)
  .add('small', () => <Button size="small">View booking</Button>)
  .add('medium', () => <Button size="medium">View on map</Button>)
  .add('large', () => <Button size="large">Book this experience</Button>)
  .add('extra', () => <Button size="extra">Confirm & pay</Button>)
  .add('full width', () => (
    <Button fullWidth size="extra">
      Confirm & pay
    </Button>
  ))
  .add('transparent', () => <Button transparent>Hello</Button>)
  .add('disabled', () => (
    <Button size="small" disabled>
      Hello
    </Button>
  ))
  .add('link', () => <Button href="https://google.com">Google</Button>)
