import updateProject from '../actions/updateProject'
import { set, toggle } from 'cerebral/operators'
import { isValidForm } from '@cerebral/forms/operators'
import { props, state } from 'cerebral/tags'
import toggleDialog from '../../app/actions/toggleDialog'

export default [
  isValidForm(state`forms.project.fields`),
  {
    true: [updateProject, toggle(state`forms.project.visible`)],
    false: [
      set(state`forms.project.showErrors`, true),
      () => console.log('Project created')
    ]
  }
]
