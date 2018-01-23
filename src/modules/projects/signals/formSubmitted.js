import { props, state } from 'cerebral/tags'
import { isValidForm } from '@cerebral/forms/operators'
import createProject from '../actions/createProject'

export default [
    isValidForm(state`forms.project`),
    {
        true: [createProject, set(state`dialogs.createProject.visible`, false)],
        false: [set(state`forms.project.showErrors`, true)]
    }
]
