import { state, props } from 'cerebral/tags'
import { set } from 'cerebral/operators'

export default [set(state`forms.project.visible`, true)]
