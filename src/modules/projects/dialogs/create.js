import React from 'react'
import { connect } from '@cerebral/react'
import { form } from '@cerebral/forms'
import { state, props, signal } from 'cerebral/tags'
import Dialog from '../../../components/Dialog'

export default connect(
    {
        form: form(state`forms.project.fields`),
        title: state`forms.project.title`,
        onChange: signal`projects.fieldChanged`,
        onSubmit: signal`projects.projectCreated`
    },
    ({ form, title, onChange, onSubmit }) => (
        <Dialog title={title} onSubmit={() => onSubmit()}>
            <form
                onSubmit={event => {
                    console.log('submit form')
                    event.prevenDefault()
                }}
            >
                <label forhtml="project-name" style={{ display: 'block' }}>
                    {form.title.label}
                </label>
                <input
                    name="project-name"
                    type="text"
                    title={form.title.label}
                    placeholder={form.title.defaultValue}
                    onChange={event =>
                        onChange({
                            name: event.target.name,
                            value: event.target.value
                        })
                    }
                />
                <br />
                <label
                    forhtml="project-description"
                    style={{ display: 'block' }}
                >
                    {form.description.label}
                </label>
                <input
                    type="text"
                    title={form.description.label}
                    placeholder={form.description.defaultValue}
                    onChange={event =>
                        onChange({
                            name: event.target.name,
                            value: event.target.value
                        })
                    }
                />
            </form>
        </Dialog>
    )
)
