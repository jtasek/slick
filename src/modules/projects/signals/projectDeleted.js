import deleteProject from '../actions/deleteProject'
import { set, toggle } from 'cerebral/operators'
import { isValidForm } from '@cerebral/forms/operators'
import { props, state } from 'cerebral/tags'
import toggleDialog from '../../app/actions/toggleDialog'

export default [
  deleteProject,
  toggle(state`forms.project.visible`),
  () => console.log('Project deleted')
]
