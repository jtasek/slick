import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'

export default connect(
    {
        form: form(state`forms.project`),
        onSubmitted: signal`projects.projectUpdated`
    },
    ({ form }) => (
        <Dialog title={form.title} onSubmit={() => alert('Update project')}>
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
                <br />
                <label for="project-description" style={{ display: 'block' }}>
                    {form.description.label}
                </label>
                <input
                    type="text"
                    title={form.description.label}
                    placeholder={form.description.defaultValue}
                    onChange={event => console.log(event.target.value)}
                />
            </form>
        </Dialog>
    )
)
