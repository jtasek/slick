import { props, state } from 'cerebral/tags'
import { setField } from '@cerebral/forms/operators'

export default [
  () => console.log('Field changed'),
  setField(state`${props`field`}`, props`value`)
]
