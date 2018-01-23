import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'

export default connect(
    {
        form: form(state`forms.project`),
        onSubmitted: signal`projects.projectDeleted`
    },
    ({ form, onSubmitted }) => (
        <Dialog title={form.title} onSubmit={() => alert('Delete project')}>
            <form
                onSubmit={event => {
                    console.log('submit form')
                    event.prevenDefault()
                }}
            >
                <label for="project-name" style={{ display: 'block' }}>
                    {form.title.label}
                </label>
                <input
                    name="project-name"
                    type="text"
                    title={form.title.label}
                    placeholder={form.title.defaultValue}
                    onChange={event => console.log(event.target.value)}
                />
            </form>
        </Dialog>
    )
)
