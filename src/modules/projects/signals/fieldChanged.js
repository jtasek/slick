import { props, state } from 'cerebral/tags'
import { setField } from '@cerebral/forms/operators'

export default [
  setField(state`forms.project.fields.${props`name`}`, props`value`)
]
