import React from 'react'
import { storiesOf } from '@storybook/react'
import IconButton from '.'

storiesOf('IconButton', module)
  .add('default', () => <IconButton icon="close">Hello</IconButton>)
  .add('transparent', () => (
    <IconButton icon="github" transparent>
      Hello
    </IconButton>
  ))
  .add('with icon on right', () => (
    <IconButton icon="github" right>
      Hello
    </IconButton>
  ))
  .add('clear icon button', () => (
    <div>
      <IconButton icon="close" clear iconColor="grey" />
      &nbsp;
      <IconButton icon="github" clear iconColor="orange" />
    </div>
  ))
  .add('without text', () => (
    <div>
      <IconButton size="small" icon="github" />
      &nbsp;
      <IconButton size="medium" icon="github" />
      &nbsp;
      <IconButton size="large" icon="github" />
      &nbsp;
      <IconButton size="extra" icon="github" />
    </div>
  ))
