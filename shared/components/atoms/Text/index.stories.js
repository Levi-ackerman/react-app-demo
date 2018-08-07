import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from '.'

storiesOf('Text', module)
  .add('body', () => <Text>Body text</Text>)
  .add('important 1', () => <Text variant="important1">Important 1 text</Text>)
  .add('important 2', () => <Text variant="important2">Important 2 text</Text>)
  .add('important 3', () => <Text variant="important3">Important 3 text</Text>)
  .add('subtitle 1', () => <Text variant="subtitle1">Subtitle 1</Text>)
  .add('subtitle 2', () => <Text variant="subtitle2">Subtitle 2</Text>)
  .add('subtitle 3', () => <Text variant="subtitle3">Subtitle 3</Text>)
